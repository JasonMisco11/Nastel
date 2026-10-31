import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nastel — Made to Measure in Accra",
  description:
    "Thoughtfully made custom clothing for women and men. Book a fitting with Nastel in Accra, Ghana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
