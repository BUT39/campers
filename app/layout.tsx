import Header from "@/components/Header/Header";
import { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import TanStackQueryProvider from "@/components/TanStackQueryProvider/TanStackQueryProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-family",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--second-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campers of your dreams",
  description: "You can find everything you want in our catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <TanStackQueryProvider>{children}</TanStackQueryProvider>
      </body>
    </html>
  );
}
