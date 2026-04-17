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
  description: "My Portfolio app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth scrollbar-hide">
<body className={roboto.className}>

        {children}


      </body>
    </html>
  );
}
