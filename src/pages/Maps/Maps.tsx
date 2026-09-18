const Maps = () => {

  return (

    <section className="relative isolate overflow-hidden">

      {/* GRAIN OVERLAY */}

      <div
        className="absolute inset-0 z-0 opacity-90 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/stickers-n-that/light-green-paper.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* =========================
          FIRST HALF
          ========================= */}

      <div className="relative z-10 w-[90%] max-w-[1250px] h-screen mx-auto">

        {/* MOSQUE INFORMATION */}

        <div className="absolute left-0 top-[15%] w-[58%] grid grid-cols-2 gap-x-12 gap-y-16">

          {/* LEEDS GRAND MOSQUE */}

          <div className="flex gap-5">

            <div className="shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#f2eae0]">

              <img
                src="/images/home/isocbitstrans/lgm.jpg"
                alt="Leeds Grand Mosque"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="font-body text-[#f2eae0] text-[16px] leading-[1.25]">

              <h2 className="font-bold text-[22px] uppercase leading-[1.15] mb-3">

                Leeds Grand
                <br />
                Mosque

              </h2>

              <ul className="list-disc pl-5 space-y-1">

                <li>
                  Approx. an 18-minute walk from the Parkinson’s steps.
                </li>

                <li>
                  Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park Road &gt; Approx., 6-minute walk.
                </li>

              </ul>

            </div>

          </div>


          {/* MAKKAH MASJID */}

          <div className="flex gap-5">

            <div className="shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#f2eae0]">

              <img
                src="/images/home/isocbitstrans/makkah-masjid.jpg"
                alt="Makkah Masjid"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="font-body text-[#f2eae0] text-[16px] leading-[1.25]">

              <h2 className="font-bold text-[22px] uppercase leading-[1.15] mb-3">

                Makkah Masjid

              </h2>

              <ul className="list-disc pl-5 space-y-1">

                <li>
                  Approx. a 20-minute walk from Parkinson’s.
                </li>

                <li>
                  Leeds University (Bus Stop E) &gt; Bus 56 &gt; Royal Park Road &gt; Approx., 4-minute walk.
                </li>

              </ul>

            </div>

          </div>


          {/* MAKKI MASJID */}

          <div className="flex gap-5">

            <div className="shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#f2eae0]">

              <img
                src="/images/home/isocbitstrans/makki-masjid.jpg"
                alt="Makki Masjid"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="font-body text-[#f2eae0] text-[16px] leading-[1.25]">

              <h2 className="font-bold text-[22px] uppercase leading-[1.15] mb-3">

                Makki Masjid

              </h2>

              <ul className="list-disc pl-5 space-y-1">

                <li>
                  Approx. a 21-minute walk from the Parkinson’s steps.
                </li>

                <li>
                  Leeds University (Bus Stop E) &gt; Bus 56 &gt; Hyde Park Road &gt; Approx., 4-minute walk.
                </li>

              </ul>

            </div>

          </div>


          {/* LINCOLN GREEN MOSQUE */}

          <div className="flex gap-5">

            <div className="shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#f2eae0]">

              <img
                src="/images/home/isocbitstrans/lincoln-masjid.jpg"
                alt="Lincoln Green Mosque"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="font-body text-[#f2eae0] text-[16px] leading-[1.25]">

              <h2 className="font-bold text-[22px] uppercase leading-[1.15] mb-3">

                Lincoln Green
                <br />
                Mosque

              </h2>

              <ul className="list-disc pl-5 space-y-1">

                <li>
                  Approx. a 35 minute walk from Parkinson’s.
                </li>

                <li>
                  Leeds University (Bus Stop A) &gt; Bus 8 &gt; Headrow (Bus Stop H) &gt; Headrow (Bus Stop G) &gt; Lincoln Green Centre &gt; Approx., 4-minute walk.
                </li>

              </ul>

            </div>

          </div>

        </div>


        {/* MOSQUE IMAGE */}

        <div className="absolute right-[-3%] top-[10%] w-[42%] h-[52%]">

          <img
            src="/images/home/isocbitstrans/masjid-map-img.png"
            alt="Mosque"
            className="w-full h-full object-contain"
          />

        </div>


        {/* TITLE */}

        <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2">

          <h1
            className="
              font-display
              font-bold
              text-[#f2eae0]
              text-[clamp(3.5rem,6vw,8rem)]
              leading-[0.8]
              uppercase
              whitespace-nowrap
            "
          >
            MOSQUES &amp; MAPS
          </h1>

        </div>

      </div>


      {/* =========================
          SECOND HALF
          ========================= */}

      <div className="relative z-10 w-[90%] max-w-[1250px] h-screen mx-auto">

        {/* PAPER CONTAINER */}

        <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[78%] max-w-[1000px] h-[70%]">

          {/* BACK PAPER */}

          <div
            className="
              absolute
              inset-0
              bg-[#f2eae0]
              rotate-[-6deg]
              translate-x-[-1%]
              translate-y-[4%]
              shadow-[0_10px_18px_rgba(0,0,0,0.25)]
            "
          />

          {/* FRONT PAPER */}

          <div
            className="
              absolute
              inset-0
              bg-[#f2eae0]
              rotate-[2deg]
              shadow-[0_10px_18px_rgba(0,0,0,0.3)]
            "
          />

          {/* TRANSPARENT MAP IMAGE */}

          <div className="absolute inset-0 z-10 flex items-center justify-center">

            <img
              src="/images/home/isocbitstrans/leeds-map.png"
              alt="Map of Leeds"
              className="w-[92%] h-[92%] object-contain"
            />

          </div>

        </div>

      </div>

    </section>

  )

}

export default Maps