import React from "react";

const ResourcesMobile = () => {
  const loremText =
    "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM ";

  return (
    <section className="relative w-full h-[427px] overflow-hidden isolate bg-[#f2eae0]">

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
          320px MOBILE ARTBOARD
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[320px]
          h-[427px]
          overflow-hidden
        "
      >

        {/* =====================================================
            TOP TEXT
        ====================================================== */}
        <div
          className="
            absolute
            left-[37px]
            top-[3px]
            z-10
            w-[244px]
            h-[170px]
            overflow-hidden
          "
        >
          <p
            className="
              p-0
              m-0
              text-[7px]
              font-bold
              uppercase
              leading-[1.38]
              tracking-[-0.035em]
              text-[#60785e]
            "
          >
            {loremText.repeat(4)}
          </p>
        </div>

        {/* =====================================================
            EMPTY BOX
        ====================================================== */}
        <div
          className="
            absolute
            left-[153px]
            top-[186px]
            z-20
            w-[143px]
            h-[105px]
            rounded-[6px]
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
            left-[-6px]
            top-[200px]
            z-30
            w-[138px]
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
            left-[141px]
            top-[298px]
            z-40
            w-[174px]
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