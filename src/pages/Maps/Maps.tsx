import React from "react";
import MasterCanvas from "../../components/MasterCanvas";

const Maps = () => {
  return (
    <section className="maps-section relative isolate w-full overflow-hidden">

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
          FIRST HALF
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div className="maps-half relative h-[900px] w-[1460px]">

            {/* MOSQUE INFORMATION */}
            <div
              className="
                mosque-information
                absolute
                left-0
                top-[135px]
                grid
                w-[900px]
                grid-cols-2
                gap-x-[56px]
                gap-y-[64px]
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
                    <li>
                      Approx. an 18-minute walk from the Parkinson’s steps.
                    </li>
                    <li>
                      Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park
                      Road &gt; Approx., 6-minute walk.
                    </li>
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
                    <li>
                      Approx. a 20-minute walk from Parkinson’s.
                    </li>
                    <li>
                      Leeds University (Bus Stop E) &gt; Bus 56 &gt; Royal Park
                      Road &gt; Approx., 4-minute walk.
                    </li>
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
                    <li>
                      Approx. a 21-minute walk from the Parkinson’s steps.
                    </li>
                    <li>
                      Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park
                      Road &gt; Approx., 4-minute walk.
                    </li>
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
                    <li>
                      Approx. a 35 minute walk from Parkinson’s.
                    </li>
                    <li>
                      Leeds University (Bus Stop A) &gt; Bus 8 &gt; Headrow
                      (Bus Stop H) &gt; Headrow (Bus Stop G) &gt; Lincoln Green
                      Centre &gt; Approx., 4-minute walk.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MOSQUE IMAGE */}
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
              className="
                maps-title
                absolute
                bottom-[126px]
                left-1/2
                -translate-x-1/2
              "
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
              className="
                paper-container
                absolute
                left-1/2
                top-0
                h-[650px]
                w-[1000px]
                -translate-x-1/2
              "
            >

              {/* BACK PAPER */}
              <div
                className="
                  absolute
                  inset-0
                  translate-x-[-10px]
                  translate-y-[26px]
                  rotate-[-6deg]
                  bg-[#f2eae0]
                  shadow-[0_10px_18px_rgba(0,0,0,0.25)]
                "
              />

              {/* FRONT PAPER */}
              <div
                className="
                  absolute
                  inset-0
                  rotate-[2deg]
                  bg-[#f2eae0]
                  shadow-[0_10px_18px_rgba(0,0,0,0.3)]
                "
              />

              {/* TRANSPARENT MAP IMAGE */}
              <div
                className="
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
                "
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