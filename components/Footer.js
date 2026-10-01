import Link from "next/link";
import Logo from "./Logo";
import { site, nav, products, whatsapp, btn } from "../lib/siteData";
import { head } from "../lib/fonts";

export default function Footer() {
  return (
    <>
      <footer className="bg-ink text-sand">
        <div className="text-ink" style={{ background: "linear-gradient(120deg,#D99A5B,#B87333)" }}>
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
            <div>
              <h2 className={`${head.className} text-3xl font-semibold md:text-4xl`}>Need Copper Strip for Your Next Transformer?</h2>
              <p className="mt-2 max-w-xl text-lg text-ink/80">Tell us your required size, grade and quantity. Our team will get back to you with a quotation.</p>
            </div>
            <Link href="/contact" className={`${btn} bg-ink px-8 py-4 text-paper hover:bg-charcoal`}>Request a Quote</Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-sand/80">
              Copper winding strips for transformer and motor makers, supplied from Jaipur for over {site.years} years.
            </p>
          </div>
          <div>
            <h3 className={`${head.className} font-semibold text-paper`}>Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[...nav, { label: "Industries", href: "/#industries" }].map((n) => <li key={n.href}><Link href={n.href} className="hover:text-copper-light">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className={`${head.className} font-semibold text-paper`}>Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:text-copper-light">{p.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className={`${head.className} font-semibold text-paper`}>Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>{site.address}</li>
              <li><a href={site.phoneHref} className="hover:text-copper-light">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="break-all hover:text-copper-light">{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/10 py-5 text-center text-sm text-sand/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </footer>
      <a href={whatsapp()} aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.2.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.800 1.500 5.900 1.500 6.900 0 12.500-5.600 12.500-12.500S22.900 3 16 3zm0 22.900c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.200 9.800 10 5.100 16 5.100s10.800 4.700 10.800 10.400S21.900 25.900 16 25.900zm5.900-7.700c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200-.2-.3 0-.5.1-.7l.5-.6c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.6-.1-.2-.7-1.700-1-2.300-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400-.3.300-1.200 1.100-1.200 2.800s1.200 3.200 1.400 3.500c.2.200 2.400 3.700 5.800 5.100 3.400 1.400 3.400.9 4 .9.600-.1 1.900-.8 2.200-1.500.3-.8.300-1.400.2-1.500-.1-.2-.3-.3-.6-.4z"/></svg>
      </a>
    </>
  );
}
