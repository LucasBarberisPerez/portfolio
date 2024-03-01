import TechIcon from "../../icon/TechIcon";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";
import { SiAstro } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export default function FrontendStack() {
  return (
    <div className="p-4 sm:col-span-2 shadow-inner rounded-md flex flex-col gap-2 bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Frontend</h2>

      <div className="flex flex-col sm:flex-row justify-center items-start">
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 p-2 rounded-xl">
          <div className="col-span-3 sm:col-span-2 text-center border-2 ">
            <h3 className="text-xl md:text-2xl">Tecnologías</h3>
          </div>
          <TechIcon
            name={"HTML5"}
            icon={<FaHtml5 />}
            iconClassName="text-orange-400"
          />
          <TechIcon
            name={"CSS"}
            icon={<FaCss3Alt />}
            iconClassName="text-blue-400"
          />
          <TechIcon
            name={"Javascript"}
            icon={<IoLogoJavascript />}
            iconClassName="text-yellow-200"
          />

          <TechIcon
            name={"Typescript"}
            icon={<BiLogoTypescript />}
            iconClassName="text-blue-600"
          />
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 p-2 rounded-xl">
          <div className="col-span-3 sm:col-span-2 text-center border-2">
            <h3 className="text-xl md:text-2xl">Frameworks</h3>
          </div>
          <TechIcon
            name={"React"}
            icon={<FaReact />}
            iconClassName="text-blue-300"
          />
          <TechIcon
            name={"NextJs"}
            icon={<TbBrandNextjs />}
            iconClassName="text-white"
          />
          <TechIcon
            name={"Astro"}
            icon={<SiAstro />}
            iconClassName="text-orange-400"
          />
          <TechIcon
            name={"Svelte"}
            icon={<SiSvelte />}
            iconClassName="text-orange-600"
          />
          <TechIcon
            name={"Tailwind"}
            icon={<SiTailwindcss />}
            iconClassName="text-blue-400"
          />
          <TechIcon
            name={"BootStrap"}
            icon={<FaBootstrap />}
            iconClassName="text-purple-600"
          />
          <TechIcon
            name={"Sass"}
            icon={<FaSass />}
            iconClassName="text-pink-600"
          />
        </div>
      </div>
    </div>
  );
}
