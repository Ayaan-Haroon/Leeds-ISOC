import { useEffect, useState } from 'react'
import MasterCanvas from '../../components/MasterCanvas'

const Committee = () => {
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
      const committee = document.querySelector('.committee-trigger')

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

  return (
    <section className="committee-section relative isolate w-full overflow-visible">

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

      {/* GRAIN OVERLAY */}
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

      {/* MASTER CANVAS */}
      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div
            className="
              committee-trigger
              relative
              h-[900px]
              w-[1460px]
              overflow-visible
            "
          >

            {/* CARDS AREA */}
            <div
              className="
                committee-cards
                absolute
                inset-0
                -translate-y-[100px]
                overflow-visible
              "
            >

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="
                  absolute
                  left-[102px]
                  top-1/2
                  -translate-y-1/2
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

              {/* CARDS */}
              <div
                className="
                  committee-card
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[800px]
                  h-[495px]
                "
              >

                {/* BACK CARD */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-[#f2e2d3]
                    border-[7px]
                    border-white
                    shadow-[0_12px_24px_rgba(0,0,0,0.3)]
                    ${cards[(currentIndex + 1) % cards.length].angle}
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

                {/* FRONT CARD */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-[#f2e2d3]
                    border-[7px]
                    border-white
                    shadow-[0_12px_24px_rgba(0,0,0,0.3)]
                    ${currentCard.angle}
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

                  {/* LEFT SIDE — PERSON IMAGE */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      w-[336px]
                      h-full
                      overflow-hidden
                      p-6
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

                  {/* RIGHT SIDE — PERSON INFO */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      w-[464px]
                      h-full
                      pr-5
                      pt-7
                      pb-6
                      pl-5
                      flex
                      flex-col
                    "
                  >

                    {/* NAME + ROLE + STAMP */}
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
                            text-[35px]
                            leading-[0.95]
                            uppercase
                            whitespace-nowrap
                          "
                        >
                          {currentCard.name}
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
                          {currentCard.role}
                        </p>
                      </div>

                      {/* STAMP */}
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

                    {/* DESCRIPTION */}
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
                          whitespace-pre-line
                        "
                      >
                        {currentCard.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="
                  absolute
                  right-[102px]
                  top-1/2
                  -translate-y-1/2
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

            {/* TITLE */}
            <div
              className="
                absolute
                bottom-[24px]
                left-0
                w-[1460px]
                z-10
                text-center
              "
            >
              <h1
                className="
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[108.8px]
                  leading-[1.3]
                  uppercase
                  drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]
                "
              >
                COMMITTEE
              </h1>
            </div>

          </div>
        </MasterCanvas>
      </div>
    </section>
  )
}

export default Committee