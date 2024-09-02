import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SkillDetailsProps {
  children?: ReactNode;
  name: string;
  desc?: string[];
}

export default function SkillDetails({ children, name }: SkillDetailsProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="w-full "
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="w-full flex justify-between items-center  bg-slate-100 p-2">
        <div className="flex justify-center items-center gap-4">
          {children}
          <h2 className="lg:text-lg md:text-base text-md font-extrabold">{name}</h2>
        </div>
        <IoIosArrowDown className={`transition duration-300 text-2xl ${open && "rotate-180"}`} />
      </div>
      <ul
        className={`transition-all ${
          open ? "max-h-[24rem] max-w-full px-4 py-2 gap-2   " : "max-h-0   "
        } overflow-hidden  flex flex-col justify-start items-start list-disc list-inside  `}
      >
        <li>Explotación de APIs</li>
        <li>Diseño responsive</li>
        <li>Manejo del DOM</li>
        <li>Manipulación de eventos</li>
        <li>Promesas y asincronía</li>
        <li>Optimización de rendimiento</li>
      </ul>
    </div>
  );
}
