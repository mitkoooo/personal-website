"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  const logoCSS =
    "select-none text-xl md:text-2xl  font-bold text-nowrap h-18 p-2 text-center";

  return pathname === "/" ? (
    <span className={logoCSS}>Vadim Mitko</span>
  ) : (
    <Link
      href="/"
      className={`${logoCSS} rounded-sm transition-[background-color] hover:bg-formal-grey dark:hover:bg-darkmode-active`}
    >
      Vadim Mitko
    </Link>
  );
}
