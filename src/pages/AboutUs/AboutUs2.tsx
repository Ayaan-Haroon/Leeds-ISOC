import { useEffect, useState } from 'react'

const AboutUs2 = () => {
  const [isThumbpinVisible, setIsThumbpinVisible] = useState(false)
  const [isFlowerVisible, setIsFlowerVisible] = useState(false)
  const [isPlasterVisible, setIsPlasterVisible] = useState(false)
  const [areStarsVisible, setAreStarsVisible] = useState(false)

  const [isQuranTextVisible, setIsQuranTextVisible] = useState(false)
  const [isHadithTextVisible, setIsHadithTextVisible] = useState(false)
  const [isDescriptionTextVisible, setIsDescriptionTextVisible] =
    useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const thumbpin = document.querySelector('.thumbpin-trigger')
      const flower = document.querySelector('.flower-trigger')
      const plaster = document.querySelector('.plaster-trigger')
      const stars = document.querySelector('.stars-trigger')

      const quranText = document.querySelector('.quran-text-trigger')
      const hadithText = document.querySelector('.hadith-text-trigger')
      const descriptionText = document.querySelector(
        '.description-text-trigger'
      )

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

      // =========================
      // QUR'AN TEXT — STICKS ON
      // =========================

      if (quranText && !isQuranTextVisible) {
        const rect = quranText.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.9) {
          setIsQuranTextVisible(true)
        }
      }

      // =========================
      // HADITH TEXT — STICKS ON
      // GATED: after Qur'an text
      // =========================

      if (
        hadithText &&
        !isHadithTextVisible &&
        isQuranTextVisible
      ) {
        const rect = hadithText.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.9) {
          setIsHadithTextVisible(true)
        }
      }

      // =========================
      // DESCRIPTION TEXT — STICKS ON
      // GATED: after Hadith text
      // =========================

      if (
        descriptionText &&
        !isDescriptionTextVisible &&
        isHadithTextVisible
      ) {
        const rect = descriptionText.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.9) {
          setIsDescriptionTextVisible(true)
        }
      }

      // Stop listening once everything has triggered
      if (
        isThumbpinVisible &&
        isFlowerVisible &&
        isPlasterVisible &&
        areStarsVisible &&
        isQuranTextVisible &&
        isHadithTextVisible &&
        isDescriptionTextVisible
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
    isQuranTextVisible,
    isHadithTextVisible,
    isDescriptionTextVisible,
  ])

  return (
    <section
      className="
        about-us-collage
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

        /* =========================
           THUMB PIN — DROP ON
           ========================= */

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

        /* =========================
           PRETTY FLOWER
           ========================= */

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

        /* =========================
           STARS — STICK ON
           ========================= */

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

        /* =========================
           GREEN PLASTER
           ========================= */

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

        /* =========================
           TEXT — STICKS ONTO PAPER
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
           ANIMATION CLASSES
           ========================= */

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

        .text-stick-animate {
          opacity: 0;
        }

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
          .thumbpin-animate,
          .flower-animate,
          .plaster-animate,
          .stars-animate,
          .text-stick-animate {
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
          QUR'AN PAPER
          HOVER ENABLED
          ========================= */}

      <div
        className="
          absolute
          z-[1]
          top-[25px]
          left-[50px]
          w-[450px]
          h-[450px]
          pointer-events-auto
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:drop-shadow-[0_6px_5px_rgba(0,0,0,0.25)]
          cursor-pointer
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
            text-stick-animate
            quran-text-trigger
            absolute
            top-[75px]
            left-[60px]
            rotate-[-5deg]
            w-[340px]
            text-center
            text-[#254c3a]
            font-body
            font-bold
            pointer-events-none
            ${isQuranTextVisible ? 'animate' : ''}
          `}
        >
          {/* First Qur'an verse */}

          <p
            dir="rtl"
            className="
              text-[18px]
              leading-[1.8]
              mb-[14px]
            "
          >
            وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا
          </p>

          <p
            className="
              text-[16px]
              leading-[1.3]
              mb-[3px]
            "
          >
            And hold firmly to the rope of Allah all
            together and do not be divided
          </p>

          <p
            className="
              text-[14px]
              leading-none
              mb-[20px]
            "
          >
            Qur&apos;an [3:103]
          </p>

          {/* Second Qur'an verse */}

          <p
            dir="rtl"
            className="
              text-[18px]
              leading-[1.8]
              mb-[12px]
            "
          >
            وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ
          </p>

          <p
            className="
              text-[16px]
              leading-[1.3]
              mb-[3px]
            "
          >
            And do not lose hope in the mercy of
            Allah, for no one loses hope in Allah&apos;s
            mercy except those with no faith.
          </p>

          <p
            className="
              text-[14px]
              leading-none
            "
          >
            Qur&apos;an [12:87]
          </p>
        </div>
      </div>

      {/* =========================
          HADITH PAPER
          HOVER ENABLED
          ========================= */}

      <div
        className="
          absolute
          z-[1]
          top-[50px]
          left-[600px]
          w-[400px]
          h-[400px]
          pointer-events-auto
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
            hover:drop-shadow-[0_6px_5px_rgba(0,0,0,0.25)]
          cursor-pointer
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
            text-stick-animate
            hadith-text-trigger
            absolute
            top-[70px]
            left-[85px]
            w-[275px]
            text-center
            text-[#254c3a]
            font-body
            font-bold
            rotate-[5deg]
            pointer-events-none
            ${isHadithTextVisible ? 'animate' : ''}
          `}
        >
          <p
            dir="rtl"
            className="
              text-[18px]
              leading-[1.7]
              mb-[12px]
            "
          >
            قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:
            <br />
            الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا
          </p>

          <p
            className="
              text-[14px]
              leading-[1.3]
              mb-[10px]
            "
          >
            The Messenger of Allah (Peace and
            Blessings be unto him):
          </p>

          <p
            className="
              text-[14px]
              leading-[1.3]
              mb-[10px]
            "
          >
            “The relationship of the believer with
            another believer is like (the bricks of)
            a building, each strengthening the
            other.”
          </p>

          <p
            className="
              text-[14px]
              leading-[1.3]
            "
          >
            He (ﷺ) illustrated this by interlacing
            the fingers of both his hands.
          </p>
        </div>
      </div>

      {/* =========================
          DESCRIPTION PAPER
          HOVER ENABLED
          ========================= */}

      <div
        className="
          absolute
          z-[1]
          bottom-[50px]
          right-[100px]
          w-[700px]
          h-[350px]
          pointer-events-auto
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
       hover:drop-shadow-[0_6px_5px_rgba(0,0,0,0.25)]
          cursor-pointer
        "
      >
        <img
          src="/images/about-us-img-2/desc.png"
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
            text-stick-animate
            description-text-trigger
            absolute
            top-[140px]
            left-[100px]
            rotate-[3deg]
            w-[565px]
            text-center
            text-[#254c3a]
            font-body
            font-bold
            text-[18px]
            leading-[1.35]
            pointer-events-none
            ${isDescriptionTextVisible ? 'animate' : ''}
          `}
        >
          <p>
            Leeds ISOC brings Muslim students together to strengthen
            their faith, seek knowledge and build meaningful friendships.
            Through talks, study circles, socials and community events, we
            aim to create a welcoming space where students can learn,
            connect and grow throughout their university journey.
          </p>
        </div>
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