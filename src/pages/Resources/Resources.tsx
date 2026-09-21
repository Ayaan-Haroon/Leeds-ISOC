import React from "react";
import MasterCanvas from "../../components/MasterCanvas";

const Resources = () => {
  const fillerText =
    "Resources, information and support for students. ";

  return (
<section className="resources-section relative min-h-screen w-full overflow-hidden bg-[#f2eae0]">

      {/* =====================================================
          FULL-WIDTH BACKGROUND
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
          MASTER CANVAS
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">

        <MasterCanvas>

          <div
            className="
              relative
              h-[900px]
              w-[1460px]
              overflow-hidden
            "
          >

            {/* =====================================================
                SOCIAL MEDIA
            ====================================================== */}

            <div
              className="
                resources-social
                absolute
                left-[76px]
                top-[29px]
                z-30
                flex
                flex-col
                items-center
                gap-[20px]
              "
            >

              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[62px] w-[62px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* TIKTOK */}

              <a
                href="#"
                aria-label="TikTok"
                className="
                  flex
                  flex-col
                  items-center
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[56px] w-[56px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.43a6.27 6.27 0 1 0 5.45 6.24V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69z" />
                </svg>

                <span className="mt-2 text-[16px] font-semibold leading-none">
                  TikTok
                </span>
              </a>

              {/* FACEBOOK */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  text-[#60785e]
                  transition-transform
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[62px] w-[62px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="3"
                  />

                  <path
                    d="M13.5 18v-5h1.75l.25-2h-2v-1.28c0-.58.16-.97 1-0.97h1.08V6.95c-.19-.03-.84-.08-1.6-.08-1.59 0-2.68.97-2.68 2.75V11H9.5v2h1.8v5h2.2z"
                    fill="#f2eae0"
                  />
                </svg>
              </a>

            </div>

            {/* =====================================================
                TOP TEXT BOX
            ====================================================== */}

            <div
              className="
                resources-copy
                absolute
                left-[175px]
                top-[31px]
                z-10
                h-[270px]
                w-[1015px]
                overflow-hidden
                border-[#60785e]
              "
            >
              <p
                className="
                  p-[5px]
                  text-[21px]
                  font-bold
                  uppercase
                  leading-[1.42]
                  tracking-[-0.035em]
                  text-[#60785e]
                "
              >
                {fillerText.repeat(38)}
              </p>
            </div>

            {/* =====================================================
                FRESHERS GUIDE
            ====================================================== */}

            <img
              src="/images/Resources/isocguide.png"
              alt="ISOC Freshers Guide"
              className="
                absolute
                right-[44px]
                top-[34px]
                z-30
                w-[234px]
                rotate-[4deg]
                object-contain
                drop-shadow-[5px_7px_4px_rgba(0,0,0,0.2)]
              "
            />

            {/* =====================================================
                SPEAKERPHONE + NOTEPAD
            ====================================================== */}

            <img
              src="/images/Resources/speakerphoneandnotepad.png"
              alt=""
              className="
                absolute
                bottom-[18px]
                left-[44px]
                z-20
                w-[642px]
                rotate-[-1deg]
                object-contain
              "
            />

            {/* =====================================================
                RIGHT TEXT BLOCK
            ====================================================== */}

            <div
              className="
                resources-copy-right
                absolute
                left-[694px]
                top-[335px]
                z-20
                h-[378px]
                w-[496px]
                overflow-hidden
              "
            >
              <p
                className="
                  text-[20px]
                  font-bold
                  uppercase
                  leading-[1.38]
                  tracking-[-0.035em]
                  text-[#60785e]
                "
              >
                {fillerText.repeat(25)}
              </p>
            </div>

            {/* =====================================================
                EMPTY RIGHT BOX
            ====================================================== */}

            <div
              className="
                resources-empty-box
                absolute
                right-[54px]
                top-[410px]
                z-20
                h-[230px]
                w-[212px]
                rounded-[12px]
                border-[5px]
                border-[#60785e]
              "
            />

            {/* =====================================================
                RESOURCES TITLE
            ====================================================== */}

            <div
              className="
                resources-title
                absolute
                bottom-[54px]
                right-[73px]
                z-30
                w-[759px]
              "
            >
              <h1
                className="
                  whitespace-nowrap
                  text-right
                  text-[128.5px]
                  font-bold
                  uppercase
                  leading-[0.75]
                  tracking-[-0.05em]
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

        </MasterCanvas>

      </div>

    </section>
  );
};

export default Resources;