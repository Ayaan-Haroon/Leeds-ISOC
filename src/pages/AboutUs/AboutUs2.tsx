import { useEffect, useState } from 'react'

const AboutUs2 = () => {
  const [isThumbpinVisible, setIsThumbpinVisible] = useState(false)
  const [isFlowerVisible, setIsFlowerVisible] = useState(false)
  const [isPlasterVisible, setIsPlasterVisible] = useState(false)
  const [areStarsVisible, setAreStarsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const thumbpin = document.querySelector('.thumbpin-trigger')
      const flower = document.querySelector('.flower-trigger')
      const plaster = document.querySelector('.plaster-trigger')
      const stars = document.querySelector('.stars-trigger')

      // =========================
      // THUMB PIN — fires as soon as it enters viewport
      // =========================
      if (thumbpin && !isThumbpinVisible) {
        const rect = thumbpin.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.95) {
          setIsThumbpinVisible(true)
        }
      }

      // =========================
      // PRETTY FLOWER — fires as soon as it enters viewport
      // GATED: only after thumbpin has fired
      // =========================
      if (flower && !isFlowerVisible && isThumbpinVisible) {
        const rect = flower.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.95) {
          setIsFlowerVisible(true)
        }
      }

      // =========================
// GREEN PLASTER — delayed slightly more than before
// GATED: only after flower has fired
// =========================
if (plaster && !isPlasterVisible && isFlowerVisible) {
  const rect = plaster.getBoundingClientRect()

  if (rect.top <= window.innerHeight * 0.65) {
    setIsPlasterVisible(true)
  }
}

// =========================
// STARS — delayed slightly more than before
// GATED: only after plaster has fired
// =========================
if (stars && !areStarsVisible && isPlasterVisible) {
  const rect = stars.getBoundingClientRect()

  if (rect.top <= window.innerHeight * 0.65) {
    setAreStarsVisible(true)
  }
}
      // Stop listening once everything has triggered
      if (
        isThumbpinVisible &&
        isFlowerVisible &&
        isPlasterVisible &&
        areStarsVisible
      ) {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check immediately in case the page is already scrolled
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [
    isThumbpinVisible,
    isFlowerVisible,
    isPlasterVisible,
    areStarsVisible,
  ])

  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#f2eae0]
        overflow-visible
        isolate
      "
    >
      {/* =========================
          ANIMATION STYLES
          ========================= */}
      <style>{`

        /* THUMB PIN — DROP ON */
        @keyframes thumbPinDrop {
          0% {
            opacity: 0;
            transform: translateY(-35px) rotate(-12deg) scale(1.15);
          }

          55% {
            opacity: 1;
            transform: translateY(5px) rotate(4deg) scale(0.98);
          }

          75% {
            transform: translateY(-2px) rotate(-2deg) scale(1.02);
          }

          90% {
            transform: translateY(1px) rotate(1deg) scale(1);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* PRETTY FLOWER */
        @keyframes flowerStick {
          0% {
            opacity: 0;
            transform: translateY(-30px) rotate(-8deg) scale(0.9);
          }

          55% {
            opacity: 1;
            transform: translateY(5px) rotate(4deg) scale(1.04);
          }

          75% {
            transform: translateY(-2px) rotate(-2deg) scale(0.98);
          }

          90% {
            transform: translateY(1px) rotate(1deg) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* STARS — STICK ON */
        @keyframes starsStick {
          0% {
            opacity: 0;
            transform: translateY(-30px) rotate(-8deg) scale(0.9);
          }

          55% {
            opacity: 1;
            transform: translateY(5px) rotate(4deg) scale(1.04);
          }

          75% {
            transform: translateY(-2px) rotate(-2deg) scale(0.98);
          }

          90% {
            transform: translateY(1px) rotate(1deg) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* GREEN PLASTER */
        @keyframes plasterStick {
          0% {
            opacity: 0;
            transform: translateY(-30px) rotate(-8deg) scale(0.9);
          }

          55% {
            opacity: 1;
            transform: translateY(5px) rotate(4deg) scale(1.04);
          }

          75% {
            transform: translateY(-2px) rotate(-2deg) scale(0.98);
          }

          90% {
            transform: translateY(1px) rotate(1deg) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* ANIMATION CLASSES */

        .thumbpin-animate {
          opacity: 0;
        }

        .thumbpin-animate.animate {
          animation:
            thumbPinDrop
            0.35s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .flower-animate {
          opacity: 0;
        }

        .flower-animate.animate {
          animation:
            flowerStick
            0.30s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .plaster-animate {
          opacity: 0;
        }

        .plaster-animate.animate {
          animation:
            plasterStick
            0.30s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .stars-animate {
          opacity: 0;
        }

        .stars-animate.animate {
          animation:
            starsStick
            0.30s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .thumbpin-animate,
          .flower-animate,
          .plaster-animate,
          .stars-animate {
            opacity: 1;
            animation: none;
          }
        }

      `}</style>

      {/* =========================
          BEIGE PAPER BACKGROUND
          ========================= */}
      <div
        className="
          absolute
          inset-0
          z-0
          opacity-90
          mix-blend-multiply
        "
      >
        <img
          src="/images/home/stickers-n-that/beige-paper.png"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            pointer-events-none
          "
        />
      </div>

      {/* =========================
          WIDE RULED PAPER
          ========================= */}
      <img
        src="/images/home/stickers-n-that/wide-ruled.png"
        alt=""
        className="
          absolute
          z-[1]
          bottom-[40px]
          left-[30px]
          w-[425px]
          rotate-[-4deg]
          pointer-events-none
        "
      />

      {/* =========================
          FAT RULED PAPER
          ========================= */}
      <img
        src="/images/home/stickers-n-that/fat-ruled.png"
        alt=""
        className="
          absolute
          z-[1]
          top-[0px]
          right-[20px]
          w-[275px]
          h-[300px]
          pointer-events-none
        "
      />

      {/* =========================
          WHO WE ARE
          ========================= */}
      <div
        className="
          absolute
          z-10
          top-[75px]
          left-[100px]
          w-[820px]
        "
      >
        <h2
          className="
            font-display
            font-black
            text-[clamp(2.5rem,5.2rem,6.4rem)]
            tracking-[-0.05em]
            leading-none
            text-isoc-green
          "
        >
          Leeds ISOC
        </h2>

        <p
          className="
            mt-6
            text-base
            md:text-xl
            leading-[1.6]
            text-isoc-green
          "
        >
          Leeds ISOC is a welcoming community for Muslim students at the University of Leeds, bringing people together to learn, connect and grow. We aim to create a space where students can strengthen their faith, build meaningful friendships and feel at home on campus. From regular talks and study circles to socials, community events and opportunities for volunteering, there is something for everyone. Whether you are looking to deepen your understanding of Islam, meet new people or simply get involved, Leeds ISOC is here to support you throughout your university journey.
        </p>
      </div>

      {/* =========================
          MISSION
          ========================= */}
      <div
        className="
          absolute
          z-10
          top-[50%]
          right-[50px]
          w-[625px]
        "
      >
        <h2
          className="
            font-display
            font-black
            text-[clamp(2.5rem,5.2rem,6.4rem)]
            tracking-[-0.05em]
            leading-none
            text-isoc-green
          "
        >
          Our Mission
        </h2>

        <p
          className="
            mt-6
            text-base
            md:text-xl
            leading-[1.6]
            text-isoc-green
          "
        >
          We strive to support students throughout their university journey
          through regular events, educational opportunities, social activities
          and a strong sense of community.
        </p>
      </div>

      {/* =========================
          GIRLS CARD
          ========================= */}
      <div
        className="
          absolute
          z-20
          bottom-[50px]
          left-[35px]
          bg-white
          p-3
          pb-7
          rotate-[6deg]
          shadow-xl
          w-[400px]
          h-[275px]
        "
      >
        <img
          src="/images/home/isocbitstrans/trimmed-girls.png"
          alt=""
          className="
            absolute
            bottom-[5px]
            left-[40px]
            w-full
            h-full
            object-contain
            pointer-events-none
          "
        />
      </div>

      {/* =========================
          GREEN PLASTER
          ========================= */}
      <img
        src="/images/home/stickers-n-that/green-plaster.png"
        alt=""
        className={`
          plaster-animate
          plaster-trigger
          absolute
          z-[40]
          bottom-[275px]
          left-[350px]
          w-[120px]
          pointer-events-none
          ${isPlasterVisible ? 'animate' : ''}
        `}
      />

      {/* =========================
          GREEN STARS
          ========================= */}
      <img
        src="/images/home/stickers-n-that/green-starts-3.png"
        alt=""
        className={`
          stars-animate
          stars-trigger
          absolute
          z-[40]
          bottom-[225px]
          left-[50px]
          w-[9vw]
          max-w-[80px]
          pointer-events-none
          ${areStarsVisible ? 'animate' : ''}
        `}
      />

      {/* =========================
          TEA CARD
          ========================= */}
      <div
        className="
          absolute
          z-20
          top-[-40px]
          right-[40px]
          bg-white
          p-3
          pb-7
          rotate-[8deg]
          shadow-xl
          w-[200px]
          h-[350px]
        "
      >
        <img
          src="/images/home/isocbitstrans/trimmed-tea.png"
          alt=""
          className="
            w-[200px]
            h-[350px]
            object-cover
            pointer-events-none
          "
        />
      </div>

      {/* =========================
          THUMB PIN
          ========================= */}
      <img
        src="/images/home/stickers-n-that/thumbpin.png"
        alt=""
        className={`
          thumbpin-animate
          thumbpin-trigger
          absolute
          z-[40]
          top-[-30px]
          right-[66px]
          w-[8vw]
          max-w-[30px]
          pointer-events-none
          ${isThumbpinVisible ? 'animate' : ''}
        `}
      />

      {/* =========================
          PRETTY FLOWER
          ========================= */}
      <img
        src="/images/home/announcements/pretty-flower.png"
        alt=""
        className={`
          flower-animate
          flower-trigger
          absolute
          z-[40]
          top-[290px]
          right-[35px]
          w-[9vw]
          max-w-[65px]
          pointer-events-none
          ${isFlowerVisible ? 'animate' : ''}
        `}
      />
    </section>
  )
}

export default AboutUs2