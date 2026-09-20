import React from "react";

const rightSponsors = [
  {
    number: 1,
    text: "Rajas 10% both city centre and Hype Park",
  },
  {
    number: 2,
    text: "Charcos 25% (£8 up)",
  },
  {
    number: 3,
    text: "Abu Bakr 10% food-to-go and patisserie",
  },
  {
    number: 4,
    text: "Cheatdaze 15%",
  },
  {
    number: 5,
    text: "Fluffy Fluffy 15% (5% more than students)",
  },
  {
    number: 6,
    text: "HFC 15% in Hyde Park",
  },
  {
    number: 7,
    text: "Chaai 20%",
  },
  {
    number: 8,
    text: "Birria Boyz 15%",
  },
  {
    number: 9,
    text: "Juice Glow 15%",
  },
];

const leftSponsors = [
  {
    number: 11,
    text: "Reforma 20% - LUU ISLAMIC SOCIETY20",
  },
  {
    number: 12,
    text: "Ruya 10%",
  },
  {
    number: 13,
    text: "Cafe 1977",
  },
  {
    number: 14,
    text: "Tehreems Kitchen 10% (cash only)",
  },
  {
    number: 15,
    text: "Haute Dolci 15%",
  },
  {
    number: 16,
    text: "Nove Studio 20%",
  },
  {
    number: 17,
    text: "Blend",
  },
  {
    number: 18,
    text: "AURA 10% storewide",
  },
  {
    number: 19,
    text: "Mr Su's",
  },
];

export default function OurSponsors() {
  return (
    <main
      className="sponsors-page
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('/images/OurSponsors/background.png')",
      }}
    >
      <div className="sponsors-artboard relative min-h-screen w-full">

        {/* =====================================================
            TITLE
        ====================================================== */}

        <h1
          className="
            sponsors-title
            absolute
            left-[12.5%]
            top-[17%]
            z-20
            w-[36%]
            text-right
            text-[6.3vw]
            font-bold
            uppercase
            leading-[0.76]
            tracking-[-0.045em]
            text-[#1f513f]
          "
          style={{
            fontFamily: "'Bodoni FLF', serif",
          }}
        >
          <span className="block">OUR</span>
          <span className="block">SPONSORS</span>
        </h1>


        {/* =====================================================
            RIGHT SIDE — SPONSORS 1–9
        ====================================================== */}

        <section
          className="
            sponsors-list
            absolute
            left-[50.7%]
            top-[13.5%]
            z-20
            w-[47%]
          "
        >
          <div className="flex flex-col">

            {rightSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[6.5vh]
                  w-full
                  items-center
                  gap-[0.8vw]
                "
              >
                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[2.75vw]
                    w-[2.75vw]
                    shrink-0
                    object-contain
                  "
                />

                <p
                  className="
                    whitespace-nowrap
                    text-[2.05vw]
                    font-bold
                    leading-none
                    tracking-[-0.045em]
                    text-[#1f513f]
                  "
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {sponsor.text}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* =====================================================
            LEFT SIDE — SPONSORS 11–19
        ====================================================== */}

        <section
          className="
            sponsors-list
            absolute
            left-[5%]
            top-[35.5%]
            z-20
            w-[45.5%]
          "
        >
          <div className="flex flex-col">

            {leftSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[6.05vh]
                  w-full
                  items-center
                  justify-end
                  gap-[0.8vw]
                "
              >
                <p
                  className="
                    whitespace-nowrap
                    text-right
                    text-[2.05vw]
                    font-bold
                    leading-none
                    tracking-[-0.045em]
                    text-[#1f513f]
                  "
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {sponsor.text}
                </p>

                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[2.75vw]
                    w-[2.75vw]
                    shrink-0
                    object-contain
                  "
                />
              </div>
            ))}

          </div>
        </section>


        {/* =====================================================
            BOTTOM ARROWS
        ====================================================== */}

        <img
          src="/images/OurSponsors/arrows.png"
          alt=""
          className="
            sponsors-arrows
            absolute
            left-[53%]
            top-[73.5%]
            z-10
            w-[17%]
            object-contain
          "
        />

      </div>
    </main>
  );
}