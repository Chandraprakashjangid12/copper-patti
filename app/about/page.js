import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import { Process, Quality } from "@/components/Process";
import { FinalCta } from "@/components/FactoryCta";

export const metadata = {
  title: "About | Balaji Enterprises",
  description: "Balaji Enterprises supplies precision copper patti, strips and busbars from Jaipur, built on consistent quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" text="Precision copper manufacturing from Jaipur, built on consistent quality." />
      <About />
      <WhyUs />
      <Process />
      <Quality />
      <FinalCta />
    </>
  );
}
