import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-[#141414] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#2B2B2B] bg-[#1C1C1C]">
          <Image
            src="/j4.jpg"
            alt="Copper coils being handled in our unit"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Copper Made With Precision</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-[#A7A7A7]">
            We manufacture high-quality copper products designed to meet the demanding requirements of electrical, transformer, power and engineering industries. Our focus on precision manufacturing, consistent quality and reliable performance enables us to deliver copper solutions our customers can depend on.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {about.points.map((p) => (
              <li key={p} className="rounded-sm border border-[#B87333]/50 px-4 py-2 text-sm text-[#D49A5B]">{p}</li>
            ))}
          </ul>
          <Link href="/about" className="mt-8 inline-block text-[#D49A5B] transition hover:text-[#F5F2ED]">Read more about us →</Link>
        </div>
      </div>
    </section>
  );
}
