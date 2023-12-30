import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className="header-banner">
        <img
          className="profile-pic"
          src="/lks-logo.svg"
          alt="ProfilePic"
        />
        <h1>Luksdanvip</h1>
      </div>
      <nav>
        <ul>
          <li><a href="https://github.com/Luksdanvip-OG"><FaGithub/></a></li>
          <li><a href=""><BsLinkedin/></a></li>
          <li><a href="mailto:lucasbarberisperez@gmail.com"><IoMailOutline/></a></li>
        </ul>
      </nav>
    </header>
  );
}
