import { useEffect, useRef } from 'react'
import EventCard from '../../components/ui/EventCard'
import MasterCanvas from '../../components/MasterCanvas'

const Events = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    let ticking = false

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()

      /*
       * ==========================================================
       * EVENTS PINNING
       *
       * The Events section contains:
       *
       * 100vh   = the actual screen
       * 300vh   = animation scroll distance
       *
       * Total = 400vh
       * ==========================================================
       */

      const animationDistance = window.innerHeight * 3

      /*
       * How far we have scrolled into Events AFTER
       * it reaches the top of the viewport.
       */
      const scrolled = Math.max(0, -rect.top)

      /*
       * Animation progress:
       *
       * 0     = just reached Events
       * 0.33  = first card finished
       * 0.66  = second card finished
       * 1     = all cards finished
       */
      const progress = Math.max(
        0,
        Math.min(1, scrolled / animationDistance)
      )

      /*
       * ----------------------------------------------------------
       * Pin Events once it reaches the viewport.
       * ----------------------------------------------------------
       */

      if (scrolled > 0 && scrolled < animationDistance) {
        section.classList.add('events-is-pinned')
      } else {
        section.classList.remove('events-is-pinned')
      }

      section.style.setProperty(
        '--scroll-progress',
        progress.toString()
      )

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    updateScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="
        events-section
        relative
        isolate
        h-[400vh]
        w-full
      "
      style={
        {
          '--scroll-progress': '0',
        } as React.CSSProperties
      }
    >

      {/* ==========================================================
          BACKGROUND
          ========================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none
          opacity-100
          mix-blend-multiply
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
        }}
      />

      {/* ==========================================================
          EVENTS SCREEN

          This starts in normal document flow.

          When it reaches the top of the viewport, JS changes
          it to fixed positioning.

          It remains fixed for the 300vh animation.
          ========================================================== */}

      <div
        className="
          events-screen
          relative
          z-10
          h-screen
          w-full
          overflow-hidden
        "
      >

        <MasterCanvas>
          <div
            className="
              relative
              h-[900px]
              w-[1460px]
              overflow-hidden
            "
          >

            {/* ====================================================
                TITLE
                ==================================================== */}

            <div
              className="
                events-title
                absolute
                left-[48px]
                top-[48px]
                z-20
              "
            >
              <p
                className="
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[57.6px]
                  tracking-[-4px]
                  leading-none
                  drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
                "
              >
                UPCOMING
              </p>

              <h1
                className="
                  mt-[-8px]
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[134.4px]
                  tracking-[-10px]
                  leading-[0.9]
                  drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
                "
              >
                EVENTS
              </h1>
            </div>

            {/* ====================================================
                CARDS CONTAINER
                ==================================================== */}

            <div
              className="
                absolute
                left-0
                top-0
                z-10
                h-[900px]
                w-[1460px]
              "
            >

              <div
                className="
                  events-cards
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  w-[1400px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-start
                  justify-center
                "
              >

                {/* =================================================
                    CARD 1 — LEFT
                    0 → 100vh
                    ================================================= */}

                <div
                  className="
                    event-card-wrapper
                    will-change-transform
                  "
                  style={{
                    transform:
                      'translate3d(calc(-120vw * (1 - min(1, calc(var(--scroll-progress) * 3)))), 0, 0)',
                  }}
                >
                  <div
                    className="
                      relative
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-4
                    "
                  >

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[50]
                        rounded-[inherit]
                        bg-[#254c3a]
                        opacity-0
                        transition-opacity
                        duration-300
                        ease-out
                        hover:opacity-20
                      "
                    />

                    <EventCard
                      topEvent={{
                        day: "24",
                        suffix: "th",
                        month: "sept",
                        title: "Games Night",
                        description:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit laborum o facere animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds University Union",
                      }}
                      bottomEvent={{
                        day: "28",
                        suffix: "th",
                        month: "sept",
                        title: "Study Circle",
                        description:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat a assumenda facere animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds University",
                      }}
                      rotate="-rotate-11 z-10 -mr-[1.5vw]"
                    />

                  </div>
                </div>

                {/* =================================================
                    CARD 2 — ABOVE
                    200 → 300vh
                    ================================================= */}

                <div
                  className="
                    event-card-wrapper
                    will-change-transform
                  "
                  style={{
                    transform:
                      'translate3d(0, calc(-90vh * (1 - max(0, min(1, ((var(--scroll-progress) - 0.6667) * 3))))), 0)',
                  }}
                >
                  <div
                    className="
                      relative
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-4
                    "
                  >

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[50]
                        rounded-[inherit]
                        opacity-0
                        transition-opacity
                        duration-300
                        ease-out
                        hover:opacity-10
                      "
                    />

                    <EventCard
                      topEvent={{
                        day: "2",
                        suffix: "nd",
                        month: "oct",
                        title: "Friday Khutbah",
                        description:
                          "lorem ipsum dolor sit amet consectetur veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds University Union",
                      }}
                      bottomEvent={{
                        day: "5",
                        suffix: "th",
                        month: "oct",
                        title: "Brothers' Social",
                        description:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds",
                      }}
                      rotate="rotate-1 z-20 -mr-[1.5vw] -translate-y-[6rem]"
                    />

                  </div>
                </div>

                {/* =================================================
                    CARD 3 — RIGHT
                    100 → 200vh
                    ================================================= */}

                <div
                  className="
                    event-card-wrapper
                    will-change-transform
                  "
                  style={{
                    transform:
                      'translate3d(calc(120vw * (1 - max(0, min(1, ((var(--scroll-progress) - 0.3333) * 3))))), 0, 0)',
                  }}
                >
                  <div
                    className="
                      relative
                      transition-transform
                      duration-300
                      ease-out
                      hover:-translate-y-4
                    "
                  >

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[50]
                        rounded-[inherit]
                        bg-[#254c3a]
                        opacity-0
                        transition-opacity
                        duration-300
                        ease-out
                        hover:opacity-20
                      "
                    />

                    <EventCard
                      topEvent={{
                        day: "10",
                        suffix: "th",
                        month: "oct",
                        title: "Sisters' Circle",
                        description:
                          "sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam assumenda facere animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds University",
                      }}
                      bottomEvent={{
                        day: "12",
                        suffix: "th",
                        month: "oct",
                        title: "Community Dinner",
                        description:
                          "lorem ipsum dolor sit amet consectetur adipiscing elit laborum occaecat aliqua est labore optio veniam re animi reprehenderit nisi velit corrupti id d",
                        location: "Leeds University Union",
                      }}
                      rotate="rotate-11 z-30 -mr-[1.5vw]"
                    />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </MasterCanvas>
      </div>

      {/* ==========================================================
          PINNED STATE

          This CSS is deliberately here rather than relying on
          sticky positioning.
          ========================================================== */}

      <style>{`
        .events-section.events-is-pinned .events-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
        }
      `}</style>

    </section>
  )
}

export default Events