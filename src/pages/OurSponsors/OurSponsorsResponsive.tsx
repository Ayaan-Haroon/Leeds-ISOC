import OurSponsors from "./OurSponsors";
import OurSponsorsMobile from "./OurSponsorsMobile";

const OurSponsorsResponsive = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden min-[641px]:block">
        <OurSponsors />
      </div>

      {/* MOBILE */}
      <div className="block min-[641px]:hidden">
        <OurSponsorsMobile />
      </div>
    </>
  );
};

export default OurSponsorsResponsive;