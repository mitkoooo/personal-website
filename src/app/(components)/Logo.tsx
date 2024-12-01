"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  const logoCSS =
    "select-none text-xl font-bold text-nowrap h-9 p-1 text-center";

  return pathname === "/" ? (
    <span className={logoCSS}>Vadim Mitko</span>
  ) : (
    <Link
      href="/"
      className={`${logoCSS} hover:bg-formal-grey dark:hover:bg-darkmode-active rounded-sm transition-[background-color]`}
    >
      Vadim Mitko
    </Link>
  );
}
