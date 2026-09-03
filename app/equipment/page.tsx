import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const equipmentCategories = [
  {
    title: "Audio systems",
    description: "Professional loudspeakers, amplification, microphones, mixing, and signal processing for clear, controlled sound.",
  },
  {
    title: "Video and display",
    description: "Displays, projection, video distribution, and control systems designed around the room and the audience experience.",
  },
  {
    title: "Lighting and control",
    description: "Fixtures, consoles, networking, and control infrastructure for stages, venues, events, and architectural environments.",
  },
  {
    title: "Infrastructure",
    description: "Cabling, racks, networking, security, and the supporting equipment that keeps an integrated system dependable.",
  },
];

export default function EquipmentPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-14 max-w-3xl">
        <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Equipment</div>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
          The tools behind the experience
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-300">
          DNA specifies, supplies, integrates, and supports the equipment that makes commercial AV and live production systems perform.
        </p>
      </div>

      <section className="mb-14 grid gap-8 border-y border-white/10 py-8 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:items-center md:py-10">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#10171d]">
          <Image
            src="/images/equipment/the-art-of-audio-instagram.jpg"
            alt="The Art of Audio featuring red headphones"
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover"
          />
        </div>
        <div className="max-w-xl">
          <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#d9b7a3]">The art of audio</div>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
            Equipment is part of the experience.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-300">
            The right system does more than fill a room. It shapes how a space feels, performs, and stays dependable over time.
          </p>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {equipmentCategories.map((category, index) => (
          <article key={category.title} className="rounded-[2rem] border border-white/10 bg-[#10171d] p-7">
            <div className="mb-5 text-[0.62rem] uppercase tracking-[0.26em] text-[#8fe0ff]">0{index + 1}</div>
            <h2 className="text-3xl font-medium tracking-[-0.05em] text-white">{category.title}</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">{category.description}</p>
          </article>
        ))}
      </div>

      <a href="/contact" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-[#dff7ff] transition hover:text-white">
        Talk through your system requirements
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}