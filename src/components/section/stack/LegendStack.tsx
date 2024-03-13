function LegendStack() {
  //Refers to the technology i use to work.
  return (
    <div className="flex justify-center items-center py-10 rounded-xl bg-gray-950">
      <div className="flex flex-col  justify-center items-start gap-2 p-4">
        <h2 className="text-3xl md:text-4xl font-bold  text-center">Leyenda</h2>
        <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 bg-green-400 rounded-full"></div>
          <p>Habilidad principal</p>
        </div>
        <div className="flex gap-4 justify-start items-center">
          <div className="w-5 h-5 bg-yellow-300 rounded-full"></div>
          <p>Actualmente aprendiendo</p>
        </div>
      </div>
    </div>
  );
}

export default LegendStack;
