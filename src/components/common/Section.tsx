import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
}
export default function Section({ children, id }: SectionProps) {
  return (
    <section
      className="flex flex-col w-full mt-4 p-4 md:w-3/4 lg:w-2/4  justify-center items-center gap-2 md:gap-6" id={id}>
      {children}
    </section>
  );
}