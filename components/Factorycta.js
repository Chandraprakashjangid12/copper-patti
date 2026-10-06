import { site, waLink } from "@/lib/site";

export function Factory() {
  return (
    <section className="relative flex min-h-[70vh] items-end bg-[#141414] bg-cover bg-center"
             style={{ backgroundImage: "url(/images/factory.jpg)" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
        <h2 className="font-display text-5xl font-semibold leading-tight text-[#F5F2ED] sm:text-7xl">
          Built for Industry.<br />Designed for Reliability.
        </h2>
        <p className="mt-6 max-w-xl text-[#A7A7A7]">
          Modern manufacturing practices, precision processes and quality-focused production come together to deliver dependable copper solutions.
        </p>
        {/* <a href="/#contact" className="mt-8 inline-block text-[#D49A5B] transition hover:text-[#F5F2ED]">Explore Our Facility →</a> */}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0A0A] py-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B87333]/20 blur-[150px]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Looking for Reliable Copper Solutions?</h2>
        <p className="mx-auto mt-6 max-w-xl text-[#A7A7A7]">
          Tell us your requirements. Our team will help you find the right copper solution for your application.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-sm bg-[#B87333] px-8 py-3.5 font-medium text-[#0A0A0A] transition hover:bg-[#D49A5B]">Request a Quote →</a>
          <a href={`mailto:${site.email}`} className="rounded-sm border border-[#2B2B2B] px-8 py-3.5 text-[#F5F2ED] transition hover:border-[#B87333]">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
