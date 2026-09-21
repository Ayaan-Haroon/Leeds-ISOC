const AnnouncementsMobile = () => {
  return (
    <section className="announcements-mobile relative w-full h-[400px] overflow-hidden isolate">

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
          320px MOBILE ARTBOARD
          ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          top-[30px]
          h-[600px]
          w-[320px]
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
            left-[18px]
            top-[5px]
            z-10
            w-[145px]
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
            left-[133px]
            top-[32px]
            z-30
            w-[70px]
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
            right-[20px]
            top-[35px]
            z-30
            w-[67px]
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
            top-[82px]
            z-30
            w-[72px]
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
            right-[25px]
            top-[96px]
            z-20
            w-[135px]
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
            left-[20px]
            top-[170px]
            z-40
            w-[205px]
            drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
          "
        />

        {/* =========================
            TEXT ON LONG WHITE POST-IT
            ========================= */}
        <div
          className="
            absolute
            left-[42px]
            top-[202px]
            z-50
            w-[160px]
            text-center
            font-body
            font-medium
            text-[#171717]
            text-[11px]
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
            top-[310px]
            left-[-3px]
            z-50
            w-[326px]
            text-center
            font-display
            font-black
            text-[#dbd4c2]
            text-[38px]
            leading-[0.8]
            tracking-[-0.065em]
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