import React, { useEffect, useRef, useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

const rightSponsors = [
  {
    number: 1,
    text: "Rajas 10% both city centre and Hype Park",
  },
  {
    number: 2,
    text: "Charcos 25% (£8 up)",
  },
  {
    number: 3,
    text: "Abu Bakr 10% food-to-go and patisserie",
  },
  {
    number: 4,
    text: "Cheatdaze 15%",
  },
  {
    number: 5,
    text: "Fluffy Fluffy 15% (5% more than students)",
  },
  {
    number: 6,
    text: "HFC 15% in Hyde Park",
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
    text: "Reforma 20% - LUU ISLAMIC SOCIETY20",
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
    text: "Tehreems Kitchen 10% (cash only)",
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
    text: "AURA 10% storewide",
  },
  {
    number: 19,
    text: "Mr Su's",
  },
];

export default function OurSponsors() {
  const titleRef = useRef(null);
  const arrowsRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isArrowsVisible, setIsArrowsVisible] = useState(false);

  useEffect(() => {
    const titleEl = titleRef.current;
    const arrowsEl = arrowsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleEl) {
            setIsTitleVisible(true);
          } else if (entry.target === arrowsEl) {
            setIsArrowsVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (titleEl) observer.observe(titleEl);
    if (arrowsEl) observer.observe(arrowsEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
className="sponsors-page relative w-full overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/OurSponsors/background.png')",
      }}
    >
      {/* =====================================================
          SLIDE-IN ANIMATIONS
      ====================================================== */}
      <style>{`
        @keyframes sponsorsTitleSlide {
          0% {
            opacity: 0;
            transform: translateX(-180px);
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes sponsorsArrowsSlide {
          0% {
            opacity: 0;
            transform: translateX(180px);
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .sponsors-title-slide {
          opacity: 0;
        }

        .sponsors-title-slide.sponsors-title-slide-in {
          animation:
            sponsorsTitleSlide
            1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0s
            forwards;
        }

        .sponsors-arrows-slide {
          opacity: 0;
        }

        .sponsors-arrows-slide.sponsors-arrows-slide-in {
          animation:
            sponsorsArrowsSlide
            1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0.15s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsors-title-slide,
          .sponsors-arrows-slide {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div className="sponsors-artboard relative h-[900px] w-[1460px] overflow-hidden">

            {/* =====================================================
                TITLE — slides in from the LEFT
            ====================================================== */}

            <h1
              ref={titleRef}
              className={`
                sponsors-title
                sponsors-title-slide
                ${isTitleVisible ? "sponsors-title-slide-in" : ""}
                absolute
                left-[183px]
                top-[153px]
                z-20
                w-[526px]
                text-right
                text-[91.98px]
                font-bold
                uppercase
                leading-[0.76]
                tracking-[-0.045em]
                text-[#1f513f]
              `}
              style={{
                fontFamily: "'Bodoni FLF', serif",
              }}
            >
              <span className="block">OUR</span>
              <span className="block">SPONSORS</span>
            </h1>

            {/* =====================================================
                RIGHT SIDE — SPONSORS 1–9
            ====================================================== */}

            <section
              className="
                sponsors-list
                absolute
                left-[740px]
                top-[122px]
                z-20
                w-[686px]
              "
            >
              <div className="flex flex-col">
                {rightSponsors.map((sponsor) => (
                  <div
                    key={sponsor.number}
                    className="
                      flex
                      h-[58.5px]
                      w-full
                      items-center
                      gap-[11.7px]
                    "
                  >
                    <img
                      src={`/images/OurSponsors/${sponsor.number}.png`}
                      alt=""
                      className="
                        h-[40.15px]
                        w-[40.15px]
                        shrink-0
                        object-contain
                      "
                    />

                    <p
                      className="
                        whitespace-nowrap
                        text-[29.93px]
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
                LEFT SIDE — SPONSORS 11–19
            ====================================================== */}

            <section
              className="
                sponsors-list
                absolute
                left-[73px]
                top-[319.5px]
                z-20
                w-[664px]
              "
            >
              <div className="flex flex-col">
                {leftSponsors.map((sponsor) => (
                  <div
                    key={sponsor.number}
                    className="
                      flex
                      h-[54.45px]
                      w-full
                      items-center
                      justify-end
                      gap-[11.7px]
                    "
                  >
                    <p
                      className="
                        whitespace-nowrap
                        text-right
                        text-[29.93px]
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

                    <img
                      src={`/images/OurSponsors/${sponsor.number}.png`}
                      alt=""
                      className="
                        h-[40.15px]
                        w-[40.15px]
                        shrink-0
                        object-contain
                      "
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* =====================================================
                BOTTOM ARROWS — slides in from the RIGHT
            ====================================================== */}

            <img
              ref={arrowsRef}
              src="/images/OurSponsors/arrows.png"
              alt=""
              className={`
                sponsors-arrows
                sponsors-arrows-slide
                ${isArrowsVisible ? "sponsors-arrows-slide-in" : ""}
                absolute
                left-[774px]
                top-[661.5px]
                z-10
                w-[248.2px]
                object-contain
              `}
            />

          </div>
        </MasterCanvas>
      </div>
    </main>
  );
}