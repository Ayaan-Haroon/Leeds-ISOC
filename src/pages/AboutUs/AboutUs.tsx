import TextLoop from "../../components/TextLoop";

const AboutUs = () => {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#254c3a]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('/images/home/stickers-n-that/light-green-paper.png')",
      }}
    >
      {/* TEXT LOOP */}
      <section
        className="
          relative
          flex
          h-[200px]
          w-full
          items-center
          justify-center
          overflow-hidden
        "
      >
        <TextLoop
          text="Find out a bit about us"
          shape="wave"
          speed={95}
          direction="forward"
          separator="✦"
          curviness={42}
          fontSize={48}
          fontWeight={700}
          letterSpacing={2}
          uppercase
          color="#254c3a"
          ribbon
          ribbonColor="#f2eae0"
          ribbonWidth={80}
          pauseOnHover
        />
      </section>

      {/* ABOUT US CONTENT */}
      <section
        className="
          relative
          w-full
          px-8
          py-20
        "
      >
        {/* Your About Us content */}
      </section>
    </main>
  );
};

export default AboutUs;