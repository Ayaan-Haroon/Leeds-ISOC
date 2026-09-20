const Footer = () => {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Bulletin', href: '/bulletin' },
    { name: 'Committee', href: '/committee' },
    { name: 'Events', href: '/events' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Maps', href: '/maps' },
    { name: 'Resources', href: '/resources' },
    { name: 'Student Support', href: '/student-support' },
  ]

  return (
    <footer className="relative isolate overflow-hidden bg-[#254c3a] text-[#f2eae0]">

      {/* =========================
          GRAIN / PAPER OVERLAY
          ========================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-25
          mix-blend-screen
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

      {/* =========================
          MAIN FOOTER
          ========================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-[92%]
          max-w-[1400px]
          pt-12
          pb-7
        "
      >

        {/* =========================
            TOP AREA
            ========================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.4fr_1fr_0.65fr]
            gap-9
            lg:gap-12
            pb-10
          "
        >

          {/* =========================
              BRAND
              ========================= */}

          <div className="flex flex-col justify-between">

            <div>

              <p
                className="
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[clamp(1.35rem,2rem,2rem)]
                  tracking-[-0.03em]
                  leading-none
                  mb-1
                "
              >
                WELCOME TO
              </p>

              <h2
                className="
                  font-display
                  font-black
                  text-[#f2eae0]
                  text-[clamp(3.5rem,7vw,7rem)]
                  tracking-[-0.08em]
                  leading-[0.8]
                "
              >
                LEEDS
                <br />
                ISOC
              </h2>

            </div>

            <p
              className="
                mt-6
                max-w-[500px]
                font-body
                font-bold
                text-[#f2eae0]
                text-[15px]
                md:text-[16px]
                leading-[1.45]
              "
            >
              Bringing Muslim students together through faith,
              knowledge, community and friendship at the University
              of Leeds.
            </p>

          </div>

          {/* =========================
              NAVIGATION
              ========================= */}

          <div>

            <h3
              className="
                font-display
                font-black
                text-[#f2eae0]
                text-[1.8rem]
                uppercase
                tracking-[-0.03em]
                mb-5
              "
            >
              Explore
            </h3>

            <div
              className="
                grid
                grid-cols-2
                gap-x-7
                gap-y-3
              "
            >
              {pages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  className="
                    w-fit
                    font-body
                    font-bold
                    text-[#f2eae0]
                    text-[14px]
                    md:text-[15px]
                    transition-all
                    duration-200
                    ease-out
                    hover:text-[#dbd4c3]
                    hover:translate-x-1
                  "
                >
                  {page.name}
                </a>
              ))}
            </div>

          </div>

          {/* =========================
              SOCIALS
              ========================= */}

          <div>

            <h3
              className="
                font-display
                font-black
                text-[#f2eae0]
                text-[1.8rem]
                uppercase
                tracking-[-0.03em]
                mb-5
              "
            >
              Follow Us
            </h3>

            <div className="flex flex-col gap-3">

              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  w-fit
                "
              >
                <div
                  className="
                    w-[42px]
                    h-[42px]
                    rounded-full
                    border-2
                    border-[#f2eae0]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#f2eae0]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="
                      w-[19px]
                      h-[19px]
                      fill-none
                      stroke-[#f2eae0]
                      stroke-[1.8]
                      transition-colors
                      duration-300
                      group-hover:stroke-[#254c3a]
                    "
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                      className="text-[#f2eae0] group-hover:text-[#254c3a]"
                    />
                  </svg>
                </div>

                <span
                  className="
                    font-body
                    font-bold
                    text-[15px]
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                >
                  Instagram
                </span>
              </a>

              {/* TIKTOK */}

              <a
                href="#"
                aria-label="TikTok"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  w-fit
                "
              >
                <div
                  className="
                    w-[42px]
                    h-[42px]
                    rounded-full
                    border-2
                    border-[#f2eae0]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#f2eae0]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="
                      w-[19px]
                      h-[19px]
                      fill-[#f2eae0]
                      transition-colors
                      duration-300
                      group-hover:fill-[#254c3a]
                    "
                  >
                    <path d="M16.5 3c.2 1.6 1.1 2.8 2.7 3.5v2.8c-1.1-.1-2-.4-2.8-.9v6.4c0 3.8-2.1 6.2-5.5 6.2-3 0-5.4-2.2-5.4-5.2 0-3 2.4-5.3 5.6-5.3.3 0 .6 0 .9.1v2.9c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1-2.5 2.4 0 1.4 1.1 2.4 2.5 2.4 1.6 0 2.6-1 2.6-3V3h2.8z" />
                  </svg>
                </div>

                <span
                  className="
                    font-body
                    font-bold
                    text-[15px]
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                >
                  TikTok
                </span>
              </a>

              {/* FACEBOOK */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  w-fit
                "
              >
                <div
                  className="
                    w-[42px]
                    h-[42px]
                    rounded-full
                    border-2
                    border-[#f2eae0]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:bg-[#f2eae0]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="
                      w-[19px]
                      h-[19px]
                      fill-[#f2eae0]
                      transition-colors
                      duration-300
                      group-hover:fill-[#254c3a]
                    "
                  >
                    <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2z" />
                  </svg>
                </div>

                <span
                  className="
                    font-body
                    font-bold
                    text-[15px]
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                >
                  Facebook
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            DIVIDER
            ========================= */}

        <div className="w-full border-t-2 border-[#f2eae0]/40" />

        {/* =========================
            BOTTOM BAR
            ========================= */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-3
            pt-5
          "
        >

          <p
            className="
                font-body
                text-[#f2eae0]
                text-[12px]
                md:text-[13px]
                font-bold
                uppercase
                text-[#f2eae0]/70
                tracking-wide
            "
            >
            Designed &amp; developed by Mariem Ibrahimova, Rafi Kyum &amp; Ayan Haroon
            </p>

          <p
            className="
              font-body
              font-bold
              text-[#f2eae0]/70
              text-[12px]
              md:text-[13px]
            "
          >
            University of Leeds Islamic Society
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer