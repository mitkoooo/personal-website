import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const LinkCSS =
    "p-2 hover:bg-formal-grey dark:hover:bg-darkmode-active rounded-sm h-18 text-center select-none transition-[background-color]";

  return (
    <header className="mt-3 flex h-14 items-center justify-between">
      <Logo />
      <nav className="flex h-full items-center gap-2 font-mono text-sm md:gap-7">
        <ThemeToggle />
        <div className="flex gap-5 md:gap-10">
          <Link href="/about" className={`${LinkCSS} flex items-center`}>
            About
          </Link>
          <a
            className={`${LinkCSS} flex items-center gap-2`}
            href="https://www.linkedin.com/in/vadim-mitko-b021772a1/"
            target="_blank"
          >
            <LinkedInLogo />
            Follow
            <span className="hidden md:block">me</span>
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
    className="rounded-sm bg-black bg-opacity-85 fill-current text-white dark:bg-formal-grey dark:text-black"
  >
    <path
      transform="translate(1.5, 1.5)"
      fillRule="evenodd"
      d="M10.385 9.881H8.319V6.465c0-.937-.367-1.46-1.13-1.46-.831 0-1.265.544-1.265 1.46V9.88H3.933V3.373h1.99v.877s.6-1.076 2.022-1.076c1.422 0 2.44.843 2.44 2.587v4.12Zm-8.828-7.36C.88 2.52.33 1.983.33 1.32S.88.119 1.557.119c.678 0 1.228.538 1.228 1.2 0 .664-.55 1.202-1.228 1.202ZM.53 9.88h2.076V3.373H.53V9.88Z"
      clipRule="evenodd"
    />
  </svg>
);

// I want more padding on each element. Think about position of elements so it looks good and is in accordance with the interface but with more padding
// Again, go back to Figma and redact your design
