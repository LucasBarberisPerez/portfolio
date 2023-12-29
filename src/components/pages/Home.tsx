import "../../css/custom.css";
import { CardHeader } from "../card/CardHeader";
import { CardSection } from "../card/CardSection";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

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
            <FaHtml5 />
            <SiCsswizardry />
            <IoLogoJavascript />
            <SiTypescript/>
          </div>
          <div>
            <FaReact />
            <TbBrandNextjs />
            
          </div>
        </div>
      </section>
    </>
  );
}
