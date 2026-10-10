"use client";
import { useState } from "react";
import { products, site, waLink } from "@/lib/site";

const field = "w-full rounded-sm border border-[#2B2B2B] bg-[#0A0A0A] px-4 py-3.5 text-sm text-[#F5F2ED] outline-none transition placeholder:text-[#A7A7A7]/50 focus:border-[#B87333] focus:shadow-[0_0_0_3px_rgba(184,115,51,0.15)]";
const label = "mb-2 block text-xs tracking-[0.2em] text-[#A7A7A7]";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", product: products[0].name, msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const body = () => `Hello, I am ${f.name}.\nPhone: ${f.phone}\nProduct: ${f.product}\nRequirement: ${f.msg}`;

  function send(e) {
    e.preventDefault();
    window.open(waLink(body()), "_blank");
  }

  function sendEmail() {
    const form = document.getElementById("quote-form");
    if (!form.reportValidity()) return;
    const subject = `Quote request: ${f.product}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body())}`;
  }

  return (
    <form id="quote-form" onSubmit={send} className="space-y-6 rounded-md border border-[#2B2B2B] bg-[#141414] p-6 sm:p-10">
      <div>
        <h2 className="font-display text-4xl font-semibold text-[#F5F2ED]">Request a Quote</h2>
        <p className="mt-2 text-sm text-[#A7A7A7]">Fill in your requirement and send it on WhatsApp or by email.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="n">NAME</label>
          <input id="n" required autoComplete="name" className={field} placeholder="Your name" value={f.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label} htmlFor="p">PHONE</label>
          <input id="p" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+ ()\-]{10,15}" title="Enter a valid phone number" className={field} placeholder="+91 98765 43210" value={f.phone} onChange={set("phone")} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="pr">PRODUCT</label>
        <select id="pr" className={field} value={f.product} onChange={set("product")}>
          {products.map((p) => <option key={p.name}>{p.name}</option>)}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="m">REQUIREMENT</label>
        <textarea id="m" rows={4} className={field} placeholder="Size, thickness, quantity..." value={f.msg} onChange={set("msg")} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <button type="submit" className="rounded-sm bg-[#B87333] py-4 font-medium text-[#0A0A0A] transition hover:bg-[#D49A5B] hover:shadow-[0_0_40px_rgba(184,115,51,0.35)]">
          Send on WhatsApp
        </button>
        <button type="button" onClick={sendEmail} className="rounded-sm border border-[#B87333] py-4 font-medium text-[#D49A5B] transition hover:bg-[#B87333] hover:text-[#0A0A0A]">
          Send by email
        </button>
      </div>
    </form>
  );
}
