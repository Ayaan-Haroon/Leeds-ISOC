import Resources from "./Resources";
import ResourcesMobile from "./ResourcesMobile";

const ResourcesResponsive = () => {
  return (
    <>
      {/* DESKTOP / LAPTOP */}
      <div className="hidden min-[641px]:block">
        <Resources />
      </div>

      {/* PHONE */}
      <div className="block min-[641px]:hidden">
        <ResourcesMobile />
      </div>
    </>
  );
};

export default ResourcesResponsive;