import { useEffect, useState } from 'react'

const Committee = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [areCardsVisible, setAreCardsVisible] = useState(false)

  const cards = [
    {
      id: 1,
      angle: '-rotate-4',
    },
    {
      id: 2,
      angle: 'rotate-4',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  useEffect(() => {
    const handleScroll = () => {
      const committee = document.querySelector('.committee-trigger')

      if (!committee || areCardsVisible) return

      const rect = committee.getBoundingClientRect()
      const vh = window.innerHeight

      // Trigger when the Committee section
      // is around 30% into the viewport.
      if (rect.top <= vh * 0.7) {
        setAreCardsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [areCardsVisible])

  return (
    <section
      className="
        committee-trigger
        relative
        isolate
        min-h-screen
        bg-[#fff]
        overflow-hidden
        flex
        flex-col
      "
    >

      {/* =========================
          ANIMATION STYLES
          ========================= */}

      <style>{`

        @keyframes committeeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(-100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes committeeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(-20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .committee-back-card {
          opacity: 0;
          transform: translateX(-100vw);
        }

        .committee-front-card {
          opacity: 0;
          transform: translateX(100vw);
        }

        .committee-back-card.animate {
          animation:
            committeeSlideLeft
            1s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .committee-front-card.animate {
          animation:
            committeeSlideRight
            1s
            0.2s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        .bodoni-flf {
          font-family:
            'Bodoni FLF',
            'Bodoni Moda',
            Didot,
            serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .committee-back-card,
          .committee-front-card {
            opacity: 1;
            transform: none;
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
          opacity-90
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
          CARDS AREA
          ========================= */}

      <div className="relative z-10 flex-1 flex items-center justify-center">

        {/* =========================
            LEFT ARROW
            ========================= */}

        <button
          onClick={prevSlide}
          className="
            absolute
            left-[7%]
            z-30
            text-[#f2eae0]
            text-[90px]
            font-light
            leading-none
            hover:scale-110
            transition-transform
          "
          aria-label="Previous committee"
        >
          ‹
        </button>

        {/* =========================
            CARDS
            ========================= */}

        <div className="relative w-[70vw] max-w-[800px] h-[55vh]">

          {/* =========================
              BACK CARD
              ========================= */}

          <div
            className={`
              absolute
              inset-0
              bg-[#f2e2d3]
              border-[7px]
              border-white
              shadow-[0_12px_24px_rgba(0,0,0,0.3)]
              ${cards[currentIndex].angle}
              committee-back-card
              transition-all
              duration-300
              ease-out
              hover:-translate-y-2
              hover:shadow-[0_20px_32px_rgba(0,0,0,0.45)]
              cursor-pointer
              ${areCardsVisible ? 'animate' : ''}
            `}
          />

          {/* =========================
              FRONT CARD
              ========================= */}

          <div
            className={`
              absolute
              inset-0
              bg-[#f2e2d3]
              border-[7px]
              border-white
              shadow-[0_12px_24px_rgba(0,0,0,0.3)]
              ${cards[(currentIndex + 1) % cards.length].angle}
              scale-[0.96]
              overflow-hidden
              committee-front-card
              transition-all
              duration-300
              ease-out
              hover:-translate-y-2
              hover:shadow-[0_20px_32px_rgba(0,0,0,0.45)]
              cursor-pointer
              ${areCardsVisible ? 'animate' : ''}
            `}
          >

            {/* =========================
                LEFT SIDE — IMAGE
                ========================= */}

            <div
              className="
                absolute
                left-0
                top-0
                w-[42%]
                h-full
                overflow-hidden
                p-6
              "
            >
              <img
                src="/images/prettypretty.jpg"
                alt="Committee member"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-sm
                "
              />
            </div>

            {/* =========================
                RIGHT SIDE — TEXT
                ========================= */}

            <div
              className="
                absolute
                right-0
                top-0
                w-[58%]
                h-full
                pr-5
                pt-7
                pb-6
                pl-5
                flex
                flex-col
              "
            >

              {/* =========================
                  NAME + ROLE + STAMP
                  ========================= */}

              <div
                className="
                  relative
                  flex
                  items-center
                  w-full
                "
              >

                {/* NAME + ROLE */}

                <div
                  className="
                    flex-1
                    text-center
                    pr-2
                    min-w-0
                  "
                >
                  <h2
                    className="
                      bodoni-flf
                      font-bold
                      text-[#254c3a]
                      text-[clamp(1.35rem,2.15vw,2.2rem)]
                      leading-[0.95]
                      uppercase
                      whitespace-nowrap
                    "
                  >
                    Ayaan Haroon
                  </h2>

                  <p
                    className="
                      font-body
                      font-bold
                      text-[#254c3a]
                      text-[13px]
                      mt-2
                      uppercase
                      tracking-wide
                      leading-none
                    "
                  >
                    Official Tek Bro
                  </p>
                </div>

                {/* =========================
                    STAMP
                    ========================= */}

                <div
                  className="
                    w-[95px]
                    h-[110px]
                    shrink-0
                    ml-auto
                  "
                >
                  <img
                    src="/images/home/isocbitstrans/stamp.png"
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

              </div>

              {/* =========================
                  DESCRIPTION
                  ========================= */}

              <div
                className="
                  mt-5
                  w-full
                  flex-1
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <p
                  className="
                    font-body
                    font-bold
                    text-[#254c3c]
                    text-[15px]
                    leading-[1.35]
                    text-center
                  "
                >
                  Ayaan is nice guy but he's a bit smelly. 
                  He lets me sleep over at his so I guess he's alright
                  Decent guy fr. 
                  <br />
                  <br />
                  Ayaan doesn't eat enough sweet treats. If I were Ayaan I'd still be skinny but I'd have blocked arteries. My glucose levels aren't as bad as they could be becuase when I put on weight I think, OH NO! my sweet treats, how could they betray me like htis :( then I try to stop eating them for a while
                  <br />
                  <br />
                  Anyways, as I say. I love sweet things. The best version of things in this world are sweet. Sweet treats, sweet smells, sweet people. 
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* =========================
            RIGHT ARROW
            ========================= */}

        <button
          onClick={nextSlide}
          className="
            absolute
            right-[7%]
            z-30
            text-[#f2eae0]
            text-[90px]
            font-light
            leading-none
            hover:scale-110
            transition-transform
          "
          aria-label="Next committee"
        >
          ›
        </button>

      </div>

      {/* =========================
          TITLE
          ========================= */}

      <div className="relative z-10 w-full text-center pb-6">

        <h1
          className="
            font-display
            font-black
            text-[#f2eae0]
            text-[clamp(4rem,9vw,6.8rem)]
            leading-[1.3]
            uppercase
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]
          "
        >
          COMMITTEE
        </h1>

      </div>

    </section>
  )
}

export default Committee