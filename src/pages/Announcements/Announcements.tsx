import { useEffect, useState } from 'react'


import MasterCanvas from '../../components/MasterCanvas'

const Announcements = () => {
  const [visibleItems, setVisibleItems] = useState({
    idkgText: false,
    longWhiteText: false,
    ruledText: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const getPos = (selector: string) => {
        const el = document.querySelector(selector)
        return el ? el.getBoundingClientRect().top : Infinity
      }

      const vh = window.innerHeight

      const idkgTextVisible =
        getPos('.idkg-text-trigger') <= vh * 0.85

      const longWhiteTextVisible =
        getPos('.long-white-text-trigger') <= vh * 0.85

      const ruledTextVisible =
        getPos('.ruled-text-trigger') <= vh * 0.85

      setVisibleItems((prev) => ({
        idkgText: prev.idkgText || idkgTextVisible,
        longWhiteText:
          prev.longWhiteText || longWhiteTextVisible,
        ruledText: prev.ruledText || ruledTextVisible,
      }))
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="announcements-section relative min-h-screen w-full overflow-hidden isolate ">

      {/* =========================
          ANIMATION STYLES
          ========================= */}

      <style>{`
        /* =========================
           SOFT SHAKE-IN FOR TEXT
           (scroll-triggered)
           ========================= */

        @keyframes softShakeIn {
          0% {
            opacity: 0;
            transform: scale(0.85) rotate(-6deg);
          }

          45% {
            opacity: 1;
            transform: scale(1.05) rotate(3deg);
          }

          70% {
            transform: scale(0.98) rotate(-1.5deg);
          }

          88% {
            transform: scale(1.01) rotate(0.5deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .text-stick-animate {
          opacity: 0;
        }

        .text-stick-animate.animate {
          animation:
            softShakeIn
            0.5s
            cubic-bezier(0.34, 1.2, 0.64, 1)
            0s
            forwards;
        }

        /* =========================
           REDUCED MOTION
           ========================= */

        @media (prefers-reduced-motion: reduce) {
          .text-stick-animate {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>


      {/* =========================
          FULL-SCREEN BACKGROUND
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
          ANNOUNCEMENTS COLLAGE
          ========================= */}

      <div className="announcements-collage ">

        <MasterCanvas>

          <div
            className="
              relative
              z-10
              w-[1460px]
              h-[880px]
            "
          >

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
                IDKG TEXT — shake in + hover lift
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
                text-center
                font-bold
                text-[#254c3a]
                text-[20px]
                leading-tight
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)]
                cursor-pointer
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
                LONG WHITE TEXT — shake in + hover lift
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
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)]
                cursor-pointer
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
                SMALL RULED TEXT — shake in + hover lift
                ========================= */}

            <div
              className={`
                text-stick-animate
                ruled-text-trigger
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
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)]
                cursor-pointer
                ${visibleItems.ruledText ? 'animate' : ''}
              `}
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
                TITLE — no animation, no hover
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
                text-[108.8px]
                leading-[0.8]
                tracking-[-0.06em]
                whitespace-nowrap
                drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)]
              "
            >
              ANNOUNCEMENTS
            </h1>

          </div>

        </MasterCanvas>

      </div>


    </section>
  )
}

export default Announcements