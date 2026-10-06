import { Barlow_Condensed, Inter } from "next/font/google";

export const display = Barlow_Condensed({
  subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display",
});
export const body = Inter({ subsets: ["latin"], variable: "--font-body" });
