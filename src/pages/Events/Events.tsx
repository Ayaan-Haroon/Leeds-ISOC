// src/pages/Events/Events.tsx

import { useEffect, useRef, useState } from 'react'
import EventCard from '../../components/ui/EventCard'
import MasterCanvas from '../../components/MasterCanvas'

const Events = () => {

  const [revealStage, setRevealStage] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const sectionRef = useRef(null)
  const hasTriggeredRef = useRef(false)

  useEffect(() => {

    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !hasTriggeredRef.current
          ) {
            hasTriggeredRef.current = true

            // 1. Lock the page
            setIsLocked(true)

            // 2. Start reveal sequence
            //    Stage 0 = nothing visible yet
            //    Stage 1 = card 1 slides in
            //    Stage 2 = card 2 slides in
            //    Stage 3 = card 3 slides in
            //    Stage 4 = unlock
            setTimeout(() => setRevealStage(1), 200)
            setTimeout(() => setRevealStage(2), 500)
            setTimeout(() => setRevealStage(3), 800)
            setTimeout(() => {
              setRevealStage(4)
              setIsLocked(false)
            }, 2300)
          }
        })
      },
      {
        // Fire when the section is 60% visible
        threshold: 0.3,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }

  }, [])

  // Lock / unlock body scroll while the reveal plays
  useEffect(() => {
    if (isLocked) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isLocked])

  // Helper: which card is currently revealed
  const cardClass = (cardIndex) => {
    // cardIndex is 1-based
    if (revealStage >= cardIndex) {
      return 'events-card-in'
    }
    return 'events-card-waiting'
  }

  return (
    <section
      ref={sectionRef}
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
                top-[700px]
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

              <div className={`events-card-wrapper ${cardClass(1)}`}>
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
              </div>


              {/* ==================================================
                  CARD 2 — MIDDLE / HIGHER
                  ================================================== */}

              <div className={`events-card-wrapper ${cardClass(2)}`}>
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
              </div>


              {/* ==================================================
                  CARD 3 — RIGHT
                  ================================================== */}

              <div className={`events-card-wrapper ${cardClass(3)}`}>
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

          </div>

        </MasterCanvas>

      </div>

      {/* ==========================================================
          REVEAL ANIMATION STYLES
          ========================================================== */}

      <style>{`

        .events-card-wrapper {
          opacity: 0;
          translate: 120vw 0;
          transition:
            opacity 0.7s ease-out,
            translate 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .events-card-wrapper.events-card-in {
          opacity: 1;
          translate: 0 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .events-card-wrapper {
            opacity: 1 !important;
            translate: 0 0 !important;
            transition: none !important;
          }
        }

      `}</style>

    </section>
  )
}

export default Events