import { useTranslation } from "react-i18next";

function ProfileInfo() {
  const [t] = useTranslation("global");
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-auto  ">
      <div className="bg-[url('./bg-about.svg')] p-4 rounded-md bg-cover bg-center w-full  flex flex-col justify-center items-center md:w-full bg-black">
        <div className="flex flex-col justify-center items-center w-full md:w-3/4 p-4  overflow-hidden scroll-smooth bg-black bg-opacity-45">
          <img
            src="/me.jpg"
            alt="photo"
            className="w-32 h-32 md:w-52 md:h-52 rounded-full self-center"
          />
          <div className="w-full p-2 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              {t("about.title")}
            </h2>
            <p className="text-red-100 md:text-xl sm:text-sm text-left">
              {t("about.description.intro")}
            </p>
            <p className="text-red-100 md:text-xl sm:text-sm text-left">
              {t("about.description.training")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;
