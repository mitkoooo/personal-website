export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="mb-6 mt-6 px-2 text-base">{children}</div>;
}
