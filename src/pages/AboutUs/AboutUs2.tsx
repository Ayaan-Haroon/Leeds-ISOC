const AboutUs2 = () => {

  return (

    <section
      className="
        relative
        min-h-screen
        bg-[#f2eae0]
        overflow-visible
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-90
          mix-blend-multiply
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/beige-paper.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* =========================
          WHO WE ARE
          ========================= */}

      <div
        className="
          absolute
          top-[150px]
          left-[8%]
          w-[48%]
          max-w-[650px]
        "
      >

        <div className="flex items-center gap-4 mb-3">

          <p
            className="
              font-sans
              text-isoc-green
              tracking-[0.2em]
              text-xs
              uppercase
            "
          >
            Who we are
          </p>

          <div className="h-[1px] w-16 bg-isoc-green" />

        </div>

        <h2
          className="
            font-display
            font-black
            text-isoc-green
            text-[clamp(2.5rem,4vw,6rem)]
            tracking-[-0.05em]
            leading-none
            mb-5
          "
        >
          Leeds ISOC
        </h2>

        <p
          className="
            font-sans
            text-isoc-green
            text-base
            md:text-xl
            leading-[1.6]
          "
        >
          Leeds ISOC is a student-led society at the University of Leeds,
          bringing together a diverse community of Muslim students. We aim
          to provide a supportive environment for faith, friendship and
          personal growth, while creating opportunities to learn, pray and
          make a positive impact.
        </p>

      </div>

      {/* =========================
          OUR MISSION
          ========================= */}

      <div
        className="
          absolute
          top-[50%]
          right-[10%]
          w-[43%]
          max-w-[600px]
        "
      >

        <div className="flex items-center gap-4 mb-3">

          <p
            className="
              font-sans
              text-isoc-green
              tracking-[0.2em]
              text-xs
              uppercase
            "
          >
            Our mission
          </p>

          <div className="h-[1px] w-16 bg-isoc-green" />

        </div>

        <h2
          className="
            font-display
            font-black
            text-isoc-green
            text-[clamp(2.25rem,4vw,5.5rem)]
            tracking-[-0.05em]
            leading-[0.95]
            mb-5
          "
        >
          Faith. Community. Impact.
        </h2>

        <p
          className="
            font-sans
            text-isoc-green
            text-base
            md:text-xl
            leading-[1.6]
          "
        >
          We strive to strengthen our faith, build a sense of brotherhood
          and sisterhood, and support each other through the challenges and
          opportunities of university life.
        </p>

      </div>

      {/* =========================
          GIRLS IMAGE
          ========================= */}

      <div
        className="
          absolute
          bottom-[8%]
          left-[3%]
          bg-white
          p-3
          pb-7
          -rotate-[6deg]
          shadow-xl
          w-[27vw]
          max-w-[380px]
        "
      >

        <img
          src="/images/home/isocbitstrans/trimmed-girls.png"
          alt=""
          className="w-full"
        />

      </div>

      {/* =========================
          TEA IMAGE
          ========================= */}

      <div
        className="
          absolute
          top-[-5%]
          right-[3%]
          z-100
          bg-white
          p-3
          pb-7
          rotate-[8deg]
          shadow-xl
          w-[15vw]
          max-w-[210px]
        "
      >

        <img
          src="/images/home/isocbitstrans/trimmed-tea.png"
          alt=""
          className="w-full"
        />

      </div>

    </section>
  )
}

export default AboutUs2