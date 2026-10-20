import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TMRW — House of Brands",
  description: "Independent fashion identities. One evolving culture.",
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
