// import PageHero from "../../components/PageHero";
// import { site } from "../../lib/siteData";
// import { about, stats, whyUs, industryList } from "../../lib/content";
// import { head } from "../../lib/fonts";

// export const metadata = { title: "About Us" };

// export default function About() {
//   return (
//     <main>
//       <PageHero title="About us" text={`Supplying copper products from Jaipur for over ${site.years} years.`} />
//       <section className="bg-paper">
//         <div className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-ink/80">
//           {about.text.map((t, i) => <p key={t} className={i ? "mt-5" : ""}>{t}</p>)}
//         </div>
//       </section>
//       <section className="bg-charcoal text-paper">
//         <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
//           {stats.map((s) => (
//             <div key={s.l} className="border-l-2 border-copper pl-5">
//               <p className={`${head.className} text-4xl font-bold text-copper-light`}>{s.n}</p>
//               <p className="mt-1 text-sm text-sand/80">{s.l}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="bg-sand">
//         <div className="mx-auto max-w-6xl px-5 py-16">
//           <h2 className={`${head.className} text-3xl font-bold`}>What you can expect</h2>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {whyUs.map((r) => (
//               <div key={r.title} className="border-t-2 border-copper pt-4">
//                 <h3 className={`${head.className} text-lg font-semibold`}>{r.title}</h3>
//                 <p className="mt-2 text-sm text-ink/70">{r.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="bg-paper">
//         <div className="mx-auto max-w-6xl px-5 py-16">
//           <h2 className={`${head.className} text-3xl font-bold`}>Industries we serve</h2>
//           <ul className="mt-6 flex flex-wrap gap-3">
//             {industryList.map((i) => <li key={i} className="rounded-full border border-copper/50 bg-sand px-5 py-2 text-sm font-medium">{i}</li>)}
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import { Process, Quality } from "@/components/Process";
import { FinalCta } from "@/components/FactoryCta";

export const metadata = { title: "About | Balaji Enterprises" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" text="Precision copper manufacturing from Jaipur, built on consistent quality." />
      <About />
      <Process />
      <Quality />
      <FinalCta />
    </>
  );
}