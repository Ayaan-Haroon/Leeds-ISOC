import { useEffect, useState } from 'react'

const CommitteeMobile = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [areCardsVisible, setAreCardsVisible] = useState(false)

const cards = [
    // --- EXECUTIVE / LEADERSHIP ---
    {
      id: 1,
      name: 'Muhammad Talha',
      role: 'President',
      image: '/images/profile-pics/talhapfp.png',
      fontSize: 30, // Scaled down to fit
      description:
        "Surah Taha 20:46 - Allah reassured 'them', \"Have no fear! I am with you, hearing and seeing. - قَالَ لَا تَخَافَا إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَى\"\n\nThis ayah is in the context of Allah swt reassuring Musa AS and Harun AS before they face fir'awn. It teaches us to have absolute certainty and trust in Allah and His plan. Coming to university for the first time and entering a new environment, you are bound to feel uncertain about what is ahead. This ayah encourages us to move forward whilst relying on Allah swt, for he is with you and never out of reach.",
      angle: '-rotate-4',
    },
    {
      id: 2,
      name: 'Muhammad Qais',
      role: 'Vice President Brother',
      image: '/images/profile-pics/qaispfp.png',
      fontSize: 30, // Scaled down to fit
      description:
        "Surah Az-Zumar (39:53) \"O My servants who have exceeded the limits against their souls! Do not lose hope in Allah's mercy, for Allah certainly forgives all sins. He is indeed the All-Forgiving, Most Merciful\"\n\nThis verse often reminds me that regardless of the dunya's perception, Allah SWT never considers an individual to be beyond forgiveness. I chose this ayah as it reminds me thatmy Lord is Most Merciful and to never consider myself to be beyond his mercy. It keeps me anchored in times where my imaan may not be as high, and reminds me that the doors of forgiveness are always open.",
      angle: 'rotate-4',
    },
    {
      id: 3,
      name: 'Maya Fazal',
      role: 'Vice President Sister',
      image: '/images/profile-pics/mayapfp.png',
      description:
        "‘Tie your camel’ Hadith Sunan al-Tirmidhi (2517)\n\nWhen applying to medical school for the second time I was told this Hadith at an important moment. It reassured me and reminded me to trust Allah’s plan. I chose this because I know starting uni comes with a lot of anxieties so I hope it reminds freshers to try their best without dwelling on factors outside of their control.",
      angle: '-rotate-4',
    },
    {
      id: 4,
      name: 'Fatima Awais',
      role: 'General Secretary',
      image: '/images/profile-pics/fatimapfp.png',
      description:
        "Surah Qaf (50:16): \"And indeed We have created man, and We know what his soul whispers to him, and We are closer to him than [his] jugular vein.\"\n\nI chose this ayah as a reminder that we’re never alone no matter what hardships or problems we face and that we can always call upon and rely on Allah (swt).",
      angle: 'rotate-4',
    },
    {
      id: 5,
      name: 'Ismaeel Yahya Hoque',
      role: 'Treasurer',
      image: '/images/profile-pics/ismaeelpfp.png',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "Al-Fath - Verse 1\n\nIndeed, We have granted you a clear triumph 'O Prophet'\n\nIn this verse Allah is speaking about the treaty of Hudaibiyah where the Muslims attempted to perform ummrah but were turned away by the Quraysh and agreed to a treaty that at a quick glance could be perceived as unfair. Allah declaring Hudaibiyah as a victory reminds us that even in times of perceived weakness westher it be political like this one, only Allah knows the full truth and a perceived negative is written by Allah to be an enternal postive.",
      angle: '-rotate-4',
    },

    // --- HEADS OF DEPARTMENTS ---
    {
      id: 6,
      name: 'Suleman Sajad',
      role: 'Head of Student Affairs',
      image: '/images/profile-pics/sulemanpfp.png',
      description:
        "\"In the name of Allah, the Entirely Merciful, the Especially Merciful\" (1:1)\n\nSo many pieces of advice could be taken for this one ayah alone, but I want to focus on how everything successful starts and ends with the remembrance of Allah SWT. Place your trust in Him and all your affairs will begin to resolve.",
      angle: 'rotate-4',
    },
    {
      id: 7,
      name: 'Adam Ahmed',
      role: 'Head of Marketing',
      image: '/images/profile-pics/adamahmedpfp.png',
      description:
        "65:2-3: \"And whoever is mindful of Allah, He will make a way out for them, and provide for them from sources they could never imagine\"\n\nI chose these Ayat because it really drills into us how even when we can't see a way forward, Allah will always provide for us in ways we can't imagine. It reminds us the importance of taqwa.",
      angle: '-rotate-4',
    },

    // --- FUNCTIONAL OFFICERS & REPS ---
    {
      id: 8,
      name: 'Anas Malik',
      role: 'Education Brother',
      image: '/images/profile-pics/anaspfp.png',
      description:
        "A simple, yet powerful advice from the Messenger ﷺ :\n\nالرجل على دين خليله فلينظر أحدكم من يخالل\n\n\"A man is upon the religion/path of his close friend, so let one of you look at whom he befriends.\"\n(Sunan al-Tirmidhī 2378)\n\nYour environment shapes who you are and who you will become. The companions you choose can truly change your bearings in life: either positively or negatively. It's easy to fall prey to the temptations of university life. Build a circle around you that will help you safeguard your imaan, enable you to grow and succeed in your ambitions. Find your purpose and contribution to this ummah beyond your degree.",
      angle: 'rotate-4',
    },
    {
      id: 9,
      name: 'Hiba Shahzad',
      role: 'Education Sister',
      image: '/images/profile-pics/hibapfp.png',
      description:
        "“Call upon me; I will respond to you.” [40:60]\n\nStarting university can be exciting, but it can also be scary and uncertain. You might feel overwhelmed by your degree, struggle to find your people, feel homesick or simply not know what the future holds. In those moments, I think we sometimes forget just how capable Allah is. People may have limits, but Allah has none, and He Himself tells us to talk to Him. There is no middleman here - Allah says “I”: it’s a direct line, a direct call between you and Allah. The answer to our du’a may not always come in the way or at the time we expect, but that doesn’t mean Allah hasn’t heard us. Whatever this new chapter brings, remember that Allah is always there, and He",
      angle: '-rotate-4',
    },
    {
      id: 10,
      name: 'Kareem Abdelsabour',
      role: 'Prayer Spaces Brother',
      image: '/images/profile-pics/kareempfp.png',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "Surah Ali 'Imran (3:159): “And when you have decided, then rely upon Allah. Indeed, Allah loves those who rely [upon Him].”\n\nSometimes some decisions require less thought and more action. Doing will always be worth more than thinking.",
      angle: 'rotate-4',
    },
    {
      id: 11,
      name: 'Amina Nedjadi',
      role: 'Prayer Spaces Sister',
      image: '/images/profile-pics/aminapfp.png',
      description:
        "“O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the All-Forgiving, the Most Merciful.” (Surah Az-Zumar, 39:53)\n\nI chose this ayah because it reminds me that no matter what difficulties we face, we should never lose hope in Allah’s mercy. I think it’s a really important reminder to carry with us through university, especially when things get difficult.",
      angle: '-rotate-4',
    },
    {
      id: 12,
      name: 'Hadi Rana',
      role: 'Charity and Community Brother',
      image: '/images/profile-pics/hadipfp.png',
      description:
        "(55:13) Surah Ar-Rahman ayah 13 “So which of the favours of your Lord would you deny?”\n\nSometimes it’s easy to get caught up in what’s lacking in our lives and we forget about all the blessings we have. I chose this ayah to remind us of all the good Allah has given us and that, even in times of hardship, everything happens for a reason and Allah is the best of planners.",
      angle: 'rotate-4',
    },
    {
      id: 13,
      name: 'Farah Khader',
      role: 'Charity and Community Officer Sister',
      image: '/images/profile-pics/farahpfp.png',
      description:
        "Surah 13 (Ar-Ra’d), Verse 28 “أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ - Verily in the remembrance of Allah do hearts find rest/comfort/peace”\n\nI chose this Ayah because I know a lot of freshers (and even 3rd years🙋‍♀️) struggle with imposter syndrome, but this is a good reminder that this was written and meant for you by Allah - even if you can’t see why just yet😊",
      angle: '-rotate-4',
    },
    {
      id: 14,
      name: 'Hamza Aziz',
      role: 'Socials Brother & Sports Rep',
      image: '/images/profile-pics/hamzapfp.png',
      description:
        "Surah Ar-Rum (30:22) - \"And of His signs is the creation of the heavens and the earth and the diversity of your languages and your colors. Indeed in that are signs for those of knowledge.\"\n\nI chose this Ayah because one of my favourite things about the whole uni experience is getting to meet people from all sorts of backgrounds and walks of life. I appreciate how the ISoc manages create a genuine sense of community amongst everyone.",
      angle: 'rotate-4',
    },
    {
      id: 15,
      name: 'Uzair Narvel',
      role: 'Social Brother',
      image: '/images/profile-pics/uzairpfp.png',
      description:
        "At-Takwir 81:26 - So where are you going?\n\nThis short rhetorical question acts as a reminder that no matter what path you take in life, the end result still remains the same, showing how even the smallest of ayahs can hold the deepest truths.",
      angle: '-rotate-4',
    },
    {
      id: 16,
      name: 'Inaya Ahmed',
      role: 'Social Sister',
      image: '/images/profile-pics/inayapfp.png',
      description:
        "(Surah Taha 20:114) \"My Lord increase me in knowledge\"\n\nThis is a verse, I'm certain we've all come across. I hold it in high regard and it has been such a central part of my life as I truly believe educating yourself is a privilege. I feel strongly that knowledge is the key to the world! This verse is extra special to me, as it's something my dad foregrounded throughout my childhood :)",
      angle: 'rotate-4',
    },
    {
      id: 17,
      name: 'Falaq Quadir',
      role: 'Social Sister',
      image: '/images/profile-pics/falaqpfp.png',
      description:
        "Surah Al-Baqarah (2:216): \"But perhaps you hate a thing and it is good for you, and perhaps you love a thing and it is bad for you. And Allah knows, while you know not.\"\n\nI am a firm believer in “Everything happens for a reason.” It is Allah’s divine wisdom, protection and redirection when things don’t go the way we planned and this ayah reminds us of that.",
      angle: '-rotate-4',
    },
    {
      id: 18,
      name: 'Adil Ughratdar',
      role: 'Media Secretary',
      image: '/images/profile-pics/adilpfp.png',
      fontSize: 27, // Scaled down to prevent overflow
      description:
        "Al-Hujurat 49:13 \"O mankind, We have created you from a male and a female, and made you into races and tribes, so that you may identify one another. Surely the noblest of you, in Allah’s sight, is the one who is most pious of you. Surely Allah is All-Knowing, All-Aware.\"\n\nThis Ayah is perfect for the context of the Isoc. You will find people of all different backgrounds at Uni within Isoc and otherwise. It is our job - as muslims - to get to know people to benefit from the differences Allah has bestowed on us. An easy way to increase in Imaan is getting to know different people, cultures and tastes 👌. It allows recognition of Allah's signs and is quite fun.",
      angle: 'rotate-4',
    },
    {
      id: 19,
      name: 'Nabihah Haq',
      role: 'Social Media Officer',
      image: '/images/profile-pics/nabihahpfp.png',
      description:
        "\"Whoever comes to Me walking, I will come to him running\" Source: Sahih Muslim 2687\n\nUniversity is a new environment, surrounded by new kinds of pressure. It's easy to get distracted or feel distant from Allah. This hadith displays the mercy of Allah by showing us that we don’t need to be perfect to practice the deen - even with the smallest effort, Allah can see all the sincerity in your heart and comes rushing towards you with forgiveness.",
      angle: '-rotate-4',
    },
    {
      id: 20,
      name: 'Elana Radina',
      role: 'Videographer Sister',
      image: '/images/profile-pics/elana.png',
      description:
        "Surah 65 (At-Talaq), Verse 2 “وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا — And whoever is mindful of Allah, He will make for them a way out”\n\nI chose this Ayah as a reminder to trust Allah's timing and plan, knowing that He always opens doors when we need it most.",
      angle: 'rotate-4',
    },
    {
      id: 21,
      name: 'Mariem Ibrahimova',
      role: 'Graphic Designer',
      image: '/images/profile-pics/mariempfp.png',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "94:5 “ For indeed, with hardship [will be] ease”\n\nI chose this ayah because being a fresher is sometimes hard but if we put our trust in Allah he will make our paths easier",
      angle: '-rotate-4',
    },

    // --- OFFICIAL TEK BROS (LAST) ---
    {
      id: 22,
      name: 'Ayaan Haroon',
      role: 'Official Tek Bro',
      image: '/images/pfpayaan.jpg',
      description:
        "Ayaan is a nice guy but he's a bit smelly.\n\nAyaan doesn't eat enough sweet treats. If I were Ayaan I'd still be skinny but I'd have blocked arteries. My glucose levels aren't as bad as they could be because when I put on weight I think, OH NO! My sweet treats, how could they betray me like this :(\n\nThen I try to stop eating them for a while. Anyways, as I say. I love sweet things. The best version of things in this world are sweet. Sweet treats, sweet smells, sweet people.",
      angle: 'rotate-4',
    },
    {
      id: 23,
      name: 'Rafi Kyum',
      role: 'Official Tek Bro',
      image: '/images/pfprafii.jpg',
      description:
        "I like to eat nice desserts, read books and go look at nice things.\n\n I think sweet things are usually the best version of things, sweet treats, sweet smells and sweet people. \n\n 2 week minecraft phase? ",
      angle: '-rotate-4',
    },
];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + cards.length) % cards.length
    )
  }

  useEffect(() => {

    const handleScroll = () => {

      const committee = document.querySelector(
        '.mobile-committee-trigger'
      )

      if (!committee || areCardsVisible) return

      const rect = committee.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top <= vh * 0.7) {
        setAreCardsVisible(true)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [areCardsVisible])

  const currentCard = cards[currentIndex]
  const backCard = cards[(currentIndex + 1) % cards.length]

  return (

    <section className="committee-mobile relative w-full h-[560px] overflow-hidden isolate flex items-center justify-center">

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
            "url('/images/home/stickers-n-that/darkone.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* =========================
          MOBILE ARTBOARD
          378 × 560 — centred in the section via flex
          ========================= */}

      <div
        className="
          mobile-committee-trigger
          relative
          z-10
          w-[378px]
          h-[560px]
          overflow-visible
        "
      >

        {/* =========================
            CARDS AREA
            ========================= */}

        <div
          className="
            absolute
            top-[90px]
            left-1/2
            -translate-x-1/2
            w-[362px]
            h-[281px]
            overflow-visible
          "
        >

          {/* =========================
              BACK CARD
              ========================= */}

          <div
            className={`
              absolute
              inset-0
              bg-[#f2e2d3]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              ${backCard.angle}
              committee-mobile-back-card
              ${areCardsVisible ? 'animate' : ''}
            `}
          />

          {/* =========================
              FRONT CARD
              ========================= */}

          <div
            className={`
              absolute
              inset-0
              bg-[#f2e2d3]
              border-[5.7px]
              border-white
              shadow-[0_11px_23px_rgba(0,0,0,0.3)]
              ${currentCard.angle}
              scale-[0.96]
              overflow-hidden
              committee-mobile-front-card
              ${areCardsVisible ? 'animate' : ''}
            `}
          >

            {/* =========================
                PERSON IMAGE
                ========================= */}

            <div
              className="
                absolute
                left-0
                top-0
                w-[44%]
                h-full
                overflow-hidden
                p-[9px]
              "
            >

              <img
                src={currentCard.image}
                alt={currentCard.name}
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-sm
                "
              />

            </div>

            {/* =========================
                RIGHT SIDE
                ========================= */}

            <div
              className="
                absolute
                right-0
                top-0
                w-[56%]
                h-full
                flex
                flex-col
                pt-[11px]
                pb-[10px]
                px-[9px]
              "
            >

              {/* =========================
                  NAME / ROLE / STAMP
                  ========================= */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-full
                "
              >

                {/* NAME + ROLE */}

                <div
                  className="
                    w-full
                    text-center
                    min-w-0
                    px-[48px]
                  "
                >

                  <h2
                    className="
                      bodoni-flf
                      font-bold
                      text-[#254c3a]
                      text-[17px]
                      leading-[0.95]
                      uppercase
                      break-words
                    "
                  >
                    {currentCard.name}
                  </h2>

                  <p
                    className="
                      font-body
                      font-bold
                      text-[#254c3a]
                      text-[7.4px]
                      mt-[3.5px]
                      uppercase
                      tracking-wide
                      leading-tight
                      break-words
                    "
                  >
                    {currentCard.role}
                  </p>

                </div>

                {/* STAMP */}

                <div
                  className="
                    absolute
                    right-0
                    w-[50px]
                    h-[56px]
                    shrink-0
                  "
                >

                  <img
                    src="/images/home/isocbitstrans/stamp.png"
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>

              </div>

              {/* =========================
                  DESCRIPTION
                  ========================= */}

              <div
                className="
                  mt-[6px]
                  w-full
                  flex-1
                  min-h-0
                  overflow-y-auto
                  overflow-x-hidden
                  px-[2px]
                "
              >

                <p
                  className="
                    font-body
                    font-bold
                    text-[#254c3c]
                    block
                    w-full
                    min-w-0
                    text-center
                    whitespace-pre-line
                  "
                  style={
                    currentCard.id === 8
                      ? {
                          fontSize: '7.2px',
                          lineHeight: 1.15,
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }
                      : {
                          fontSize: '8.3px',
                          lineHeight: 1.25,
                          overflowWrap: 'anywhere',
                          wordBreak: 'break-word',
                        }
                  }
                >
                  {currentCard.description}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            ARROWS — below the cards, centred
            ========================= */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[375px]
            z-30
            flex
            items-center
            justify-center
            gap-[36px]
          "
        >

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              text-[#f2eae0]
              text-[53px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[29px]
              h-[56px]
              flex
              items-center
              justify-center
            "
            aria-label="Previous committee"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              text-[#f2eae0]
              text-[53px]
              font-light
              leading-none
              hover:scale-110
              transition-transform
              w-[29px]
              h-[56px]
              flex
              items-center
              justify-center
            "
            aria-label="Next committee"
          >
            ›
          </button>

        </div>

        {/* =========================
            COMMITTEE TITLE
            ========================= */}

        <div
          className="
            absolute
            left-0
            bottom-[40px]
            w-[378px]
            z-10
            text-center
          "
        >

          <h1
            className="
              font-display
              font-black
              text-[#f2eae0]
              text-[55.5px]
              leading-[0.85]
              tracking-[-0.055em]
              uppercase
              whitespace-nowrap
              drop-shadow-[0_3.5px_5px_rgba(0,0,0,0.6)]
            "
          >
            COMMITTEE
          </h1>

        </div>

      </div>

      {/* =========================
          ANIMATIONS
          ========================= */}

      <style>{`

        .committee-mobile-back-card {
          opacity: 0;
          transform: translateX(-100vw);
        }

        .committee-mobile-front-card {
          opacity: 0;
          transform: translateX(100vw);
        }

        @keyframes committeeMobileSlideLeft {

          0% {
            opacity: 0;
            transform: translateX(-100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(8px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes committeeMobileSlideRight {

          0% {
            opacity: 0;
            transform: translateX(100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(-8px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        .committee-mobile-back-card.animate {
          animation:
            committeeMobileSlideLeft
            0.8s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .committee-mobile-front-card.animate {
          animation:
            committeeMobileSlideRight
            0.8s
            0.15s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            forwards;
        }

        .bodoni-flf {
          font-family:
            'Bodoni FLF',
            'Bodoni Moda',
            Didot,
            serif;
        }

        @media (prefers-reduced-motion: reduce) {

          .committee-mobile-back-card,
          .committee-mobile-front-card {
            opacity: 1;
            transform: none;
            animation: none;
          }

        }

      `}</style>

    </section>
  )
}

export default CommitteeMobile