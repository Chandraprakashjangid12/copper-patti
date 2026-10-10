import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hello, I want to know more about your copper products.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-[#D49A5B]/60 bg-[#B87333] px-4 py-3 text-sm font-medium text-[#0A0A0A] shadow-[0_8px_30px_rgba(184,115,51,0.35)] transition hover:bg-[#D49A5B]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.5 8.5 0 01-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1121 11.5z" />
        <path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1.2-1.2-1.8-1-.8.6c-.7-.3-1.5-1.1-1.8-1.8l.6-.8-1-1.8L9 9.5z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
