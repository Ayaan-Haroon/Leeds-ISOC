import { useEffect, useRef, useState } from 'react'

const mosques = [
  {
    name: "LEEDS GRAND MOSQUE",
    image: "/images/home/isocbitstrans/lgm.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Leeds+Grand+Mosque%2C+Leeds",
    details: [
      "Approx. 18-minute walk from Parkinson’s steps.",
      "Bus 56 from Leeds University (Bus Stop E) → Hyde Park Road → approx. 6-minute walk.",
    ],
  },
  {
    name: "MAKKAH MASJID",
    image: "/images/home/isocbitstrans/makkah-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Makkah+Masjid%2C+Leeds",
    details: [
      "Approx. 20-minute walk from Parkinson’s.",
      "Bus 56 from Leeds University (Bus Stop E) → Royal Park Road → approx. 4-minute walk.",
    ],
  },
  {
    name: "MAKKI MASJID",
    image: "/images/home/stickers-n-that/makki-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Makki+Masjid%2C+Leeds",
    details: [
      "Approx. 21-minute walk from Parkinson’s steps.",
      "Bus 56 from Leeds University (Bus Stop E) → Hyde Park Road → approx. 4-minute walk.",
    ],
  },
  {
    name: "LINCOLN GREEN MOSQUE",
    image: "/images/home/isocbitstrans/lincoln-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Lincoln+Green+Mosque%2C+Leeds",
    details: [
      "Approx. 35-minute walk from Parkinson’s.",
      "Bus 8 from Leeds University (Bus Stop A) → Headrow → Lincoln Green Centre → approx. 4-minute walk.",
    ],
  },
]

const MapsMobile = () => {
  const [areMapCardsVisible, setAreMapCardsVisible] = useState(false)
  const [isTitleVisible, setIsTitleVisible] = useState(false)

  const mapCardsRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight

      if (titleRef.current && !isTitleVisible) {
        const rect = titleRef.current.getBoundingClientRect()

        if (rect.top <= vh * 0.85) {
          setIsTitleVisible(true)
        }
      }

      if (mapCardsRef.current && !areMapCardsVisible) {
        const rect = mapCardsRef.current.getBoundingClientRect()

        if (rect.top <= vh * 0.7) {
          setAreMapCardsVisible(true)
        }
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [areMapCardsVisible, isTitleVisible])

  return (
    <section
      className="
        maps-mobile
        relative
        isolate
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        p-0
        m-0
      "
    >

      {/* FULL VIEWPORT GRAIN / BACKGROUND */}
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* MOBILE ARTBOARD */}
      <div
        className="
          relative
          z-10
          m-0
          h-[800px]
          w-[378px]
          max-w-none
          overflow-visible
          p-0
        "
      >

        {/* =====================================================
            SECTION 1 — MOSQUE LIST + TITLE (FLOW LAYOUT)
            ===================================================== */}

        <div className="relative m-0 flex h-[680px] w-full flex-col items-center overflow-visible p-0">

          {/* FOUR MOSQUES — 2×2 grid */}
          <div
            className="
              m-0
              mt-[50px]
              grid
              w-[350px]
              grid-cols-2
              gap-x-[12px]
              gap-y-[14px]
              p-0
            "
          >
            {mosques.map((mosque) => (
              <div
                key={mosque.name}
                className="m-0 flex min-w-0 gap-[7px] p-0"
              >
                <a
                  href={mosque.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-0 block shrink-0 p-0"
                >
                  <img
                    src={mosque.image}
                    alt={mosque.name}
                    className="
                      m-0
                      h-[42px]
                      w-[42px]
                      rounded-full
                      border-[1px]
                      border-[#f2eae0]
                      object-cover
                      p-0
                    "
                  />
                </a>

                <div className="m-0 min-w-0 p-0 font-body text-[#f2eae0]">
                  <a
                    href={mosque.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-0 block p-0"
                  >
                    <h2 className="m-0 mb-[3px] p-0 text-[15px] font-bold uppercase leading-[1.05]">
                      {mosque.name}
                    </h2>
                  </a>

                  <ul className="m-0 list-disc space-y-[2px] pl-[8px] text-[10.5px] leading-[1.25]">
                    {mosque.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* MOSQUES & MAPS TITLE — now flows naturally, centered */}
         <div
  ref={titleRef}
  className={`
    absolute
    left-1/2
    top-[330px]
    m-0
    flex
    w-full
    justify-center
    p-0
    maps-title-slide
    ${isTitleVisible ? 'maps-title-in' : 'maps-title-left'}
  `}
>
            <h1
              className="
                m-0
                whitespace-nowrap
                p-0
                text-center
                font-display
                text-[42px]
                font-bold
                uppercase
                leading-[0.75]
                tracking-[-3px]
                text-[#f2eae0]
                drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]
              "
            >
              MOSQUES &amp; MAPS
            </h1>
          </div>

        </div>

        {/* =====================================================
            SECTION 2 — MAP CARD STACK
            ===================================================== */}

        <div
          ref={mapCardsRef}
          className="
            absolute
            bottom-[75px]
            left-1/2
            m-0
            h-[245px]
            w-[362px]
            -translate-x-1/2
            overflow-visible
            p-0
          "
        >

          {/* BACK PAPER */}
          <div
            className={`
              absolute
              inset-0
              m-0
              bg-[#f2eae0]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              -rotate-2
              maps-mobile-back-card
              ${areMapCardsVisible ? 'animate' : ''}
            `}
          />

          {/* FRONT PAPER */}
          <div
            className={`
              absolute
              inset-0
              m-0
              overflow-hidden
              bg-[#f2eae0]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              rotate-2
              maps-mobile-front-card
              ${areMapCardsVisible ? 'animate' : ''}
            `}
          >
            <div className="absolute inset-0 m-0 flex items-center justify-center p-[8px]">
              <img
                src="/images/home/isocbitstrans/leeds-map.png"
                alt="Map of Leeds"
                className="m-0 h-full w-full object-contain p-0"
              />
            </div>
          </div>

        </div>
      </div>

      {/* =========================
          ANIMATIONS
          ========================= */}

      <style>{`

        .maps-title-slide {
          opacity: 0;
          transition:
            opacity 0.7s ease-out,
            translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /*
          FIX:
          The title now translates based on its own width (-120%),
          not the full viewport width (-100vw). This keeps it visually
          anchored to the artboard and prevents it from flying too far
          off-screen during the slide-in.
        */
        .maps-title-left {
          translate: -120% 0;
        }

        .maps-title-in {
          opacity: 1;
          translate: 0 0;
        }

        .maps-mobile-back-card {
          opacity: 0;
          transform: translateX(-100vw);
        }

        .maps-mobile-front-card {
          opacity: 0;
          transform: translateX(100vw);
        }

        @keyframes mapsMobileSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(-100vw) rotate(-2deg);
          }

          70% {
            opacity: 1;
            transform: translateX(8px) rotate(-2deg);
          }

          100% {
            opacity: 1;
            transform: translateX(0) rotate(-2deg);
          }
        }

        @keyframes mapsMobileSlideRight {
          0% {
            opacity: 0;
            transform: translateX(100vw) rotate(2deg);
          }

          70% {
            opacity: 1;
            transform: translateX(-8px) rotate(2deg);
          }

          100% {
            opacity: 1;
            transform: translateX(0) rotate(2deg);
          }
        }

        .maps-mobile-back-card.animate {
          animation:
            mapsMobileSlideLeft
            0.8s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .maps-mobile-front-card.animate {
          animation:
            mapsMobileSlideRight
            0.8s
            0.15s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .maps-title-slide,
          .maps-mobile-back-card,
          .maps-mobile-front-card {
            opacity: 1 !important;
            transform: none !important;
            translate: 0 0 !important;
            animation: none !important;
          }
        }

      `}</style>

    </section>
  )
}

export default MapsMobile