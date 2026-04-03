import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IMPACT SPHERE - Turning Purpose into Measurable Impact",
  description:
    "Connect funding companies with impactful projects. We bridge the gap between capital and meaningful change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      {/* <head> */}
      {/*   <link */}
      {/*     rel="icon" */}
      {/*     href="/icon?<generated>" */}
      {/*     type="image/<generated>" */}
      {/*     sizes="<generated>" */}
      {/*   /> */}
      {/* </head> */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
