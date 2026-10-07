import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  { h: "Company", l: [["About", "/about"], ["Quality", "/quality"], ["Manufacturing", "/quality"]] },
  { h: "Products", l: [["Copper Patti", "/products"], ["Copper Strip", "/products"], ["Copper Busbar", "/products"]] },
  { h: "Industries", l: [["Electrical", "/#industries"], ["Transformers", "/#industries"], ["Power", "/#industries"], ["Engineering", "/#industries"]] },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2B2B2B] bg-[#0A0A0A] pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="font-display text-2xl font-semibold tracking-[0.12em] text-[#F5F2ED]">{site.name}</div>
          <p className="mt-3 text-sm text-[#A7A7A7]">{site.tagline}</p>
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
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-[#F5F2ED]">{site.email}</a></li>
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
