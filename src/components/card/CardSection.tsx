interface Props{
    title:string,
    text:string
}

export function CardSection({title,text}:Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}
