import React from "react";

const mosques = [
  {
    name: "LEEDS GRAND MOSQUE",
    image: "/images/home/isocbitstrans/lgm.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Leeds+Grand+Mosque%2C+Leeds",
    details: [
      "Approx. 18-minute walk from Parkinson’s steps.",
      "Bus 56 from Leeds University (Bus Stop E) → Hyde Park Road → approx. 6-minute walk.",
    ],
  },
  {
    name: "MAKKAH MASJID",
    image: "/images/home/isocbitstrans/makkah-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Makkah+Masjid%2C+Leeds",
    details: [
      "Approx. 20-minute walk from Parkinson’s.",
      "Bus 56 from Leeds University (Bus Stop E) → Royal Park Road → approx. 4-minute walk.",
    ],
  },
  {
    name: "MAKKI MASJID",
    image: "/images/home/stickers-n-that/makki-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Makki+Masjid%2C+Leeds",
    details: [
      "Approx. 21-minute walk from Parkinson’s steps.",
      "Bus 56 from Leeds University (Bus Stop E) → Hyde Park Road → approx. 4-minute walk.",
    ],
  },
  {
    name: "LINCOLN GREEN MOSQUE",
    image: "/images/home/isocbitstrans/lincoln-masjid.jpg",
    link: "https://www.google.com/maps/search/?api=1&query=Lincoln+Green+Mosque%2C+Leeds",
    details: [
      "Approx. 35-minute walk from Parkinson’s.",
      "Bus 8 from Leeds University (Bus Stop A) → Headrow → Lincoln Green Centre → approx. 4-minute walk.",
    ],
  },
];

const MapsMobile = () => {
  return (
    <section className="maps-mobile relative w-full overflow-hidden isolate">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-90 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url('/images/home/stickers-n-that/light-green-paper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ========================= */}
      {/* FIRST HALF */}
      {/* ========================= */}

      <div className="relative z-10 mx-auto h-[300px] w-[340px] overflow-hidden">

        {/* FOUR MOSQUES */}
        <div className="absolute left-[10px] top-[50px] grid w-[320px] grid-cols-2 gap-x-[8px] gap-y-[10px]">

          {mosques.map((mosque) => (
            <div
              key={mosque.name}
              className="flex min-w-0 gap-[5px]"
            >
              {/* MOSQUE IMAGE — GOOGLE MAPS */}
              <a
                href={mosque.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block shrink-0"
              >
                <img
                  src={mosque.image}
                  alt={mosque.name}
                  className="h-[36px] w-[36px] rounded-full border-[1px] border-[#f2eae0] object-cover"
                />
              </a>

              <div className="min-w-0 font-body text-[#f2eae0]">

  {/* MOSQUE TITLE — GOOGLE MAPS */}
  <a
    href={mosque.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <h2 className="mb-[2px] text-[9px] font-bold uppercase leading-[1.05]">
      {mosque.name}
    </h2>
  </a>

  <ul className="list-disc space-y-[1px] pl-[7px] text-[7px] leading-[1.2]">
    {mosque.details.map((detail, index) => (
      <li key={index}>{detail}</li>
    ))}
  </ul>

</div>
            </div>
          ))}

        </div>

        {/* MOSQUES & MAPS */}
        <div className="absolute left-[10px] top-[185px] w-[320px] translate-y-[20px]">
          <h1 className="whitespace-nowrap text-center font-display text-[30px] font-bold uppercase leading-[0.65] tracking-[-1.7px] text-[#f2eae0] drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]">
            MOSQUES &amp; MAPS
          </h1>
        </div>

      </div>

      {/* ========================= */}
      {/* SECOND HALF */}
      {/* ========================= */}

      <div className="relative z-10 mx-auto h-[295px] w-[340px] overflow-hidden -translate-y-[40px]">

        <div className="absolute left-[20px] top-[0px] h-[295px] w-[300px]">

          {/* BACK PAPER */}
          <div className="absolute inset-0 translate-x-[-5px] translate-y-[10px] rotate-[-5deg] bg-[#f2eae0] shadow-[0_6px_12px_rgba(0,0,0,0.25)]" />

          {/* FRONT PAPER */}
          <div className="absolute inset-0 rotate-[2deg] bg-[#f2eae0] shadow-[0_6px_12px_rgba(0,0,0,0.3)]" />

          {/* MAP */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img
              src="/images/home/isocbitstrans/leeds-map.png"
              alt="Map of Leeds"
              className="h-[250px] w-[250px] object-contain"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default MapsMobile;