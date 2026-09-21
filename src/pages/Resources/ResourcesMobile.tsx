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
            USTAADH AKEEL
        ====================================================== */}
        <div
          className="
            absolute
            left-[39px]
            top-[10px]
            z-20
            w-[262px]
            text-center
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[25px]
              font-bold
              uppercase
              leading-[0.95]
              tracking-[-0.055em]
            "
          >
            USTAADH AKEEL JERAAL
          </h2>

          <p
            className="
              m-0
              mt-[3px]
              text-[10px]
              font-bold
              leading-[1.05]
            "
          >
            Muslim Chaplain, University of Leeds.
          </p>

          <p
            className="
              m-0
              mt-[4px]
              text-[8px]
              font-medium
              leading-[1.35]
              tracking-[-0.025em]
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
              mt-[3px]
              text-[8px]
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
            SISTER JAAN
        ====================================================== */}
        <div
          className="
            absolute
            left-[39px]
            top-[104px]
            z-20
            w-[262px]
            text-center
            text-[#60785e]
          "
        >
          <h2
            className="
              m-0
              text-[25px]
              font-bold
              uppercase
              leading-[0.95]
              tracking-[-0.055em]
            "
          >
            SISTER JAAN
          </h2>

          <p
            className="
              m-0
              mt-[3px]
              text-[10px]
              font-bold
              leading-[1.05]
            "
          >
            Muslim Student Advisor.
          </p>

          <p
            className="
              m-0
              mt-[4px]
              text-[8px]
              font-medium
              leading-[1.35]
              tracking-[-0.025em]
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
              mt-[3px]
              text-[8px]
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
        ====================================================== */}
        <div
          className="
            absolute
            left-[18px]
            top-[207px]
            z-20
            w-[304px]
            text-[#60785e]
          "
        >

          {/* COLUMN 1 */}
          <div
            className="
              absolute
              left-[0px]
              top-0
              w-[96px]
            "
          >
            <p className="m-0 text-[8px] font-bold leading-[1.75]">
              <span className="text-[7px]">①</span> TAO — East Asian
              <br />
              <span className="text-[7px]">①</span> AAGRAH — Indian
              <br />
              <span className="text-[7px]">①</span> MY LAHORE — British Asian
            </p>
          </div>

          {/* COLUMN 2 */}
          <div
            className="
              absolute
              left-[103px]
              top-0
              w-[96px]
            "
          >
            <p className="m-0 text-[8px] font-bold leading-[1.75]">
              <span className="text-[7px]">①</span> TAO — East Asian
              <br />
              <span className="text-[7px]">①</span> AAGRAH — Indian
              <br />
              <span className="text-[7px]">①</span> MY LAHORE — British Asian
            </p>
          </div>

          {/* COLUMN 3 */}
          <div
            className="
              absolute
              left-[206px]
              top-0
              w-[98px]
            "
          >
            <p className="m-0 text-[8px] font-bold leading-[1.75]">
              <span className="text-[7px]">①</span> TAO — East Asian
              <br />
              <span className="text-[7px]">①</span> AAGRAH — Indian
              <br />
              <span className="text-[7px]">①</span> MY LAHORE — British Asian
            </p>
          </div>

        </div>


        {/* =====================================================
            EMPTY BOX
        ====================================================== */}
        <div
          className="
            absolute
            left-[160px]
            top-[211px]
            z-20
            w-[154px]
            h-[118px]
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
            top-[228px]
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
            left-[149px]
            top-[289px]
            z-40
            w-[190px]
          "
        >
          <h1
            className="
              m-0
              whitespace-nowrap
              text-left
              text-[45px]
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