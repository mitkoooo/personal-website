import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const LinkCSS =
    "p-1 hover:bg-formal-grey dark:hover:bg-darkmode-active rounded-sm h-9 text-center select-none transition-[background-color]";

  return (
    <header className="flex items-center justify-between h-14">
      <Logo />
      <nav className="text-sm font-mono flex items-center gap-2 h-full">
        <DarkModeToggle />
        <div className="flex gap-5">
          <Link href="/about" className={`${LinkCSS} flex items-center`}>
            About
          </Link>
          <a
            className={`${LinkCSS} flex gap-2 items-center `}
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
    className="fill-current bg-black bg-opacity-85 text-white dark:text-black dark:bg-formal-grey rounded-sm"
  >
    <path
      transform="translate(1.5, 1.5)"
      fillRule="evenodd"
      d="M10.385 9.881H8.319V6.465c0-.937-.367-1.46-1.13-1.46-.831 0-1.265.544-1.265 1.46V9.88H3.933V3.373h1.99v.877s.6-1.076 2.022-1.076c1.422 0 2.44.843 2.44 2.587v4.12Zm-8.828-7.36C.88 2.52.33 1.983.33 1.32S.88.119 1.557.119c.678 0 1.228.538 1.228 1.2 0 .664-.55 1.202-1.228 1.202ZM.53 9.88h2.076V3.373H.53V9.88Z"
      clipRule="evenodd"
    />
  </svg>
);
