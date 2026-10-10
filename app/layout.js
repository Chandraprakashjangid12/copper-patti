import "./globals.css";
import { display, body } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Balaji Enterprises | Precision Copper Patti, Strip & Busbar - Jaipur",
  description:
    "High-conductivity copper patti, strips and busbars for transformer, electrical and power industries. Jaipur, Rajasthan.",
  openGraph: {
    title: "Balaji Enterprises | Copper Patti, Strip & Busbar",
    description:
      "Precision copper patti, strips and busbars for transformer, electrical and power industries. Jaipur, Rajasthan.",
    type: "website",
    locale: "en_IN",
    siteName: "Balaji Enterprises",
  },
};

export const viewport = { themeColor: "#0A0A0A" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#0A0A0A] font-body text-[#F5F2ED] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
