import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/siteData";
import { head } from "../../lib/fonts";

export const metadata = { title: "Contact Us" };

export default async function Contact({ searchParams }) {
  const { product = "" } = await searchParams;
  return (
    <main>
      <PageHero title="Contact us" text="Tell us what you need and we will get back to you the same day." />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm product={product} />
          <div>
            <dl className="space-y-5 rounded-lg bg-charcoal p-7 text-paper">
              <div><dt className="text-sm text-copper-light">Address</dt><dd className="mt-1">{site.address}</dd></div>
              <div><dt className="text-sm text-copper-light">Phone and WhatsApp</dt><dd className="mt-1"><a href={site.phoneHref} className="hover:text-copper-light">{site.phone}</a></dd></div>
              <div><dt className="text-sm text-copper-light">Email</dt><dd className="mt-1"><a href={`mailto:${site.email}`} className="break-all hover:text-copper-light">{site.email}</a></dd></div>
            </dl>
            <iframe title="Map" loading="lazy" className="mt-6 h-64 w-full rounded-lg border-0"
              src="https://www.google.com/maps?q=Industrial+Area+Jaipur+Rajasthan&output=embed" />
          </div>
        </div>
      </section>
    </main>
  );
}
