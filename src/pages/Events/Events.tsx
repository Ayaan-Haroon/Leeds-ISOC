// src/pages/Events/Events.tsx

import EventCard from '../../components/ui/EventCard'
import MasterCanvas from '../../components/MasterCanvas'

const Events = () => {
  return (
    <section
      className="
        events-static-section
        relative
        w-full
        overflow-hidden
        isolate
      "
    >

      {/* ==========================================================
          BACKGROUND
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
        }}
      />

      {/* ==========================================================
          EVENTS CONTENT
          ========================================================== */}

      <div
        className="
          relative
          z-10
          w-full
        "
      >

        <MasterCanvas
          masterHeight={1100}
          clipToViewport={false}
        >

          {/* ======================================================
              1460 × 1100 MASTER CANVAS
              ====================================================== */}

          <div
            className="
              relative
              h-[1100px]
              w-[1460px]
              overflow-visible
            "
          >

            {/* ====================================================
                TITLE
                ==================================================== */}

            <div
              className="
                absolute
                left-[48px]
                top-[48px]
                z-40
              "
            >
              <p
                className="
                  font-display
                  text-[57.6px]
                  font-black
                  leading-none
                  tracking-[-4px]
                  text-[#f2eae0]
                  drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
                "
              >
                UPCOMING
              </p>

              <h1
                className="
                  mt-[-8px]
                  font-display
                  text-[134.4px]
                  font-black
                  leading-[0.9]
                  tracking-[-10px]
                  text-[#f2eae0]
                  drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
                "
              >
                EVENTS
              </h1>
            </div>


            {/* ====================================================
                EVENT CARDS
                ==================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-[760px]
                flex
                w-[1400px]
                -translate-x-1/2
                -translate-y-1/2
                items-start
                justify-center
              "
            >

              {/* ==================================================
                  CARD 1 — LEFT
                  ================================================== */}

              <EventCard
                topEvent={{
                  day: "24",
                  suffix: "th",
                  month: "sept",
                  title: "Games Night",
                  description:
                    "lorem ipsum dolor sit amet consectetur adipiscing elit laborum o facere animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds University Union",
                }}
                bottomEvent={{
                  day: "28",
                  suffix: "th",
                  month: "sept",
                  title: "Study Circle",
                  description:
                    "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat a assumenda facere animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds University",
                }}
                rotate="
                  -rotate-11
                  z-10
                  -mr-[1.5vw]
                "
              />


              {/* ==================================================
                  CARD 2 — MIDDLE / HIGHER
                  ================================================== */}

              <EventCard
                topEvent={{
                  day: "2",
                  suffix: "nd",
                  month: "oct",
                  title: "Friday Khutbah",
                  description:
                    "lorem ipsum dolor sit amet consectetur veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds University Union",
                }}
                bottomEvent={{
                  day: "5",
                  suffix: "th",
                  month: "oct",
                  title: "Brothers' Social",
                  description:
                    "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds",
                }}
                rotate="
                  rotate-1
                  z-20
                  -mr-[1.5vw]
                  -translate-y-[12rem]
                "
              />


              {/* ==================================================
                  CARD 3 — RIGHT
                  ================================================== */}

              <EventCard
                topEvent={{
                  day: "10",
                  suffix: "th",
                  month: "oct",
                  title: "Sisters' Circle",
                  description:
                    "sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds University",
                }}
                bottomEvent={{
                  day: "12",
                  suffix: "th",
                  month: "oct",
                  title: "Community Dinner",
                  description:
                    "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam re animi reprehenderit nisi velit corrupti id d",
                  location:
                    "Leeds University Union",
                }}
                rotate="
                  rotate-11
                  z-30
                  -mr-[1.5vw]
                "
              />

            </div>

          </div>

        </MasterCanvas>

      </div>

    </section>
  )
}

export default Events