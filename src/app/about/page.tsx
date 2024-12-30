"use client";

import About from "@/app/markdown/about.mdx";
import MarkdownWrapper from "../(components)/MarkdownWrapper";

export default function AboutPage() {
  return (
    <MarkdownWrapper>
      <About />
    </MarkdownWrapper>
  );
}
