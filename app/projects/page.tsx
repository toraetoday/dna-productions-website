import Image from "next/image";

import { featuredProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Projects</div>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
          Commercial AV &amp; Production Projects
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className={`overflow-hidden rounded-[2rem] border border-white/10 bg-[#10171d] ${index % 2 === 0 ? "md:translate-y-8" : ""}`}
          >
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[project.image, ...(project.additionalImages ?? [])].map((image, imageIndex) => (
                <Image
                  key={image}
                  src={image}
                  alt={`${project.title}${imageIndex > 0 ? `, photo ${imageIndex + 1}` : ""}`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 639px) 100vw, 50vw"
                  className="h-[280px] w-full bg-[#10171d] object-cover sm:h-[320px]"
                />
              ))}
            </div>
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.62rem] uppercase tracking-[0.24em] text-zinc-400">
                <span>{project.category}</span>
                {project.location ? <span>{project.location}</span> : null}
              </div>
              <h2 className="text-3xl font-medium tracking-[-0.05em] text-white">{project.title}</h2>
              {project.summary ? <p className="text-base leading-7 text-zinc-300">{project.summary}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
