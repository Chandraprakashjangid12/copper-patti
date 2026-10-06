import { stats, waLink } from "@/lib/site";
// import from "D:\copper-patti\public\j1.jpg";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0A0A] pt-20">
        <div className="pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#B87333]/10 blur-[140px]" />
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
          <div className="hero-in">
            <p className="text-xs tracking-[0.3em] text-[#B87333]">PRECISION COPPER MANUFACTURING</p>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-[#F5F2ED] sm:text-7xl lg:text-8xl">
              Engineered Copper.<br />Built for Performance.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#A7A7A7]">
              High-quality copper patti engineered for superior conductivity, dimensional precision, and reliable performance across demanding electrical and industrial applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {/* <a href="/#products" className="rounded-sm bg-[#B87333] px-7 py-3.5 font-medium text-[#0A0A0A] transition hover:bg-[#D49A5B]">Explore Products →</a> */}
              <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-sm border border-[#2B2B2B] px-7 py-3.5 text-[#F5F2ED] transition hover:border-[#B87333]">Request a Quote</a>
            </div>
          </div>

          {/* Product photo: /public/images/hero.jpg */}
          <div className="hero-in relative" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-px rounded-md bg-gradient-to-br from-[#D49A5B] via-[#B87333]/20 to-transparent opacity-70" />
            <div
              className="relative aspect-[4/5] rounded-md bg-[#141414] bg-cover bg-center shadow-[0_0_80px_rgba(184,115,51,0.25)]"
              // style={{ backgroundImage: "url(/images/hero.jpg)" }}
              style={{ backgroundImage: "url(/j1.jpg)" }}
              role="img" aria-label="Copper patti coils"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#2B2B2B] bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-10 text-center ${i > 0 ? "lg:border-l lg:border-[#B87333]/30" : ""} ${i % 2 ? "border-l border-[#B87333]/30" : ""}`}>
              <div className="font-display text-5xl font-semibold text-[#D49A5B]">{s.value}</div>
              <div className="mt-2 text-sm text-[#A7A7A7]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
