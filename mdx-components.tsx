import type { MDXComponents } from "mdx/types";
import Li from "@/app/(components)/Li";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    li: ({ children }) => <Li>{children}</Li>,
    ...components,
  };
}
