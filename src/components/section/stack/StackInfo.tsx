import Section from "../../common/Section";

import { VscCircuitBoard } from "react-icons/vsc";

import BentoStack from "./BentoStack";

export default function StackInfo() {
  return (
    <Section>
      <div className="self-start flex flex-col gap-4 items-start justify-center p-2">
        <div className="flex flex-col p-2 gap-4 items-start justify-center">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-3xl sm:text-5xl font-extrabold">Habilidades</h1>
            <VscCircuitBoard className="text-5xl bg-gray-700 p-2 rounded-full" />
          </div>
          
        </div>
      </div>
      <BentoStack />
    </Section>
  );
}
