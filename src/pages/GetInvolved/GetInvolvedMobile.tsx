const GetInvolvedMobile = () => {
  return (
    <main
      className="
        relative
        w-full
        h-[520px]
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/images/FAQ/Welcome%20To%20Website.png')",
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
          h-[520px]
          overflow-hidden
        "
      >

        {/* =====================================================
            GET INVOLVED TITLE
        ====================================================== */}
        <h1
          className="
            absolute
            left-[34px]
            top-[22px]
            z-30
            w-[272px]
            text-[58px]
            font-bold
            uppercase
            leading-[0.84]
            tracking-[-0.045em]
            text-[#f7f2e8]
          "
          style={{
            fontFamily: "'Bodoni FLF', serif",
          }}
        >
          <span className="block">
            GET
          </span>

          <span className="block">
            INVOLVED
          </span>
        </h1>


        {/* =====================================================
            COLLAGE
        ====================================================== */}
        <img
          src="/images/GetInvolved/collage.png"
          alt="Leeds Islamic Society collage"
          className="
            absolute
            left-[20px]
            top-[82px]
            z-20
            w-[300px]
            object-contain
          "
        />


        {/* =====================================================
            LARGE ARROW
        ====================================================== */}
        <img
          src="/images/GetInvolved/arrow.png"
          alt=""
          className="
            absolute
            left-[121px]
            top-[218px]
            z-30
            w-[100px]
            rotate-[-3deg]
            object-contain
          "
        />


        {/* =====================================================
            BOTTOM OPTIONS
        ====================================================== */}
        <div
          className="
            absolute
            left-[30px]
            bottom-[32px]
            z-30
            flex
            w-[280px]
            items-center
            justify-between
            gap-[10px]
          "
        >

          {/* =================================================
              MEMBERSHIPS
          ================================================== */}
          <div className="relative w-[135px]">
            <img
              src="/images/GetInvolved/ripped-paper.png"
              alt=""
              className="
                block
                w-full
                object-contain
              "
            />

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-[4px]
                text-[13px]
                font-semibold
                uppercase
                leading-none
                text-[#1F4D3B]
              "
              style={{
                fontFamily: "'Bodoni FLF', serif",
              }}
            >
              Memberships
            </span>
          </div>


          {/* =================================================
              VOLUNTEERING
          ================================================== */}
          <div className="relative w-[135px]">
            <img
              src="/images/GetInvolved/ripped-paper.png"
              alt=""
              className="
                block
                w-full
                object-contain
              "
            />

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-[4px]
                text-[13px]
                font-semibold
                uppercase
                leading-none
                text-[#1F4D3B]
              "
              style={{
                fontFamily: "'Bodoni FLF', serif",
              }}
            >
              Volunteering
            </span>
          </div>

        </div>

      </div>
    </main>
  );
};

export default GetInvolvedMobile;