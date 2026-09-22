import { useEffect, useState } from 'react'

const AboutUs2Mobile = () => {
  const [isThumbpinVisible, setIsThumbpinVisible] = useState(false)
  const [isFlowerVisible, setIsFlowerVisible] = useState(false)
  const [isPlasterVisible, setIsPlasterVisible] = useState(false)
  const [areStarsVisible, setAreStarsVisible] = useState(false)
  const [isQuranTextVisible, setIsQuranTextVisible] = useState(false)
  const [isHadithTextVisible, setIsHadithTextVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const thumbpin = document.querySelector('.mobile-thumbpin-trigger')
      const flower = document.querySelector('.mobile-flower-trigger')
      const plaster = document.querySelector('.mobile-plaster-trigger')
      const stars = document.querySelector('.mobile-stars-trigger')
      const quranText = document.querySelector('.mobile-quran-text-trigger')
      const hadithText = document.querySelector('.mobile-hadith-text-trigger')

      if (thumbpin && !isThumbpinVisible) {
        const rect = thumbpin.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.95) {
          setIsThumbpinVisible(true)
        }
      }

      if (flower && !isFlowerVisible && isThumbpinVisible) {
        const rect = flower.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.95) {
          setIsFlowerVisible(true)
        }
      }

      if (plaster && !isPlasterVisible && isFlowerVisible) {
        const rect = plaster.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.75) {
          setIsPlasterVisible(true)
        }
      }

      if (stars && !areStarsVisible && isPlasterVisible) {
        const rect = stars.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.75) {
          setAreStarsVisible(true)
        }
      }

      if (quranText && !isQuranTextVisible) {
        const rect = quranText.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.9) {
          setIsQuranTextVisible(true)
        }
      }

      if (hadithText && !isHadithTextVisible && isQuranTextVisible) {
        const rect = hadithText.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.9) {
          setIsHadithTextVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [
    isThumbpinVisible,
    isFlowerVisible,
    isPlasterVisible,
    areStarsVisible,
    isQuranTextVisible,
    isHadithTextVisible,
  ])

  return (
    <section className="about-us-mobile relative z-30 w-full h-[525px] overflow-visible isolate">

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-90
          mix-blend-multiply
          pointer-events-none
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


      {/* =====================================================
          MOBILE ARTBOARD
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-[345px]
          h-[505px]
          overflow-visible
        "
      >


        {/* =====================================================
            QUR'AN PAPER — top-LEFT corner of screen, scaled UP 15%
            ===================================================== */}

        <div
          className="
            absolute
            z-[10]
            top-[42px]
            left-[-20px]
            w-[219px]
            h-[219px]
            rotate-[-4deg]
            transition-all
            duration-300
            ease-out
          "
        >

          <img
            src="/images/about-us-img-2/qur'an.png"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              pointer-events-none
            "
          />

          {/* Only the second ayah — made larger and clearer, inside paper bounds */}
          <div
            className={`
              mobile-text-stick
              mobile-quran-text-trigger
              absolute
              top-[45px]
              left-[32px]
              w-[155px]
              rotate-[-8deg]
              text-center
              text-[#254c3a]
              font-body
              font-bold
              pointer-events-none
              ${isQuranTextVisible ? 'mobile-animate' : ''}
            `}
          >

            <p
              dir="rtl"
              className="
                text-[12px]
                leading-[1.65]
                mb-[8px]
              "
            >
              وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ
            </p>

            <p
              className="
                text-[10px]
                leading-[1.35]
                mb-[3px]
              "
            >
              And do not lose hope in the mercy of
              Allah, for no one loses hope in Allah&apos;s
              mercy except those with no faith.
            </p>

            <p
              className="
                text-[7px]
                leading-none
              "
            >
              Qur&apos;an [12:87]
            </p>

          </div>
        </div>


        {/* =====================================================
            TEA / CHAI PHOTO — top-RIGHT corner of screen
            ===================================================== */}

        <div
          className="
            absolute
            z-[20]
            top-[-14px]
            right-[-20px]
            bg-white
            p-[4px]
            pb-[11px]
            rotate-[7deg]
            shadow-[0_3px_7px_rgba(0,0,0,0.25)]
            w-[85px]
            h-[149px]
          "
        >
          <img
            src="/images/home/isocbitstrans/trimmed-tea.png"
            alt=""
            className="
              w-full
              h-full
              object-cover
              pointer-events-none
            "
          />
        </div>


        {/* THUMB PIN */}

        <img
          src="/images/home/stickers-n-that/thumbpin.png"
          alt=""
          className={`
            mobile-thumbpin-animate
            mobile-thumbpin-trigger
            absolute
            z-[50]
            top-[-13px]
            right-[10px]
            w-[18px]
            pointer-events-none
            ${isThumbpinVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* FLOWER */}

        <img
          src="/images/home/announcements/pretty-flower.png"
          alt=""
          className={`
            mobile-flower-animate
            mobile-flower-trigger
            absolute
            z-[50]
            top-[120px]
            right-[-25px]
            w-[33px]
            pointer-events-none
            ${isFlowerVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* =====================================================
            GIRLS PHOTO — bottom-LEFT, overflows page below
            ===================================================== */}

        <div
          className="
            absolute
            z-[10]
            bottom-[-40px]
            left-[-15px]
            bg-white
            p-[5px]
            pb-[13px]
            rotate-[5deg]
            shadow-[0_3px_7px_rgba(0,0,0,0.25)]
            w-[136px]
            h-[106px]
          "
        >

          <img
            src="/images/home/isocbitstrans/trimmed-girls.png"
            alt=""
            className="
              absolute
              bottom-[3px]
              left-[13px]
              w-[115px]
              h-[95px]
              object-contain
              pointer-events-none
            "
          />

        </div>


        {/* GREEN STARS */}

        <img
          src="/images/home/stickers-n-that/green-starts-3.png"
          alt=""
          className={`
            mobile-stars-animate
            mobile-stars-trigger
            absolute
            z-[70]
            bottom-[30px]
            left-[-10px]
            w-[30px]
            pointer-events-none
            ${areStarsVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* GREEN PLASTER */}

        <img
          src="/images/home/stickers-n-that/green-plaster.png"
          alt=""
          className={`
            mobile-plaster-animate
            mobile-plaster-trigger
            absolute
            z-[70]
            bottom-[30px]
            left-[90px]
            w-[55px]
            rotate-[15deg]
            pointer-events-none
            ${isPlasterVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* =====================================================
            HADITH PAPER — scaled UP 10%
            ===================================================== */}

        <div
          className="
            absolute
            z-[10]
            bottom-[35px]
            right-[-20px]
            w-[220px]
            h-[200px]
            rotate-[5deg]
            transition-all
            duration-300
            ease-out
          "
        >

          <img
            src="/images/about-us-img-2/hadith.png"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              pointer-events-none
            "
          />

          <div
            className={`
              mobile-text-stick
              mobile-hadith-text-trigger
              absolute
              top-[38px]
              left-[45px]
              w-[150px]
              text-center
              text-[#254c3a]
              font-body
              font-bold
              pointer-events-none
              ${isHadithTextVisible ? 'mobile-animate' : ''}
            `}
          >

            <p
              dir="rtl"
              className="
                text-[12.5px]
                leading-[1.5]
                mb-[7px]
                rotate-[4deg]
              "
            >
              الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا
            </p>

            <p
              className="
                text-[9px]
                leading-[1.35]
                mb-[6px]
                rotate-[4deg]
              "
            >
              “The relationship of the believer with
              another believer is like (the bricks of)
              a building, each strengthening the
              other.”
            </p>

            <p
              className="
                text-[9px]
                leading-[1.35]
                rotate-[4deg]
              "
            >
              He (ﷺ) illustrated this by interlacing
              the fingers of both his hands.
            </p>

          </div>
        </div>

      </div>


      {/* =====================================================
          MOBILE ANIMATIONS — softened stick-on bounce
          ===================================================== */}

      <style>{`

        @keyframes mobileStickOn {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-10deg);
          }

          45% {
            opacity: 1;
            transform: scale(1.08) rotate(5deg);
          }

          70% {
            transform: scale(0.97) rotate(-2.5deg);
          }

          88% {
            transform: scale(1.015) rotate(1deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .mobile-text-stick,
        .mobile-thumbpin-animate,
        .mobile-flower-animate,
        .mobile-plaster-animate,
        .mobile-stars-animate {
          opacity: 0;
          transform: scale(0.4) rotate(-10deg);
        }

        .mobile-text-stick.mobile-animate,
        .mobile-thumbpin-animate.mobile-animate,
        .mobile-flower-animate.mobile-animate,
        .mobile-plaster-animate.mobile-animate,
        .mobile-stars-animate.mobile-animate {
          animation:
            mobileStickOn
            0.45s
            cubic-bezier(0.34, 1.2, 0.64, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-text-stick,
          .mobile-thumbpin-animate,
          .mobile-flower-animate,
          .mobile-plaster-animate,
          .mobile-stars-animate {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

      `}</style>

    </section>
  )
}

export default AboutUs2Mobile