import React, { useEffect, useRef, useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

const Resources = () => {
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const socialEl = socialRef.current;
    const imageEl = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === socialEl) {
            setIsSocialVisible(true);
          } else if (entry.target === imageEl) {
            setIsImageVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (socialEl) observer.observe(socialEl);
    if (imageEl) observer.observe(imageEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="resources-section relative min-h-screen w-full overflow-hidden bg-[#f2eae0]">

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}
      <style>{`
        /* =========================
           SOFT SHAKE-IN (for social icons)
           ========================= */

        @keyframes resourcesShakeIn {
          0% {
            opacity: 0;
            transform: scale(0.85) rotate(-6deg);
          }

          45% {
            opacity: 1;
            transform: scale(1.05) rotate(3deg);
          }

          70% {
            transform: scale(0.98) rotate(-1.5deg);
          }

          88% {
            transform: scale(1.01) rotate(0.5deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* =========================
           SLIDE-IN FROM RIGHT (for the image)
           ========================= */

        @keyframes resourcesSlideIn {
          0% {
            opacity: 0;
            transform: translateX(120vw);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .resources-shake {
          opacity: 0;
        }

        .resources-shake.resources-shake-in {
          animation:
            resourcesShakeIn
            0.5s
            cubic-bezier(0.34, 1.2, 0.64, 1)
            forwards;
        }

        .resources-slide {
          opacity: 0;
        }

        .resources-slide.resources-slide-in {
          animation:
            resourcesSlideIn
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .resources-shake,
          .resources-slide {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      {/* =====================================================
          FULL-WIDTH BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/Resources/background.png')",
        }}
      />

      {/* =====================================================
          MASTER CANVAS
      ====================================================== */}

      <div className="relative z-10 flex w-full justify-center">

        <MasterCanvas>

          <div
            className="
              relative
              h-[900px]
              w-[1460px]
              overflow-hidden
            "
          >

            {/* =====================================================
                SOCIAL MEDIA — shake-in with staggered delays
            ====================================================== */}

            <div
              ref={socialRef}
              className="
                resources-social
                absolute
                left-[76px]
                top-[29px]
                z-40
                flex
                flex-col
                items-center
                gap-[20px]
              "
            >

              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
                style={{ animationDelay: '0.05s' }}
                className={`
                  resources-shake
                  ${isSocialVisible ? "resources-shake-in" : ""}
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[62px] w-[62px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* TIKTOK */}

              <a
                href="#"
                aria-label="TikTok"
                style={{ animationDelay: '0.15s' }}
                className={`
                  resources-shake
                  ${isSocialVisible ? "resources-shake-in" : ""}
                  flex
                  flex-col
                  items-center
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[56px] w-[56px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.43a6.27 6.27 0 1 0 5.45 6.24V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69z" />
                </svg>

                <span className="mt-2 text-[16px] font-semibold leading-none">
                  TikTok
                </span>
              </a>

              {/* FACEBOOK */}

              <a
                href="#"
                aria-label="Facebook"
                style={{ animationDelay: '0.25s' }}
                className={`
                  resources-shake
                  ${isSocialVisible ? "resources-shake-in" : ""}
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[62px] w-[62px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                  />

                  <path
                    d="M13.5 18v-5h1.75l.25-2h-2v-1.28c0-.58.16-.97 1-.97h1.08V6.95c-.19-.03-.84-.08-1.6-.08-1.59 0-2.68.97-2.68 2.75V11H9.5v2h1.8v5h2.2z"
                    fill="#f2eae0"
                  />
                </svg>
              </a>

            </div>


            {/* =====================================================
                USTAADH AKEEL — static
            ====================================================== */}

            <div
              className="
                resources-copy
                absolute
                left-[175px]
                top-[31px]
                z-30
                w-[820px]
                text-left
                text-[#60785e]
              "
            >

              <h2
                className="
                  m-0
                  text-[42px]
                  font-bold
                  uppercase
                  leading-[0.9]
                  tracking-[-0.05em]
                "
                style={{
                  fontFamily: "'Bodoni FLF', serif",
                }}
              >
                USTAADH AKEEL JERAAL
              </h2>

              <p
                className="
                  m-0
                  mt-[8px]
                  text-[22px]
                  font-bold
                  leading-[1.15]
                "
              >
                Muslim Chaplain, University of Leeds.
              </p>

              <p
                className="
                  m-0
                  mt-[12px]
                  max-w-[750px]
                  text-[20px]
                  font-medium
                  leading-[1.4]
                  tracking-[-0.015em]
                "
              >
                Akeel is here to support Muslim students with questions
                around prayer, fasting, faith, university life,
                homesickness, personal challenges, or simply for a
                confidential chat.
              </p>

              <p
                className="
                  m-0
                  mt-[12px]
                  text-[18px]
                  font-bold
                  leading-[1.3]
                "
              >
                Office: LUU GR.20
                <br />
                TEMP EMAIL: [ADD TEMP EMAIL]
                <br />
                TEMP MOBILE: [ADD TEMP MOBILE]
              </p>

            </div>


            {/* =====================================================
                FRESHERS GUIDE — static
            ====================================================== */}

            <img
              src="/images/Resources/isocguide.png"
              alt="ISOC Freshers Guide"
              className="
                absolute
                right-[44px]
                top-[34px]
                z-40
                w-[234px]
                rotate-[4deg]
                object-contain
                drop-shadow-[5px_7px_4px_rgba(0,0,0,0.2)]
              "
            />


            {/* =====================================================
                SISTER JAAN — static
            ====================================================== */}

            <div
              className="
                resources-copy-right
                absolute
                left-[700px]
                top-[400px]
                z-30
                w-[520px]
                text-left
                text-[#60785e]
              "
            >

              <h2
                className="
                  m-0
                  text-[42px]
                  font-bold
                  uppercase
                  leading-[0.9]
                  tracking-[-0.05em]
                "
                style={{
                  fontFamily: "'Bodoni FLF', serif",
                }}
              >
                SISTER JAAN
              </h2>

              <p
                className="
                  m-0
                  mt-[8px]
                  text-[22px]
                  font-bold
                  leading-[1.15]
                "
              >
                Muslim Student Advisor.
              </p>

              <p
                className="
                  m-0
                  mt-[12px]
                  max-w-[480px]
                  text-[20px]
                  font-medium
                  leading-[1.4]
                  tracking-[-0.015em]
                "
              >
                Jaan supports Muslim students with faith, wellbeing,
                relationships and academic or personal challenges,
                helping students balance religious duties with
                university life.
              </p>

              <p
                className="
                  m-0
                  mt-[12px]
                  text-[18px]
                  font-bold
                  leading-[1.3]
                "
              >
                Emmanuel Centre
                <br />
                j.malik@leeds.ac.uk
                <br />
                07543800508
              </p>

            </div>


            {/* =====================================================
                SPEAKERPHONE + NOTEPAD — static
            ====================================================== */}

            <img
              src="/images/Resources/speakerphoneandnotepad.png"
              alt=""
              className="
                absolute
                bottom-[18px]
                left-[44px]
                z-20
                w-[642px]
                rotate-[-1deg]
                object-contain
              "
            />


            {/* =====================================================
                IMAGE — slides in from the right on scroll
            ====================================================== */}

            <img
              ref={imageRef}
              src="public/images/silly-imgs/theone.jpg"
              alt=""
              className={`
                resources-slide
                ${isImageVisible ? "resources-slide-in" : ""}
                absolute
                right-[54px]
                top-[410px]
                z-20
                h-[230px]
                w-[212px]
                rounded-[12px]
                object-cover
              `}
            />


            {/* =====================================================
                RESOURCES TITLE — static
            ====================================================== */}

            <div
              className="
                resources-title
                absolute
                bottom-[54px]
                right-[73px]
                z-40
                w-[759px]
              "
            >

              <h1
                className="
                  whitespace-nowrap
                  text-right
                  text-[128.5px]
                  font-bold
                  uppercase
                  leading-[0.75]
                  tracking-[-0.05em]
                  text-[#60785e]
                "
                style={{
                  fontFamily: "'Bodoni FLF', serif",
                }}
              >
                RESOURCES
              </h1>

            </div>

          </div>

        </MasterCanvas>

      </div>

    </section>
  );
};

export default Resources;