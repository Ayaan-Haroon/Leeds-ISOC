import FAQ from "./FAQ";
import FAQMobile from "./FAQMobile";

const FAQResponsive = () => {
  return (
    <>
      <div className="hidden min-[641px]:block">
        <FAQ />
      </div>

      <div className="block min-[641px]:hidden">
        <FAQMobile />
      </div>
    </>
  );
};

export default FAQResponsive;