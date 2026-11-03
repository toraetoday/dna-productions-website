import { ProjectCard } from "@/components/project-card";
import type { ProjectPhoto } from "@/components/project-gallery";
import championPhotos from "@/data/champion-photos.json";
import systemPhotos from "@/data/system-photos.json";
import { featuredProjects } from "@/data/site";

function getProjectPhotos(title: string, image: string, additionalImages: string[] = []): ProjectPhoto[] {
  if (title === "Champion") return championPhotos.photos;
  if (title === "The System") return systemPhotos.photos;

  return [image, ...additionalImages].map((src, index) => ({
    alt: `${title} project photo ${index + 1}`,
    thumbnail: src,
    full: src,
  }));
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Projects</div>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
          Commercial AV &amp; Production Projects
        </h1>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            photos={getProjectPhotos(project.title, project.image, project.additionalImages)}
          />
        ))}
      </div>
    </div>
  );
}
