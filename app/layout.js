import "./globals.css";
import { display, body } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Balaji Enterprises | Precision Copper Patti, Strip & Busbar - Jaipur",
  description: "High-conductivity copper patti, strips and busbars for transformer, electrical and power industries. Jaipur, Rajasthan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#0A0A0A] font-body text-[#F5F2ED] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
