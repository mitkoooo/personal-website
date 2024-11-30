"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  const logoCSS = "select-none text-xl font-bold p-2 text-nowrap";

  return pathname === "/" ? (
    <span className={logoCSS}>Vadim Mitko</span>
  ) : (
    <Link
      href="/"
      className={`${logoCSS} hover:bg-formal-grey transition-colors duration-100 rounded-sm`}
    >
      Vadim Mitko
    </Link>
  );
}
