import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const editorialFont = Cormorant_Garamond({
  variable: "--font-editorial",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const interfaceFont = DM_Sans({
  variable: "--font-interface",
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nastel — Made to Measure in Accra",
  description:
    "Elegance and Style by Nastel. Custom African fashion for women and men, made in Accra, Ghana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${editorialFont.variable} ${interfaceFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
