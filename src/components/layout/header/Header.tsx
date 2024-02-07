import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import Constants from "../../../lib/Constants";

export default function Header() {
  return (
    <header>
      <div className="header-banner">
        <img className="profile-pic" src="/lks-logo.svg" alt="ProfilePic" />
        <h1>Lucasbp</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href={Constants.URL_GITHUB}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={Constants.URL_LINKEDIN}>
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href={Constants.URL_MAIL}>
              <IoMailOutline />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
