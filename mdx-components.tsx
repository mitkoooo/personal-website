import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ul: ({ children }) => (
      <ul className="my-5 list-inside list-none">{children}</ul>
    ),
    ...components,
  };
}
