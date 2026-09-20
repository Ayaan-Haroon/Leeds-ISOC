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
          ANIMATION STYLES
          ========================= */}

      <style>{`

  /* =========================
     STICKER POP
     ========================= */

  @keyframes stickOn {

    0% {

      opacity: 0;

      transform: scale(0.85);

    }

    55% {

      opacity: 1;

      transform: scale(1.04);

    }

    72% {

      transform: scale(0.985) rotate(-1deg);

    }

    86% {

      transform: scale(1.015) rotate(1deg);

    }

    100% {

      opacity: 1;

      transform: scale(1) rotate(0deg);

    }

  }





  /* =========================
     BIRD FLY
     ========================= */

  @keyframes birdFly {

    0% {

      transform: translateY(0px);

    }

    25% {

      transform: translateY(-4px);

    }

    50% {

      transform: translateY(0px);

    }

    75% {

      transform: translateY(3px);

    }

    100% {

      transform: translateY(0px);

    }

  }





  /* =========================
     ANIMATION CLASSES
     ========================= */

  .sticker-animate {

    opacity: 0;

    animation:

      stickOn

      0.10s

      cubic-bezier(0.2, 0.8, 0.2, 1)

      forwards;

  }

  .bird-fly {

    animation:

      birdFly

      2.4s

      ease-in-out

      1.75s

      infinite;

  }





  /* =========================
     ACCESSIBILITY
     ========================= */

  @media (prefers-reduced-motion: reduce) {

    .sticker-animate {

      opacity: 1;

      animation: none;

    }

    .bird-fly {

      animation: none;

    }

  }

`}</style>





      {/* =========================
          GRAIN OVERLAY
          ========================= */}

      <div

        className="
          absolute
          inset-0
          z-0
          opacity-100
          mix-blend-multiply
          pointer-events-none
        "

        style={{

          backgroundImage:

            "url('/images/home/stickers-n-that/darkone.png')",

          backgroundSize: 'cover',

          backgroundPosition: 'center',

          backgroundRepeat: 'no-repeat',

        }}

      />





      {/* =========================
          TITLE
          ========================= */}

      <div className="relative z-10">

        {/* WELCOME TO */}

       <p
          className="
            font-display
            font-black
            text-isoc-cream
            tracking-[-0.01em]
            leading-[0.30]
            mb-1
            text-[clamp(1.25rem,4.2rem,3.6rem)]
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
          "
        >
          WELCOME TO
        </p>

        {/* LEEDS ISOC */}
        <h1
          className="
            font-display
            font-black
            text-isoc-cream
            leading-[1.1]
            tracking-[-0.1em]
            text-[clamp(3.125rem,10.2rem,10.2rem)]
            drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]
          "
        >
          LEEDS ISOC
        </h1>

      </div>





      {/* =========================
          BUILDINGS — INSTANT
          ========================= */}

      <img

        src="/images/home/isocbitstrans/trimmed-building.png"

        alt="Leeds University Parkinson Building"

        className="
          absolute
          bottom-0
          left-0
          z-20
          w-[62vw]
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
          w-[44vw]
          drop-shadow-lg
        "

      />





      {/* =========================
          BOOKS
          ========================= */}

      <img

        src="/images/home/isocbitstrans/trimmed-book.png"

        alt=""

        style={{ animationDelay: '0.30s' }}

        className="
          sticker-animate
          absolute
          bottom-[18%]
          right-[30%]
          z-30
          w-[14vw]
          max-w-[1000px]
          drop-shadow-lg
        "

      />





      {/* =========================
          EXCLAMATION MARKS
          ========================= */}

      <img

        src="/images/home/isocbitstrans/trimmed-exclamation.png"

        alt=""

        style={{ animationDelay: '0.45s' }}

        className="
          sticker-animate
          absolute
          bottom-[40%]
          right-[34%]
          z-30
          w-[9vw]
          max-w-[1000px]
          drop-shadow-lg
        "

      />





      {/* =========================
          GIRLS WALKING
          ========================= */}

      <img

        src="/images/home/isocbitstrans/trimmed-girls.png"

        alt=""

        style={{ animationDelay: '0.60s' }}

        className="
          sticker-animate
          absolute
          bottom-[0%]
          right-[0%]
          z-30
          w-[24vw]
          max-w-[900px]
          drop-shadow-lg
        "

      />





      {/* =========================
          MOON
          ========================= */}

      <img

        src="/images/home/isocbitstrans/trimmed-moon.png"

        alt=""

        style={{ animationDelay: '0.75s' }}

        className="
          sticker-animate
          absolute
          bottom-[12%]
          right-[35%]
          z-30
          w-[8vw]
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

        style={{ animationDelay: '0.90s' }}

        className="
          sticker-animate
          absolute
          bottom-[18%]
          right-[40%]
          z-25
          w-[18vw]
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

        style={{ animationDelay: '1.05s' }}

        className="
          sticker-animate
          absolute
          bottom-[0%]
          left-[18%]
          z-30
          w-[20vw]
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

        style={{ animationDelay: '1.20s' }}

        className="
          sticker-animate
          absolute
          bottom-[14%]
          left-[12%]
          z-30
          w-[10vw]
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

        style={{ animationDelay: '1.35s' }}

        className="
          sticker-animate
          absolute
          bottom-[0%]
          left-[2%]
          z-25
          w-[14vw]
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

        style={{ animationDelay: '1.50s' }}

        className="
          sticker-animate
          absolute
          bottom-[40%]
          left-[0%]
          z-30
          w-[12vw]
          max-w-[1000px]
          drop-shadow-lg
        "

      />





      {/* =========================
          BIRDS — LAST
          ========================= */}

      <div

        className="
          bird-fly
          absolute
          top-[34%]
          left-[35%]
          z-30
          w-[20vw]
          max-w-[800px]
        "

      >

        <img

          src="/images/home/isocbitstrans/trimmed-birds.png"

          alt=""

          style={{ animationDelay: '1.65s' }}

          className="
            sticker-animate
            w-full
            drop-shadow-lg
          "

        />

      </div>





    </section>

  )

}

export default Hero