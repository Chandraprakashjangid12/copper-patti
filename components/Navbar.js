"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { site, nav, btn } from "../lib/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
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
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined}
                className={`border-b-2 py-1 text-sm font-medium transition-colors hover:text-copper-light ${active(n.href) ? "border-copper text-copper-light" : "border-transparent text-paper"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className={`${btn} bg-copper text-ink hover:bg-copper-light`}>Get a quote</Link>
          </nav>
          <button className="rounded-md border border-copper/60 px-4 py-2 text-sm text-paper md:hidden"
            aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="border-t border-copper/30 px-5 pb-5 md:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-paper/10 py-3 text-paper">{n.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className={`${btn} mt-4 block bg-copper text-center text-ink`}>Get a quote</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
