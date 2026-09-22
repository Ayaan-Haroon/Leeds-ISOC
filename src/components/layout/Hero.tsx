import MasterCanvas from '../../components/MasterCanvas'

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden isolate">

      {/* =====================================================
          FULL VIEWPORT GRAIN / BACKGROUND
      ====================================================== */}
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

      {/* =================================================
          ANIMATION STYLES
          Shared by desktop and mobile versions.
          Stagger delays + pop-in duration are 50% of what
          they were, so the whole reveal sequence plays
          twice as fast.
      ================================================== */}
      <style>{`
        @keyframes stickOn {
          0% {
            opacity: 0;
            transform: scale(0.25) rotate(-20deg);
          }

          35% {
            opacity: 1;
            transform: scale(1.22) rotate(11deg);
          }

          50% {
            transform: scale(0.9) rotate(-8deg);
          }

          65% {
            transform: scale(1.12) rotate(6deg) translateX(3px);
          }

          78% {
            transform: scale(0.96) rotate(-4deg) translateX(-3px);
          }

          90% {
            transform: scale(1.03) rotate(2deg) translateX(2px);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg) translateX(0);
          }
        }

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

        .sticker-animate {
          opacity: 0;
          animation:
            stickOn
            0.5s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        .bird-fly {
          animation:
            birdFly
            2.4s
            ease-in-out
            0.875s
            infinite;
        }

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

      {/* =====================================================
          DESKTOP VERSION
          1460 × 900 MASTER CANVAS
      ====================================================== */}
      <div className="hidden md:block">
        <MasterCanvas>
          <div
            className="
              relative
              z-10
              h-[900px]
              w-[1460px]
            "
          >

            {/* =================================================
                TITLE
            ================================================== */}
            <div className="absolute left-0 top-[77px] z-10 w-full text-center">

              <p
                className="
                  font-display
                  font-black
                  text-isoc-cream
                  tracking-[-0.01em]
                  leading-[0.30]
                  mb-[4px]
                  text-[57.6px]
                  drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
                "
              >
                WELCOME TO
              </p>

              <h1
                className="
                  font-display
                  font-black
                  text-isoc-cream
                  leading-[1.1]
                  tracking-[-0.1em]
                  text-[163.2px]
                  drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]
                "
              >
                LEEDS ISOC
              </h1>

            </div>

            {/* =================================================
                UNIVERSITY BUILDING
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-building.png"
              alt="Leeds University Parkinson Building"
              className="
                absolute
                bottom-0
                left-0
                z-20
                w-[892.8px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                MASJID
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-masjid.png"
              alt="Masjid"
              className="
                absolute
                bottom-0
                right-0
                z-10
                w-[633.6px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                BOOKS
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-book.png"
              alt=""
              style={{
                animationDelay: '0.15s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[162px]
                right-[432px]
                z-30
                w-[201.6px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                EXCLAMATION MARKS
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-exclamation.png"
              alt=""
              style={{
                animationDelay: '0.225s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[360px]
                right-[489.6px]
                z-30
                w-[129.6px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                GIRLS WALKING
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-girls.png"
              alt=""
              style={{
                animationDelay: '0.30s',
              }}
              className="
                sticker-animate
                absolute
                bottom-0
                right-0
                z-30
                w-[345.6px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                MOON
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-moon.png"
              alt=""
              style={{
                animationDelay: '0.375s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[108px]
                right-[504px]
                z-30
                w-[115.2px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                DUAS
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-dua.png"
              alt=""
              style={{
                animationDelay: '0.45s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[162px]
                right-[576px]
                z-25
                w-[259.2px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                SAJDA FIGURE
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-sajda.png"
              alt=""
              style={{
                animationDelay: '0.525s',
              }}
              className="
                sticker-animate
                absolute
                bottom-0
                left-[259.2px]
                z-30
                w-[288px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                TEA HANDS
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-tea.png"
              alt=""
              style={{
                animationDelay: '0.60s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[126px]
                left-[172.8px]
                z-30
                w-[144px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                PALESTINE
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-palestine.png"
              alt=""
              style={{
                animationDelay: '0.675s',
              }}
              className="
                sticker-animate
                absolute
                bottom-0
                left-[28.8px]
                z-25
                w-[201.6px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                MEGAPHONE
            ================================================== */}
            <img
              src="/images/home/isocbitstrans/trimmed-megaphone.png"
              alt=""
              style={{
                animationDelay: '0.75s',
              }}
              className="
                sticker-animate
                absolute
                bottom-[360px]
                left-0
                z-30
                w-[172.8px]
                drop-shadow-lg
              "
            />

            {/* =================================================
                BIRDS
            ================================================== */}
            <div
              className="
                bird-fly
                absolute
                top-[306px]
                left-[504px]
                z-30
                w-[288px]
              "
            >
              <img
                src="/images/home/isocbitstrans/trimmed-birds.png"
                alt=""
                style={{
                  animationDelay: '0.825s',
                }}
                className="
                  sticker-animate
                  w-full
                  drop-shadow-lg
                "
              />
            </div>

          </div>
        </MasterCanvas>
      </div>

    {/* =====================================================
    MOBILE VERSION
====================================================== */}
<div className="md:hidden absolute inset-0 z-10 overflow-hidden">

  {/* =================================================
      TITLE
      ~20% FROM TOP OF PHONE
  ================================================== */}
  <div
    className="
      absolute
      top-[10vh]
      left-0
      z-[100]
      w-full
      text-center
    "
  >
    <p
      className="
        font-display
        font-black
        text-isoc-cream
        text-[27px]
        leading-[1]
        tracking-[-0.01em]
        mb-[4px]
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]
      "
    >
      WELCOME TO
    </p>

    <h1
      className="
        font-display
        font-black
        text-isoc-cream
        text-[58px]
        leading-[0.88]
        tracking-[-0.09em]
        whitespace-nowrap
        drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
      "
    >
      LEEDS ISOC
    </h1>
  </div>


  {/* =================================================
      OVERSIZED ARTWORK CANVAS

      IMPORTANT:
      This is deliberately MUCH wider than the phone.
      The parent hero clips it at the screen edges.
  ================================================== */}
  <div
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[850px]
      h-[520px]
    "
  >

    {/* =================================================
        UNIVERSITY BUILDING
        HUGE — CROPPED BY PHONE EDGES
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-building.png"
      alt="Leeds University Parkinson Building"
      className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        z-10
        w-[600px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        PALESTINE
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-palestine.png"
      alt=""
      style={{
        animationDelay: '0.675s',
      }}
      className="
        sticker-animate
        absolute
        bottom-0
        left-[235px]
        z-30
        w-[125px]
        rotate-[-7deg]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        SAJDA
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-sajda.png"
      alt=""
      style={{
        animationDelay: '0.525s',
      }}
      className="
        sticker-animate
        absolute
        bottom-0
        left-[350px]
        z-40
        w-[135px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        TEA
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-tea.png"
      alt=""
      style={{
        animationDelay: '0.60s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[100px]
        left-[300px]
        z-50
        w-[82px]
        rotate-[-9deg]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        BOOK
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-book.png"
      alt=""
      style={{
        animationDelay: '0.15s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[135px]
        right-[275px]
        z-40
        w-[120px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        DUA
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-dua.png"
      alt=""
      style={{
        animationDelay: '0.45s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[0]
        right-[225px]
        z-35
        w-[125px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        MOON
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-moon.png"
      alt=""
      style={{
        animationDelay: '0.375s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[75px]
        right-[325px]
        z-25
        w-[75px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        EXCLAMATION
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-exclamation.png"
      alt=""
      style={{
        animationDelay: '0.225s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[200px]
        right-[230px]
        z-50
        w-[75px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        MEGAPHONE
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-megaphone.png"
      alt=""
      style={{
        animationDelay: '0.75s',
      }}
      className="
        sticker-animate
        absolute
        bottom-[225px]
        left-[225px]
        z-50
        w-[85px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        GIRLS
    ================================================== */}
    <img
      src="/images/home/isocbitstrans/trimmed-girls.png"
      alt=""
      style={{
        animationDelay: '0.30s',
      }}
      className="
        sticker-animate
        absolute
        bottom-0
        right-[20px]
        z-50
        w-[125px]
        max-w-none
        drop-shadow-lg
      "
    />


    {/* =================================================
        BIRDS
    ================================================== */}
    <div
      className="
        bird-fly
        absolute
        bottom-[295px]
        right-[200px]
        -translate-x-1/2
        z-50
        w-[125px]
      "
    >
      <img
        src="/images/home/isocbitstrans/trimmed-birds.png"
        alt=""
        style={{
          animationDelay: '0.825s',
        }}
        className="sticker-animate w-full drop-shadow-lg"
      />
    </div>

  </div>
</div>

    </section>
  )
}

export default Hero