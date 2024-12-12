"use client";

import About from "@/app/markdown/about.mdx";

export default function AboutPage() {
  return (
    <div className="mt-8 px-2 text-base">
      <div className="mb-8">
        <div className="flex flex-col">
          <About />
        </div>
      </div>
    </div>
  );
}
