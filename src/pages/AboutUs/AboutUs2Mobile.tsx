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
    <section className="about-us-mobile relative w-full h-[425px] overflow-visible isolate">

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
          w-[340px]
          h-[425px]
          overflow-visible
        "
      >


        {/* =====================================================
            QUR'AN PAPER
            ===================================================== */}

        <div
          className="
            absolute
            z-[10]
            top-[42px]
            left-[0px]
            w-[190px]
            h-[190px]
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

          <div
            className={`
              mobile-text-stick
              mobile-quran-text-trigger
              absolute
              top-[35px]
                left-[25px]
                w-[140px]
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
                text-[6.3px]
                leading-[1.7]
                mb-[6px]
              "
            >
              وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا
            </p>

            <p
              className="
                text-[5.8px]
                leading-[1.3]
                mb-[2px]
              "
            >
              And hold firmly to the rope of Allah all
              together and do not be divided
            </p>

            <p
              className="
                text-[5px]
                leading-none
                mb-[8px]
              "
            >
              Qur&apos;an [3:103]
            </p>

            <p
              dir="rtl"
              className="
                text-[6.3px]
                leading-[1.7]
                mb-[5px]
              "
            >
              وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ
            </p>

            <p
              className="
                text-[5.8px]
                leading-[1.3]
                mb-[2px]
              "
            >
              And do not lose hope in the mercy of
              Allah, for no one loses hope in Allah&apos;s
              mercy except those with no faith.
            </p>

            <p
              className="
                text-[5px]
                leading-none
              "
            >
              Qur&apos;an [12:87]
            </p>

          </div>
        </div>


        {/* =====================================================
            TEA / CHAI PHOTO
            ===================================================== */}

        <div
          className="
            absolute
            z-[20]
            top-[-14px]
            right-[4px]
            bg-white
            p-[5px]
            pb-[13px]
            rotate-[7deg]
            shadow-[0_3px_7px_rgba(0,0,0,0.25)]
            w-[100px]
            h-[175px]
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
            right-[34px]
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
            top-[160px]
            right-[3px]
            w-[33px]
            pointer-events-none
            ${isFlowerVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* =====================================================
            GIRLS PHOTO
            ===================================================== */}

        <div
          className="
            absolute
            z-[20]
            bottom-[7px]
            left-[7px]
            bg-white
            p-[6px]
            pb-[15px]
            rotate-[5deg]
            shadow-[0_3px_7px_rgba(0,0,0,0.25)]
            w-[160px]
            h-[125px]
          "
        >

          <img
            src="/images/home/isocbitstrans/trimmed-girls.png"
            alt=""
            className="
              absolute
              bottom-[3px]
              left-[15px]
              w-[135px]
              h-[112px]
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
            z-[45]
            bottom-[73px]
            left-[-2px]
            w-[41px]
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
            z-[45]
            bottom-[116px]
            left-[135px]
            w-[55px]
            pointer-events-none
            ${isPlasterVisible ? 'mobile-animate' : ''}
          `}
        />


        {/* =====================================================
            HADITH PAPER
            ===================================================== */}

        <div
  className="
    absolute
    z-[10]
    bottom-[35px]
    right-[-3px]
    w-[160px]
    h-[155px]
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
              top-[28px]
              left-[34px]
              w-[110px]
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
                text-[6.3px]
                leading-[1.55]
                mb-[5px]
              "
            >
              قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:
              <br />
              الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا
            </p>

            <p
              className="
                text-[5.1px]
                leading-[1.3]
                mb-[4px]
              "
            >
              The Messenger of Allah (Peace and
              Blessings be unto him):
            </p>

            <p
              className="
                text-[5.1px]
                leading-[1.3]
                mb-[4px]
              "
            >
              “The relationship of the believer with
              another believer is like (the bricks of)
              a building, each strengthening the
              other.”
            </p>

            <p
              className="
                text-[5.1px]
                leading-[1.3]
              "
            >
              He (ﷺ) illustrated this by interlacing
              the fingers of both his hands.
            </p>

          </div>
        </div>

      </div>


      {/* =====================================================
          MOBILE ANIMATIONS
          ===================================================== */}

      <style>{`

        @keyframes mobileStickDrop {
          0% {
            opacity: 0;
            transform: translateY(-18px) rotate(-3deg) scale(0.97);
          }

          55% {
            opacity: 1;
            transform: translateY(3px) rotate(1deg) scale(1.01);
          }

          80% {
            transform: translateY(-1px) rotate(-0.5deg) scale(1);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        @keyframes mobilePinDrop {
          0% {
            opacity: 0;
            transform: translateY(-16px) rotate(-10deg) scale(1.1);
          }

          65% {
            opacity: 1;
            transform: translateY(3px) rotate(3deg) scale(0.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        .mobile-text-stick {
          opacity: 0;
        }

        .mobile-text-stick.mobile-animate {
          animation:
            mobileStickDrop
            0.4s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        .mobile-thumbpin-animate {
          opacity: 0;
        }

        .mobile-thumbpin-animate.mobile-animate {
          animation:
            mobilePinDrop
            0.35s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        .mobile-flower-animate,
        .mobile-plaster-animate,
        .mobile-stars-animate {
          opacity: 0;
        }

        .mobile-flower-animate.mobile-animate,
        .mobile-plaster-animate.mobile-animate,
        .mobile-stars-animate.mobile-animate {
          animation:
            mobileStickDrop
            0.3s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-text-stick,
          .mobile-thumbpin-animate,
          .mobile-flower-animate,
          .mobile-plaster-animate,
          .mobile-stars-animate {
            opacity: 1;
            animation: none;
          }
        }

      `}</style>

    </section>
  )
}

export default AboutUs2Mobile