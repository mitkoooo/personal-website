import About from "@/app/markdown/about.mdx";
import MdxLayout from "../(components)/mdx-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | About",
};

export default function AboutPage() {
  return (
    <MdxLayout>
      <About />
    </MdxLayout>
  );
}
