import BackendStack from "./BackendStack";
import DatabaseStack from "./DatabaseStack";
import FrontendStack from "./FrontendStack";
import { VscCircuitBoard } from "react-icons/vsc";

export default function StackInfo() {
  return (
    <div className="flex flex-col p-6 rounded-md gap-2 w-full md:w-3/4  bg-gradient-to-tr to-gray-800 from-slate-950">
      <div className="flex gap-4  font-extrabold">
        <h1 className="text-3xl sm:text-5xl">Stack</h1>
        <VscCircuitBoard className="bg-gray-700 p-2 rounded-full"/>
      </div>
      <p className="text-md">
        Perfil orientado al desarrollo frontend, con conocimientos
        adicionales en las areas de backend y base de datos.
      </p>
      <div className="grid grid-flow-row xs:grid-cols-2  gap-2">
        <FrontendStack />
        <BackendStack />
        <DatabaseStack />
      </div>
    </div>
  );
}
