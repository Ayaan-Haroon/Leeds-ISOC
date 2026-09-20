import { useEffect, useRef } from 'react'

import EventCard from '../../components/ui/EventCard'

const Events = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    let ticking = false

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()

      // The animation now takes 2 full viewport-heights of scrolling.
      // This makes the cards move much more slowly when scrolling quickly.
      const scrollDistance = window.innerHeight * 2

      const progress = Math.max(
        0,
        Math.min(1, -rect.top / scrollDistance)
      )

      section.style.setProperty(
        '--scroll-progress',
        progress.toString()
      )

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
      className="relative isolate h-[300vh]"
      style={
        {
          '--scroll-progress': '0',
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* =========================
            GRAIN OVERLAY
            ========================= */}

        <div
          className="
            absolute
            inset-0
            z-0
            opacity-100
            mix-blend-multiply
            pointer-events-none
          "
          style={{
            backgroundImage:
              "url('/images/home/stickers-n-that/light-green-paper.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* =========================
            TITLE
            ========================= */}

        <div className="absolute left-[48px] top-[48px] z-10">

          <p
            className="
              font-display
              font-black
              text-[#f2eae0]
              text-[clamp(3.5rem,3.6rem,3.6rem)]
              tracking-[-4px]
              leading-none
              drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
            "
          >
            UPCOMING
          </p>

          <h1
            className="
              drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
              font-display
              font-black
              text-[#f2eae0]
              text-[clamp(3.5rem,8.4rem,12rem)]
              tracking-[-10px]
              leading-[0.9]
              -mt-2
            "
          >
            EVENTS
          </h1>

        </div>

        {/* =========================
            MAIN CONTAINER
            ========================= */}

        <div className="relative z-10 max-w-[1400px] mx-auto">

          {/* =========================
              EVENT CARDS
              ========================= */}

          <div className="relative flex items-start justify-center translate-y-[80px]">

            {/* =========================
                CARD 1 — ENTERS FROM LEFT
                ========================= */}

            <div
              className="will-change-transform"
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
                {/* Dark green hover overlay */}

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

            {/* =========================
                CARD 2 — ENTERS FROM ABOVE
                ========================= */}

            <div
              className="will-change-transform"
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
                {/* Dark green hover overlay */}

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

            {/* =========================
                CARD 3 — ENTERS FROM RIGHT
                ========================= */}

            <div
              className="will-change-transform"
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
                {/* Dark green hover overlay */}

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
    </section>
  )
}

export default Events