import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare, FaCopy } from "react-icons/fa";
import Socials from "../../../lib/constants/Socials";
import { useState } from "react";

interface Props {
  copyMessage: string;
}
export function IntroSocials({copyMessage}:Props) {
  const [isCopied, setisCopied] = useState<boolean>(false); //Clipboard popup

  const handleMailClick = async () => {
    //Copy the mail in the clipboard and refresh the state for 3seconds
    await navigator.clipboard.writeText(Socials.URL_MAIL);
    setisCopied(true);
    setTimeout(() => {
      setisCopied(false);
    }, 3000);
  };

  return (
    <nav className="w-full flex flex-col items-center justify-center gap-4 sm:gap-4">
      <button
        onClick={handleMailClick}
        className="flex justify-center items-center gap-1 border-2 py-1 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600"
      >
        <span>{Socials.URL_MAIL}</span>
        <FaCopy />

        {isCopied && (
          <div className="fixed bottom-2 bg-green-600 p-6 rounded-xl animation-fade-in">
            {copyMessage}
          </div>
        )}
      </button>
      <div className="w-full flex justify-center  gap-2 sm:gap-6 items-center">
        <a
          href={Socials.URL_LINKEDIN}
          target="_blank"
          className="flex justify-center items-center gap-1 border-2 py-1 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600"
        >
          <FaLinkedin />
          <span>Linkedin</span>
        </a>

        <a
          href={Socials.URL_GITHUB}
          target="_blank"
          className="flex justify-center items-center gap-1 border-2 py-1 rounded-full px-3 transition ease-in-out delay-150 hover:bg-gray-600"
        >
          <span>Github</span>
          <FaGithubSquare />
        </a>
      </div>
    </nav>
  );
}
