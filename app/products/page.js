// import PageHero from "../../components/PageHero";
// import ProductCard from "../../components/ProductCard";
// import { products } from "../../lib/siteData";

// export const metadata = { title: "Products" };

// export default function Products() {
//   return (
//     <main>
//       <PageHero title="Products" text="Sizes are ranges. If you need a size that is not listed, send it to us and we will quote." />
//       <section className="bg-paper">
//         <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => <ProductCard key={p.slug} p={p} />)}
//         </div>
//       </section>
//     </main>
//   );
// }
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import { FinalCta } from "@/components/FactoryCta";

export const metadata = { title: "Products | Balaji Enterprises" };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products" text="Copper patti, strips and busbars for electrical and transformer use." />
      <Products />
      <FinalCta />
    </>
  );
}
