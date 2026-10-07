export default function About() {
  return (
    <section id="about" className="bg-[#141414] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Factory photo: /public/images/factory-about.jpg */}
        <div className="aspect-[4/3] rounded-md border border-[#2B2B2B] bg-[#1C1C1C] bg-cover bg-center"
             style={{ backgroundImage: "url(j8.jpg)" }} role="img" aria-label="Our factory" />
        <div>
          <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Copper Made With Precision</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-[#A7A7A7]">
            We manufacture high-quality copper products designed to meet the demanding requirements of electrical, transformer, power and engineering industries. Our focus on precision manufacturing, consistent quality and reliable performance enables us to deliver copper solutions our customers can depend on.
          </p>
          <a href="/quality" className="mt-8 inline-block text-[#D49A5B] transition hover:text-[#F5F2ED]">Discover Our Story →</a>
        </div>
      </div>
    </section>
  );
}
