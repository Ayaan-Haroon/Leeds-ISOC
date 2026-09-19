const AboutUs2 = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#f2eae0]
        overflow-visible
        isolate
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
          DECORATIVE IMAGES — UNDER EVERYTHING
          ========================= */}

      {/* bottom left image */}
      <img
        src="/images/home/stickers-n-that/wide-ruled.png"
        alt=""
        className="
          absolute
          z-[1]
          bottom-[40px]
          left-[30px]
          w-[425px]
          rotate-[-4deg]
          pointer-events-none
        "
      />

      {/* bottom right */}
      <img
        src="/images/home/stickers-n-that/fat-ruled.png"
        alt=""
        className="
          absolute
          z-[1]
          top-[0px]
          right-[20px]
          w-[275px]
          h-[300px]
          pointer-events-none
        "
      />

      {/* =========================
          WHO WE ARE — TEXT BLOCK
          ========================= */}

      <div
        className="
          absolute
          z-10
          top-[75px]
          left-[100px]
          w-[650px]
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
            text-[clamp(2.5rem,5.2rem,6.4rem)]
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
          OUR MISSION — TEXT BLOCK
          ========================= */}

      <div
        className="
          absolute
          z-10
          top-[50%]
          right-[50px]
          w-[625px]
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
             text-[clamp(2.5rem,5.2rem,6.4rem)]
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
          GIRLS CARD
          ========================= */}

      <div
        className="
          absolute
          z-20
          bottom-[50px]
          left-[35px]
          bg-white
          p-3
          pb-7
          rotate-[6deg]
          shadow-xl
          w-[400px]
          h-[275px]
        "
      >
        <img
          src="/images/home/isocbitstrans/trimmed-girls.png"
          alt=""
          className="
            absolute
            bottom-[5px]
            left-[40px]
          "
        />
      </div>

      {/* =========================
          GIRLS CARD — TOP IMAGE 1
          ========================= */}

      <img
        src="/images/home/stickers-n-that/green-plaster.png"
        alt=""
        className="
          absolute
          z-[40]
          bottom-[275px]
          left-[350px]
          w-[120px]
          pointer-events-none
        "
      />

      {/* =========================
          GIRLS CARD — TOP IMAGE 2
          ========================= */}

      <img
        src="/images/home/stickers-n-that/green-starts-3.png"
        alt=""
        className="
          absolute
          z-[40]
          bottom-[225px]
          left-[50px]
          w-[9vw]
          max-w-[80px]
          pointer-events-none
        "
      />

      {/* =========================
          TEA CARD
          ========================= */}

      <div
        className="
          absolute
          z-20
          top-[-40px]
          right-[40px]
          bg-white
          p-3
          pb-7
          rotate-[8deg]
          shadow-xl
          w-[200px]
          h-[350px]
        "
      >
        <img
          src="/images/home/isocbitstrans/trimmed-tea.png"
          alt=""
          className="
            w-[200px]
            h-[350px]
          "
        />
      </div>

      {/* =========================
          TEA CARD — TOP IMAGE 1
          ========================= */}

      <img
        src="/images/home/stickers-n-that/thumbpin.png"
        alt=""
        className="
          absolute
          z-[40]
          top-[-30px]
          right-[66px]
          w-[8vw]
          max-w-[30px]
          pointer-events-none
        "
      />

      {/* =========================
          TEA CARD — TOP IMAGE 2
          ========================= */}

      <img
        src="/images/home/announcements/pretty-flower.png"
        alt=""
        className="
          absolute
          z-[40]
          top-[290px]
          right-[35px]
          w-[9vw]
          max-w-[65px]
          pointer-events-none
        "
      />
    </section>
  )
}

export default AboutUs2