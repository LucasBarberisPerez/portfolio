import BackendStack from "./BackendStack";
import DatabaseStack from "./DatabaseStack";
import FrontendStack from "./FrontendStack";
import ProfileStack from "./ProfileStack";
function BentoStack() {
  return (
    <div className="w-full lg:w-5/6 grid grid-flow-row xs:grid-cols-2  gap-2">
      <ProfileStack />
      <FrontendStack />
      <BackendStack />
      <DatabaseStack />
    </div>
  );
}

export default BentoStack;
