export default function PageHero({ title, text }) {
  return (
    <section className="relative overflow-hidden border-b border-[#2B2B2B] bg-[#0A0A0A] pb-20 pt-40">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#B87333]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="hero-in font-display text-6xl font-semibold text-[#F5F2ED] sm:text-7xl">{title}</h1>
        {text && <p className="mt-5 max-w-xl text-lg text-[#A7A7A7]">{text}</p>}
      </div>
    </section>
  );
}