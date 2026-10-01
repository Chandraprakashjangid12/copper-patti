import { Poppins, Inter } from "next/font/google";

// Same pairing as the Shree Balaji site: Poppins headings + Inter body
export const head = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });
export const body = Inter({ subsets: ["latin"] });
