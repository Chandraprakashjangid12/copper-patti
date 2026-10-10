import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import { FinalCta } from "@/components/FactoryCta";

export const metadata = {
  title: "Products | Balaji Enterprises",
  description: "Copper patti, copper strips and copper busbars for electrical and transformer use. Custom sizes available.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products" text="Copper patti, strips and busbars for electrical and transformer use." />
      <div className="pt-4">
        <Products heading={false} />
      </div>
      <FinalCta />
    </>
  );
}
