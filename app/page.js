import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import { Process,  } from "@/components/Process";
import { Factory,  } from "@/components/Factorycta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Industries />
      <Process />
      {/* <Quality /> */}
      {/* <FinalCta /> */}
    </>
  );
}
