import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: "Bethesda Salt Cave",
  description: "Luxury Spa & Salt Cave Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${marcellus.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
