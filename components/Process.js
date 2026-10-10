import { processSteps, quality } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">From Copper to Precision</h2>
        <p className="mt-4 max-w-xl text-[#A7A7A7]">Six controlled steps, from raw copper to the strip you ordered.</p>

        <ol className="mt-12 grid grid-cols-1 lg:grid-cols-6">
          {processSteps.map((s, i) => {
            const last = i === processSteps.length - 1;
            return (
              <li key={s.t} className="relative pb-10 pl-16 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-6">
                {/* step marker */}
                <span className="absolute left-0 top-0 z-10 grid h-12 w-12 place-items-center rounded-full border border-[#B87333] bg-[#0A0A0A] font-display text-xl font-semibold text-[#D49A5B] lg:static">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* connector: vertical on mobile, horizontal on desktop */}
                {!last && <span className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-[#B87333]/40 lg:hidden" />}
                {!last && <span className="absolute left-12 right-0 top-6 hidden h-px bg-[#B87333]/40 lg:block" />}
                <h3 className="font-display text-2xl font-semibold text-[#F5F2ED] lg:mt-5">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A7A7A7]">{s.d}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section id="quality" className="bg-[#141414] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Quality That Performs</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {quality.map((q) => (
            <div key={q.t} className="border-t-2 border-[#B87333] pt-6">
              <h3 className="font-display text-2xl font-semibold text-[#F5F2ED]">{q.t}</h3>
              <p className="mt-3 leading-relaxed text-[#A7A7A7]">{q.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
