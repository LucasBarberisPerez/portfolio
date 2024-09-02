interface LinkProps {
  href?: string;
  children: React.ReactNode;
}
export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className=" min-w-24 flex flex-col justify-center items-center hover:scale-110 hover:bg-slate-200 transition-all py-2"
    >
      {children}
    </a>
  );
}
