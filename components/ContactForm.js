"use client";
import { useState } from "react";
import { site, products, whatsapp, btn } from "../lib/siteData";

const field = "w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-sm outline-none focus:border-copper";

export default function ContactForm({ product = "" }) {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const msg = `Hello Balaji Enterprises,\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "-"}\nProduct: ${d.product}\nSize / quantity: ${d.size || "-"}\nMessage: ${d.message || "-"}`;
    if (!site.formKey) {
      window.open(whatsapp(msg), "_blank");
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: site.formKey, subject: `Quote request: ${d.product}`, ...d }),
      });
      const j = await r.json();
      setStatus(j.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div className="rounded-lg border border-copper/40 bg-sand p-8" role="status">
        <h3 className="text-xl font-semibold">Request sent</h3>
        <p className="mt-2 text-ink/80">Thank you. We will call you shortly on the number you gave.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-copper hover:underline">Send another request</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:grid-cols-2">
      <label className="text-sm font-medium">Name
        <input name="name" required autoComplete="name" className={`${field} mt-1`} />
      </label>
      <label className="text-sm font-medium">Phone
        <input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+ ]{10,15}" title="Enter a valid phone number" className={`${field} mt-1`} />
      </label>
      <label className="text-sm font-medium">Email (optional)
        <input name="email" type="email" autoComplete="email" className={`${field} mt-1`} />
      </label>
      <label className="text-sm font-medium">Product
        <select name="product" defaultValue={product} className={`${field} mt-1`}>
          {products.map((p) => <option key={p.slug}>{p.name}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">Size and quantity
        <input name="size" placeholder="e.g. 12 × 2 mm, 500 kg" className={`${field} mt-1`} />
      </label>
      <label className="text-sm font-medium sm:col-span-2">Message
        <textarea name="message" rows={4} className={`${field} mt-1`} />
      </label>
      {status === "error" && <p className="text-sm text-red-700 sm:col-span-2" role="alert">Could not send. Please try again or message us on WhatsApp.</p>}
      <button disabled={status === "sending"} className={`${btn} bg-copper text-ink hover:bg-copper-light disabled:opacity-60 sm:col-span-2`}>
        {status === "sending" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
