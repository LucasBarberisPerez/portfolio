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
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t] = useTranslation("global");

  return (
    <>
      <section className="info-card">
        <CardHeader
          urlImage="/me.jpg"
          job={t("job")}
          name="Lucas Barberis Pérez"
        />
        <CardSection title={t("about.title")} text={t("about.description")} />
        <CardSection
          title={t("experience.title")}
          text={t("experience.description")}
        />

        <div className="card-section">
          <h3>{t("technology.title")}</h3>
          <div className="technology-container">
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
          <div className="technology-container">
            <div className="technology-description">
              <FaReact className="react" />
              <p>React</p>
            </div>
            <div className="technology-description">
              <TbBrandNextjs />
              <p>NextJs</p>
            </div>
            <div className="technology-description">
              <SiTailwindcss className="tailwind" />
              <p>Tailwind</p>
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
