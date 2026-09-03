import { Check } from "lucide-react";

const points = [
  "Commercial AV installation and integration",
  "Venue, festival, and event production support",
  "Sound tuning, troubleshooting, and system optimization",
  "Lighting design, programming, and custom environment builds",
  "Security, network, and operational infrastructure support",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">About</div>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
            Commercial AV, Production &amp; Systems Integration
          </h1>
        </div>

        <div className="space-y-5 text-base leading-8 text-zinc-300">
          <p>
            DNA Productions designs, supplies, installs and supports professional audio, video, lighting and integrated systems for venues, commercial spaces and live productions.
          </p>
          <p>
            We deliver system design, installation and support for environments that need reliable performance, clean execution and long-term serviceability. From live events to commercial AV installs, our work is built around practical outcomes and technical precision.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#10171d] p-8 md:p-10">
        <div className="mb-8 text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Capabilities</div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0d1217] p-4 text-zinc-200">
              <Check className="mt-1 h-4 w-4 flex-none text-[#6ad5ff]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
