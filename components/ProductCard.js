import Link from "next/link";
import { head } from "../lib/fonts";

const placeholder = "repeating-linear-gradient(180deg,#B87333 0 20px,#9a5f28 20px 24px)";

export default function ProductCard({ p }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden" style={{ background: placeholder }}>
        {p.image && <img src={p.image} alt={p.name} className="h-full w-full object-cover" />}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`${head.className} text-lg font-semibold`}>{p.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">{p.note}</p>
        <p className="mt-3 text-sm text-ink/70">{p.width} wide, {p.thickness} thick</p>
        <Link href={`/products/${p.slug}`} className="mt-4 self-start text-sm font-semibold text-copper hover:underline">View details</Link>
      </div>
    </article>
  );
}
