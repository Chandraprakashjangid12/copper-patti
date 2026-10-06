import { industries } from "@/lib/site";

const icons = {
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  coil: <><circle cx="12" cy="12" r="3" /><path d="M3 12h4M17 12h4M7 7c0-2 10-2 10 0M7 17c0 2 10 2 10 0" /></>,
  factory: <path d="M3 21V10l6 3V10l6 3V6h3v15H3zM7 17h2M12 17h2" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
};

export default function Industries() {
  return (
    <section id="industries" className="bg-[#141414] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-5xl font-semibold text-[#F5F2ED] sm:text-6xl">Powering Critical Industries</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-[#2B2B2B] bg-[#2B2B2B] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.name} className="group bg-[#141414] p-9 transition hover:bg-[#1C1C1C] hover:shadow-[inset_0_0_60px_rgba(184,115,51,0.12)]">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#B87333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:stroke-[#D49A5B]">
                {icons[i.icon]}
              </svg>
              <h3 className="mt-8 font-display text-3xl font-semibold text-[#F5F2ED]">{i.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7A7A7]">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
