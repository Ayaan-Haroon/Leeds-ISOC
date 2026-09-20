

export default function GetInvolved() {
  return (
    <main
      className="
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
          "url('/images/FAQ/Welcome%20To%20Website.png')",
      }}
    >
      <div className="relative min-h-screen w-full">

        {/* =====================================================
            LEFT 50% — COLLAGE
        ====================================================== */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1/2
          "
        >
          <img
            src="/images/GetInvolved/collage.png"
            alt="Leeds Islamic Society collage"
            className="
              absolute
              left-[3%]
              top-[8%]
              z-20
              w-[100%]
              object-contain
            "
          />
        </div>


        {/* =====================================================
            RIGHT 50% — CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-1/2
          "
        >

          {/* GET INVOLVED TITLE */}

          <h1
            className="
              absolute
              left-[8%]
              top-[9%]
              z-30
              w-[84%]
              text-[4.5rem]
              font-bold
              uppercase
              leading-[0.86]
              tracking-[-0.045em]
              text-[#f7f2e8]
              md:text-[5.5rem]
              lg:text-[6.5rem]
              xl:text-[7.5rem]
            "
            style={{
              fontFamily: "'Bodoni FLF', serif",
            }}
          >
            <span className="block">GET</span>
            <span className="block">INVOLVED</span>
          </h1>


          {/* LARGE ARROW */}

          <img
            src="/images/GetInvolved/arrow.png"
            alt=""
            className="
              absolute
              left-[39%]
              top-[39%]
              z-30
              w-[25%]
              rotate-[-3deg]
              object-contain
            "
          />


          {/* BOTTOM OPTIONS */}

          <div
            className="
              absolute
              bottom-[9%]
              left-[7%]
              z-30
              flex
              w-[86%]
              items-center
              justify-between
              gap-[4%]
            "
          >

            {/* MEMBERSHIPS */}

            <div className="relative w-[48%]">
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
                  px-2
                  text-[1.15rem]
                  font-semibold
                  uppercase
                  leading-none
                  text-[#1F4D3B]
                  md:text-[1.4rem]
                  lg:text-[1.65rem]
                  xl:text-[1.8rem]
                "
                style={{
                  fontFamily: "'Bodoni FLF', serif",
                }}
              >
                Memberships
              </span>
            </div>


            {/* VOLUNTEERING */}

            <div className="relative w-[48%]">
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
                  px-2
                  text-[1.15rem]
                  font-semibold
                  uppercase
                  leading-none
                  text-[#1F4D3B]
                  md:text-[1.4rem]
                  lg:text-[1.65rem]
                  xl:text-[1.8rem]
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

      </div>
    </main>
  );
}