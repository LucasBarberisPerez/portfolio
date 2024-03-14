import BackendStack from "./BackendStack";
import DatabaseStack from "./DatabaseStack";
import FrontendStack from "./FrontendStack";
import ProfileStack from "./ProfileStack";
interface Props {
  profile: {
    title: string;
    description: string;
  };
  legend: {
    title: string;
    mainskill: string;
    learning: string;
  };

}

function BentoStack({ profile, legend }: Props) {
  console.log(legend)  
  return (
    <div className="w-full lg:w-5/6 grid grid-flow-row xs:grid-cols-2  gap-2">
      <ProfileStack title={profile.title} description={profile.description} legend={legend}/>
      <FrontendStack />
      <BackendStack />
      <DatabaseStack />
    </div>
  );
}

export default BentoStack;
