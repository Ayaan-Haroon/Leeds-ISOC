// src/pages/Events/EventsMobile.tsx

import { useEffect, useRef, useState } from 'react'
import EventCard from '../../components/ui/EventCard'

// 👇 Adjust this ONE value to fine-tune card size.
const CARD_SCALE = 0.65

// 👇 Vertical gap between cards.
const CARD_GAP = -175

const EventsMobile = () => {

  const [visibleCards, setVisibleCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  })

  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)

  useEffect(() => {

    const handleScroll = () => {

      const vh = window.innerHeight

      const checkVisibility = (ref, key) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        // Trigger when card's top enters 85% of viewport
        if (rect.top <= vh * 0.85) {
          setVisibleCards((prev) => (
            prev[key] ? prev : { ...prev, [key]: true }
          ))
        }
      }

      checkVisibility(card1Ref, 'card1')
      checkVisibility(card2Ref, 'card2')
      checkVisibility(card3Ref, 'card3')
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    // Run once immediately in case page is already scrolled
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <section
      className="
        events-mobile-section
        relative
        w-full
        h-[1450px]
        overflow-hidden
        isolate
      "
    >
      {/* =========================
          BACKGROUND
          ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-repeat
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
        }}
      />

      {/* =========================
          MOBILE ARTBOARD — 340px wide
          ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          top-[40px]
          flex
          w-[340px]
          flex-col
          items-center
          overflow-visible
        "
      >

        {/* =========================
            TITLE — centred
            ========================= */}
        <div className="relative z-40 mb-[-50px] w-full text-center">
          <p
            className="
              font-display
              text-[34px]
              font-black
              leading-none
              tracking-[-2px]
              text-[#f2eae0]
              drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]
            "
          >
            UPCOMING
          </p>

          <h1
            className="
              mt-[-4px]
              font-display
              text-[72px]
              font-black
              leading-[0.9]
              tracking-[-6px]
              text-[#f2eae0]
              drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]
            "
          >
            EVENTS
          </h1>
        </div>


        {/* =========================
            CARD 1 — slides in from LEFT
            ========================= */}
        <div
          ref={card1Ref}
          className={`
            relative
            z-10
            w-fit
            origin-center
            events-mobile-card
            ${visibleCards.card1 ? 'events-mobile-card-in' : 'events-mobile-card-left'}
          `}
          style={{
            transform: `scale(${CARD_SCALE}) rotate(-6deg)`,
            marginBottom: `${CARD_GAP}px`,
          }}
        >
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
            rotate=""
          />
        </div>


        {/* =========================
            CARD 2 — slides in from RIGHT
            ========================= */}
        <div
          ref={card2Ref}
          className={`
            relative
            z-20
            w-fit
            origin-center
            events-mobile-card
            ${visibleCards.card2 ? 'events-mobile-card-in' : 'events-mobile-card-right'}
          `}
          style={{
            transform: `scale(${CARD_SCALE}) rotate(5deg)`,
            marginBottom: `${CARD_GAP}px`,
          }}
        >
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
            rotate=""
          />
        </div>


        {/* =========================
            CARD 3 — slides in from LEFT
            ========================= */}
        <div
          ref={card3Ref}
          className={`
            relative
            z-30
            w-fit
            origin-center
            events-mobile-card
            ${visibleCards.card3 ? 'events-mobile-card-in' : 'events-mobile-card-left'}
          `}
          style={{ transform: `scale(${CARD_SCALE}) rotate(-7deg)` }}
        >
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
            rotate=""
          />
        </div>

      </div>

      {/* =========================
          SCROLL SLIDE-IN ANIMATION
          ========================= */}
      <style>{`

        /* Common base for all cards */
        .events-mobile-card {
          opacity: 0;
          transition:
            opacity 0.7s ease-out,
            translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hidden states — cards wait off to the side */
        .events-mobile-card-left {
          translate: -120vw 0;
        }

        .events-mobile-card-right {
          translate: 120vw 0;
        }

        /* Visible state — both sides slide to their natural spot */
        .events-mobile-card-in {
          opacity: 1;
          translate: 0 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .events-mobile-card {
            opacity: 1 !important;
            translate: 0 0 !important;
            transition: none !important;
          }
        }

      `}</style>

    </section>
  )
}

export default EventsMobile