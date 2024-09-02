import Title from "./common/Title";
import photo from "../pictures/Lucas.png";
import Github from "./common/social/Github";
import { Linkedin } from "./common/social/Linkedin";
import Mail from "./common/social/Mail";
import { CiLocationOn } from "react-icons/ci";
import Section from "./common/Section";

export function About() {
  return (
    <Section id="about">
      <Title text={"Sobre mí"} style="place-self-start" />
      <div className="w-full  flex flex-col sm:flex-row p-2 justify-center items-center gap-2 md:gap-6">
        <img
          src={photo}
          alt="Foto de lucas"
          className=" sm:place-self-start rounded-full w-24 h-24 sm:w-40 sm:h-40 object-scale-down border-2 border-black"
        />
        <div className="flex flex-col justify-center items-center text-center md:text-start">
          <h2 className="lg:text-2xl md:text-xl text-lg font-extrabold w-full">
            Lucas Barberis Pérez
          </h2>
          <h3 className="lg:text-xl md:text-lg text-md w-full">Desarrollador de software</h3>
          <div className="flex justify-start items-center w-full gap-1">
            <CiLocationOn />
            <p className="text-pretty text-sm"> Madrid - Fuenlabrada, España</p>
          </div>
        </div>
      </div>
      <p className="px-2 text-sm sm:text-base text-pretty w-full text-center ">
        Experiencia en <strong>Java y Javascript</strong> y especializado en
        <strong> React</strong>.
      </p>
      <div className="w-full flex justify-center items-center gap-4 lg:gap-0 lg:justify-evenly">
        <Linkedin />
        <Github />
        <Mail />
      </div>
    </Section>
  );
}
