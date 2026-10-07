import { products, waLink } from "@/lib/site";

export default function Products() {
  return (
    <section id="products" className="bg-[#0A0A0A] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Our Copper Products</h2>
        <p className="mt-4 max-w-xl text-[#A7A7A7]">Precision-manufactured copper solutions for demanding industrial applications.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-md border border-[#2B2B2B] bg-[#1C1C1C] transition hover:border-[#B87333]/70 hover:shadow-[0_0_40px_rgba(184,115,51,0.18)]">
              <div className="aspect-[4/3] bg-[#141414] bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} role="img" aria-label={p.name} />
              <div className="p-7">
                <h3 className="font-display text-3xl font-semibold text-[#F5F2ED]">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A7A7A7]">{p.text}</p>
                <a href={waLink(`Hello, I want details for ${p.name}.`)} target="_blank" rel="noreferrer"
                   className="mt-6 inline-block text-sm text-[#D49A5B] transition group-hover:text-[#F5F2ED]">View Product →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}