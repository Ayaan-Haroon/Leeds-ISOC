import GetInvolved from "./GetInvolved";
import GetInvolvedMobile from "./GetInvolvedMobile";

const GetInvolvedResponsive = () => {
  return (
    <>
      <div className="hidden min-[641px]:block">
        <GetInvolved />
      </div>

      <div className="block min-[641px]:hidden">
        <GetInvolvedMobile />
      </div>
    </>
  );
};

export default GetInvolvedResponsive;