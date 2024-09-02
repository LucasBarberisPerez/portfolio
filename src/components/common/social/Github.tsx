import { URL_GITHUB } from "../../../lib/constants/Socials";
import { FaGithub } from "react-icons/fa";
import { Link } from "./Link";
function Github() {
  return (
    <Link href={URL_GITHUB}>
      <FaGithub className="md:text-5xl text-2xl" />
      <span className="font-bold">Github</span>
    </Link>
  );
}

export default Github;
