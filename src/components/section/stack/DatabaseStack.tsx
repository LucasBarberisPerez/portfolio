import TechIcon from "../../icon/TechIcon";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiOracle } from "react-icons/si";
export default function DatabaseStack() {
  return (
    <div className="p-4 bg-gray-950 rounded-xl">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-3">Database</h2>

      <div className="flex flex-col justify-around items-center">
        <div className="w-full grid grid-cols-2 p-2 rounded-xl">
          <TechIcon
            name="Mongodb"
            icon={<SiMongodb />}
            iconClassName="text-green-600"
          />
          <TechIcon
            name="Mysql"
            icon={<GrMysql />}
            iconClassName="text-blue-400"
          />
          <TechIcon
            name="Oracle"
            icon={<SiOracle />}
            iconClassName="text-red-400"
          />
        </div>
      </div>
    </div>
  );
}
