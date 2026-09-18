const Resources = () => {

  return (

    <section className="relative min-h-screen bg-[#f2eae0] overflow-hidden">

      {/* GRAIN OVERLAY */}

      <div
        className="absolute inset-0 z-0 opacity-80 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/stickers-n-that/beige-paper.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* SOCIAL MEDIA */}

      <div className="absolute left-[5%] top-[3%] z-20 flex flex-col items-center gap-6">

        {/* INSTAGRAM */}

        <a
          href="#"
          aria-label="Instagram"
          className="text-[#60785e] hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-[62px] h-[62px]"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
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
          className="text-[#60785e] hover:scale-110 transition-transform flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[56px] h-[56px]"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.43a6.27 6.27 0 1 0 5.45 6.24V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69z" />
          </svg>

          <span className="font-body font-semibold text-[16px] leading-none mt-2">
            TikTok
          </span>
        </a>


        {/* FACEBOOK */}

        <a
          href="#"
          aria-label="Facebook"
          className="text-[#60785e] hover:scale-110 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[62px] h-[62px]"
          >
            <rect x="3" y="3" width="18" height="18" rx="3" />

            <path
              d="M13.5 18v-5h1.75l.25-2h-2v-1.28c0-.58.16-.97 1-0.97h1.08V6.95c-.19-.03-.84-.08-1.6-.08-1.59 0-2.68.97-2.68 2.75V11H9.5v2h1.8v5h2.2z"
              fill="#f2eae0"
            />

          </svg>
        </a>

      </div>


      {/* TOP RIGHT BOX */}

      <div
        className="
          absolute
          top-[3%]
          right-[2%]
          w-[47%]
          bottom-[17%]
          border-[5px]
          border-[#60785e]
          rounded-[10px]
        "
      >
      </div>


      {/* DAILY NEWS */}

      <div
        className="
          absolute
          left-[-5%]
          bottom-[-2%]
          w-[55%]
          h-[68%]
          -rotate-[9deg]
          z-10
        "
      >
        <img
          src="public/images/home/isocbitstrans/daily-news.png"
          alt="Daily News"
          className="w-full h-full object-contain"
        />
      </div>


      {/* RESOURCES TITLE */}

      <div
        className="
          absolute
          right-[2%]
          bottom-[3%]
          w-[47%]
        "
      >
        <h1
          className="
            font-display
            font-black
            text-[#60785e]
            text-[clamp(3.8rem,7.5vw,7.2rem)]
            leading-[0.8]
            uppercase
            whitespace-nowrap
            w-full
          "
        >
          RESOURCES
        </h1>
      </div>

    </section>
  )
}

export default Resources