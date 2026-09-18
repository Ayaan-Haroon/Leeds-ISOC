const AboutUs = () => {

  return (

    <section
      className="
        relative
        h-[50vh]
        overflow-hidden
        isolate
        flex
        items-center
        justify-center
        px-8
      "
      style={{
        backgroundImage:
          "url('/images/home/isocbitstrans/aboutusfr.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <h1
        className="
          font-display
          font-black
          text-isoc-cream
          tracking-[-0.08em]
          text-[clamp(3rem,8vw,8rem)]
          text-center
          drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]
        "
      >
        ABOUT US
      </h1>

    </section>
  )
}

export default AboutUs