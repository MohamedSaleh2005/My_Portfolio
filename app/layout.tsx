import type { Metadata } from "next";

import "./globals.css";
import { Montserrat } from "next/font/google";

const roboto = Montserrat ({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-Montserrat",
});


export const metadata: Metadata = {
  title: "Saleh-Portfolio",
  description: "My Portfolio app",
  icons:{
    icon: "images.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body  className={roboto.variable} >


        {children}


      </body>
    </html>
  );
}
