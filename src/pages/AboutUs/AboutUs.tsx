const AboutUs = () => {

  return (

    <div className="relative">

      {/* Hero section */}
      <section
        className="
          relative
          isolate
          h-[100vh]
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          px-8
          overflow-hidden
        "
        style={{ backgroundImage: "url('/images/home/isocbitstrans/aboutusfr.png')" }}
      >

         {/* GRAIN OVERLAY */}
        <div
          className="absolute inset-0 z-0 opacity-100 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/images/home/stickers-n-that/beige-paper.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <h1
          className="
            relative
            z-10
            font-display
            font-black
            text-isoc-cream
            tracking-[-0.08em]
            text-[clamp(3rem,12vw,11rem)]
            text-center
            drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]
          "
        >
          ABOUT US
        </h1>

      </section>


      {/* Polaroid scatter section */}
      <section className="relative isolate min-h-screen overflow-hidden">

        {/* GRAIN OVERLAY */}
        <div
          className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: "url('/images/home/stickers-n-that/beige-paper.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Leeds ISOC text */}
        <div className="absolute z-10 top-[12%] left-[8%] w-[50%] max-w-[800px]">

          <div className="flex items-center gap-5 mb-4">

            <p className="font-sans text-isoc-green tracking-[0.2em] text-sm uppercase">
              Who we are
            </p>

            <div className="h-[1px] w-20 bg-isoc-green" />

          </div>

          <h2 className="font-display font-black text-isoc-green text-[clamp(3rem,5vw,9rem)] tracking-[-0.05em] leading-none mb-6">
            Leeds ISOC
          </h2>

          <p className="font-sans text-isoc-green text-lg md:text-2xl leading-[1.7]">
            Leeds ISOC is a student-led society at the University of Leeds,
            bringing together a diverse community of Muslim students. We aim
            to provide a supportive environment for faith, friendship and
            personal growth, while creating opportunities to learn, pray and
            make a positive impact.
          </p>

        </div>


        {/* Our mission text */}
        <div className="absolute z-10 top-[50%] right-[10%] w-[45%] max-w-[700px]">

          <div className="flex items-center gap-5 mb-4">

            <p className="font-sans text-isoc-green tracking-[0.2em] text-sm uppercase">
              Our mission
            </p>

            <div className="h-[1px] w-20 bg-isoc-green" />

          </div>

          <h2 className="font-display font-black text-isoc-green text-[clamp(2.5rem,5vw,7rem)] tracking-[-0.05em] leading-[0.95] mb-6">
            Faith. Community. Impact.
          </h2>

          <p className="font-sans text-isoc-green text-lg md:text-2xl leading-[1.7]">
            We strive to strengthen our faith, build a sense of brotherhood
            and sisterhood, and support each other through the challenges and
            opportunities of university life.
          </p>

        </div>


        {/* Bottom-left polaroid */}
        <div className="absolute z-10 bottom-[8%] left-[3%] bg-white p-3 pb-8 -rotate-[6deg] shadow-xl w-[32vw] max-w-[460px]">

          <img
            src="/images/home/isocbitstrans/trimmed-girls.png"
            alt=""
            className="w-full"
          />

        </div>

      </section>


      {/* Overlapping polaroid */}
      <div className="absolute top-[48%] right-[3%] z-20 bg-white p-3 pb-8 rotate-[8deg] shadow-xl w-[18vw] max-w-[260px]">

        <img
          src="/images/home/isocbitstrans/trimmed-tea.png"
          alt=""
          className="w-full"
        />

      </div>

    </div>
  )
}

export default AboutUs