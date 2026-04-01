import type { Metadata } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "BrightPath Learning | Maths Confidence",
  description: "Maths Support for Vocational Students in Levels 6, 7, and 8.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${poppins.variable} font-sans bg-[#F8FAFC] text-[#25324A]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}