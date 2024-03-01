import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import Socials from "../../../lib/constants/Socials";
export function IntroSocials() {
  return (
    <nav className="w-full flex justify-around sm:justify-center  gap-2 sm:gap-4 items-center">
      <a href={Socials.URL_LINKEDIN} target="_blank" className="flex justify-center items-center gap-1 border-2 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600">
        <FaLinkedin />
        <span>Linkedin</span>
      </a>
      <a
        href={`mailto:${Socials.URL_MAIL}`}
        className="flex justify-center items-center gap-1 border-2 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600"
        target="_blank"
      >
        <MdEmail />
        <span>Correo</span>
      </a>

      <a href={Socials.URL_GITHUB} target="_blank" className="flex justify-center items-center gap-1 border-2 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600">
        <span>Github</span>
        <FaGithubSquare />
      </a>
    </nav>
  );
}
