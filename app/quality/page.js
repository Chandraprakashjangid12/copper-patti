import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/FactoryCta";
import { quality, stats, processSteps } from "@/lib/site";

export const metadata = {
  title: "Quality | Balaji Enterprises",
  description: "How Balaji Enterprises checks copper patti, strips and busbars at every stage before dispatch.",
};

const checks = [
  ["Thickness & width", "Measured against the ordered size."],
  ["Surface finish", "Checked for scratches, dents and marks."],
  ["Edge condition", "Clean, burr-free edges for safe handling."],
  ["Packing", "Protected packing before every dispatch."],
];

export default function QualityPage() {
  return (
    <>
      <PageHero title="Quality That Performs" text="Every stage of production is watched, so what leaves our unit is what you ordered." />

      {/* Pillars */}
      <section className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-md border border-[#2B2B2B] bg-[#2B2B2B] sm:grid-cols-2 lg:grid-cols-4">
          {quality.map((q, i) => (
            <div key={q.t} className="group bg-[#0A0A0A] p-8 transition hover:bg-[#141414] hover:shadow-[inset_0_0_70px_rgba(184,115,51,0.12)]">
              <span className="font-display text-6xl font-semibold text-[#B87333] transition group-hover:text-[#D49A5B]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-3xl font-semibold text-[#F5F2ED]">{q.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7A7A7]">{q.d}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-[#141414] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs tracking-[0.3em] text-[#B87333]">MANUFACTURING</p>
          <h2 className="mt-4 font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">From Copper to Precision</h2>
          <ol className="relative mt-12 border-l border-[#B87333]/40">
            {processSteps.map(({ t, d }, i) => (
              <li key={t} className="relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border border-[#D49A5B] bg-[#141414]" />
                <span className="font-display text-xl font-semibold text-[#B87333]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl font-semibold text-[#F5F2ED]">{t}</h3>
                <p className="mt-2 max-w-xl text-[#A7A7A7]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inspection checklist + stats */}
      <section className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#B87333]">INSPECTION</p>
            <h2 className="mt-4 font-display text-5xl font-semibold text-[#F5F2ED]">What We Check Before Dispatch</h2>
            <ul className="mt-10 divide-y divide-[#2B2B2B] border-y border-[#2B2B2B]">
              {checks.map(([t, d]) => (
                <li key={t} className="flex items-start gap-4 py-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D49A5B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  <div>
                    <div className="text-[#F5F2ED]">{t}</div>
                    <div className="text-sm text-[#A7A7A7]">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-md border border-[#2B2B2B] bg-[#2B2B2B]">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#141414] p-10 text-center">
                <div className="font-display text-5xl font-semibold text-[#D49A5B]">{s.value}</div>
                <div className="mt-2 text-sm text-[#A7A7A7]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
