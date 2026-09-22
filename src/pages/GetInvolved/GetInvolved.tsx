import { useEffect, useRef, useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

export default function GetInvolved() {
  const arrowRef = useRef(null);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    const el = arrowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsArrowVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
        className="get-involved-page relative w-full overflow-hidden "
      style={{
        backgroundImage:
          "url('/images/FAQ/Welcome%20To%20Website.png')",
      }}
    >

      {/* =====================================================
          ARROW SLIDE-IN ANIMATION
      ====================================================== */}
      <style>{`
        @keyframes getInvolvedArrowSlide {
          0% {
            opacity: 0;
            transform: translateX(180px) rotate(-3deg);
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(-3deg);
          }
        }

        .get-involved-arrow-slide {
          opacity: 0;
        }

        .get-involved-arrow-slide.get-involved-arrow-slide-in {
          animation:
            getInvolvedArrowSlide
            1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .get-involved-arrow-slide {
            opacity: 1;
            transform: rotate(-3deg);
            animation: none;
          }
        }
      `}</style>

      {/* =====================================================
          MASTER CANVAS
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">

        <MasterCanvas>

          <div
            className="
              get-involved-artboard
              relative
              h-[900px]
              w-[1460px]
              overflow-hidden
            "
          >

            {/* =====================================================
                LEFT 50% — COLLAGE
            ====================================================== */}

            <div
              className="
                get-involved-collage
                absolute
                left-0
                top-0
                h-[900px]
                w-[730px]
              "
            >
              <img
                src="/images/GetInvolved/collage.png"
                alt="Leeds Islamic Society collage"
                className="
                  absolute
                  left-[22px]
                  top-[72px]
                  z-20
                  w-[730px]
                  object-contain
                "
              />
            </div>

            {/* =====================================================
                RIGHT 50% — CONTENT
            ====================================================== */}

            <div
              className="
                get-involved-content
                absolute
                right-0
                top-0
                h-[900px]
                w-[730px]
              "
            >

              {/* =====================================================
                  GET INVOLVED TITLE
              ====================================================== */}

              <h1
                className="
                  absolute
                  left-[58px]
                  top-[81px]
                  z-30
                  w-[613px]
                  text-[120px]
                  font-bold
                  uppercase
                  leading-[0.86]
                  tracking-[-0.045em]
                  text-[#f7f2e8]
                "
                style={{
                  fontFamily: "'Bodoni FLF', serif",
                }}
              >
                <span className="block">
                  GET
                </span>

                <span className="block">
                  INVOLVED
                </span>
              </h1>

              {/* =====================================================
                  LARGE ARROW — slides in from right on scroll
              ====================================================== */}

              <img
                ref={arrowRef}
                src="/images/GetInvolved/arrow.png"
                alt=""
                className={`
                  get-involved-arrow-slide
                  ${isArrowVisible ? "get-involved-arrow-slide-in" : ""}
                  absolute
                  left-[285px]
                  top-[351px]
                  z-30
                  w-[183px]
                  object-contain
                `}
              />

              {/* =====================================================
                  BOTTOM OPTIONS
              ====================================================== */}

              <div
                className="
                  get-involved-options
                  absolute
                  bottom-[81px]
                  left-[51px]
                  z-30
                  flex
                  w-[628px]
                  items-center
                  justify-between
                  gap-[29px]
                "
              >

                {/* MEMBERSHIPS */}

                <div className="relative w-[299px]">

                  <img
                    src="/images/GetInvolved/ripped-paper.png"
                    alt=""
                    className="
                      block
                      w-full
                      object-contain
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      px-2
                      text-[29px]
                      font-semibold
                      uppercase
                      leading-none
                      text-[#1F4D3B]
                    "
                    style={{
                      fontFamily: "'Bodoni FLF', serif",
                    }}
                  >
                    Memberships
                  </span>

                </div>

                {/* VOLUNTEERING */}

                <div className="relative w-[299px]">

                  <img
                    src="/images/GetInvolved/ripped-paper.png"
                    alt=""
                    className="
                      block
                      w-full
                      object-contain
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      px-2
                      text-[29px]
                      font-semibold
                      uppercase
                      leading-none
                      text-[#1F4D3B]
                    "
                    style={{
                      fontFamily: "'Bodoni FLF', serif",
                    }}
                  >
                    Volunteering
                  </span>

                </div>

              </div>

            </div>

          </div>

        </MasterCanvas>

      </div>

    </main>
  );
}