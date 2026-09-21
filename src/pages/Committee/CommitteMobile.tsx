import { useEffect, useState } from 'react'

const CommitteeMobile = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [areCardsVisible, setAreCardsVisible] = useState(false)

  const cards = [

    {
      id: 1,
      name: 'Ayaan Haroon',
      role: 'Official Tek Bro',
      image: '/images/prettypretty.jpg',
      description:
        "Ayaan is a nice guy but he's a bit smelly. He lets me sleep over at his so I guess he's alright. Decent guy fr.\n\nAyaan doesn't eat enough sweet treats. If I were Ayaan I'd still be skinny but I'd have blocked arteries. My glucose levels aren't as bad as they could be because when I put on weight I think, OH NO! My sweet treats, how could they betray me like this :(\n\nThen I try to stop eating them for a while. Anyways, as I say. I love sweet things. The best version of things in this world are sweet. Sweet treats, sweet smells, sweet people.",
      angle: '-rotate-2',
    },

    {
      id: 2,
      name: 'Person 2',
      role: 'Role 2',
      image: '/images/committee/person-2.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 3,
      name: 'Person 3',
      role: 'Role 3',
      image: '/images/committee/person-3.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 4,
      name: 'Person 4',
      role: 'Role 4',
      image: '/images/committee/person-4.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 5,
      name: 'Person 5',
      role: 'Role 5',
      image: '/images/committee/person-5.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 6,
      name: 'Person 6',
      role: 'Role 6',
      image: '/images/committee/person-6.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 7,
      name: 'Person 7',
      role: 'Role 7',
      image: '/images/committee/person-7.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 8,
      name: 'Person 8',
      role: 'Role 8',
      image: '/images/committee/person-8.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 9,
      name: 'Person 9',
      role: 'Role 9',
      image: '/images/committee/person-9.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 10,
      name: 'Person 10',
      role: 'Role 10',
      image: '/images/committee/person-10.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 11,
      name: 'Person 11',
      role: 'Role 11',
      image: '/images/committee/person-11.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 12,
      name: 'Person 12',
      role: 'Role 12',
      image: '/images/committee/person-12.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 13,
      name: 'Person 13',
      role: 'Role 13',
      image: '/images/committee/person-13.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 14,
      name: 'Person 14',
      role: 'Role 14',
      image: '/images/committee/person-14.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 15,
      name: 'Person 15',
      role: 'Role 15',
      image: '/images/committee/person-15.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 16,
      name: 'Person 16',
      role: 'Role 16',
      image: '/images/committee/person-16.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 17,
      name: 'Person 17',
      role: 'Role 17',
      image: '/images/committee/person-17.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 18,
      name: 'Person 18',
      role: 'Role 18',
      image: '/images/committee/person-18.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 19,
      name: 'Person 19',
      role: 'Role 19',
      image: '/images/committee/person-19.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 20,
      name: 'Person 20',
      role: 'Role 20',
      image: '/images/committee/person-20.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

    {
      id: 21,
      name: 'Person 21',
      role: 'Role 21',
      image: '/images/committee/person-21.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-2',
    },

    {
      id: 22,
      name: 'Person 22',
      role: 'Role 22',
      image: '/images/committee/person-22.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-2',
    },

  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + cards.length) % cards.length
    )
  }

  useEffect(() => {

    const handleScroll = () => {

      const committee = document.querySelector(
        '.mobile-committee-trigger'
      )

      if (!committee || areCardsVisible) return

      const rect = committee.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top <= vh * 0.7) {
        setAreCardsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [areCardsVisible])

  const currentCard = cards[currentIndex]
  const backCard = cards[(currentIndex + 1) % cards.length]

  return (

    <section className="committee-mobile relative w-full h-[475px] overflow-hidden isolate">

      {/* =========================
          BACKGROUND
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
          MOBILE ARTBOARD
          ========================= */}

      <div
        className="
          mobile-committee-trigger
          relative
          z-10
          mx-auto
          w-[320px]
          h-[475px]
          overflow-visible
        "
      >

        {/* =========================
            CARDS AREA
            ========================= */}

        <div
          className="
            absolute
            top-[100px]
            left-0
            w-[320px]
            h-[225px]
            overflow-visible
          "
        >

          {/* =========================
              BACK CARD
              ========================= */}

          <div
            className={`
              absolute
              top-[16px]
              left-[27px]
              w-[290px]
              h-[225px]
              bg-[#f2e2d3]
              border-[4px]
              border-white
              shadow-[0_8px_16px_rgba(0,0,0,0.3)]
              ${backCard.angle}
              committee-mobile-back-card
              ${areCardsVisible ? 'animate' : ''}
            `}
          />

          {/* =========================
              FRONT CARD
              ========================= */}

          <div
            className={`
              absolute
              top-0
              left-[15px]
              w-[290px]
              h-[225px]
              bg-[#f2e2d3]
              border-[4px]
              border-white
              shadow-[0_8px_16px_rgba(0,0,0,0.3)]
              ${currentCard.angle}
              scale-[0.98]
              overflow-hidden
              committee-mobile-front-card
              ${areCardsVisible ? 'animate' : ''}
            `}
          >

            {/* =========================
                PERSON IMAGE
                ========================= */}

            <div
              className="
                absolute
                left-[7px]
                top-[7px]
                w-[104px]
                h-[203px]
                overflow-hidden
                p-[5px]
              "
            >

              <img
                src={currentCard.image}
                alt={currentCard.name}
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-sm
                "
              />

            </div>

            {/* =========================
                RIGHT SIDE
                ========================= */}

            <div
              className="
                absolute
                right-[7px]
                top-[5px]
                w-[160px]
                h-[205px]
                flex
                flex-col
                pt-[4px]
                pb-[5px]
                px-[5px]
              "
            >

              {/* =========================
                  NAME / ROLE / STAMP
                  ========================= */}

              <div
                className="
                  relative
                  flex
                  items-start
                  w-full
                  min-h-[50px]
                "
              >

                {/* NAME + ROLE */}

                <div
                  className="
                    flex-1
                    text-center
                    min-w-0
                    pr-[3px]
                  "
                >

                  <h2
                    className="
                      bodoni-flf
                      font-bold
                      text-[#254c3a]
                      text-[15px]
                      leading-[0.9]
                      uppercase
                      break-words
                    "
                  >
                    {currentCard.name}
                  </h2>

                  <p
                    className="
                      font-body
                      font-bold
                      text-[#254c3a]
                      text-[6px]
                      mt-[3px]
                      uppercase
                      tracking-wide
                      leading-[1]
                    "
                  >
                    {currentCard.role}
                  </p>

                </div>

                {/* STAMP */}

                <div
                  className="
                    w-[42px]
                    h-[49px]
                    shrink-0
                    ml-[3px]
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
                  mt-[2px]
                  w-full
                  flex-1
                  flex
                  items-start
                  justify-center
                  overflow-hidden
                "
              >

                <p
                  className="
                    font-body
                    font-bold
                    text-[#254c3c]
                    text-[7px]
                    leading-[1.2]
                    text-center
                    whitespace-pre-line
                  "
                >
                  {currentCard.description}
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              LEFT ARROW
              ========================= */}

          <button
            onClick={prevSlide}
            className="
              absolute
              left-[-1px]
              top-[91px]
              z-30
              text-[#f2eae0]
              text-[42px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[24px]
              h-[45px]
              flex
              items-center
              justify-center
            "
            aria-label="Previous committee"
          >
            ‹
          </button>

          {/* =========================
              RIGHT ARROW
              ========================= */}

          <button
            onClick={nextSlide}
            className="
              absolute
              right-[-1px]
              top-[91px]
              z-30
              text-[#f2eae0]
              text-[42px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[24px]
              h-[45px]
              flex
              items-center
              justify-center
            "
            aria-label="Next committee"
          >
            ›
          </button>

        </div>

        {/* =========================
            COMMITTEE TITLE
            ========================= */}

        <div
          className="
            absolute
            left-0
            bottom-[18px]
            w-[320px]
            z-10
            text-center
          "
        >

          <h1
            className="
              font-display
              font-black
              text-[#f2eae0]
              text-[47px]
              leading-[0.85]
              tracking-[-0.055em]
              uppercase
              whitespace-nowrap
              drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]
            "
          >
            COMMITTEE
          </h1>

        </div>

      </div>

      {/* =========================
          ANIMATIONS
          ========================= */}

      <style>{`

        .committee-mobile-back-card {
          opacity: 0;
          transform: translateX(-100vw);
        }

        .committee-mobile-front-card {
          opacity: 0;
          transform: translateX(100vw);
        }

        @keyframes committeeMobileSlideLeft {

          0% {
            opacity: 0;
            transform: translateX(-100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(8px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes committeeMobileSlideRight {

          0% {
            opacity: 0;
            transform: translateX(100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(-8px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        .committee-mobile-back-card.animate {
          animation:
            committeeMobileSlideLeft
            0.8s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .committee-mobile-front-card.animate {
          animation:
            committeeMobileSlideRight
            0.8s
            0.15s
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

          .committee-mobile-back-card,
          .committee-mobile-front-card {
            opacity: 1;
            transform: none;
            animation: none;
          }

        }

      `}</style>

    </section>
  )
}

export default CommitteeMobile