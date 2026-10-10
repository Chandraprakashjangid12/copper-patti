"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav, waLink } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => !href.includes("#") && pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2B2B2B] bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 leading-none" aria-label="Balaji Enterprises home">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#F5F2ED] p-1">
            <Image src="/logo-mark.png" alt="" width={44} height={44} className="h-full w-full object-contain" priority />
          </span>
          <span>
            <span className="block font-display text-2xl font-semibold tracking-[0.12em] text-[#F5F2ED]">{site.name}</span>
            <span className="mt-1 hidden text-[10px] tracking-[0.25em] text-[#B87333] sm:block">{site.navTagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`relative py-2 text-sm transition hover:text-[#D49A5B] ${
                isActive(n.href) ? "text-[#D49A5B]" : "text-[#A7A7A7]"
              }`}
            >
              {n.label}
              {isActive(n.href) && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#B87333]" />}
            </Link>
          ))}
        </nav>

        <a href={waLink()} target="_blank" rel="noreferrer"
           className="hidden rounded-sm bg-[#B87333] px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition hover:bg-[#D49A5B] lg:block">
          Request a Quote
        </a>

        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="text-[#F5F2ED] lg:hidden">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2B2B2B] bg-[#0A0A0A] px-6 py-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)}
                  className={`block border-b border-[#1C1C1C] py-3 ${isActive(n.href) ? "text-[#D49A5B]" : "text-[#F5F2ED]"}`}>
              {n.label}
            </Link>
          ))}
          <a href={waLink()} className="mt-5 block rounded-sm bg-[#B87333] py-3 text-center font-medium text-[#0A0A0A]">
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
