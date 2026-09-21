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
                ANIMATION STYLES
            ================================================== */}
            <style>{`
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
                animationDelay: '0.30s',
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
                animationDelay: '0.45s',
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
                animationDelay: '0.60s',
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
                animationDelay: '0.75s',
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
                animationDelay: '0.90s',
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
                animationDelay: '1.05s',
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
                animationDelay: '1.20s',
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
                animationDelay: '1.35s',
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
                animationDelay: '1.50s',
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
                  animationDelay: '1.65s',
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
          MASTER DESIGN: 364 × 399
      ====================================================== */}
      <div className="md:hidden">
        <div
          className="
            relative
            mx-auto
            h-[399px]
            w-[364px]
          "
        >

          {/* =================================================
              MOBILE TITLE
          ================================================== */}
          <div
            className="
              absolute
              left-0
              top-[44px]
              z-50
              w-[364px]
              text-center
            "
          >
            <p
              className="
                font-display
                font-black
                text-isoc-cream
                text-[17px]
                leading-[1]
                tracking-[-0.01em]
                mb-[3px]
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
                text-[51px]
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
              MOBILE COLLAGE
          ================================================== */}

          {/* UNIVERSITY BUILDING */}
          <img
            src="/images/home/isocbitstrans/trimmed-building.png"
            alt="Leeds University Parkinson Building"
            className="
              absolute
              bottom-0
              left-0
              z-20
              w-[222px]
              drop-shadow-lg
            "
          />

          {/* MASJID */}
          <img
            src="/images/home/isocbitstrans/trimmed-masjid.png"
            alt="Masjid"
            className="
              absolute
              bottom-0
              right-0
              z-10
              w-[158px]
              drop-shadow-lg
            "
          />

          {/* PALESTINE */}
          <img
            src="/images/home/isocbitstrans/trimmed-palestine.png"
            alt=""
            className="
              absolute
              bottom-0
              left-[7px]
              z-30
              w-[78px]
              drop-shadow-lg
            "
          />

          {/* SAJDA */}
          <img
            src="/images/home/isocbitstrans/trimmed-sajda.png"
            alt=""
            className="
              absolute
              bottom-0
              left-[63px]
              z-40
              w-[112px]
              drop-shadow-lg
            "
          />

          {/* TEA HANDS */}
          <img
            src="/images/home/isocbitstrans/trimmed-tea.png"
            alt=""
            className="
              absolute
              bottom-[49px]
              left-[42px]
              z-50
              w-[56px]
              drop-shadow-lg
            "
          />

          {/* BOOK */}
          <img
            src="/images/home/isocbitstrans/trimmed-book.png"
            alt=""
            className="
              absolute
              bottom-[64px]
              right-[108px]
              z-40
              w-[78px]
              drop-shadow-lg
            "
          />

          {/* DUA */}
          <img
            src="/images/home/isocbitstrans/trimmed-dua.png"
            alt=""
            className="
              absolute
              bottom-[63px]
              right-[74px]
              z-35
              w-[101px]
              drop-shadow-lg
            "
          />

          {/* MOON */}
          <img
            src="/images/home/isocbitstrans/trimmed-moon.png"
            alt=""
            className="
              absolute
              bottom-[42px]
              right-[126px]
              z-45
              w-[45px]
              drop-shadow-lg
            "
          />

          {/* EXCLAMATION MARKS */}
          <img
            src="/images/home/isocbitstrans/trimmed-exclamation.png"
            alt=""
            className="
              absolute
              bottom-[111px]
              right-[18px]
              z-50
              w-[51px]
              drop-shadow-lg
            "
          />

          {/* MEGAPHONE */}
          <img
            src="/images/home/isocbitstrans/trimmed-megaphone.png"
            alt=""
            className="
              absolute
              bottom-[106px]
              left-0
              z-50
              w-[68px]
              drop-shadow-lg
            "
          />

          {/* GIRLS */}
          <img
            src="/images/home/isocbitstrans/trimmed-girls.png"
            alt=""
            className="
              absolute
              bottom-0
              right-0
              z-50
              w-[86px]
              drop-shadow-lg
            "
          />

          {/* BIRDS */}
          <div
            className="
              absolute
              top-[176px]
              left-[142px]
              z-50
              w-[72px]
            "
          >
            <img
              src="/images/home/isocbitstrans/trimmed-birds.png"
              alt=""
              className="w-full drop-shadow-lg"
            />
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero