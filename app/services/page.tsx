import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { featuredProjects, services } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-3xl">
        <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Services</div>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
          Commercial AV Installation &amp; Production Services
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-300">
          Professional audio, video, lighting, display, security and systems integration for commercial spaces, venues and live environments.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <article id={`service-${service.id}`} key={service.title} className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-[#10171d] p-7">
            <div className="mb-5 text-[0.62rem] uppercase tracking-[0.26em] text-[#8fe0ff]">0{index + 1}</div>
            <h2 className="text-3xl font-medium tracking-[-0.05em] text-white">{service.title}</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">{service.description}</p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{service.detail}</p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#dff7ff]">
              View service
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-[2.25rem] border border-white/10 bg-[#0d1217] p-8 md:p-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Showcase</div>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Relevant projects</h2>
          </div>
          <Link href="/projects" className="hidden items-center gap-2 text-sm text-zinc-300 transition hover:text-white md:flex">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#10181d]">
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {[project.image, ...(project.additionalImages ?? [])].map((image, imageIndex) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`${project.title}${imageIndex > 0 ? `, photo ${imageIndex + 1}` : ""}`}
                    width={1200}
                    height={900}
                    sizes="(max-width: 639px) 100vw, 33vw"
                    className="h-64 w-full bg-[#10181d] object-cover"
                  />
                ))}
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.62rem] uppercase tracking-[0.24em] text-zinc-400">
                  <span>{project.category}</span>
                  {project.location ? <span>{project.location}</span> : null}
                </div>
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
                {project.summary ? <p className="text-sm leading-7 text-zinc-300">{project.summary}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
