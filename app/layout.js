import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { body } from "../lib/fonts";

export const metadata = {
  title: { default: "Balaji Enterprises | Copper Winding Strips, Jaipur", template: "%s | Balaji Enterprises" },
  description: "Copper winding strips for transformers and motors: bare, paper covered, cotton covered and enamelled. Supplied from Jaipur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={body.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
