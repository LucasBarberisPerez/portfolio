import { useEffect, useState } from "react";

type UseNavigationType = [string | undefined, (newValue: string) => void];

export const useNavigation: () => UseNavigationType = () => {

  const [activeSection, setActiveSection] = useState<string | undefined>("Sobre mí");
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector("header")
    console.log(element)
  }, [window.scroll]);

  return [activeSection, setActiveSection];
};
