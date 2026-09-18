const Announcements = () => {

  return (

    <section
      className="
        relative
        min-h-screen
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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* LARGE GREEN POST-IT */}

      <img
        src="/images/home/announcements/long-green-postick.png"
        alt=""
        className="
          absolute
          top-[70px]
          right-[100px]
          z-10
          w-[420px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* mariem postick */}

      <img
        src="/images/home/announcements/mariem-postick.png"
        alt=""
        className="
          absolute
          bottom-[120px]
          right-[70px]
          z-10
          w-[400px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* FLOWER */}

      <img
        src="/images/home/announcements/pretty-flower.png"
        alt=""
        className="
          absolute
          top-[120px]
          right-[650px]
          z-10
          w-[120px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* IDKG */}

      <img
        src="/images/home/announcements/idkg.png"
        alt=""
        className="
          absolute
          top-[140px]
          right-[350px]
          z-15
          w-[375px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* WHITE POSTICK LARGE */}

      <img
        src="/images/home/announcements/white-postick-l.png"
        alt=""
        className="
          absolute
          top-[300px]
          right-[610px]
          z-10
          w-[340px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* WHITE POSTICK LARGE */}

      <img
        src="/images/home/announcements/long-white-postick.png"
        alt=""
        className="
          absolute
          bottom-[180px]
          left-[125px]
          z-10
          w-[500px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* SMALL RULED */}

      <img
        src="/images/home/announcements/ruled-narrow-postick.png"
        alt=""
        className="
          absolute
          top-[120px]
          left-[420px]
          z-10
          w-[175px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* BIG GREEn */}

      <img
        src="/images/home/announcements/green-postick-l.png"
        alt=""
        className="
          absolute
          top-[25px]
          left-[125px]
          z-5
          w-[395px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* MICROPHONE */}

      <img
        src="/images/home/announcements/microphone-a.png"
        alt=""
        className="
          absolute
          top-[265px]
          left-[100px]
          z-5
          w-[160px]
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      />

      {/* =========================
          TITLE
          ========================= */}

      <h1
        className="
          absolute
          bottom-[40px]
          left-[120px]
          z-50
          font-display
          font-black
          text-[#dbd4c2]
          text-[clamp(4rem,9.2vw,6.8rem)]
          leading-[0.8]
          tracking-[-0.06em]
          whitespace-nowrap
          drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
        "
      >
        ANNOUNCEMENTS
      </h1>

    </section>
  )
}

export default Announcements