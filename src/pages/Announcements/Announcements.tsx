import { useEffect, useState } from 'react'

const Announcements = () => {
  const [visibleItems, setVisibleItems] = useState({
    idkgText: false,
    longWhiteText: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const getPos = (selector) => {
        const el = document.querySelector(selector)
        return el ? el.getBoundingClientRect().top : Infinity
      }

      const vh = window.innerHeight

      // =========================
      // IDKG TEXT
      // =========================

      const idkgTextVisible =
        getPos('.idkg-text-trigger') <= vh * 0.85

      // =========================
      // LONG WHITE TEXT
      // =========================

      const longWhiteTextVisible =
        getPos('.long-white-text-trigger') <= vh * 0.85

      setVisibleItems((prev) => ({
        idkgText: prev.idkgText || idkgTextVisible,
        longWhiteText:
          prev.longWhiteText || longWhiteTextVisible,
      }))
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden isolate">

      {/* =========================
          ANIMATION STYLES
          ========================= */}

      <style>{`

        /* =========================
           TEXT STICK ON
           ========================= */

        @keyframes textStick {
          0% {
            opacity: 0;
            transform: translateY(-25px) rotate(-2deg) scale(0.98);
          }

          55% {
            opacity: 1;
            transform: translateY(4px) rotate(0.5deg) scale(1.01);
          }

          75% {
            transform: translateY(-2px) rotate(-0.2deg) scale(1);
          }

          90% {
            transform: translateY(1px) rotate(0deg) scale(1);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* =========================
           TEXT DEFAULT
           ========================= */

        .text-stick-animate {
          opacity: 0;
        }

        /* =========================
           TEXT ANIMATION
           ========================= */

        .text-stick-animate.animate {
          animation:
            textStick
            0.40s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        /* =========================
           REDUCED MOTION
           ========================= */

        @media (prefers-reduced-motion: reduce) {
          .text-stick-animate {
            opacity: 1;
            animation: none;
          }
        }

      `}</style>

      {/* =========================
          BACKGROUND
          ========================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-90
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
          LARGE GREEN POST-IT
          ========================= */}

      <img
        src="/images/home/announcements/long-green-postick.png"
        alt=""
        className="
          absolute
          top-[70px]
          right-[100px]
          z-10
          w-[420px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          MARIEM POST-IT
          ========================= */}

      <img
        src="/images/home/announcements/mariem-postick.png"
        alt=""
        className="
          absolute
          bottom-[120px]
          right-[70px]
          z-10
          w-[400px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          FLOWER
          ========================= */}

      <img
        src="/images/home/announcements/pretty-flower.png"
        alt=""
        className="
          absolute
          top-[120px]
          right-[650px]
          z-10
          w-[120px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          IDKG
          ========================= */}

      <img
        src="/images/home/announcements/idkg.png"
        alt=""
        className="
          absolute
          top-[140px]
          right-[350px]
          z-15
          w-[375px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          IDKG TEXT
          ========================= */}

      <div
        className={`
          text-stick-animate
          idkg-text-trigger
          absolute
          top-[248px]
          right-[415px]
          z-20
          w-[225px]
          rotate-[-11deg]
          text-center
          font-bold
          text-[#254c3a]
          text-[20px]
          leading-tight
          ${visibleItems.idkgText ? 'animate' : ''}
        `}
      >
        Freshers guide is out cuh!! Check it out to see wag1 for the week.
      </div>

      {/* =========================
          WHITE POST-IT LARGE
          ========================= */}

      <img
        src="/images/home/announcements/white-postick-l.png"
        alt=""
        className="
          absolute
          top-[300px]
          right-[610px]
          z-10
          w-[340px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          LONG WHITE POST-IT
          ========================= */}

      <img
        src="/images/home/announcements/long-white-postick.png"
        alt=""
        className="
          absolute
          bottom-[180px]
          left-[125px]
          z-10
          w-[500px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          LONG WHITE TEXT
          ========================= */}

      <div
        className={`
          text-stick-animate
          long-white-text-trigger
          absolute
          bottom-[250px]
          left-[150px]
          z-20
          text-center
          w-[375px]
          font-bold
          text-[#254c3a]
          text-[20px]
          leading-tight
          ${visibleItems.longWhiteText ? 'animate' : ''}
        `}
      >
        Keep up to date for all the latest events through our website and
        social, Don't miss out on a thing!!!
      </div>

      {/* =========================
          SMALL RULED
          ========================= */}

      <img
        src="/images/home/announcements/ruled-narrow-postick.png"
        alt=""
        className="
          absolute
          top-[120px]
          left-[420px]
          z-10
          w-[175px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          SMALL RULED TEXT
          ========================= */}

      <div
        className="
          absolute
          top-[185px]
          left-[450px]
          z-20
          w-[135px]
          text-center
          font-bold
          text-[#254c3a]
          text-[16px]
          leading-tight
        "
      >
        Air frier in the green room!!! chat to me nice rudeboy
      </div>

      {/* =========================
          BIG GREEN
          ========================= */}

      <img
        src="/images/home/announcements/green-postick-l.png"
        alt=""
        className="
          absolute
          top-[25px]
          left-[125px]
          z-5
          w-[395px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          MICROPHONE
          ========================= */}

      <img
        src="/images/home/announcements/microphone-a.png"
        alt=""
        className="
          absolute
          top-[265px]
          left-[100px]
          z-5
          w-[160px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]
          cursor-pointer
        "
      />

      {/* =========================
          TITLE
          ========================= */}

      <h1
        className="
          absolute
          bottom-[40px]
          left-[120px]
          z-50
          font-display
          font-black
          text-[#dbd4c2]
          text-[clamp(4rem,9.2vw,6.8rem)]
          leading-[0.8]
          tracking-[-0.06em]
          whitespace-nowrap
          drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)]
        "
      >
        ANNOUNCEMENTS
      </h1>

    </section>
  )
}

export default Announcements