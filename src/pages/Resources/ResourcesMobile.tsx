import React, { useEffect, useRef, useState } from "react";

const ResourcesMobile = () => {
  const catRef = useRef(null);
  const [isCatVisible, setIsCatVisible] = useState(false);

  useEffect(() => {
    const el = catRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCatVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full h-[780px] overflow-hidden isolate bg-[#f2eae0] flex items-center justify-center">

      {/* =====================================================
          SLIDE-IN ANIMATION
      ====================================================== */}
      <style>{`
        @keyframes catSlideIn {
          0% {
            opacity: 0;
            transform: translateX(120px) rotate(6deg);
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        .cat-slide {
          opacity: 0;
        }

        .cat-slide.cat-slide-in {
          animation:
            catSlideIn
            1s
            cubic-bezier(0.16, 1, 0.3, 1)
            0s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .cat-slide {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND
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
          360px MOBILE ARTBOARD
      ===================================================== */}
      <div
        className="
          relative
          z-10
          w-[360px]
          h-[730px]
          overflow-hidden
        "
      >

        {/* =====================================================
            USTAADH AKEEL — TOP LEFT
        ===================================================== */}
        <div
          className="
            absolute
            left-[10px]
            top-[30px]
            z-20
            w-[160px]
            text-left
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[22px]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            USTAADH AKEEL
            <br />
            JERAAL
          </h2>

          <p
            className="
              m-0
              mt-[14px]
              text-[13px]
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
              text-[12px]
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
              text-[12px]
              font-bold
              leading-[1.35]
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
            SISTER JAAN — BOTTOM RIGHT
        ===================================================== */}
        <div
          className="
            absolute
            right-[11px]
            top-[130px]
            z-20
            w-[160px]
            text-right
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[22px]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            SISTER JAAN
          </h2>

          <p
            className="
              m-0
              mt-[14px]
              text-[13px]
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
              text-[12px]
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
              text-[12px]
              font-bold
              leading-[1.35]
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
            RESTAURANT RECOMMENDATIONS
        ===================================================== */}
        <div
          className="
            absolute
            left-[10px]
            top-[405px]
            z-20
            grid
            w-[340px]
            grid-cols-3
            gap-x-[8px]
            text-[#60785e]
          "
        >

          {/* COLUMN 1 */}
          <div className="min-w-0">
            <p className="m-0 text-[11px] font-bold leading-[1.4]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              CHAI WALA —
              <br />
              Café
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="min-w-0">
            <p className="m-0 text-[11px] font-bold leading-[1.4]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              CHAI WALA —
              <br />
              Café
            </p>
          </div>

          {/* COLUMN 3 */}
          <div className="min-w-0">
            <p className="m-0 text-[11px] font-bold leading-[1.4]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              CHAI WALA —
              <br />
              Café
            </p>
          </div>

        </div>


        {/* =====================================================
            CAT IMAGE — slides in from the right on scroll
        ===================================================== */}

        <img
          ref={catRef}
          src="public/images/silly-imgs/theone.jpg"
          alt=""
          className={`
            cat-slide
            ${isCatVisible ? "cat-slide-in" : ""}
            absolute
            left-[171px]
            top-[525px]
            z-20
            h-[108px]
            w-[173px]
            rounded-[7px]
            object-cover
          `}
        />


        {/* =====================================================
            SPEAKER STICKER
        ===================================================== */}
        <img
          src="/images/Resources/speakerphoneandnotepad.png"
          alt=""
          className="
            absolute
            left-[-7px]
            top-[500px]
            z-30
            w-[157px]
            rotate-[-1deg]
            object-contain
          "
        />


        {/* =====================================================
            RESOURCES TITLE — BOTTOM CENTRE
        ===================================================== */}
        <div
          className="
            absolute
            left-0
            bottom-[15px]
            w-[360px]
            z-40
            text-center
          "
        >
          <h1
            className="
              m-0
              whitespace-nowrap
              text-[55.5px]
              font-black
              uppercase
              leading-[0.85]
              tracking-[-0.055em]
              text-[#60785e]
              drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]
            "
            style={{
              fontFamily: "'Bodoni FLF', serif",
            }}
          >
            RESOURCES
          </h1>
        </div>

      </div>
    </section>
  );
};

export default ResourcesMobile;