import TechIcon from "../../icon/TechIcon";
import { FaJava } from "react-icons/fa6";
import { SiVisualbasic } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
export default function BackendStack() {
  return (
    <div className="p-4 bg-gray-950 rounded-xl">
      <h2 className="text-3xl md:text-4xl text-center  font-bold mb-3">Backend</h2>

      <div className="flex flex-col justify-around items-center">
        <div className="w-full grid grid-cols-2 p-2 rounded-xl">
          <TechIcon
            name="Java"
            icon={<FaJava />}
            iconClassName="text-red-600"
          />
          <TechIcon
            name="Visual Basic"
            icon={<SiVisualbasic />}
            iconClassName="text-purple-400"
          />
          <TechIcon
            name="Nodejs"
            icon={<FaNodeJs />}
            iconClassName="text-green-400"
          />
        </div>
      </div>
    </div>
  );
}
