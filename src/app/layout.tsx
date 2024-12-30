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
      lang="en"
      className={`${roboto.className} ${robotoMono.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="mx-auto mt-3 max-w-[90%] bg-white text-black text-opacity-85 lg:max-w-[800px] dark:bg-darkmode-dark dark:text-formal-grey">
        <main className="mb-24 min-h-screen">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
