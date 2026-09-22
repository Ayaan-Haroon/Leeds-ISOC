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
    image: "public/images/home/isocbitstrans/makki-masjid.jpg",
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
];

const MapsMobile = () => {

  const [areMapCardsVisible, setAreMapCardsVisible] = useState(false)
  const [isTitleVisible, setIsTitleVisible] = useState(false)

  const mapCardsRef = useRef(null)
  const titleRef = useRef(null)

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
    <section className="maps-mobile relative w-full overflow-hidden isolate flex items-center justify-center min-h-screen">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-90 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",

          backgroundPosition: "center",
          backgroundRepeat: "nrepeat",
        }}
      />

      {/* =========================
          MOBILE ARTBOARD
          378 × 560 — matches Committee
          ========================= */}
      <div
        className="
          relative
          z-10
          w-[378px]
          h-[800px]
          overflow-visible
        "
      >

        {/* =====================================================
            SECTION 1 — MOSQUE LIST + TITLE
            ===================================================== */}

        <div className="relative w-full h-[680px] overflow-hidden">

          {/* FOUR MOSQUES — 2×2 grid */}
          <div className="absolute left-[14px] top-[50px] grid w-[350px] grid-cols-2 gap-x-[12px] gap-y-[14px]">

            {mosques.map((mosque) => (
              <div
                key={mosque.name}
                className="flex min-w-0 gap-[7px]"
              >
                {/* MOSQUE IMAGE — GOOGLE MAPS */}
                <a
                  href={mosque.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block shrink-0"
                >
                  <img
                    src={mosque.image}
                    alt={mosque.name}
                    className="h-[42px] w-[42px] rounded-full border-[1px] border-[#f2eae0] object-cover"
                  />
                </a>

                <div className="min-w-0 font-body text-[#f2eae0]">

                  {/* MOSQUE TITLE — GOOGLE MAPS */}
                  <a
                    href={mosque.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="mb-[3px] text-[15px] font-bold uppercase leading-[1.05]">
                      {mosque.name}
                    </h2>
                  </a>

                  <ul className="list-disc space-y-[2px] pl-[8px] text-[10.5px] leading-[1.25]">
                    {mosque.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}

          </div>

          {/* MOSQUES & MAPS TITLE — slides in from LEFT */}
          <div
            ref={titleRef}
            className={`
              absolute
              left-[14px]
              top-[390px]
              w-[350px]
              maps-title-slide
              ${isTitleVisible ? 'maps-title-in' : 'maps-title-left'}
            `}
          >
            <h1 className="whitespace-nowrap text-center font-display text-[42px] font-bold uppercase leading-[0.75] tracking-[-3px] text-[#f2eae0] drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]">
              MOSQUES &amp; MAPS
            </h1>
          </div>

        </div>


        {/* =====================================================
            SECTION 2 — MAP CARD STACK
            Rotation softened from ±4° → ±2°
            ===================================================== */}

        <div
          ref={mapCardsRef}
          className="
            absolute
            bottom-[75px]
            left-1/2
            -translate-x-1/2
            w-[362px]
            h-[245px]
            overflow-visible
          "
        >

          {/* BACK PAPER — rotated -2° */}
          <div
            className={`
              absolute
              inset-0
              bg-[#f2eae0]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              -rotate-2
              maps-mobile-back-card
              ${areMapCardsVisible ? 'animate' : ''}
            `}
          />

          {/* FRONT PAPER — rotated +2° */}
          <div
            className={`
              absolute
              inset-0
              bg-[#f2eae0]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              rotate-2
              overflow-hidden
              maps-mobile-front-card
              ${areMapCardsVisible ? 'animate' : ''}
            `}
          >

            {/* MAP IMAGE — fills the interior */}
            <div className="absolute inset-0 flex items-center justify-center p-[8px]">
              <img
                src="/images/home/isocbitstrans/leeds-map.png"
                alt="Map of Leeds"
                className="w-full h-full object-contain"
              />
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          ANIMATIONS — rotation softened to ±2°
          ========================= */}

      <style>{`

        /* Title slide-in */
        .maps-title-slide {
          opacity: 0;
          transition:
            opacity 0.7s ease-out,
            translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .maps-title-left {
          translate: -120vw 0;
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
  );
};

export default MapsMobile;