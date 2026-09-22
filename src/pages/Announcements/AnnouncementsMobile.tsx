const AnnouncementsMobile = () => {
  return (
    <section
      className="
        announcements-mobile-section
        relative
        w-full
        h-[475px]
        overflow-hidden
        isolate
      "
    >
      {/* =========================
          BACKGROUND
          ========================= */}
      <div
        className="
          absolute
          inset-0
          z-0
          opacity-90
          mix-blend-multiply
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* =========================
          MOBILE ARTBOARD
          Scaled up 15% from the original 320 × 600 design
          (368 × 690). Every image below is sized and
          positioned at its original value × 1.15.
          ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          top-[35px]
          h-[600px]
          w-[368px]
          overflow-hidden
        "
      >

        {/* =========================
            LARGE GREEN POST-IT
            ========================= */}
        <img
          src="/images/home/announcements/green-postick-l.png"
          alt=""
          className="
            absolute
            left-[21px]
            top-[6px]
            z-10
            w-[167px]
            rotate-[-2deg]
            drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            SMALL RULED POST-IT
            ========================= */}
        <img
          src="/images/home/announcements/ruled-narrow-postick.png"
          alt=""
          className="
            absolute
            left-[153px]
            top-[37px]
            z-30
            w-[81px]
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            FLOWER
            ========================= */}
        <img
          src="/images/home/announcements/pretty-flower.png"
          alt=""
          className="
            absolute
            right-[23px]
            top-[40px]
            z-30
            w-[77px]
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            MICROPHONE
            ========================= */}
        <img
          src="/images/home/announcements/microphone-a.png"
          alt=""
          className="
            absolute
            left-[-2px]
            top-[94px]
            z-30
            w-[83px]
            rotate-[-8deg]
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            WHITE POST-IT
            ========================= */}
        <img
          src="/images/home/announcements/white-postick-l.png"
          alt=""
          className="
            absolute
            right-[29px]
            top-[110px]
            z-20
            w-[155px]
            rotate-[7deg]
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            LONG WHITE POST-IT
            ========================= */}
        <img
          src="/images/home/announcements/long-white-postick.png"
          alt=""
          className="
            absolute
            left-[23px]
            top-[196px]
            z-40
            w-[236px]
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            TEXT ON LONG WHITE POST-IT
            ========================= */}
        <div
          className="
            absolute
            left-[48px]
            top-[232px]
            z-50
            w-[184px]
            text-center
            font-body
            font-medium
            text-[#171717]
            text-[13px]
            leading-[1.35]
          "
        >
          DW ABOUT THIS JUST SHOWING
          <br />
          AYAAN SMOETHING
        </div>

        {/* =========================
            TITLE
            ========================= */}
        <h1
          className="
            absolute
            top-[357px]
            left-[-3px]
            z-50
            w-[375px]
            text-center
            font-display
            font-black
            text-[#dbd4c2]
            text-[40px]
            leading-[0.8]
            tracking-[-0.1em]
            whitespace-nowrap
            drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]
          "
        >
          ANNOUNCEMENTS
        </h1>

      </div>
    </section>
  )
}

export default AnnouncementsMobile