import { CiLocationOn } from "react-icons/ci";
import { PiBagFill } from "react-icons/pi";
interface Props{
  jobStatus:string;
  location:string;
}

export function IntroTags({jobStatus, location}:Props) {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2 lg:text-xl">
      <span className="bg-green-600 px-2 rounded-full flex justify-center items-center"><PiBagFill/> {jobStatus}</span>
      <span className="bg-blue-500 px-2 rounded-full flex justify-center items-center"><CiLocationOn />{location}</span>
    </div>
  );
}
