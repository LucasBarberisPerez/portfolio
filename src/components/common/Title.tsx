interface TitleProps {
    text: string; // The 'text' prop is required and must be a string
    style?: string;
  }
function Title({text, style}:TitleProps) {
  return (
    <h1 className={`lg:text-3xl md:text-2xl text-xl font-bold ${style ? style : ''}`}>{text}</h1>
  )
}

export default Title
