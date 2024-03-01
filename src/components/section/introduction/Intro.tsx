import { IntroSocials } from "./IntroSocials";
import { IntroTags } from "./IntroTags";

export function Intro() {
  return (
    <div className="w-full flex flex-col justify-center items-center  p-6 rounded-md gap-4 md:w-3/4 bg-gradient-to-br to-gray-800 from-slate-950 ">
      <div className=" flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center ">
        <img
          src="./me.jpg"
          alt="logo"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full"
        />
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Software Developer</h1>
          <h2 className="text-2xl md:text-3xl">Lucas Barberis Pérez</h2>
        </div>
      </div>
      <IntroTags />
      <p className="text-center">Graduado en desarrollo de aplicaciones web</p>
      <IntroSocials />
    </div>
  );
}
