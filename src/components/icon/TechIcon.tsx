interface Props {
  name: string;
  iconClassName: string;
  icon: React.ReactNode;
}
export default function TechIcon({ name, icon, iconClassName }: Props) {
  return (
    <div className="flex flex-col justify-center items-center  p-4 lowercase text-center">
      <div className={iconClassName + " text-5xl"}>{icon}</div>
      <p className="text-md">{name}</p>
    </div>
  );
}
