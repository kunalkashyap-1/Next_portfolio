import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Kashyap",
  description: `Welcome to kunal kashyap's Portfolio - Aspiring Web Developer"
  Embark on a journey through the captivating world of web development with me. Explore a diverse range of projects that showcase my creativity and dedication to mastering the art of web development. `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
