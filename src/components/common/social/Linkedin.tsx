import { FaLinkedin } from "react-icons/fa";
import { URL_LINKEDIN } from "../../../lib/constants/Socials";
import { Link } from "./Link";


export function Linkedin() {
  return (
    <Link href={URL_LINKEDIN}>
      <FaLinkedin className="md:text-5xl text-2xl" />
      <span className="font-bold">Linkedin</span>
    </Link>
  );
}
