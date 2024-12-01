import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const LinkCSS =
    "p-2 hover:bg-formal-grey dark:hover:bg-darkmode-active transition-colors duration-100 rounded-sm";

  return (
    <header className="flex items-center justify-between">
      <Logo />
      <nav className="text-sm font-mono flex items-center gap-2">
        <DarkModeToggle />
        <div className="flex gap-5">
          <Link href="/about" className={LinkCSS}>
            About
          </Link>
          <a
            className={`${LinkCSS} flex gap-2 items-center`}
            href="https://www.linkedin.com/in/vadim-mitko-b021772a1/"
            target="_blank"
          >
            <LinkedInLogo />
            Follow
          </a>
        </div>
      </nav>
    </header>
  );
}

const LinkedInLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill="#000"
      fillOpacity=".85"
      fillRule="evenodd"
      d="M1.547 13.517h10.829c.854 0 1.547-.672 1.547-1.502V1.502C13.923.672 13.23 0 12.376 0H1.547C.693 0 0 .672 0 1.502v10.513c0 .83.693 1.502 1.547 1.502Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.99 11.64H9.922V8.223c0-.936-.366-1.46-1.13-1.46-.83 0-1.265.545-1.265 1.46v3.417h-1.99V5.132h1.991v.876s.599-1.075 2.021-1.075 2.44.843 2.44 2.586v4.12ZM3.161 4.28a1.215 1.215 0 0 1-1.228-1.202c0-.663.55-1.2 1.228-1.2.678 0 1.227.537 1.227 1.2 0 .664-.55 1.201-1.227 1.201Zm-1.029 7.36H4.21V5.132H2.133v6.508Z"
      clipRule="evenodd"
    />
  </svg>
);
