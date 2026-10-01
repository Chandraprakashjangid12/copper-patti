"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { site, products, btn } from "../lib/siteData";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", menu: true },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h) => (h === "/" ? path === "/" : !h.includes("#") && path.startsWith(h));
  const cls = (h) => `border-b-2 py-1 text-sm font-medium transition-colors hover:text-copper-light ${active(h) ? "border-copper text-copper-light" : "border-transparent text-paper"}`;
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-charcoal text-sm text-sand md:block">
        <div className="mx-auto flex max-w-6xl justify-between px-5 py-2">
          <span>{site.address}</span>
          <span className="flex gap-6">
            <a href={site.phoneHref} className="hover:text-copper-light">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-copper-light">{site.email}</a>
          </span>
        </div>
      </div>
      <div className="border-b border-copper/40 bg-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" aria-label="Balaji Enterprises home"><Logo /></Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {links.map((n) =>
              n.menu ? (
                <div key={n.href} className="group relative">
                  <Link href={n.href} aria-current={active(n.href) ? "page" : undefined} className={cls(n.href)}>{n.label} <span aria-hidden="true" className="text-xs">▾</span></Link>
                  <div className="invisible absolute left-0 top-full z-10 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-72 rounded-lg border border-copper/40 bg-charcoal p-2 shadow-2xl">
                      {products.map((p) => (
                        <li key={p.slug}><Link href={`/products/${p.slug}`} className="block rounded-md px-4 py-2 text-sm text-paper hover:bg-ink hover:text-copper-light">{p.name}</Link></li>
                      ))}
                      <li className="mt-1 border-t border-paper/10 pt-1"><Link href="/products" className="block rounded-md px-4 py-2 text-sm font-semibold text-copper-light hover:bg-ink">All products</Link></li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined} className={cls(n.href)}>{n.label}</Link>
              )
            )}
            <Link href="/contact" className={`${btn} bg-copper text-ink hover:bg-copper-light`}>Get a quote</Link>
          </nav>
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-copper/50 transition-colors hover:border-copper-light md:hidden"
            aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-6 rounded bg-copper-light transition-all duration-300 ${open ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-copper-light transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-6 rounded bg-copper-light transition-all duration-300 ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
            </span>
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="max-h-[75vh] overflow-y-auto border-t border-copper/30 px-5 pb-5 md:hidden" aria-label="Mobile">
            {links.map((n) => (
              <div key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-paper/10 py-3 text-paper">{n.label}</Link>
                {n.menu && products.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} onClick={() => setOpen(false)} className="block border-b border-paper/5 py-2 pl-5 text-sm text-sand/80">{p.name}</Link>
                ))}
              </div>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className={`${btn} mt-4 block bg-copper text-center text-ink`}>Get a quote</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
