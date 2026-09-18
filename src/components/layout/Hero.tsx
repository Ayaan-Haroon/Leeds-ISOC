const Hero = () => {

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        isolate
        flex
        flex-col
        items-center
        justify-start
        text-center
        px-8
        pt-[4.8rem]
      "
    >

      {/* =========================
          GRAIN OVERLAY
          ========================= */}

      <div
        className="absolute inset-0 z-0 opacity-100 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/stickers-n-that/darkone.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* =========================
          TITLE
          ========================= */}

      <div className="relative z-10">

        <p
          className="
            font-display
            font-black
            text-isoc-cream
            tracking-[-0.01em]
            leading-[0.30]
            mb-1
            text-[clamp(1.25rem,7.5vw,2.75rem)]
            lg:text-[clamp(1.875rem,5vw,4rem)]
            2xl:text-[clamp(4rem,3.75vw,5.625rem)]
          "
        >
          WELCOME TO
        </p>

        <h1
          className="
            font-display
            font-black
            text-isoc-cream
            leading-[1.2]
            tracking-[-0.1em]
            text-[clamp(3.125rem,12.5vw,7.5rem)]
            lg:text-[clamp(7.5rem,11.25vw,12.5rem)]
            2xl:text-[clamp(12.5rem,10vw,16.25rem)]
          "
        >
          LEEDS ISOC
        </h1>

      </div>

      {/* =========================
          BUILDINGS — BOTTOM CORNERS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-building.png"
        alt="Leeds University Parkinson Building"
        className="
          absolute
          bottom-0
          left-0
          z-20
          w-[58.9vw]
          drop-shadow-lg
        "
      />

      <img
        src="/images/home/isocbitstrans/trimmed-masjid.png"
        alt="Masjid"
        className="
          absolute
          bottom-0
          right-0
          z-10
          w-[41.8vw]
          drop-shadow-lg
        "
      />

      {/* =========================
          GIRLS WALKING
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-girls.png"
        alt=""
        className="
          absolute
          bottom-[0%]
          right-[0%]
          z-30
          w-[22.8vw]
          max-w-[900px]
          drop-shadow-lg
        "
      />

      {/* =========================
          BIRDS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-birds.png"
        alt=""
        className="
          absolute
          top-[30%]
          left-[35%]
          z-30
          w-[19vw]
          max-w-[800px]
          drop-shadow-lg
        "
      />

      {/* =========================
          EXCLAMATION MARKS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-exclamation.png"
        alt=""
        className="
          absolute
          bottom-[40%]
          right-[34%]
          z-30
          w-[8.55vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          BOOKS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-book.png"
        alt=""
        className="
          absolute
          bottom-[18%]
          right-[30%]
          z-30
          w-[13.3vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          MOON
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-moon.png"
        alt=""
        className="
          absolute
          bottom-[12%]
          right-[35%]
          z-30
          w-[7.6vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          DUAS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-dua.png"
        alt=""
        className="
          absolute
          bottom-[18%]
          right-[40%]
          z-25
          w-[17.1vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          SAJDA FIGURE
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-sajda.png"
        alt=""
        className="
          absolute
          bottom-[0%]
          left-[18%]
          z-30
          w-[19vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          TEA HANDS
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-tea.png"
        alt=""
        className="
          absolute
          bottom-[14%]
          left-[12%]
          z-30
          w-[9.5vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          PALESTINE
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-palestine.png"
        alt=""
        className="
          absolute
          bottom-[0%]
          left-[2%]
          z-25
          w-[13.3vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

      {/* =========================
          MEGAPHONE
          ========================= */}

      <img
        src="/images/home/isocbitstrans/trimmed-megaphone.png"
        alt=""
        className="
          absolute
          bottom-[40%]
          left-[0%]
          z-30
          w-[11.4vw]
          max-w-[1000px]
          drop-shadow-lg
        "
      />

    </section>
  )
}

export default Hero