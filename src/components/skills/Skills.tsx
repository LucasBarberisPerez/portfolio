import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import javaIcon from "../../assets/java-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import SkillDetails from "./SkillDetails";
import Title from "../common/Title";
import Section from "../common/Section";

export default function Skills() {
  return (
    <Section id="skills">
      <Title text={"Habilidades"} style="place-self-start" />
      <div className="grid w-full grid-flow-row sm:grid-cols-2 gap-2">
        <SkillDetails name="Javascript">
          <IoLogoJavascript className="text-5xl fill-yellow-400 bg-black " />
        </SkillDetails>
        <SkillDetails name="Typescript">
          <SiTypescript className="text-5xl fill-blue-600" />
        </SkillDetails>
        <SkillDetails name="Java">
          <img src={javaIcon} alt="java-icon" className="w-12" />
        </SkillDetails>
        <SkillDetails name="Git">
          <img src={gitIcon} alt="git-icon" className="w-12" />
        </SkillDetails>
      </div>
    </Section>
  );
}
