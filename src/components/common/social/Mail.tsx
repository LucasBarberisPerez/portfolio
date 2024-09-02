import { URL_MAIL } from "../../../lib/constants/Socials";
import { FaCheck } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useEffect, useState } from "react";
import Button from "./Button";

function Mail() {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const handleClick = async () => {
    if (!dialogVisible) {
      try {
        await navigator.clipboard.writeText(URL_MAIL);
        setDialogVisible(true);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (dialogVisible) {
      setTimeout(() => {
        setDialogVisible(false);
      }, 2500);
    }
  }, [dialogVisible]);

  return (
    <>
      <Button handleClick={handleClick}>
        <IoMdMail className="md:text-5xl text-2xl" />
        <span className="font-bold">Email</span>
      </Button>
      <dialog
        className={`${
          dialogVisible
            ? "fixed bottom-10 flex flex-row gap-2 items-center bg-green-500 rounded-lg p-4 font-bold"
            : "hidden"
        }`}
      >
        Copiado en el portapapeles.
        <FaCheck />
      </dialog>
    </>
  );
}

export default Mail;
