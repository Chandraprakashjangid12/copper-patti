import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { site, products, reasons, industries, whatsapp, btn } from "../lib/siteData";
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

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-paper"
        style={{ backgroundImage: "radial-gradient(60% 80% at 88% 12%, rgba(184,115,51,.30), transparent 60%), repeating-linear-gradient(180deg, rgba(255,255,255,.025) 0 1px, transparent 1px 28px)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-copper/50 bg-charcoal/70 px-4 py-1.5 text-sm text-sand">
              <span className="h-2 w-2 rounded-full bg-copper-light" />
              Over {site.years} years supplying copper strip from Jaipur
            </p>
            <h1 className={`${head.className} mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl`}>
              Precision copper winding strips for transformers
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-sand/80">
              Bare, paper covered, cotton covered and enamelled strip, cut to the size your winding needs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className={`${btn} bg-copper px-8 text-ink shadow-lg shadow-copper/20 hover:bg-copper-light`}>Get a quote</Link>
              <Link href="/products" className={`${btn} border border-paper/40 px-8 hover:border-copper-light hover:text-copper-light`}>View products</Link>
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

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={`${head.className} text-3xl font-bold md:text-4xl`}>Our products</h2>
          <p className="mt-2 max-w-xl text-ink/70">Copper strip in the insulation and size your winding needs.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <Link href="/products" className={`${btn} mt-10 bg-ink text-paper hover:bg-charcoal`}>See all products</Link>
        </div>
      </section>

      <section className="bg-charcoal text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={`${head.className} text-3xl font-bold md:text-4xl`}>Why choose Balaji Enterprises</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-copper pt-4">
                <h3 className={`${head.className} text-lg font-semibold`}>{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/75">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className={`${head.className} text-3xl font-bold md:text-4xl`}>Industries we supply</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {industries.map((i) => <li key={i} className="rounded-full border border-copper/50 bg-paper px-5 py-2 text-sm font-medium">{i}</li>)}
          </ul>
          <p className="mt-8 max-w-xl text-ink/70">Over {site.years} years of supplying copper strip from Jaipur. <a href={whatsapp()} className="font-semibold text-copper hover:underline">Message us on WhatsApp</a> with your requirement.</p>
        </div>
      </section>
    </main>
  );
}
