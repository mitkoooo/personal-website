import MdxLayout from "@/app/(components)/mdx-layout";
import ComponentMarket from "@/app/markdown/component-market.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | Component-market",
};

export default function Project() {
  return (
    <MdxLayout>
      <ComponentMarket />
    </MdxLayout>
  );
}
