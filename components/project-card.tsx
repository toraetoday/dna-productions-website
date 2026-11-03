import { ProjectGallery, type ProjectPhoto } from "@/components/project-gallery";
import type { ProjectItem } from "@/data/site";

type ProjectCardProps = {
  project: ProjectItem;
  photos: ProjectPhoto[];
};

export function ProjectCard({ project, photos }: ProjectCardProps) {
  return (
    <article className="flex h-[540px] min-w-0 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#10171d]">
      <ProjectGallery projectName={project.title} photos={photos} />

      <div className={`flex min-h-0 flex-1 flex-col p-6 ${project.summary ? "" : "justify-center"}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.62rem] uppercase tracking-[0.24em] text-zinc-400">
          <span>{project.category}</span>
          {project.location ? <span>{project.location}</span> : null}
        </div>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-white">{project.title}</h2>
        {project.summary ? <p className="mt-auto pt-4 text-base leading-7 text-zinc-300">{project.summary}</p> : null}
      </div>
    </article>
  );
}
