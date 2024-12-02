export default function Footer() {
  return (
    <footer className="mb-3 flex items-center justify-between p-2 font-mono text-xs tracking-wider text-black dark:text-formal-grey">
      <span>
        Vadim Mitko (
        <a
          href="mailto: vadim@mitko.me"
          className="border-b border-formal-grey transition-[border-color] hover:border-darkmode-active dark:border-darkmode-active dark:hover:border-formal-grey"
        >
          vadim@mitko.me
        </a>
        )
      </span>
      <a
        href="https://github.com/mitkoooo/personal-website"
        target="_blank"
        className="border-b border-formal-grey border-opacity-10 transition-[border-color] hover:border-darkmode-active dark:border-darkmode-active dark:hover:border-formal-grey"
      >
        Source
      </a>
    </footer>
  );
}
