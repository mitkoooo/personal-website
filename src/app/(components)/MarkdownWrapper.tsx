type MarkdownWrapperProps = {
  children: React.ReactNode;
}; /* use `interface` if exporting so that consumers can extend */

const MarkdownWrapper = ({
  children,
}: MarkdownWrapperProps): React.JSX.Element => (
  <div className="mt-8 px-2 text-base">{children}</div>
);

export default MarkdownWrapper;
