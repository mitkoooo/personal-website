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
      <body className="mx-5 mt-3 bg-white text-black text-opacity-85 md:mx-20 lg:mx-40 dark:bg-darkmode-dark dark:text-formal-grey">
        <main className="mb-24 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
