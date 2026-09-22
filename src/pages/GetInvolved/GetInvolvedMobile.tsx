import { useEffect, useRef, useState } from 'react'

const GetInvolvedMobile = () => {

  const [isArrowVisible, setIsArrowVisible] = useState(false)
  const arrowRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!arrowRef.current || isArrowVisible) return

      const rect = arrowRef.current.getBoundingClientRect()
      const vh = window.innerHeight

      if (rect.top <= vh * 0.85) {
        setIsArrowVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isArrowVisible])

  return (
    <main
      className="
        relative
        w-full
        h-[570px]
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
          h-[560px]
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
            top-[35px]
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
            left-[5px]
            top-[115px]
            z-20
            w-[330px]
            object-contain
          "
        />


        {/* =====================================================
            LARGE ARROW — slides in from the RIGHT
        ====================================================== */}
        <img
          ref={arrowRef}
          src="/images/GetInvolved/arrow.png"
          alt=""
          className={`
            absolute
            right-[0px]
            top-[340px]
            z-30
            w-[100px]
            rotate-[20deg]
            -scale-x-100
            object-contain
            get-involved-arrow
            ${isArrowVisible ? 'get-involved-arrow-in' : 'get-involved-arrow-right'}
          `}
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
              MEMBERSHIPS — enlarged + clickable
          ================================================== */}
          <a
            href="https://example.com/memberships"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              block
              w-[135px]
              transition-transform
              duration-200
              ease-out
              hover:scale-105
              cursor-pointer
            "
            aria-label="Memberships"
          >
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
                text-[15px]
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
          </a>


          {/* =================================================
              VOLUNTEERING — enlarged + clickable
          ================================================== */}
          <a
            href="https://example.com/volunteering"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              block
              w-[135px]
              transition-transform
              duration-200
              ease-out
              hover:scale-105
              cursor-pointer
            "
            aria-label="Volunteering"
          >
            <img
              src="/images/GetInvolved/ripped-paper2.png"
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
                text-[15px]
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
          </a>

        </div>

      </div>

      {/* =====================================================
          ARROW SLIDE-IN ANIMATION
          ===================================================== */}
      <style>{`

        .get-involved-arrow {
          opacity: 0;
          transition:
            opacity 0.7s ease-out,
            translate 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .get-involved-arrow-right {
          translate: 120vw 0;
        }

        .get-involved-arrow-in {
          opacity: 1;
          translate: 0 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .get-involved-arrow {
            opacity: 1 !important;
            translate: 0 0 !important;
            transition: none !important;
          }
        }

      `}</style>

    </main>
  );
};

export default GetInvolvedMobile;