import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";

const cols = [
  { h: "Company", l: [["About", "/about"], ["Quality", "/quality"], ["Contact", "/contact"]] },
  { h: "Products", l: [["Copper Patti", "/products"], ["Copper Strip", "/products"], ["Copper Busbar", "/products"]] },
  { h: "Industries", l: [["Electrical", "/#industries"], ["Transformers", "/#industries"], ["Power", "/#industries"], ["Engineering", "/#industries"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2B2B2B] bg-[#0A0A0A] pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#F5F2ED] p-1">
              <Image src="/logo-mark.png" alt="" width={40} height={40} className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-2xl font-semibold tracking-[0.12em] text-[#F5F2ED]">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-[#A7A7A7]">{site.tagline}</p>
          <a href={waLink()} target="_blank" rel="noreferrer"
             className="mt-6 inline-block rounded-sm border border-[#B87333] px-5 py-2.5 text-sm text-[#D49A5B] transition hover:bg-[#B87333] hover:text-[#0A0A0A]">
            Chat on WhatsApp
          </a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="font-display text-xl font-semibold text-[#D49A5B]">{c.h}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.l.map(([t, h]) => (
                <li key={t}><Link href={h} className="text-sm text-[#A7A7A7] transition hover:text-[#F5F2ED]">{t}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-display text-xl font-semibold text-[#D49A5B]">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#A7A7A7]">
            <li><a href={`tel:+${site.whatsapp}`} className="hover:text-[#F5F2ED]">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] hover:text-[#F5F2ED]">{site.email}</a></li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2B2B2B] py-6 text-center text-xs text-[#A7A7A7]">
        © 2026 {site.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
