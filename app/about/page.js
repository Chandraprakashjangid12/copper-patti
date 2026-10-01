import PageHero from "../../components/PageHero";
import { site, reasons, industries } from "../../lib/siteData";
import { head } from "../../lib/fonts";

export const metadata = { title: "About Us" };

export default function About() {
  return (
    <main>
      <PageHero title="About us" text={`Supplying copper winding strip from Jaipur for over ${site.years} years.`} />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-ink/80">
          <p>{site.name} supplies copper winding strip to transformer manufacturers, repair workshops and motor winders. We stock bare, paper covered, cotton covered and enamelled strip, and cut to the width and thickness you need.</p>
          <p className="mt-5">Most orders start with a size and a quantity sent on WhatsApp. We reply with a price and delivery time, so you can plan your winding without long waits.</p>
        </div>
      </section>
      <section className="bg-charcoal text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className={`${head.className} text-3xl font-bold`}>What you can expect</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-copper pt-4">
                <h3 className={`${head.className} text-lg font-semibold`}>{r.title}</h3>
                <p className="mt-2 text-sm text-sand/75">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className={`${head.className} text-3xl font-bold`}>Industries we supply</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {industries.map((i) => <li key={i} className="rounded-full border border-copper/50 bg-paper px-5 py-2 text-sm font-medium">{i}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
