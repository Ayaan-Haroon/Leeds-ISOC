import React from "react";

const ResourcesMobile = () => {
  return (
    <section className="relative w-full h-[395px] overflow-hidden isolate bg-[#f2eae0]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/Resources/background.png')",
        }}
      />

      {/* =====================================================
          340px MOBILE ARTBOARD
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[340px]
          h-[395px]
          overflow-hidden
        "
      >

        {/* =====================================================
            USTAADH AKEEL — TOP LEFT
        ====================================================== */}
        <div
          className="
            absolute
            left-[10px]
            top-[12px]
            z-20
            w-[150px]
            text-left
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[22px]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            USTAADH AKEEL
            <br />
            JERAAL
          </h2>

          <p
            className="
              m-0
              mt-[5px]
              text-[8px]
              font-bold
              leading-[1.15]
            "
          >
            Muslim Chaplain, University of Leeds.
          </p>

          <p
            className="
              m-0
              mt-[5px]
              text-[7px]
              font-medium
              leading-[1.35]
              tracking-[-0.015em]
            "
          >
            Akeel is here to support Muslim students with questions
            around prayer, fasting, faith, university life,
            homesickness, personal challenges, or simply for a
            confidential chat.
          </p>

          <p
            className="
              m-0
              mt-[5px]
              text-[7px]
              font-bold
              leading-[1.25]
            "
          >
            Office: LUU GR.20
            <br />
            TEMP EMAIL: [ADD TEMP EMAIL]
            <br />
            TEMP MOBILE: [ADD TEMP MOBILE]
          </p>
        </div>


        {/* =====================================================
            SISTER JAAN — BOTTOM RIGHT
        ====================================================== */}
        <div
          className="
            absolute
            right-[10px]
            top-[73px]
            z-20
            w-[150px]
            text-right
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[22px]
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            SISTER JAAN
          </h2>

          <p
            className="
              m-0
              mt-[5px]
              text-[8px]
              font-bold
              leading-[1.15]
            "
          >
            Muslim Student Advisor.
          </p>

          <p
            className="
              m-0
              mt-[5px]
              text-[7px]
              font-medium
              leading-[1.35]
              tracking-[-0.015em]
            "
          >
            Jaan supports Muslim students with faith, wellbeing,
            relationships and academic or personal challenges,
            helping students balance religious duties with
            university life.
          </p>

          <p
            className="
              m-0
              mt-[5px]
              text-[7px]
              font-bold
              leading-[1.25]
            "
          >
            Emmanuel Centre
            <br />
            j.malik@leeds.ac.uk
            <br />
            07543800508
          </p>
        </div>


        {/* =====================================================
            RESTAURANT RECOMMENDATIONS
            UNDER BOTH INFORMATION BLOCKS
        ====================================================== */}
        <div
          className="
            absolute
            left-[10px]
            top-[202px]
            z-20
            grid
            w-[320px]
            grid-cols-3
            gap-x-[8px]
            text-[#60785e]
          "
        >

          {/* COLUMN 1 */}
          <div className="min-w-0">
            <p className="m-0 text-[7px] font-bold leading-[1.7]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="min-w-0">
            <p className="m-0 text-[7px] font-bold leading-[1.7]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
            </p>
          </div>

          {/* COLUMN 3 */}
          <div className="min-w-0">
            <p className="m-0 text-[7px] font-bold leading-[1.7]">
              <span className="text-[6px]">①</span>{" "}
              TAO — East Asian
              <br />
              <span className="text-[6px]">①</span>{" "}
              AAGRAH — Indian
              <br />
              <span className="text-[6px]">①</span>{" "}
              MY LAHORE —
              <br />
              British Asian
            </p>
          </div>

        </div>


        {/* =====================================================
            EMPTY BOX
        ====================================================== */}
        <div
          className="
            absolute
            left-[161px]
            top-[254px]
            z-20
            h-[108px]
            w-[153px]
            rounded-[7px]
            border-[3px]
            border-[#60785e]
          "
        />


        {/* =====================================================
            SPEAKER STICKER
        ====================================================== */}
        <img
          src="/images/Resources/speakerphoneandnotepad.png"
          alt=""
          className="
            absolute
            left-[-7px]
            top-[254px]
            z-30
            w-[147px]
            rotate-[-1deg]
            object-contain
          "
        />


        {/* =====================================================
            RESOURCES TITLE
        ====================================================== */}
        <div
  className="
    absolute
    right-0
    top-[319px]
    z-40
    w-max
  "
>
  <h1
    className="
      m-0
      whitespace-nowrap
      text-left
      text-[43px]
      font-bold
      uppercase
      leading-[0.75]
      tracking-[-0.055em]
      text-[#60785e]
    "
    style={{
      fontFamily: "'Bodoni FLF', serif",
    }}
  >
    RESOURCES
  </h1>
</div>

      </div>
    </section>
  );
};

export default ResourcesMobile;