import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}
function Button({children, handleClick}:ButtonProps) {
  return (
    <button className=" min-w-24 flex flex-col justify-center items-center hover:scale-105 hover:bg-slate-200  transition-all py-2" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
