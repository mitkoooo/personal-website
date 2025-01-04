import MdxLayout from "@/app/(components)/mdx-layout";
import PersonalWebsite from "@/app/markdown/personal-website.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | Personal website",
};

export default function Project() {
  return (
    <MdxLayout>
      <PersonalWebsite />
    </MdxLayout>
  );
}
