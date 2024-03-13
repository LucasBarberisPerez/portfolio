interface Props {
  name: string;
  iconClassName: string;
  icon: React.ReactNode;
  mainSkill?: boolean;
  learning?: boolean;
}
export default function TechIcon({
  name,
  icon,
  iconClassName,
  mainSkill,
  learning,
}: Props) {
  //Main skill -- green -- yellow learning -- nothing 
  return (
    <div className="flex flex-col gap-2 justify-center items-center  p-4 lowercase text-center ">
      <div className={iconClassName + " text-5xl"}>{icon}</div>
      <p
        className={`text-md ${checkSkill(mainSkill, learning)} rounded-md px-2`}
      >
        {name}
      </p>
    </div>
  );
}

function checkSkill(mainSkill?: boolean, learning?: boolean) {
  if (mainSkill) {
    return "bg-green-600";
  }

  if (learning) {
    return "bg-yellow-600";
  }

  return "";
}
