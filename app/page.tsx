import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/site";
import { ProjectPhotoGallery } from "@/components/project-photo-gallery";

function DnaTreeMark({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <Image
      src="/dna-productions-tree-logo.png"
      alt="DNA Productions tree logo"
      width={200}
      height={200}
      className={className}
      priority
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f5f1ea]">
      <div className="mx-auto max-w-[1500px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex min-w-0 flex-1 justify-start">
            <div className="flex flex-col items-start leading-none">
              <div className="text-left text-[1.1rem] font-medium uppercase tracking-[0.18em] text-white/90 sm:text-[1.35rem]">
                DNA
                <span className="ml-2 text-[0.6rem] tracking-[0.38em] text-white/70">Productions</span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[0.62rem] uppercase tracking-[0.22em] text-white/75 md:flex">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/services" className="transition hover:text-white">Services</Link>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <Link href="/equipment" className="transition hover:text-white">Equipment</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </nav>

          <div className="flex flex-1 justify-end">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.22em] text-white/80 transition hover:text-white">
              Get a quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </header>

        <section className="relative mx-auto max-w-[1280px] px-2 py-8 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-x-[18%] top-0 h-64 rounded-full bg-[#4d87ff]/8 blur-3xl" />
            <div className="absolute inset-x-[32%] bottom-0 h-56 rounded-full bg-[#97a7ff]/8 blur-3xl" />
          </div>

          <p className="mb-4 mx-auto max-w-[780px] text-center text-[0.52rem] uppercase tracking-[0.46em] text-[#d9b7a3] sm:text-[0.58rem] sm:tracking-[0.56em]">
            audio • video • lighting • networking
          </p>

          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:justify-center md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-6 py-3 text-[0.58rem] uppercase tracking-[0.22em] text-white/90 transition hover:border-white/30 hover:bg-white/10 md:translate-y-[18px]"
            >
              Request a quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <div className="flex justify-center">
              <Image
                src="/dna-colored-tree-logo-02.png"
                alt="DNA colored tree logo"
                width={560}
                height={560}
                className="h-auto w-[300px] sm:w-[420px] lg:w-[500px]"
                priority
              />
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-transparent px-6 py-3 text-[0.58rem] uppercase tracking-[0.22em] text-white/75 transition hover:border-white/20 hover:text-white md:translate-y-[18px]"
            >
              Our services
            </Link>
          </div>

        </section>

        <section className="mx-auto mt-12 max-w-[1100px] border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-[#8fe0ff]">On site now</p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Current Projects</h2>
            </div>
            <Link href="/projects" className="inline-flex shrink-0 items-center gap-2 pb-1 text-[0.58rem] uppercase tracking-[0.18em] text-white/65 transition hover:text-white sm:text-[0.65rem]">
              All projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {featuredProjects.filter((project) => project.showOnHome).map((project) => (
              <article key={project.title} className="overflow-hidden border border-white/10 bg-white/[0.025] transition hover:border-[#8fe0ff]/35">
                <div className="p-3 sm:p-4">
                  <ProjectPhotoGallery
                    title={project.title}
                    images={[project.image, ...(project.additionalImages ?? [])]}
                  />
                </div>
                <div className="space-y-3 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.55rem] uppercase tracking-[0.2em] text-white/50 sm:text-[0.6rem]">
                    <span>{project.category}</span>
                    {project.location ? <span>{project.location}</span> : null}
                  </div>
                  <h3 className="text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">{project.title}</h3>
                  {project.summary ? <p className="text-sm leading-6 text-white/65">{project.summary}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mx-auto mt-16 max-w-[1100px] border-t border-white/10 pt-6">
          <div className="grid gap-6 text-center text-white/70 md:grid-cols-3">
            <Link href="/services/commercial-av-installation" className="border border-white/10 bg-white/[0.02] p-5 transition hover:border-[#8fe0ff]/50 hover:bg-white/[0.05] hover:text-white">
              <div className="mb-3 text-[0.56rem] uppercase tracking-[0.22em] text-white/50">Services</div>
              <div className="text-sm uppercase tracking-[0.16em]">Commercial AV</div>
            </Link>
            <Link href="/projects" className="border border-white/10 bg-white/[0.02] p-5 transition hover:border-[#8fe0ff]/50 hover:bg-white/[0.05] hover:text-white">
              <div className="mb-3 text-[0.56rem] uppercase tracking-[0.22em] text-white/50">Projects</div>
              <div className="text-sm uppercase tracking-[0.16em]">Live Events</div>
            </Link>
            <Link href="/equipment" className="border border-white/10 bg-white/[0.02] p-5 transition hover:border-[#8fe0ff]/50 hover:bg-white/[0.05] hover:text-white">
              <div className="mb-3 text-[0.56rem] uppercase tracking-[0.22em] text-white/50">Equipment</div>
              <div className="text-sm uppercase tracking-[0.16em]">Install &amp; Support</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
