import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../../components/PageHero";
import ProductCard from "../../../components/ProductCard";
import { products, whatsapp, btn } from "../../../lib/siteData";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return { title: p ? p.name : "Product" };
}

export default async function Product({ params }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = products.filter((x) => x.slug !== slug).slice(0, 3);
  const rows = [["Width", p.width], ["Thickness", p.thickness], ["Grade", p.grade]];
  return (
    <main>
      <PageHero title={p.name} crumb={`Products / ${p.name}`} />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-lg" style={{ background: "repeating-linear-gradient(180deg,#B87333 0 20px,#9a5f28 20px 24px)" }}>
            {p.image && <img src={p.image} alt={p.name} className="h-full w-full object-cover" />}
          </div>
          <div>
            <p className="text-lg leading-relaxed text-ink/80">{p.note}</p>
            <table className="mt-6 w-full text-left text-sm">
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} className="border-b border-ink/15"><th className="w-1/3 py-3 font-medium text-ink/60">{k}</th><td className="py-3 font-medium">{v}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className={`${btn} bg-copper text-ink hover:bg-copper-light`}>Request a quote</Link>
              <a href={whatsapp(`Hello Balaji Enterprises, I need a quote for ${p.name}.`)} className={`${btn} border border-ink/30 hover:border-copper hover:text-copper`}>Ask on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold">Other products</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{more.map((m) => <ProductCard key={m.slug} p={m} />)}</div>
        </div>
      </section>
    </main>
  );
}
