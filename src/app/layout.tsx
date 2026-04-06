import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Business Demo Template",
  description: "Reusable one-page template for local business website demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}