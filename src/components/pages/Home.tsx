import "../../css/card.css";
import "../../css/technologies.css";

import { CardHeader } from "../card/CardHeader";
import { CardSection } from "../card/CardSection";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="info-card">
        <CardHeader
          urlImage="/me.jpg"
          job="Desarrollador frontend"
          name="Lucas Barberis Pérez"
        />
        <CardSection
          title="Sobre mí"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          voluptates facilis nam fugit error laborum sequi illo excepturi?
          Voluptates veritatis delectus dignissimos magnam dolorem quo
          recusandae similique sed tempora dolore!"
        />
        <CardSection
          title="Experiencia"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          voluptates facilis nam fugit error laborum sequi illo excepturi?
          Voluptates veritatis delectus dignissimos magnam dolorem quo
          recusandae similique sed tempora dolore!"
        />

        <div className="card-section">
          <h3>Tecnologías</h3>
          <div>
            <div className="technology-description">
              <FaHtml5 className="html5" />
              <p>Html5</p>
            </div>
            <div className="technology-description">
              <SiCsswizardry className="css" />
              <p>CSS3</p>
            </div>
            <div className="technology-description">
              <IoLogoJavascript className="javascript" />
              <p>Javascript</p>
            </div>

            <div className="technology-description">
              <SiTypescript className="typescript" />
              <p>Typescript</p>
            </div>
          </div>
        </div>
        <div className="card-section">
          <h3>Frameworks</h3>
          <div>
            <div className="technology-description">
              <FaReact className="react"/>
              <p>React</p>
            </div>
            <div className="technology-description">
              <TbBrandNextjs />
              <p>NextJs</p>
            </div>
            <div className="technology-description">
              <SiTailwindcss className="tailwind" />
              <p>Tailwind CSS</p>
            </div>
            <div className="technology-description">
              <FaBootstrap className="boostrap" />
              <p>Bootstrap</p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
