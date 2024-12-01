export default function Footer() {
  return (
    <footer className="font-mono tracking-wider flex justify-between items-center mb-3 p-2 text-xs text-black dark:text-formal-grey">
      <span>
        Vadim Mitko (
        <a
          href="mailto: vadim@mitko.me"
          className="border-b border-formal-grey dark:border-darkmode-active"
        >
          vadim@mitko.me
        </a>
        )
      </span>
      <a
        href="https://github.com/mitkoooo/personal-website"
        target="_blank"
        className="border-b border-formal-grey dark:border-darkmode-active"
      >
        Source
      </a>
    </footer>
  );
}
