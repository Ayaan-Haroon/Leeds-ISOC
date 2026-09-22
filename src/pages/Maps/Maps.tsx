import React, { useEffect, useRef, useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

const Maps = () => {
  const titleRef = useRef(null);
  const paperRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isPaperVisible, setIsPaperVisible] = useState(false);

  useEffect(() => {
    const titleEl = titleRef.current;
    const paperEl = paperRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleEl) {
            setIsTitleVisible(true);
          } else if (entry.target === paperEl) {
            setIsPaperVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    if (titleEl) observer.observe(titleEl);
    if (paperEl) observer.observe(paperEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="maps-section relative isolate w-full overflow-hidden">

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}
      <style>{`
        @keyframes mapsTitleSlide {
          0% { opacity: 0; transform: translate(-50%, 60px); }
          60% { opacity: 1; }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }

        @keyframes mapsBackSlide {
          0% { opacity: 0; transform: translateX(-100vw); }
          70% { opacity: 1; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes mapsFrontSlide {
          0% { opacity: 0; transform: translateX(100vw); }
          70% { opacity: 1; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes mapsImageSwing {
          0% {
            opacity: 0;
            transform: translateX(80px) rotate(14deg) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateX(-8px) rotate(-3deg) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        .maps-title-slide {
          opacity: 0;
          transform: translate(-50%, 60px);
        }
        .maps-title-slide.maps-title-slide-in {
          animation: mapsTitleSlide 1s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards;
        }

        .maps-back-paper {
          opacity: 0;
          transform: translateX(-100vw);
        }
        .maps-back-paper.maps-back-paper-in {
          animation: mapsBackSlide 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0s forwards;
        }

        .maps-front-paper {
          opacity: 0;
          transform: translateX(100vw);
        }
        .maps-front-paper.maps-front-paper-in {
          animation: mapsFrontSlide 1s 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .maps-map-image {
          opacity: 0;
        }
        .maps-map-image.maps-map-image-in {
          animation: mapsImageSwing 1.1s 0.35s cubic-bezier(0.34, 1.3, 0.64, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .maps-title-slide,
          .maps-back-paper,
          .maps-front-paper,
          .maps-map-image {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      {/* GRAIN OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-90 mix-blend-multiply"
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* =====================================================
          FIRST HALF — original positions restored
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div className="maps-half relative h-[900px] w-[1460px]">

            {/* MOSQUE INFORMATION — original position + tighter column gap */}
            <div
              className="
                mosque-information
                absolute
                left-0
                top-[135px]
                grid
                w-[900px]
                grid-cols-2
                gap-x-[30px]
                gap-y-[56px]
              "
            >

              {/* LEEDS GRAND MOSQUE */}
              <div className="flex gap-[20px]">
                <div className="h-[79px] w-[79px] shrink-0 overflow-hidden rounded-full border-2 border-[#f2eae0]">
                  <img
                    src="/images/home/isocbitstrans/lgm.jpg"
                    alt="Leeds Grand Mosque"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-body text-[17.5px] leading-[1.25] text-[#f2eae0]">
                  <h2 className="mb-3 text-[24px] font-bold uppercase leading-[1.15]">
                    Leeds Grand
                    <br />
                    Mosque
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Approx. an 18-minute walk from the Parkinson’s steps.</li>
                    <li>Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park Road &gt; Approx., 6-minute walk.</li>
                  </ul>
                </div>
              </div>

              {/* MAKKAH MASJID */}
              <div className="flex gap-[20px]">
                <div className="h-[79px] w-[79px] shrink-0 overflow-hidden rounded-full border-2 border-[#f2eae0]">
                  <img
                    src="/images/home/isocbitstrans/makkah-masjid.jpg"
                    alt="Makkah Masjid"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-body text-[17.5px] leading-[1.25] text-[#f2eae0]">
                  <h2 className="mb-3 text-[24px] font-bold uppercase leading-[1.15]">
                    Makkah Masjid
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Approx. a 20-minute walk from Parkinson’s.</li>
                    <li>Leeds University (Bus Stop E) &gt; Bus 56 &gt; Royal Park Road &gt; Approx., 4-minute walk.</li>
                  </ul>
                </div>
              </div>

              {/* MAKKI MASJID */}
              <div className="flex gap-[20px]">
                <div className="h-[79px] w-[79px] shrink-0 overflow-hidden rounded-full border-2 border-[#f2eae0]">
                  <img
                    src="/images/home/isocbitstrans/makki-masjid.jpg"
                    alt="Makki Masjid"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-body text-[17.5px] leading-[1.25] text-[#f2eae0]">
                  <h2 className="mb-3 text-[24px] font-bold uppercase leading-[1.15]">
                    Makki Masjid
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Approx. a 21-minute walk from the Parkinson’s steps.</li>
                    <li>Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park Road &gt; Approx., 4-minute walk.</li>
                  </ul>
                </div>
              </div>

              {/* LINCOLN GREEN MOSQUE */}
              <div className="flex gap-[20px]">
                <div className="h-[79px] w-[79px] shrink-0 overflow-hidden rounded-full border-2 border-[#f2eae0]">
                  <img
                    src="/images/home/isocbitstrans/lincoln-masjid.jpg"
                    alt="Lincoln Green Mosque"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-body text-[17.5px] leading-[1.25] text-[#f2eae0]">
                  <h2 className="mb-3 text-[24px] font-bold uppercase leading-[1.15]">
                    Lincoln Green
                    <br />
                    Mosque
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Approx. a 35 minute walk from Parkinson’s.</li>
                    <li>Leeds University (Bus Stop A) &gt; Bus 8 &gt; Headrow (Bus Stop H) &gt; Headrow (Bus Stop G) &gt; Lincoln Green Centre &gt; Approx., 4-minute walk.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MOSQUE IMAGE — original position */}
            <div
              className="
                mosque-image
                absolute
                right-[-44px]
                top-[72px]
                h-[513px]
                w-[671.6px]
              "
            >
              <img
                src="/images/home/isocbitstrans/masjid-map-img.png"
                alt="Mosque"
                className="h-full w-full object-contain"
              />
            </div>

            {/* TITLE */}
            <div
              ref={titleRef}
              className={`
                maps-title
                maps-title-slide
                ${isTitleVisible ? "maps-title-slide-in" : ""}
                absolute
                bottom-[126px]
                left-1/2
              `}
            >
              <h1
                className="
                  whitespace-nowrap
                  font-display
                  text-[124.8px]
                  font-bold
                  uppercase
                  leading-[0.6]
                  tracking-[-7px]
                  text-[#f2eae0]
                  drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
                "
              >
                MOSQUES &amp; MAPS
              </h1>
            </div>

          </div>
        </MasterCanvas>
      </div>

      {/* =====================================================
          SECOND HALF
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div className="maps-half relative h-[900px] w-[1460px]">

            {/* PAPER CONTAINER */}
            <div
              ref={paperRef}
              className="
                paper-container
                absolute
                left-1/2
                top-[25px]
                h-[650px]
                w-[1000px]
                -translate-x-1/2
              "
            >

              {/* BACK PAPER — slides in from left, dark green border */}
              <div
                className={`
                  absolute
                  inset-0
                  translate-x-[-10px]
                  translate-y-[26px]
                  rotate-[-6deg]
                  bg-[#f2eae0]
                  border-[7px]
                  border-[#60785e]
                  shadow-[0_10px_18px_rgba(0,0,0,0.25)]
                  maps-back-paper
                  ${isPaperVisible ? 'maps-back-paper-in' : ''}
                `}
              />

              {/* FRONT PAPER — slides in from right, dark green border */}
              <div
                className={`
                  absolute
                  inset-0
                  rotate-[2deg]
                  bg-[#f2eae0]
                  border-[7px]
                  border-[#60785e]
                  shadow-[0_10px_18px_rgba(0,0,0,0.3)]
                  maps-front-paper
                  ${isPaperVisible ? 'maps-front-paper-in' : ''}
                `}
              />

              {/* MAP IMAGE — swings in with the cards */}
              <div
                className={`
                  absolute
                  inset-0
                  z-10
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
                  maps-map-image
                  ${isPaperVisible ? 'maps-map-image-in' : ''}
                `}
              >
                <img
                  src="/images/home/isocbitstrans/leeds-map.png"
                  alt="Map of Leeds"
                  className="h-[800px] w-[800px] object-contain"
                />
              </div>

            </div>

          </div>
        </MasterCanvas>
      </div>

    </section>
  );
};

export default Maps;