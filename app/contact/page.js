import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

export const metadata = { title: "Contact | Balaji Enterprises" };

const icon = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
};

export default function ContactPage() {
  const cards = [
    ["phone", "Call Us", site.phoneDisplay, `tel:+${site.whatsapp}`],
    ["mail", "Email Us", site.email, `mailto:${site.email}`],
    ["pin", "Visit Us", site.address, null],
  ];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  return (
    <>
      <PageHero title="Contact Us" text="Tell us your requirement. Our team will help you find the right copper solution." />

      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {cards.map(([ic, h, v, href]) => {
              const inner = (
                <>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B87333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition group-hover:stroke-[#D49A5B]">{icon[ic]}</svg>
                  <div className="min-w-0">
                    <div className="text-xs tracking-[0.2em] text-[#A7A7A7]">{h.toUpperCase()}</div>
                    <div className="mt-1 break-words text-[#F5F2ED]">{v}</div>
                  </div>
                </>
              );
              const cls = "group flex items-start gap-5 rounded-md border border-[#2B2B2B] bg-[#141414] p-6 transition hover:border-[#B87333]/70 hover:shadow-[0_0_40px_rgba(184,115,51,0.15)]";
              return href ? <a key={h} href={href} className={cls}>{inner}</a> : <div key={h} className={cls}>{inner}</div>;
            })}

            <a href={waLink()} target="_blank" rel="noreferrer"
               className="block rounded-md border border-[#B87333] bg-[#B87333]/10 p-6 text-center text-[#D49A5B] transition hover:bg-[#B87333] hover:text-[#0A0A0A]">
              Chat on WhatsApp →
            </a>
          </div>

          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </section>

      <section className="bg-[#141414] pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-md border border-[#2B2B2B]">
            <iframe title="Our location" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="h-[380px] w-full border-0 [filter:grayscale(1)_invert(0.9)_contrast(0.9)]" />
          </div>
        </div>
      </section>
    </>
  );
}
