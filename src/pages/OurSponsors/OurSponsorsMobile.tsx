import React, { useEffect, useRef, useState } from "react";

const rightSponsors = [
  {
    number: 1,
    text: "Rajas 10%",
  },
  {
    number: 2,
    text: "Charcos 25%",
  },
  {
    number: 3,
    text: "Abu Bakr 10%",
  },
  {
    number: 4,
    text: "Cheatdaze 15%",
  },
  {
    number: 5,
    text: "Fluffy Fluffy 15%",
  },
  {
    number: 6,
    text: "HFC 15%",
  },
  {
    number: 7,
    text: "Chaai 20%",
  },
  {
    number: 8,
    text: "Birria Boyz 15%",
  },
  {
    number: 9,
    text: "Juice Glow 15%",
  },
];

const leftSponsors = [
  {
    number: 11,
    text: "Reforma 20%",
  },
  {
    number: 12,
    text: "Ruya 10%",
  },
  {
    number: 13,
    text: "Cafe 1977",
  },
  {
    number: 14,
    text: "Tehreems Kitchen 10%",
  },
  {
    number: 15,
    text: "Haute Dolci 15%",
  },
  {
    number: 16,
    text: "Nove Studio 20%",
  },
  {
    number: 17,
    text: "Blend",
  },
  {
    number: 18,
    text: "AURA 10%",
  },
  {
    number: 19,
    text: "Mr Su's",
  },
];

const OurSponsorsMobile = () => {

  const [isTitleVisible, setIsTitleVisible] = useState(false)
  const [isArrowVisible, setIsArrowVisible] = useState(false)

  const titleRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {

    const handleScroll = () => {

      const vh = window.innerHeight

      if (titleRef.current && !isTitleVisible) {
        const rect = titleRef.current.getBoundingClientRect()
        if (rect.top <= vh * 0.85) {
          setIsTitleVisible(true)
        }
      }

      if (arrowRef.current && !isArrowVisible) {
        const rect = arrowRef.current.getBoundingClientRect()
        if (rect.top <= vh * 0.85) {
          setIsArrowVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [isTitleVisible, isArrowVisible])

  return (
    <main
      className="
        relative
        w-full
        h-[480px]
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/images/OurSponsors/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* =====================================================
          420px MOBILE ARTBOARD
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          w-[420px]
          h-[480px]
          overflow-hidden
          translate-y-[-10px]
        "
      >

        {/* =====================================================
            TITLE — slides in from LEFT
        ====================================================== */}
        <h1
          ref={titleRef}
          className={`
            absolute
            left-[27px]
            top-[72px]
            z-20
            w-[180px]
            m-0
            p-0
            text-right
            text-[35px]
            font-bold
            uppercase
            leading-[0.76]
            tracking-[-0.045em]
            text-[#1f513f]
            sponsors-slide
            ${isTitleVisible ? 'sponsors-slide-in' : 'sponsors-slide-left'}
          `}
          style={{
            fontFamily: "'Bodoni FLF', serif",
          }}
        >
          <span className="block">
            OUR
          </span>

          <span className="block">
            SPONSORS
          </span>
        </h1>


        {/* =====================================================
            RIGHT SPONSORS
        ====================================================== */}
        <section
          className="
            absolute
            left-[215px]
            top-[73px]
            z-20
            w-[198px]
          "
        >
          <div className="flex flex-col">

            {rightSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[29px]
                  w-full
                  items-center
                  gap-[6px]
                "
              >

                {/* NUMBER */}
                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[25px]
                    w-[25px]
                    shrink-0
                    object-contain
                  "
                />

                {/* TEXT */}
                <p
                  className="
                    m-0
                    whitespace-nowrap
                    text-[15px]
                    font-bold
                    leading-none
                    tracking-[-0.045em]
                    text-[#1f513f]
                  "
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {sponsor.text}
                </p>

              </div>
            ))}

          </div>
        </section>


        {/* =====================================================
            LEFT SPONSORS
        ====================================================== */}
        <section
          className="
            absolute
            left-[8px]
            top-[136px]
            z-20
            w-[198px]
          "
        >
          <div className="flex flex-col">

            {leftSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[34px]
                  w-full
                  items-center
                  justify-end
                  gap-[6px]
                "
              >

                {/* TEXT */}
                <p
                  className="
                    m-0
                    whitespace-nowrap
                    text-right
                    text-[15px]
                    font-bold
                    leading-none
                    tracking-[-0.045em]
                    text-[#1f513f]
                  "
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {sponsor.text}
                </p>

                {/* NUMBER */}
                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[25px]
                    w-[25px]
                    shrink-0
                    object-contain
                  "
                />

              </div>
            ))}

          </div>
        </section>


        {/* =====================================================
            BOTTOM ARROWS — slides in from RIGHT
        ====================================================== */}
        <img
          ref={arrowRef}
          src="/images/OurSponsors/arrows.png"
          alt=""
          className={`
            absolute
            left-[205px]
            top-[334px]
            rotate-[-15deg]
            z-10
            w-[99px]
            object-contain
            sponsors-slide
            ${isArrowVisible ? 'sponsors-slide-in' : 'sponsors-slide-right'}
          `}
        />

      </div>

      {/* =====================================================
          SLIDE-IN ANIMATION STYLES
          ===================================================== */}
      <style>{`

        .sponsors-slide {
          opacity: 0;
          transition:
            opacity 0.7s ease-out,
            translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sponsors-slide-left {
          translate: -120vw 0;
        }

        .sponsors-slide-right {
          translate: 120vw 0;
        }

        .sponsors-slide-in {
          opacity: 1;
          translate: 0 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsors-slide {
            opacity: 1 !important;
            translate: 0 0 !important;
            transition: none !important;
          }
        }

      `}</style>

    </main>
  );
};

export default OurSponsorsMobile;