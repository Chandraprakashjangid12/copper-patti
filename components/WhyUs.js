import { whyUs } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">What You Can Expect</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-[#2B2B2B] bg-[#2B2B2B] sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((r) => (
            <div key={r.title} className="group bg-[#0A0A0A] p-8 transition hover:bg-[#141414] hover:shadow-[inset_0_0_60px_rgba(184,115,51,0.12)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D49A5B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              <h3 className="mt-5 font-display text-2xl font-semibold text-[#F5F2ED]">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A7A7A7]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
