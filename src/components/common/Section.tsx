
interface Props{
    children: React.ReactNode;
}
function Section({children}:Props) {
  return (
    <div className="flex flex-col justify-center items-center rounded-md gap-2 w-full md:w-3/4  bg-gradient-to-t to-gray-800 from-slate-950">
      {children}
    </div>
  )
}

export default Section
