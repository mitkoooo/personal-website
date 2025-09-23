import MdxLayout from "@/app/(components)/mdx-layout";
import StockExchangeSim from "@/app/markdown/stock-exchange-sim.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadim Mitko | Stock exchange sim",
};

export default function Project() {
  return (
    <MdxLayout>
      <StockExchangeSim />
    </MdxLayout>
  );
}
