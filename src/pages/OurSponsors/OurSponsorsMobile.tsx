import React from "react";

const rightSponsors = [
  {
    number: 1,
    text: "Rajas 10%",
  },
  {
    number: 2,
    text: "Charcos 25%",
  },
  {
    number: 3,
    text: "Abu Bakr 10%",
  },
  {
    number: 4,
    text: "Cheatdaze 15%",
  },
  {
    number: 5,
    text: "Fluffy Fluffy 15%",
  },
  {
    number: 6,
    text: "HFC 15%",
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
    text: "Reforma 20%",
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
    text: "Tehreems Kitchen 10%",
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
    text: "AURA 10%",
  },
  {
    number: 19,
    text: "Mr Su's",
  },
];

const OurSponsorsMobile = () => {
  return (
    <main
      className="
        relative
        w-full
        h-[500px]
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/images/OurSponsors/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* =====================================================
          340px MOBILE ARTBOARD
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          w-[340px]
          h-[500px]
          overflow-hidden
          translate-y-[45px]
        "
      >

        {/* =====================================================
            TITLE
        ====================================================== */}
        <h1
          className="
            absolute
            left-[22px]
            top-[58px]
            z-20
            w-[145px]
            m-0
            p-0
            text-right
            text-[28px]
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
          <span className="block">
            OUR
          </span>

          <span className="block">
            SPONSORS
          </span>
        </h1>


        {/* =====================================================
            RIGHT SPONSORS
        ====================================================== */}
        <section
          className="
            absolute
            left-[174px]
            top-[59px]
            z-20
            w-[160px]
          "
        >
          <div className="flex flex-col">

            {rightSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[24px]
                  w-full
                  items-center
                  gap-[5px]
                "
              >

                {/* NUMBER */}
                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[20px]
                    w-[20px]
                    shrink-0
                    object-contain
                  "
                />

                {/* TEXT */}
                <p
                  className="
                    m-0
                    whitespace-nowrap
                    text-[12px]
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
            LEFT SPONSORS
        ====================================================== */}
        <section
          className="
            absolute
            left-[7px]
            top-[110px]
            z-20
            w-[160px]
          "
        >
          <div className="flex flex-col">

            {leftSponsors.map((sponsor) => (
              <div
                key={sponsor.number}
                className="
                  flex
                  h-[27px]
                  w-full
                  items-center
                  justify-end
                  gap-[5px]
                "
              >

                {/* TEXT */}
                <p
                  className="
                    m-0
                    whitespace-nowrap
                    text-right
                    text-[12px]
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

                {/* NUMBER */}
                <img
                  src={`/images/OurSponsors/${sponsor.number}.png`}
                  alt=""
                  className="
                    h-[20px]
                    w-[20px]
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
            absolute
            left-[165px]
            top-[270px]
            rotate-[-15deg]
            z-10
            w-[80px]
            object-contain
          "
        />

      </div>
    </main>
  );
};

export default OurSponsorsMobile;