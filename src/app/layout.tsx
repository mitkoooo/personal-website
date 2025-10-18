import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  description: "I am a software engineer based in York, UK.",
  metadataBase: new URL("https://vadimmitko.vercel.app"),
  openGraph: {
    siteName: "Vadim Mitko's personal website",
    title: "Vadim Mitko's personal website",
    description: "I am a software engineer based in York, UK.",
    url: new URL("https://vadimmitko.vercel.app"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressContentEditableWarning
      lang="en"
      className={`${roboto.className} ${robotoMono.className} overflow-y-scroll antialiased`}
    >
      <Analytics />
      <body className="mx-auto flex min-h-[100dvh] max-w-[90%] flex-col bg-white text-black text-opacity-85 md:max-w-[700px] dark:bg-darkmode-dark dark:text-formal-grey">
        <main>
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
