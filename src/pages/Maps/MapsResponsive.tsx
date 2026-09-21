import Maps from "./Maps";
import MapsMobile from "./MapsMobile";

const MapsResponsive = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden min-[641px]:block">
        <Maps />
      </div>

      {/* MOBILE */}
      <div className="block min-[641px]:hidden">
        <MapsMobile />
      </div>
    </>
  );
};

export default MapsResponsive;