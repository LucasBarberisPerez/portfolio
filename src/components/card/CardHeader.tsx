interface Props {
  urlImage: string;
  name: string;
  job: string;
}
export function CardHeader({urlImage, name, job} : Props) {
  return (
    <div className="intro">
      <img src={urlImage} alt="img" />
      <div>
        <h1>{name}</h1>
        <h2>{job}</h2>
      </div>
    </div>
  );
}
