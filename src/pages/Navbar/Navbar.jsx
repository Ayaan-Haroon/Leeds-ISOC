import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="relative z-[100]">

      {/* =========================
          DESKTOP / MAIN NAVBAR
          ========================= */}

      <nav
        className="
          relative
          w-full
          bg-[#f1efe9]
          border-b-[1.5px]
          border-[#2c3424]
        "
      >
        <div
          className="
            mx-auto
            w-[94%]
            max-w-[1600px]
            min-h-[76px]
            flex
            items-center
            justify-between
          "
        >

          {/* =========================
              LOGO
              ========================= */}

          <a
            href="/"
            className="
              shrink-0
              font-body
              italic
              font-bold
              text-[1.5rem]
              text-[#2c3424]
              tracking-[-0.02em]
              transition-all
              duration-200
              hover:opacity-70
            "
          >
            Leeds ISOC
          </a>

          {/* =========================
              DESKTOP LINKS
              ========================= */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-x-7
              xl:gap-x-9
            "
          >
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="
                  relative
                  font-body
                  font-medium
                  text-[14px]
                  xl:text-[15px]
                  text-[#2c3424]
                  whitespace-nowrap
                  transition-all
                  duration-200
                  ease-out
                  hover:opacity-60
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[1px]
                  after:bg-[#2c3424]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {page.name}
              </a>
            ))}
          </div>

          {/* =========================
              MOBILE MENU BUTTON
              ========================= */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              lg:hidden
              flex
              flex-col
              items-end
              justify-center
              gap-[5px]
              w-[42px]
              h-[42px]
            "
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`
                block
                h-[1.5px]
                bg-[#2c3424]
                transition-all
                duration-300
                ${isMenuOpen ? 'w-7 rotate-45 translate-y-[3px]' : 'w-7'}
              `}
            />

            <span
              className={`
                block
                h-[1.5px]
                bg-[#2c3424]
                transition-all
                duration-300
                ${isMenuOpen ? 'w-7 -rotate-45 -translate-y-[3px]' : 'w-5'}
              `}
            />
          </button>

        </div>

        {/* =========================
            MOBILE MENU
            ========================= */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            border-t-[1.5px]
            border-[#2c3424]
            transition-all
            duration-300
            ease-out
            ${
              isMenuOpen
                ? 'max-h-[700px] opacity-100'
                : 'max-h-0 opacity-0 border-t-0'
            }
          `}
        >
          <div className="px-[6%] py-6 flex flex-col">

            {pages.map((page, index) => (
              <a
                key={page.name}
                href={page.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  font-body
                  font-medium
                  text-[16px]
                  text-[#2c3424]
                  py-3
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:opacity-60
                  ${
                    index !== pages.length - 1
                      ? 'border-b border-[#2c3424]/20'
                      : ''
                  }
                `}
              >
                {page.name}
              </a>
            ))}

          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar