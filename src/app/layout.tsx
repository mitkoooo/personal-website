import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vadim Mitko",
  description: "I am a software engineer based in York, UK. ",
  metadataBase: new URL("https://vadimmitko.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${robotoMono.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="mt-6 mx-5 mb-24 bg-white text-opacity-85 text-black dark:bg-darkmode-dark dark:text-formal-grey min-h-screen">
        <Header />
        {children}
      </body>

      <Footer />
    </html>
  );
}
