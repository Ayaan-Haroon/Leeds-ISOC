import { useState } from 'react'

const Committee = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [

    {
      id: 1,
      angle: '-rotate-4',
    },

    {
      id: 2,
      angle: 'rotate-4',
    },

  ]

  const nextSlide = () => {

    setCurrentIndex((prev) => (prev + 1) % cards.length)

  }

  const prevSlide = () => {

    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)

  }

  return (

    <section className="relative isolate min-h-screen bg-[#fff] overflow-hidden flex flex-col">

      {/* GRAIN OVERLAY */}

      <div
        className="absolute inset-0 z-0 opacity-90 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/stickers-n-that/darkone.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* CARDS AREA */}

      <div className="relative z-10 flex-1 flex items-center justify-center">

        {/* LEFT ARROW */}

        <button
          onClick={prevSlide}
          className="absolute left-[7%] z-30 text-[#f2eae0] text-[90px] font-light leading-none hover:scale-110 transition-transform"
          aria-label="Previous committee"
        >
          ‹
        </button>


        {/* CARDS */}

        <div className="relative w-[70vw] max-w-[800px] h-[55vh]">

          {/* BACK CARD */}

          <div
            className={`absolute inset-0 bg-[#e3dcd2] border-[7px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.3)] ${cards[currentIndex].angle}`}
          />


          {/* FRONT CARD */}

          <div
            className={`absolute inset-0 bg-[#e3dcd2] border-[7px] border-white shadow-[0_12px_24px_rgba(0,0,0,0.3)] ${cards[(currentIndex + 1) % cards.length].angle} scale-[0.96] overflow-hidden`}
          >

            {/* RIGHT SIDE — 55% OF CARD */}

            <div className="absolute right-0 top-0 w-[55%] h-full pr-6 pt-6 pb-6 pl-6 flex flex-col">

              {/* NAME + ROLE + STAMP */}

              <div className="relative flex items-center justify-between w-full">

                {/* NAME + ROLE */}

                <div className="flex-1 text-center mr-2">

                  <h2 className="font-body font-light text-[#254c3a] text-[clamp(1.5rem,2.5vw,2.5rem)] leading-none uppercase">

                    Ayaan Haroon

                  </h2>

                  <p className="font-body text-[#254c3a] text-[14px] mt-2 uppercase tracking-wide">

                    Official Tek Bro

                  </p>

                </div>


                {/* POSTCARD IMAGE */}

                <div className="w-[95px] h-[110px] shrink-0">

                  <img
                    src="/images/home/isocbitstrans/stamp.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>


              {/* DESCRIPTION LINES */}

              <div className="w-[90%] h-[65%] mt-6 ml-auto flex flex-col justify-evenly">

                <div className="w-full border-t-[2px] border-[#254c3a]" />

                <div className="w-full border-t-[2px] border-[#254c3a]" />

                <div className="w-full border-t-[2px] border-[#254c3a]" />

                <div className="w-full border-t-[2px] border-[#254c3a]" />

              </div>

            </div>

          </div>

        </div>


        {/* RIGHT ARROW */}

        <button
          onClick={nextSlide}
          className="absolute right-[7%] z-30 text-[#f2eae0] text-[90px] font-light leading-none hover:scale-110 transition-transform"
          aria-label="Next committee"
        >
          ›
        </button>

      </div>


      {/* TITLE */}

      <div className="relative z-10 w-full text-center pb-6">

        <h1 className="font-display font-black text-[#f2eae0] text-[clamp(4rem,9vw,6.8rem)] leading-[1.3] uppercase">

          COMMITTEE

        </h1>

      </div>

    </section>
  )
}

export default Committee