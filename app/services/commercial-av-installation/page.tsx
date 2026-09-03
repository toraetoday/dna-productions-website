import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";

const trustItems = [
  "Sennheiser",
  "Shure",
  "Allen & Heath",
  "QSC",
  "LG",
  "Extron",
  "Yamaha",
  "Blackmagic",
];

const capabilityItems = [
  {
    title: "Commercial AV Installation",
    text: "Complete commercial audio and video systems supplied and installed for venues and commercial spaces.",
  },
  {
    title: "AV Integration & Systems",
    text: "Audio, video, displays and control systems configured to operate together as one system.",
  },
  {
    title: "System Design",
    text: "Equipment specification and system planning based on the space and intended use.",
  },
  {
    title: "Maintenance & Upgrades",
    text: "Troubleshooting, upgrades and ongoing commercial system support.",
  },
];

const projectItems = [
  {
    name: "Champion",
    type: "Live event environment",
    location: "Colorado",
    image: "/images/portfolio/20190318_180008.jpg",
    summary:
      "A layered production environment built for immersive lighting, scenic staging, and premium guest experience.",
    details: "Lighting + scenic installation",
  },
  {
    name: "The System",
    type: "Sound + installation",
    location: "Regional venue",
    image: "/images/portfolio/20220320_203147.jpg",
    summary:
      "A high-impact install focused on audio tuning, stage performance, and reliability for repeated use.",
    details: "Audio system install + tuning",
  },
  {
    name: "Show Production",
    type: "Concert / stage design",
    location: "Live production",
    image: "/images/portfolio/IMG_20210829_205950649_HDR.jpg",
    summary:
      "A polished production environment with technical control and lighting treatment designed for atmosphere.",
    details: "Stage lighting + venue systems",
  },
];

const processSteps = [
  "Assess",
  "Design",
  "Supply Equipment",
  "Install",
  "Configure / Tune",
  "Support",
];

const faqs = [
  {
    question: "Do you supply the equipment as well as install it?",
    answer:
      "Yes. DNA can help specify, supply, install, configure and support the full commercial AV system based on the space and intended use.",
  },
  {
    question: "How far do you travel for installations?",
    answer:
      "Travel is available based on the project scope and location. We can discuss the site requirements and coordination early in the process.",
  },
  {
    question: "Can you repair or upgrade an existing system?",
    answer:
      "Yes. We support troubleshooting, upgrades, maintenance and system improvement for existing commercial environments.",
  },
  {
    question: "Do you provide system design?",
    answer:
      "Yes. System design and equipment specification are part of the planning process for many commercial AV projects.",
  },
  {
    question: "What size commercial projects do you work on?",
    answer:
      "We work across a range of commercial environments, from smaller venue installs and office spaces to larger event and gathering spaces.",
  },
  {
    question: "How does the quote process work?",
    answer:
      "We begin with a project overview, review the venue or space, then recommend the right system and provide a proposal for the scope of work.",
  },
];

export default function CommercialAVInstallationPage() {
  return (
    <div className="bg-[#090b0d] text-white">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-4 text-[0.68rem] uppercase tracking-[0.32em] text-[#d9b7a3]">Commercial AV</div>
            <h1 className="max-w-xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Commercial AV Installation &amp; Integration
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300">
              Commercial AV systems designed, supplied, installed and integrated for venues and commercial spaces. Equipment sales, installation and ongoing support. Travel available.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9b7a3]/70 bg-[#d9b7a3]/10 px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#f6e7df] transition hover:border-[#ecc8b7] hover:bg-[#d9b7a3]/15"
              >
                Get A Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="text-sm text-zinc-300">
                Prefer to talk? <span className="text-white">[PHONE NUMBER]</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#10171d] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <Image
              src="/images/portfolio/IMG_20210930_191650943.jpg"
              alt="Commercial AV installation environment"
              width={1200}
              height={900}
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0f13]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 text-center text-[0.58rem] uppercase tracking-[0.28em] text-zinc-400 sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <div key={item} className="rounded-full border border-white/10 bg-[#11181d] px-3 py-2">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-3 text-[0.62rem] uppercase tracking-[0.22em] text-zinc-300">
          <a href="#commercial-av-installation" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 transition hover:border-white/20 hover:text-white">
            Commercial AV Installation
          </a>
          <a href="#av-installation-services" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 transition hover:border-white/20 hover:text-white">
            AV Installation Services
          </a>
          <a href="#av-integration" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 transition hover:border-white/20 hover:text-white">
            AV Integration &amp; Systems
          </a>
          <a href="#maintenance-upgrades" className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 transition hover:border-white/20 hover:text-white">
            Maintenance &amp; Upgrades
          </a>
        </nav>
      </section>

      <section id="commercial-av-installation" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Core capabilities</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
            Built for dependable commercial performance.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilityItems.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-white/10 bg-[#10171d] p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9b7a3]/50 bg-[#d9b7a3]/10 text-[#f5e8df]">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">What a project includes</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
            End-to-end system delivery.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[1.4rem] border border-white/10 bg-[#10171d] p-4">
              <div className="mb-3 text-[0.58rem] uppercase tracking-[0.24em] text-[#d9b7a3]">0{index + 1}</div>
              <div className="text-lg font-medium text-white">{step}</div>
              {index < processSteps.length - 1 ? (
                <div className="mt-4 flex justify-end text-zinc-500">
                  <ChevronRight className="h-4 w-4" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Relevant projects</div>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Commercial AV work in context.</h2>
          </div>
          <Link href="/projects" className="hidden items-center gap-2 text-[0.64rem] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-white md:flex">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#10171d]">
              <Image src={project.image} alt={project.name} width={1200} height={900} className="h-64 w-full object-cover" />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between text-[0.56rem] uppercase tracking-[0.22em] text-zinc-400">
                  <span>{project.type}</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-medium text-white">{project.name}</h3>
                <p className="text-sm leading-7 text-zinc-300">{project.summary}</p>
                <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[#d9b7a3]">{project.details}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">How the process works</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Clear, practical delivery from start to finish.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              step: "1. Assess",
              text: "We learn about the facility, existing equipment and project requirements.",
            },
            {
              step: "2. Design &amp; Quote",
              text: "We recommend a system and provide a project proposal.",
            },
            {
              step: "3. Supply &amp; Install",
              text: "We supply the required equipment and complete the installation.",
            },
            {
              step: "4. Configure &amp; Commission",
              text: "We configure, test and tune the finished system.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-[#10171d] p-6">
              <div className="mb-4 text-[0.63rem] uppercase tracking-[0.26em] text-[#d9b7a3]">{item.step}</div>
              <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="av-installation-services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Commercial AV Installation</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Professional installation built around the space.</h2>
        </div>
        <p className="max-w-4xl text-base leading-8 text-zinc-300">
          Commercial AV installation projects require more than mounting equipment and running cable. We design the system around the room, the use case and the standards of daily operation. That includes careful planning of sightlines, acoustic treatment, access, signal routing and long-term maintenance needs so the finished environment supports the business or venue without friction.
        </p>
      </section>

      <section id="av-integration" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">AV Integration &amp; Systems</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Unified systems that work together.</h2>
        </div>
        <p className="max-w-4xl text-base leading-8 text-zinc-300">
          Audio, video, displays, control systems and supporting infrastructure are configured to operate as one cohesive environment. Whether the goal is a polished conference room, a multipurpose venue or an event-ready space, a well-integrated system supports simple operation, consistent performance and fewer technical issues over time.
        </p>
      </section>

      <section id="maintenance-upgrades" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Maintenance &amp; Upgrades</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Support that protects the system long term.</h2>
        </div>
        <p className="max-w-4xl text-base leading-8 text-zinc-300">
          Commercial AV systems need ongoing attention to stay reliable. DNA supports troubleshooting, preventative maintenance and strategic upgrades so existing installations continue to function properly as use cases change. We help extend the value of the system without forcing a full replacement.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#10171d] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Equipment for Commercial AV Systems</div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
                We supply the components required for complete commercial installs.
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                We supply the equipment required for complete commercial installations, including audio, video, control and related system components.
              </p>
            </div>

            <Link href="/services" className="inline-flex items-center gap-2 text-[0.64rem] uppercase tracking-[0.22em] text-zinc-200 transition hover:text-white">
              View related equipment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">FAQ</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Common questions.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[1.2rem] border border-white/10 bg-[#10171d] p-5 open:bg-[#111b21]" open={faq.question === "Do you supply the equipment as well as install it?"}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
                {faq.question}
                <span className="rounded-full border border-white/10 p-1 text-zinc-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#d9b7a3]/20 bg-[#10171d] p-8 md:p-12">
          <div className="mb-8 max-w-2xl">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d9b7a3]">Request a quote</div>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">Ready to Discuss Your Project?</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <form className="space-y-5">
              <div>
                <div className="mb-2 text-[0.62rem] uppercase tracking-[0.22em] text-zinc-400">Step 1</div>
                <label className="mb-2 block text-sm text-zinc-200">Name</label>
                <input required className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Name" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Company / Venue</label>
                <input required className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Company / Venue" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Email</label>
                <input type="email" required className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Email" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Phone</label>
                <input className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Phone (optional)" />
              </div>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-[#d9b7a3]/80 bg-[#d9b7a3]/15 px-5 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#f5e7df] transition hover:border-[#f2d0bb] hover:bg-[#d9b7a3]/20">
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <form className="space-y-5">
              <div>
                <div className="mb-2 text-[0.62rem] uppercase tracking-[0.22em] text-zinc-400">Step 2</div>
                <label className="mb-2 block text-sm text-zinc-200">Project city / state</label>
                <input required className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="City / State" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Service needed</label>
                <input
                  value="Commercial AV Installation & Integration"
                  readOnly
                  className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Brief project description</label>
                <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Tell us about the project, system requirements, or venue." />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-200">Desired timeline</label>
                <input className="w-full rounded-xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-500" placeholder="Desired timeline (optional)" />
              </div>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-[#d9b7a3]/80 bg-[#d9b7a3] px-5 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#17110d] transition hover:bg-[#eac7ae]">
                Get A Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
