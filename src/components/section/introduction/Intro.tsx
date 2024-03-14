
import { useTranslation } from "react-i18next";
import Section from "../../common/Section";
import { IntroSocials } from "./IntroSocials";
import { IntroTags } from "./IntroTags";

export function Intro() {
  const [t] = useTranslation("global");
  return (
    <Section>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center">
          <img
            src="./me.jpg"
            alt="logo"
            className="w-28 h-28 md:w-40 md:h-40 rounded-full"
          />
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">
              {t("job")}
            </h1>
            <h2 className="text-2xl lg:text-4xl">Lucas Barberis Pérez</h2>
          </div>
        </div>
        <IntroTags jobStatus={t("jobStatus")} location={t("about.location")} />
        <p className="text-center  lg:text-xl">
          {t("degree")}
        </p>
        <IntroSocials copyMessage={t("copiedMail")} errorMessage={t("errorcopy")}/>
      </div>
    </Section>
  );
}
