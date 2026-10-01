import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { site, products, btn } from "../lib/siteData";
import { about, stats, industryList, whyUs } from "../lib/content";
import { head } from "../lib/fonts";

const strips = [
  { w: "92%", h: 44 }, { w: "76%", h: 34, paper: true }, { w: "100%", h: 40 },
  { w: "84%", h: 34, paper: true }, { w: "66%", h: 48 }, { w: "88%", h: 30 },
];
const sheen = "linear-gradient(180deg,#F0C08F 0%,#D99A5B 20%,#B87333 58%,#84501f 100%)";
const points = [
  { t: "Insulation choices", d: "Bare, paper, cotton and enamel" },
  { t: "Custom sizes", d: "Width and thickness to order" },
  { t: "WhatsApp quotes", d: "Price and delivery time, fast" },
];
const h2 = `${head.className} text-3xl font-bold md:text-4xl`;

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-ink text-paper"
        style={{ backgroundImage: "radial-gradient(60% 80% at 88% 12%, rgba(184,115,51,.30), transparent 60%), repeating-linear-gradient(180deg, rgba(255,255,255,.025) 0 1px, transparent 1px 28px)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-copper/50 bg-charcoal/70 px-4 py-1.5 text-sm text-sand">
              <span className="h-2 w-2 rounded-full bg-copper-light" />
              Over {site.years} years supplying copper strip from Jaipur
            </p>
            <h1 className={`${head.className} mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl`}>
              Precision Copper Strips for Power &amp; Transformer Industries
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-sand/80">
              High-quality copper winding strips engineered for reliable electrical performance and demanding industrial applications.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className={`${btn} bg-copper px-8 text-ink shadow-lg shadow-copper/20 hover:bg-copper-light`}>Request a Quote</Link>
              <Link href="/products" className={`${btn} border border-paper/40 px-8 hover:border-copper-light hover:text-copper-light`}>Explore Products</Link>
            </div>
            <ul className="mt-12 grid max-w-xl gap-6 border-t border-paper/15 pt-6 sm:grid-cols-3">
              {points.map((x) => (
                <li key={x.t}>
                  <p className={`${head.className} font-semibold text-copper-light`}>{x.t}</p>
                  <p className="mt-1 text-sm text-sand/70">{x.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {site.heroImage ? (
              <div className="overflow-hidden rounded-xl border border-copper/50 shadow-2xl shadow-black/50">
                <img src={site.heroImage} alt="Copper winding strips" className="aspect-[4/3] w-full object-cover" />
              </div>
            ) : (
              <div className="flex flex-col gap-3 pb-10" aria-hidden="true">
                {strips.map((s, i) => (
                  <div key={i} className={`strip ml-auto rounded-sm ${s.paper ? "border-y-4 border-sand" : ""}`}
                    style={{ width: s.w, height: s.h, animationDelay: `${i * 110}ms`, background: sheen, boxShadow: "inset 0 1px 0 rgba(255,255,255,.4), 0 10px 24px rgba(0,0,0,.45)" }} />
                ))}
              </div>
            )}
            <div className="absolute -bottom-2 left-0 rounded-lg border border-copper/40 bg-ink/90 px-5 py-4 shadow-xl backdrop-blur sm:-left-6">
              <p className="text-xs text-copper-light">Paper covered strip</p>
              <p className={`${head.className} text-xl font-semibold`}>12 × 2 mm</p>
              <p className="text-xs text-sand/70">ETP copper, 99.9% min</p>
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-charcoal text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-l-2 border-copper pl-5">
              <p className={`${head.className} text-4xl font-bold text-copper-light`}>{s.n}</p>
              <p className="mt-1 text-sm text-sand/80">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className={h2}>Engineering copper solutions you can rely on</h2>
            {about.text.map((t) => <p key={t} className="mt-5 leading-relaxed text-ink/75">{t}</p>)}
            <ul className="mt-6 flex flex-wrap gap-3">
              {about.points.map((x) => <li key={x} className="rounded-full border border-copper/50 bg-sand px-5 py-2 text-sm font-medium">{x}</li>)}
            </ul>
            <Link href="/about" className={`${btn} mt-8 bg-ink text-paper hover:bg-charcoal`}>More about us</Link>
          </div>
          <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-xl border border-copper/30 bg-sand">
            {about.image
              ? <img src={about.image} alt="Balaji Enterprises" className="h-full w-full object-cover" />
              : <img src="/logo.png" alt="Balaji Enterprises" className="h-4/5 object-contain" />}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-24 bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={h2}>Our products</h2>
          <p className="mt-2 max-w-xl text-ink/70">Copper strip in the insulation and size your winding needs.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={h2}>Why industries choose Balaji Enterprises</h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-copper text-sm font-bold text-ink" aria-hidden="true">✓</span>
                <div>
                  <h3 className={`${head.className} text-lg font-semibold`}>{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sand/75">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={h2}>Industries we serve</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryList.map((i) => (
              <li key={i} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:shadow-lg">
                <span className="block h-1 w-10 rounded bg-copper" />
                <h3 className={`${head.className} mt-4 text-xl font-semibold`}>{i}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
