const Hero = () => {
  return (
    <section className="relative min-h-screen bg-isoc-green overflow-hidden flex flex-col items-center justify-start text-center px-8 pt-[4.8rem]">
      <div>
        <p className="font-display font-black text-isoc-cream tracking-[-0.01em] leading-[0.30]  mb-1 text-[clamp(1rem,6vw,2.2rem)] lg:text-[clamp(1.5rem,4vw,3.2rem)] 2xl:text-[clamp(3.2rem,3vw,4.5rem)]">
          WELCOME TO
        </p>
        <h1 className="font-display font-black text-isoc-cream leading-[1.2] tracking-[-0.1em] text-[clamp(2.5rem,10vw,6rem)] lg:text-[clamp(6rem,9vw,10rem)] 2xl:text-[clamp(10rem,8vw,13rem)]">
          LEEDS ISOC
        </h1>
      </div>

    {/* Buildings — bottom corners */}
      <img
        src="/images/home/isocbitstrans/trimmed-building.png"
        alt="Leeds University Parkinson Building"
        className="absolute bottom-0 left-0 z-20 w-[62vw] drop-shadow-lg"
      />
      <img
        src="/images/home/isocbitstrans/trimmed-masjid.png"
        alt="Masjid"
        className="absolute bottom-0 right-0 z-10 w-[44vw] drop-shadow-lg"
      />

      {/* Girls walking — above the uni building roofline, clearly visible */}
      <img
        src="/images/home/isocbitstrans/trimmed-girls.png"
        alt=""
        className="absolute bottom-[0%] right-[0%] z-30 w-[24vw] max-w-[900px] drop-shadow-lg"
      />

      {/* Birds — flying across upper right, clear of the masjid domes */}
      <img
        src="/images/home/isocbitstrans/trimmed-birds.png"
        alt=""
        className="absolute top-[30%] left-[35%] z-30 w-[20vw] max-w-[800px] drop-shadow-lg"
      />

    {/* Exclamation marks — middle */}
      <img
        src="/images/home/isocbitstrans/trimmed-exclamation.png"
        alt=""
        className="absolute bottom-[40%] right-[34%] z-30 w-[9vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* BOOKS — middle */}
      <img
        src="/images/home/isocbitstrans/trimmed-book.png"
        alt=""
        className="absolute bottom-[18%] right-[30%] z-30 w-[14vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* MOON — upper left, near title */}
      <img
        src="/images/home/isocbitstrans/trimmed-moon.png"
        alt=""
        className="absolute bottom-[12%] right-[35%] z-30 w-[8vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* DUAS — upper left, near title */}
      <img
        src="/images/home/isocbitstrans/trimmed-dua.png"
        alt=""
        className="absolute bottom-[18%] right-[40%] z-25 w-[18vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* Sajda figure — bottom center, on the ground line between buildings */}
      <img
        src="/images/home/isocbitstrans/trimmed-sajda.png"
        alt=""
        className="absolute bottom-[0%] left-[18%] z-30 w-[20vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* Tea hands — floating mid-right, above the masjid */}
      <img
        src="/images/home/isocbitstrans/trimmed-tea.png"
        alt=""
        className="absolute bottom-[14%] left-[12%] z-30 w-[10vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* Moon — floating center, between the two buildings */}
      <img
        src="/images/home/isocbitstrans/trimmed-palestine.png"
        alt=""
        className="absolute bottom-[0%] left-[2%] z-25 w-[14vw] max-w-[1000px] drop-shadow-lg"
      />

      {/* Megaphone — upper left, near title */}
      <img
        src="/images/home/isocbitstrans/trimmed-megaphone.png"
        alt=""
        className="absolute bottom-[40%] left-[0%] z-30 w-[12vw] max-w-[1000px] drop-shadow-lg"
      />

      
    </section>
  )
}

export default Hero