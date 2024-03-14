import LegendStack from "./LegendStack";
interface Props {
  title: string;
  description: string;
  legend: { title: string; learning: string; mainskill: string };
}
function ProfileStack({ title, description, legend }: Props) {
  console.log(legend.mainskill)
  return (
    <div className="bg-gray-950 rounded-xl grid  grid-cols-1 sm:grid-cols-2 sm:col-span-2 justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold  text-center">{title}</h2>
        <p className="text-md text-center">{description}</p>
      </div>
      <LegendStack
        title={legend.title}
        learning={legend.learning}
        mainSkill={legend.mainskill}
      />
    </div>
  );
}

export default ProfileStack;
