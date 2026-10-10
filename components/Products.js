import Image from "next/image";
import { products, waLink } from "@/lib/site";

export default function Products({ heading = true }) {
  return (
    <section id="products" className="bg-[#0A0A0A] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <>
            <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Our Copper Products</h2>
            <p className="mt-4 max-w-xl text-[#A7A7A7]">Precision-manufactured copper solutions for demanding industrial applications.</p>
          </>
        )}

        <div className={`grid gap-6 md:grid-cols-3 ${heading ? "mt-12" : ""}`}>
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-md border border-[#2B2B2B] bg-[#1C1C1C] transition hover:border-[#B87333]/70 hover:shadow-[0_0_40px_rgba(184,115,51,0.18)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm border border-[#B87333]/60 bg-[#0A0A0A]/70 px-3 py-1 text-xs text-[#D49A5B] backdrop-blur">{p.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-3xl font-semibold text-[#F5F2ED]">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#A7A7A7]">{p.text}</p>
                <a href={waLink(`Hello, I want details for ${p.name}.`)} target="_blank" rel="noreferrer"
                   className="mt-6 inline-flex w-fit items-center rounded-sm border border-[#B87333] px-5 py-2.5 text-sm text-[#D49A5B] transition hover:bg-[#B87333] hover:text-[#0A0A0A]">
                  Get a quote for {p.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
