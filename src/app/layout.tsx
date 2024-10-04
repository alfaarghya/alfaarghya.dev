import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alfaarghya.dev",
  description: "A Personal Portfolio 🚀 ~ Arghya Das",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A0A] h-full p-2`}>
        {children}
      </body>
    </html>
  );
}
