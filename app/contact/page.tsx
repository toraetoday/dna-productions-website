import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-[0.68rem] uppercase tracking-[0.3em] text-[#8fe0ff]">Contact</div>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl">Commercial AV &amp; Production Inquiries</h1>
          <div className="mt-8 space-y-5 text-base text-zinc-300">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#6ad5ff]" />
              <a href="tel:+16515921238" className="transition hover:text-white">651 592 1238</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#6ad5ff]" />
              <a href="mailto:darren@dnaproduction.net" className="transition hover:text-white">darren@dnaproduction.net</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#6ad5ff]" />
              <span>Mountain Central Distribution Partner</span>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-[#10171d] p-6 md:p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Name</label>
              <input className="w-full rounded-2xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none transition focus:border-[#6ad5ff]" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Company / Venue</label>
              <input className="w-full rounded-2xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none transition focus:border-[#6ad5ff]" placeholder="Company or venue" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>
              <input type="email" className="w-full rounded-2xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none transition focus:border-[#6ad5ff]" placeholder="name@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Project City / State</label>
              <input className="w-full rounded-2xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none transition focus:border-[#6ad5ff]" placeholder="Example: Denver, CO" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Project details</label>
              <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-[#0d1217] px-4 py-3 text-white outline-none transition focus:border-[#6ad5ff]" placeholder="Tell us about your project, timeline, and requirements." />
            </div>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6ad5ff] px-6 py-3 text-sm font-medium text-[#061018] transition hover:bg-[#9adfff]">
              Send Inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
