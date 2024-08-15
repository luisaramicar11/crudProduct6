import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderComponent from "./components/Header";

import "./globals.css"
import { Footer } from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <HeaderComponent/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  );
}