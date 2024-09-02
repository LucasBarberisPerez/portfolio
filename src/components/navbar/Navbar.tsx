import { useTranslation } from "react-i18next";
import NavbarListItem from "./NavbarListItem";
import {useEffect, useState } from "react";
import _debounce from "lodash.debounce";
import NavbarBrand from "./NavbarBrand";

export function Navbar() {
  const { t } = useTranslation("global");
  const navigationLinks = t("navlinks", { returnObjects: true });
  const [active, setActive] = useState<string>("about");
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) {
        return setActive(section.id);
      }
    });
  };

  useEffect(() => {
    const delayScrollEvent = _debounce(handleScroll, 250);
    window.addEventListener("scroll", delayScrollEvent);
    return () => {
      window.removeEventListener("scroll", delayScrollEvent);
    };
  }, []);

  return (
    <nav className="w-full  grid grid-flow-col items-center  py-2 md:px-12">
      <NavbarBrand/>
      <ul className="inline-flex justify-evenly">
        {Object.values(navigationLinks).map((link: any, i) => {
          const navigationHref: string = Object.keys(navigationLinks)[i];
          const isActive = navigationHref === active ? true : false;
          return (
            <NavbarListItem
              text={link}
              key={i}
              href={navigationHref}
              isActive={isActive}
            />
          );
        })}
      </ul>
    </nav>
  );
}
