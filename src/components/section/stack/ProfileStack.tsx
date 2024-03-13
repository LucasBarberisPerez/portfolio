import LegendStack from "./LegendStack";

function ProfileStack() {
  return (
    <div className="bg-gray-950 rounded-xl grid  grid-cols-1 sm:grid-cols-2 sm:col-span-2 justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold  text-center">Perfil</h2>
        <p className="text-md text-center">
          Perfil especializado al desarrollo frontend, con conocimientos en
          backend y base de datos.
        </p>
      </div>
      <LegendStack/>
    </div>
  );
}

export default ProfileStack;
