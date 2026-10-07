import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import { Process, Quality } from "@/components/Process";
import { Factory, FinalCta } from "@/components/FactoryCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Industries />
      <Process />
      <Quality />
      <Factory />
      <FinalCta />
    </>
  );
}