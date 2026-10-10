import Link from "next/link";

export default function PageHero({ title, text, crumb }) {
  return (
    <section className="relative overflow-hidden border-b border-[#2B2B2B] bg-[#0A0A0A] pb-14 pt-36">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#B87333]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-[#A7A7A7]">
          <Link href="/" className="transition hover:text-[#D49A5B]">Home</Link>
          <span className="mx-2 text-[#B87333]">/</span>
          <span className="text-[#F5F2ED]">{crumb || title}</span>
        </nav>
        <h1 className="hero-in font-display text-5xl font-semibold text-[#F5F2ED] sm:text-7xl">{title}</h1>
        {text && <p className="mt-5 max-w-xl text-lg text-[#A7A7A7]">{text}</p>}
      </div>
    </section>
  );
}
