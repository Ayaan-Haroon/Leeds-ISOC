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
      angle: '-rotate-4',
    },

    {
      id: 2,
      name: 'Person 2',
      role: 'Role 2',
      image: '/images/committee/person-2.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 3,
      name: 'Person 3',
      role: 'Role 3',
      image: '/images/committee/person-3.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 4,
      name: 'Person 4',
      role: 'Role 4',
      image: '/images/committee/person-4.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 5,
      name: 'Person 5',
      role: 'Role 5',
      image: '/images/committee/person-5.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 6,
      name: 'Person 6',
      role: 'Role 6',
      image: '/images/committee/person-6.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 7,
      name: 'Person 7',
      role: 'Role 7',
      image: '/images/committee/person-7.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 8,
      name: 'Person 8',
      role: 'Role 8',
      image: '/images/committee/person-8.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 9,
      name: 'Person 9',
      role: 'Role 9',
      image: '/images/committee/person-9.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 10,
      name: 'Person 10',
      role: 'Role 10',
      image: '/images/committee/person-10.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 11,
      name: 'Person 11',
      role: 'Role 11',
      image: '/images/committee/person-11.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 12,
      name: 'Person 12',
      role: 'Role 12',
      image: '/images/committee/person-12.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 13,
      name: 'Person 13',
      role: 'Role 13',
      image: '/images/committee/person-13.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 14,
      name: 'Person 14',
      role: 'Role 14',
      image: '/images/committee/person-14.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 15,
      name: 'Person 15',
      role: 'Role 15',
      image: '/images/committee/person-15.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 16,
      name: 'Person 16',
      role: 'Role 16',
      image: '/images/committee/person-16.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 17,
      name: 'Person 17',
      role: 'Role 17',
      image: '/images/committee/person-17.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 18,
      name: 'Person 18',
      role: 'Role 18',
      image: '/images/committee/person-18.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 19,
      name: 'Person 19',
      role: 'Role 19',
      image: '/images/committee/person-19.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 20,
      name: 'Person 20',
      role: 'Role 20',
      image: '/images/committee/person-20.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
    },

    {
      id: 21,
      name: 'Person 21',
      role: 'Role 21',
      image: '/images/committee/person-21.jpg',
      description: 'Committee member description goes here.',
      angle: '-rotate-4',
    },

    {
      id: 22,
      name: 'Person 22',
      role: 'Role 22',
      image: '/images/committee/person-22.jpg',
      description: 'Committee member description goes here.',
      angle: 'rotate-4',
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

    <section className="committee-mobile relative w-full h-[560px] overflow-hidden isolate flex items-center justify-center">

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
          378 × 560 — centred in the section via flex
          ========================= */}

      <div
        className="
          mobile-committee-trigger
          relative
          z-10
          w-[378px]
          h-[560px]
          overflow-visible
        "
      >

        {/* =========================
            CARDS AREA
            ========================= */}

        <div
          className="
            absolute
            top-[90px]
            left-1/2
            -translate-x-1/2
            w-[362px]
            h-[281px]
            overflow-visible
          "
        >

          {/* =========================
              BACK CARD
              ========================= */}

          <div
            className={`
              absolute
              inset-0
              bg-[#f2e2d3]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
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
              inset-0
              bg-[#f2e2d3]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              ${currentCard.angle}
              scale-[0.96]
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
                left-0
                top-0
                w-[44%]
                h-full
                overflow-hidden
                p-[9px]
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
                right-0
                top-0
                w-[56%]
                h-full
                flex
                flex-col
                pt-[11px]
                pb-[10px]
                px-[9px]
              "
            >

              {/* =========================
                  NAME / ROLE / STAMP
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
                    min-w-0
                    pr-[5px]
                  "
                >

                  <h2
                    className="
                      bodoni-flf
                      font-bold
                      text-[#254c3a]
                      text-[17px]
                      leading-[0.95]
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
                      text-[7.4px]
                      mt-[3.5px]
                      uppercase
                      tracking-wide
                      leading-none
                    "
                  >
                    {currentCard.role}
                  </p>

                </div>

                {/* STAMP */}

                <div
                  className="
                    w-[50px]
                    h-[56px]
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
                  mt-[6px]
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
                    text-[8.3px]
                    leading-[1.25]
                    text-center
                    whitespace-pre-line
                  "
                >
                  {currentCard.description}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            ARROWS — below the cards, centred
            ========================= */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[375px]
            z-30
            flex
            items-center
            justify-center
            gap-[36px]
          "
        >

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              text-[#f2eae0]
              text-[53px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[29px]
              h-[56px]
              flex
              items-center
              justify-center
            "
            aria-label="Previous committee"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              text-[#f2eae0]
              text-[53px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[29px]
              h-[56px]
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
            bottom-[40px]
            w-[378px]
            z-10
            text-center
          "
        >

          <h1
            className="
              font-display
              font-black
              text-[#f2eae0]
              text-[55.5px]
              leading-[0.85]
              tracking-[-0.055em]
              uppercase
              whitespace-nowrap
              drop-shadow-[0_3.5px_5px_rgba(0,0,0,0.6)]
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