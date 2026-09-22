import { useEffect, useState } from 'react'
import MasterCanvas from '../../components/MasterCanvas'

const Committee = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [areCardsVisible, setAreCardsVisible] = useState(false)

const cards = [
    // --- EXECUTIVE / LEADERSHIP ---
    {
      id: 1,
      name: 'Muhammad Talha',
      role: 'President',
      image: '/images/pfp1.jpg',
      fontSize: 30, // Scaled down to fit
      description:
        "Talha is a Medicine student who made the bold move of shaving his head seven months ago. Outside of his busy role, he loves travelling, sampling delicious food, exploring cultures, and photography.\n\nHis top comfort dish is Nihari and his favourite colour is purple. He loves how regular gatherings and good food bring people together, aiming to make every newcomer feel fully welcomed.\n\nHis guidance draws from Surah Taha (20:46): 'Have no fear! I am with you, hearing and seeing.' When stepping into a new university chapter, know that you are never alone and can face uncertainty with trust in Him.",
      angle: '-rotate-4',
    },
    {
      id: 2,
      name: 'Muhammad Qais',
      role: 'Vice President Brother',
      image: '/images/pfp2.jpg',
      fontSize: 30, // Scaled down to fit
      description:
        "Qais is a 3rd Year Accounting & Finance student who represented Zimbabwe in a 2021 Debate Championship. He spends his free hours hitting the gym, travelling, and practicing traditional Tatreez.\n\nHis ultimate dish is Raan with Afghan Pulao, paired with Tyrian purple. He values how the brothers' community grounded his uni years, providing an environment conducive to deepening Islamic knowledge.\n\nHis anchor is Surah Az-Zumar (39:53): 'Do not lose hope in Allah's mercy.' It reminds freshers that no matter the dunya's perspective, Allah's doors of forgiveness and mercy are perpetually open.",
      angle: 'rotate-4',
    },
    {
      id: 3,
      name: 'Maya Fazal',
      role: 'Vice President Sister',
      image: '/images/pfp3.png',
      description:
        "Maya is a 2nd Year Medicine student who once spotted food vlogger Mark Wiens at Karachi airport a decade ago. Her hobbies include studying languages, travelling, and Pinterest doom scrolling.\n\nHer ultimate order is kabli pilau paired with a mixed grill platter and a crisp Mirinda, backed by the colour greeny-blue. She loves praying Jummah with friends and grabbing sweet treats from the bake sales.\n\nHer advice reflects the Hadith to 'Tie your camel.' Having applied to medical school twice, it gave her comfort to always try her hardest while trusting completely in what is beyond her control.",
      angle: '-rotate-4',
    },
    {
      id: 4,
      name: 'Fatima Awais',
      role: 'General Secretary',
      image: '/images/pfp4.jpg',
      description:
        "Fatima is a 3rd Year Medicine student and the self-proclaimed best hypothetical maker around. Outside her studies, she enjoys travelling, hiking, and practicing calligraphy.\n\nHer favourite colour is pink and she cannot resist a slice of Matilda cake. What she treasures most about Leeds iSoc is how welcoming everyone is, having met some of her closest friends through all the fire socials.\n\nHer chosen advice is Surah Qaf (50:16): 'We are closer to him than his jugular vein.' It serves as an anchor that we are never truly alone through life's hardships and can always call upon and rely on Allah.",
      angle: 'rotate-4',
    },
    {
      id: 5,
      name: 'Ismaeel Yahya Hoque',
      role: 'Treasurer',
      image: '/images/pfp5.jpg',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "Ismaeel is a 3rd Year Politics student with a hidden talent for whipping up homemade tiramisu. His favourite pastimes include sipping hot chai, reading non-fiction, and strolling through museums.\n\nHe loves Paanch Masala fish and neutral cream tones. He admires how iSoc transcends an ordinary society, generating lasting impact for both the dunya and the akhira through charity and community action.\n\nHis guidance is Surah Al-Fath (48:1) referencing the Treaty of Hudaibiyah. He highlights that what might look like an immediate setback is often Allah's decree unfolding into an eternal triumph.",
      angle: '-rotate-4',
    },

    // --- HEADS OF DEPARTMENTS ---
    {
      id: 6,
      name: 'Suleman Sajad',
      role: 'Head of Student Affairs',
      image: '/images/pfp6.jpg',
      description:
        "Suleman is a 3rd Year Medicine student who has quite literally survived being stuck in quicksand. He stays active with any physical sport and never turns down a bowl of ice cream.\n\nHis signature colour is bold red. What he values most about Leeds iSoc is the wide breadth and high quality of inspiring speakers and educational classes brought to campus.\n\nHis reflection centers on Surah Al-Fatihah (1:1): 'In the name of Allah, the Entirely Merciful.' He shares that every success begins and concludes with Allah's remembrance—trust Him and everything resolves.",
      angle: 'rotate-4',
    },
    {
      id: 7,
      name: 'Adam Ahmed',
      role: 'Head of Marketing',
      image: '/images/pfp7.jpg',
      description:
        "Adam is a 3rd Year Human Physiology student who will never back down from a Pokémon battle. In his downtime, you will find him outdoors hiking, rock climbing, and practicing martial arts.\n\nHis absolute favourite dish is his Ammi's lamb pilau, and his go-to colour is green. He loves Leeds iSoc for its strong sense of brotherhood, providing an encouraging community that always offers a safe space.\n\nHis advice comes from Surah At-Talaq (65:2-3): 'And whoever is mindful of Allah, He will make a way out for them.' It is a vital reminder of taqwa and that Allah always provides in ways we cannot imagine.",
      angle: '-rotate-4',
    },

    // --- FUNCTIONAL OFFICERS & REPS ---
    {
      id: 8,
      name: 'Anas Malik',
      role: 'Education Brother',
      image: '/images/pfp8.jpg',
      description:
        "Anas is a 2nd Year Medicine student with a quick mind who can solve a Rubik's cube in under 30 seconds. His hobbies include badminton, table tennis, reading, and exploring the outdoors.\n\nHis favourite meal is the Warn a Bro's box from Barakah Bros, and his favourite colour is blue. His favourite aspect of Leeds iSoc is how lively and active it remains with insightful events and talks.\n\nHe shares the Hadith: 'A man is upon the religion of his close friend.' He reminds freshers that your company shapes your direction, so choose friends who safeguard your imaan and elevate your purpose.",
      angle: 'rotate-4',
    },
    {
      id: 9,
      name: 'Hiba Shahzad',
      role: 'Education Sister',
      image: '/images/pfp9.jpg',
      description:
        "Hiba is a 3rd Year Medicine student who can build an entire house of cards out of a full UNO deck. Her downtime is spent baking, hiking, camping, sketching, and building Lego sets.\n\nShe loves dynamite prawns and any shade of blue. Her favourite thing about Leeds iSoc is how everyone unites under one shared purpose, helping her meet some of her best friends through events.\n\nHer reminder comes from Surah Ghafir (40:60): 'Call upon Me; I will respond to you.' When starting university feels overwhelming or uncertain, remember that Allah has no limits and is only one du'a away.",
      angle: '-rotate-4',
    },
    {
      id: 10,
      name: 'Kareem Abdelsabour',
      role: 'Prayer Spaces Brother',
      image: '/images/pfp10.jpg',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "Kareem is a 3rd Year Medicine student who holds the unique talent of being able to bird whistle. You will frequently spot him riding Beryl bikes around town, travelling, and learning new things.\n\nHis go-to comfort food is Macarona Bashamel, and his favourite colour is blue. To him, the brotherhood formed at Leeds iSoc is unmatched, and there is no community quite like it.\n\nHis advice is rooted in Surah Ali 'Imran (3:159): 'And when you have decided, then rely upon Allah.' He reminds everyone that sometimes decisions require less overthinking and that taking action is worth far more.",
      angle: 'rotate-4',
    },
    {
      id: 11,
      name: 'Amina Nedjadi',
      role: 'Prayer Spaces Sister',
      image: '/images/pfp11.jpg',
      description:
        "Amina is a 2nd Year Medicine student and an avid sweet potato lover who eats one every single day. When she gets free time, she enjoys travelling, hiking, and cooking.\n\nHer favourite dish is her grandmother's couscous, and her signature colour is purple. Leeds iSoc quickly became a home away from home for her, inspiring her to give back and foster that same warmth for others.\n\nHer advice draws from Surah Az-Zumar (39:53): 'Do not despair of the mercy of Allah.' She shares this to reassure students never to lose hope, especially when university life becomes demanding and tough.",
      angle: '-rotate-4',
    },
    {
      id: 12,
      name: 'Hadi Rana',
      role: 'Charity and Community Brother',
      image: '/images/pfp12.jpg',
      description:
        "Hadi is a 3rd Year Medicine student who promises he is truly ambidextrous. When he is taking a break from studies, he enjoys hiking, cooking up good meals, and keeping house plants.\n\nHis go-to food is Khabsa, which he ate every Friday in Saudi, and his favourite colour is purple. He loves how Leeds iSoc makes uni feel like home, especially during Ramadan iftars away from family.\n\nHis chosen verse is Surah Ar-Rahman (55:13): 'So which of the favours of your Lord would you deny?' It serves to ground us in gratitude, remembering that even in trials, Allah is the best of planners.",
      angle: 'rotate-4',
    },
    {
      id: 13,
      name: 'Farah Khader',
      role: 'Charity and Community Officer Sister',
      image: '/images/pfp13.jpg',
      description:
        "Farah is a 3rd Year Law student who once clocked 16 hours of screen time playing Piano Tiles. You might also spot her carrying her trusty Snoopy around campus during intense exam periods.\n\nShe spends her time reading, baking, and making collages, with mac & cheese and burgundy/plum tones topping her favourites. She loves how many kindhearted best friends she found through Leeds iSoc.\n\nHer advice comes from Surah Ar-Ra'd (13:28): 'In the remembrance of Allah do hearts find rest.' She reminds freshers facing imposter syndrome that where you are was chosen for you by Allah.",
      angle: '-rotate-4',
    },
    {
      id: 14,
      name: 'Hamza Aziz',
      role: 'Socials Brother & Sports Rep',
      image: '/images/pfp14.jpg',
      description:
        "Hamza is a 3rd Year Medicine student who worked on the production team of an LA award-winning film. In his free time, he loves playing badminton, watching films, and travelling.\n\nHis favourite meal is his mum's lamb biryani, and his colour is orange. He loves the packed calendar of lively iSoc events and socials—plus the 20% Charcos student discount never hurts.\n\nHis advice is Surah Ar-Rum (30:22) regarding the diversity of mankind. He loves how university connects people from all walks of life and cherishes how iSoc builds a genuine, unified community.",
      angle: 'rotate-4',
    },
    {
      id: 15,
      name: 'Uzair Narvel',
      role: 'Social Brother',
      image: '/images/pfp21.jpg',
      description:
        "Uzair is a 2nd Year Dentistry student who attended 11 different schools before coming to university due to moving around often. His passions include cars, fencing, and heading out on spontaneous side quests.\n\nHis favourite food is a classic chicken shawarma, and his colour of choice is orange. He loves the relaxed, easygoing, and carefree environment shared among the Leeds iSoc members and committee.\n\nHis reminder is the brief yet profound question from Surah At-Takwir (81:26): 'So where are you going?' It serves to ground us that no matter our route, our ultimate end remains the same.",
      angle: '-rotate-4',
    },
    {
      id: 16,
      name: 'Inaya Ahmed',
      role: 'Social Sister',
      image: '/images/pfp16.jpg',
      description:
        "Inaya is a 2nd Year Medicine student with an adventurous streak. She once attended a 7-day festival in Spain to run with bulls and casually hiked a glacier.\n\nShe loves travelling, trying out unconventional experiences, eating out, and snacking on crisps, with #182D09 being her chosen colour. For her, Leeds iSoc stands out for its warm atmosphere and impactful charity work.\n\nHer guiding verse is Surah Taha (20:114): 'My Lord increase me in knowledge.' Her father instilled this in her from childhood as a core reminder that education is a privilege and knowledge is the ultimate key.",
      angle: 'rotate-4',
    },
    {
      id: 17,
      name: 'Falaq Quadir',
      role: 'Social Sister',
      image: '/images/pfp17.jpg',
      description:
        "Falaq is a 2nd Year Medicine student with an adventurous palate who loves trying funky food combinations. Her interests span learning foreign languages, food hunting, stargazing, and reading.\n\nHer favourite food is lamb tagine, and her favourite shade is Zandvoort Blue. She cherishes the sisterhood at Leeds iSoc, which kept her grounded through starting uni—plus post-social chai is unbeatable.\n\nHer guidance is Surah Al-Baqarah (2:216): 'Perhaps you hate a thing and it is good for you.' It anchors her belief that everything happens for a reason, guided by divine wisdom and gentle redirection.",
      angle: '-rotate-4',
    },
    {
      id: 18,
      name: 'Adil Ughratdar',
      role: 'Media Secretary',
      image: '/images/pfp18.jpg',
      fontSize: 27, // Scaled down to prevent overflow
      description:
        "Adil is a 2nd Year Medicine student who somehow managed to miss his flight last year. Outside of university, he enjoys playing football, reading, going glamping, and visiting historic heritage sites.\n\nHis comfort meal is Khuri Kitchri and his chosen palette is white/cream. He highlights iSoc's educational events as unmatched opportunities to learn, grow, and get well beyond your money's worth.\n\nHis advice is Surah Al-Hujurat (49:13) on how mankind was made into diverse tribes. He reminds freshers that connecting with people of varied backgrounds and cultures is a beautiful way to boost your imaan.",
      angle: 'rotate-4',
    },
    {
      id: 19,
      name: 'Nabihah Haq',
      role: 'Social Media Officer',
      image: '/images/pfp19.jpg',
      description:
        "Nabihah is a Final Year Business with Marketing student on a mission, having visited nearly every cafe in Leeds. She loves hosting events, photography, baking, and relaxing with tiramisu.\n\nHer palette of choice is lavender and plum. She cherishes how the iSoc sisterhood brings the true warmth of home straight into the university environment, making campus life feel supportive.\n\nHer advice is the Hadith: 'Whoever comes to Me walking, I will come to him running.' In a busy environment, remember you don't need perfection to practice deen—sincere, small steps bring immense mercy.",
      angle: '-rotate-4',
    },
    {
      id: 20,
      name: 'Elana Radina',
      role: 'Videographer Sister',
      image: '/images/pfp20.jpg',
      description:
        "Elana is a Law Graduate who could happily survive purely on sweet treats every day of the week. Her favourite pastimes include swimming, playing badminton, and baking.\n\nHer top meal combo is comforting chicken soup followed by honey cake, and her go-to colour is pink. She loves Leeds iSoc for its warm, welcoming community and the chance to connect with inspiring people.\n\nHer advice is Surah At-Talaq (65:2): 'And whoever is mindful of Allah, He will make for them a way out.' She holds onto this to trust in Allah's timing, knowing He opens doors right when we need it most.",
      angle: 'rotate-4',
    },
    {
      id: 21,
      name: 'Mariem Ibrahimova',
      role: 'Graphic Designer',
      image: '/images/pfp15.jpg',
      fontSize: 24, // Scaled down to prevent overflow
      description:
        "Mariem is a 2nd Year Graphic Design and Communication student originally from Alexandria who cannot live without Dr Pepper. Her interests include making art, reading, listening to music, and seaside trips.\n\nHer staple meal is Egyptian Koushari and her favourite colour is classic blue. What she loves most about Leeds iSoc is the friendly, welcoming environment and the non-stop fun events on offer.\n\nHer message is the comforting promise of Surah Ash-Sharh (94:5): 'For indeed, with hardship will be ease.' Freshers should take heart that placing your trust in Allah eases every difficult path.",
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
  ]

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
      const committee = document.querySelector('.committee-trigger')

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

  return (
    <section className="committee-section relative isolate w-full overflow-visible">

      <style>{`
        @keyframes committeeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(-100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes committeeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(100vw);
          }

          70% {
            opacity: 1;
            transform: translateX(-20px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .committee-back-card {
          opacity: 0;
          transform: translateX(-100vw);
        }

        .committee-front-card {
          opacity: 0;
          transform: translateX(100vw);
        }

        .committee-back-card.animate {
          animation:
            committeeSlideLeft
            1s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0s
            forwards;
        }

        .committee-front-card.animate {
          animation:
            committeeSlideRight
            1s
            0.2s
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
          .committee-back-card,
          .committee-front-card {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>

      {/* GRAIN OVERLAY */}
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

      {/* MASTER CANVAS */}
      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div
            className="
              committee-trigger
              relative
              h-[900px]
              w-[1460px]
              overflow-visible
            "
          >

            {/* CARDS AREA */}
            <div
              className="
                committee-cards
                absolute
                inset-0
                -translate-y-[100px]
                overflow-visible
              "
            >

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="
                  absolute
                  left-[102px]
                  top-1/2
                  -translate-y-1/2
                  z-30
                  text-[#f2eae0]
                  text-[90px]
                  font-light
                  leading-none
                  hover:scale-110
                  transition-transform
                "
                aria-label="Previous committee"
              >
                ‹
              </button>

              {/* CARDS */}
              <div
                className="
                  committee-card
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[800px]
                  h-[495px]
                "
              >

                {/* BACK CARD */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-[#f2e2d3]
                    border-[7px]
                    border-white
                    shadow-[0_12px_24px_rgba(0,0,0,0.3)]
                    ${cards[(currentIndex + 1) % cards.length].angle}
                    committee-back-card
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-2
                    hover:shadow-[0_20px_32px_rgba(0,0,0,0.45)]
                    cursor-pointer
                    ${areCardsVisible ? 'animate' : ''}
                  `}
                />

                {/* FRONT CARD */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-[#f2e2d3]
                    border-[7px]
                    border-white
                    shadow-[0_12px_24px_rgba(0,0,0,0.3)]
                    ${currentCard.angle}
                    scale-[0.96]
                    overflow-hidden
                    committee-front-card
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-2
                    hover:shadow-[0_20px_32px_rgba(0,0,0,0.45)]
                    cursor-pointer
                    ${areCardsVisible ? 'animate' : ''}
                  `}
                >

                  {/* LEFT SIDE — PERSON IMAGE */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      w-[336px]
                      h-full
                      overflow-hidden
                      p-6
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

                  {/* RIGHT SIDE — PERSON INFO */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      w-[464px]
                      h-full
                      pr-5
                      pt-7
                      pb-6
                      pl-5
                      flex
                      flex-col
                    "
                  >

                    {/* NAME + ROLE + STAMP */}
                    <div
                      className="
                        relative
                        flex
                        items-center
                        w-full
                      "
                    >

                      {/* NAME + ROLE */}
                      <div
                        className="
                          flex-1
                          text-center
                          pr-2
                          min-w-0
                        "
                      >
                        <h2
                          style={{
                            fontSize: `${currentCard.fontSize || 35}px`,
                          }}
                          className="
                            bodoni-flf
                            font-bold
                            text-[#254c3a]
                            leading-[0.95]
                            uppercase
                            whitespace-nowrap
                          "
                        >
                          {currentCard.name}
                        </h2>

                        <p
                          className="
                            font-body
                            font-bold
                            text-[#254c3a]
                            text-[13px]
                            mt-2
                            uppercase
                            tracking-wide
                            leading-none
                          "
                        >
                          {currentCard.role}
                        </p>
                      </div>

                      {/* STAMP */}
                      <div
                        className="
                          w-[95px]
                          h-[110px]
                          shrink-0
                          ml-auto
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

                    {/* DESCRIPTION */}
                    <div
                      className="
                        mt-5
                        w-full
                        flex-1
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <p
                        className="
                          font-body
                          font-bold
                          text-[#254c3c]
                          text-[15px]
                          leading-[1.35]
                          text-center
                          whitespace-pre-line
                        "
                      >
                        {currentCard.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="
                  absolute
                  right-[102px]
                  top-1/2
                  -translate-y-1/2
                  z-30
                  text-[#f2eae0]
                  text-[90px]
                  font-light
                  leading-none
                  hover:scale-110
                  transition-transform
                "
                aria-label="Next committee"
              >
                ›
              </button>

            </div>

            {/* TITLE */}
            <div
              className="
                absolute
                bottom-[24px]
                left-0
                w-[1460px]
                z-10
                text-center
              "
            >
              <h1
                className="
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[108.8px]
                  leading-[1.3]
                  uppercase
                  drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]
                "
              >
                COMMITTEE
              </h1>
            </div>

          </div>
        </MasterCanvas>
      </div>
    </section>
  )
}

export default Committee