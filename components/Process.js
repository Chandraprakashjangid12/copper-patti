import { process as steps, quality } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">From Copper to Precision</h2>
        <ol className="mt-16 grid gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
          {steps.map((s, i) => (
            <li key={s} className="relative lg:pr-6">
              <div className="hidden h-px bg-[#B87333]/40 lg:block" />
              <span className="block font-display text-4xl font-semibold text-[#B87333] lg:mt-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-2 block text-[#F5F2ED]">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section id="quality" className="bg-[#141414] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Quality That Performs</h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {quality.map((q) => (
            <div key={q.t} className="border-t border-[#B87333] pt-6">
              <h3 className="font-display text-2xl font-semibold text-[#F5F2ED]">{q.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7A7A7]">{q.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
