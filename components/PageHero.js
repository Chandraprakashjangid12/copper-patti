import Link from "next/link";
import { head } from "../lib/fonts";

export default function PageHero({ title, text, crumb }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm text-copper-light"><Link href="/" className="hover:underline">Home</Link> / {crumb || title}</p>
        <h1 className={`${head.className} mt-3 text-4xl font-bold md:text-5xl`}>{title}</h1>
        {text && <p className="mt-4 max-w-xl text-lg text-sand/80">{text}</p>}
      </div>
    </section>
  );
}
