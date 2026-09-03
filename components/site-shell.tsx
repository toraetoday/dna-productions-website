"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { navItems } from "@/data/site";

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0e11]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#d9b7a3]/40 bg-[#131a22] p-0.5">
              <Image
                src="/dna-round-monogram-color-logo.png"
                alt="DNA round color monogram"
                width={42}
                height={42}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.35em] text-zinc-400">Production</div>
              <div className="text-sm font-medium text-white">DNA</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">
            Premium audio, video, lighting, and installation services for venues, events, and commercial environments.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-zinc-400">Navigation</h3>
          <ul className="space-y-3 text-sm text-zinc-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-zinc-400">Services</h3>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li><Link href="/services#service-commercial-av" className="transition hover:text-white">Commercial AV</Link></li>
            <li><Link href="/services#service-sound-tuning" className="transition hover:text-white">Sound &amp; Tuning</Link></li>
            <li><Link href="/services#service-lighting" className="transition hover:text-white">Lighting</Link></li>
            <li><Link href="/services#service-security" className="transition hover:text-white">Security</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-zinc-400">Contact</h3>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#6ad5ff]" />
              <span>651 592 1238</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#6ad5ff]" />
              <span>darren@dnaproduction.net</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#6ad5ff]" />
              <span>Mountain Central Distribution Partner</span>
            </li>
          </ul>
        </div>

        <div className="relative mt-2 h-44 overflow-hidden lg:col-span-2 lg:col-start-3 lg:row-start-2 lg:-mt-28">
          <Image
            src="/3-logos.png"
            alt="VOID, Powersoft, and Allen & Heath logos"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="min-h-screen bg-[#090b0d] text-zinc-100">
        <main>{children}</main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090b0d] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="DNA home">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#d9b7a3]/40 bg-[#10171d] p-0.5">
              <Image
                src="/dna-round-monogram-color-logo.png"
                alt="DNA round color monogram"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-white">DNA</div>
              <div className="text-[0.62rem] uppercase tracking-[0.35em] text-zinc-400">Production</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <Phone className="h-3.5 w-3.5 text-[#6ad5ff]" />
              <span>651 592 1238</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#6ad5ff]/70 bg-[#6ad5ff]/10 px-4 py-2 text-sm font-medium text-[#dff7ff] transition hover:border-[#a5ebff] hover:bg-[#6ad5ff]/20"
            >
              Get A Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <SiteFooter />
    </div>
  );
}
