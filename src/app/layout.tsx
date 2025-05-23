import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anushervon Salimov - Software Engineer",
  description:
    "I've been working on Software development for 6 years straight. Get in touch with me to know more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
