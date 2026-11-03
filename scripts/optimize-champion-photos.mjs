import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.resolve(projectRoot, "../photos/champion");
const outputRoot = path.join(projectRoot, "public/images/projects/champion");
const thumbnailRoot = path.join(outputRoot, "thumbnails");
const fullRoot = path.join(outputRoot, "full");
const manifestPath = path.join(projectRoot, "data/champion-photos.json");
const acceptedExtensions = new Set([".jpg", ".jpeg"]);

async function listPhotos(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listPhotos(filePath)));
    } else if (entry.isFile() && acceptedExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(filePath);
    }
  }
  return files.sort((a, b) => a.localeCompare(b));
}

async function sha256(filePath) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(filePath)) hash.update(chunk);
  return hash.digest("hex");
}

if (!(await readdir(sourceRoot)).length) {
  throw new Error(`No files found in ${sourceRoot}`);
}

const sourceFiles = await listPhotos(sourceRoot);
if (sourceFiles.length === 0) {
  throw new Error(`No JPG/JPEG photos found in ${sourceRoot}`);
}

const byHash = new Map();
for (const filePath of sourceFiles) {
  const hash = await sha256(filePath);
  const metadata = await sharp(filePath).metadata();
  const fileStats = await stat(filePath);
  const photo = {
    filePath,
    hash,
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    bytes: fileStats.size,
  };
  byHash.set(hash, [...(byHash.get(hash) ?? []), photo]);
}

const uniquePhotos = [...byHash.values()]
  .map((group) =>
    group.sort(
      (a, b) => b.width * b.height - a.width * a.height || b.bytes - a.bytes,
    )[0],
  )
  .sort((a, b) => a.filePath.localeCompare(b.filePath));

await mkdir(thumbnailRoot, { recursive: true });
await mkdir(fullRoot, { recursive: true });

const manifest = [];
let completed = 0;
let outputBytes = 0;
let nextIndex = 0;

async function processNext() {
  while (nextIndex < uniquePhotos.length) {
    const index = nextIndex++;
    const photo = uniquePhotos[index];
    const number = String(index + 1).padStart(2, "0");
    const baseName = path.basename(photo.filePath, path.extname(photo.filePath))
      .replace(/[^a-zA-Z0-9_-]+/g, "-")
      .replace(/-+/g, "-");
    const outputName = `${number}-${baseName}.webp`;
    const thumbnailPath = path.join(thumbnailRoot, outputName);
    const fullPath = path.join(fullRoot, outputName);

    const [thumbnail, full] = await Promise.all([
      sharp(photo.filePath)
        .rotate()
        .resize({ width: 560, height: 420, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 74, effort: 5 })
        .toFile(thumbnailPath),
      sharp(photo.filePath)
        .rotate()
        .resize({ width: 2400, height: 1800, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 84, effort: 5 })
        .toFile(fullPath),
    ]);

    outputBytes += thumbnail.size + full.size;
    manifest[index] = {
      alt: `CHAMPION event photo ${number}`,
      thumbnail: `/images/projects/champion/thumbnails/${outputName}`,
      full: `/images/projects/champion/full/${outputName}`,
      source: path.relative(sourceRoot, photo.filePath),
      sourceWidth: photo.width,
      sourceHeight: photo.height,
    };
    completed++;
    console.log(`Optimized ${completed}/${uniquePhotos.length}: ${path.basename(photo.filePath)}`);
  }
}

await Promise.all(Array.from({ length: 3 }, () => processNext()));
await writeFile(manifestPath, `${JSON.stringify({ photos: manifest }, null, 2)}\n`);

console.log(`\nJPG/JPEG sources: ${sourceFiles.length}`);
console.log(`Exact duplicate files omitted: ${sourceFiles.length - uniquePhotos.length}`);
console.log(`Unique photos optimized: ${uniquePhotos.length}`);
console.log(`Optimized thumbnails + full-size WebP total: ${(outputBytes / 1024 / 1024).toFixed(2)} MiB`);
console.log(`Manifest: ${path.relative(projectRoot, manifestPath)}`);
