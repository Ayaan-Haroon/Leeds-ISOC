import React from "react";

const Resources = () => {
  const fillerText =
    "Resources, information and support for students. ";

  return (
    <section
      className="
        resources-section
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
          "url('/images/Resources/background.png')",
      }}
    >
      {/* =====================================================
          SOCIAL MEDIA
      ====================================================== */}

      <div
        className="
          resources-social
          absolute
          left-[5.2%]
          top-[3.2%]
          z-30
          flex
          flex-col
          items-center
          gap-[2.2vh]
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
          left-[12%]
          top-[3.4%]
          z-10
          h-[30%]
          w-[69.5%]
          overflow-hidden
          border-[#60785e]
        "
      >
        <p
          className="
            p-[0.35%]
            text-[1.45vw]
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
          right-[3%]
          top-[3.8%]
          z-30
          w-[16%]
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
          bottom-[2%]
          left-[3%]
          z-20
          w-[44%]
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
          left-[47.5%]
          top-[37.2%]
          z-20
          h-[42%]
          w-[34%]
          overflow-hidden
        "
      >
        <p
          className="
            text-[1.35vw]
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
          right-[3.7%]
          top-[45.5%]
          z-20
          h-[25.5%]
          w-[14.5%]
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
    bottom-[6%]
    right-[5%]
    z-30
    w-[52%]
  "
>
  <h1
    className="
      whitespace-nowrap
      text-right
      text-[8.8vw]
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
    </section>
  );
};

export default Resources;