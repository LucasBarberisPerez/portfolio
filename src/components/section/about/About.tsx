function ProfileInfo() {
  //TODO: make a new design for the profile description
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
              Sobre mí
            </h2>
            <p className="text-red-100 md:text-xl sm:text-sm text-left">
              Me llamo lucas, Empecé en el mundo de la programación en 2019,
              previamente fui tecnico en sistemas y actualmente estoy recien
              graduado en desarrollo de aplicaciones web.
            </p>
            <p className="text-red-100 md:text-xl sm:text-sm text-left">
              Durante mi formación he enfocado mi aprendizaje en tecnologías
              frontend, utilizando javascript/typescript como lenguaje de
              programación junto con React y NextJs aunque tambien tengo conocimientos en backend utilizando Java y nodeJs.
            </p>
          </div>
          <div className="hidden">
            <h2 className="text-3xl md:text-5xl font-bold">Experiencia</h2>
            <p className="text-red-100 md:text-xl sm:text-sm text-left">
              Previamente, antes de comenzar los estudios de programación,
              participé en un proyecto privado de un juego online como Game
              Master, realizando cambios en base de datos, modificando la pagina
              web y haciendo pequeños cambios en el propio juego.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;
