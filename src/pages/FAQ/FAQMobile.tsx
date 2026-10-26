import { useState } from "react";

const faqs = [
  {
    question: "How do I join the ISoc WhatsApp chats?",
    answer:
      "Message us on the @leedisoc Instagram and mention whether you are a brother or a sister. Someone from the team will get back to you with a link inshaAllah!",
  },
  {
    question: "How do I keep updated with ISoc?",
    answer:
      "Our Instagram and WhatsApp channels are where we are most active. Event updates and specific details will be available on those. Any wider announcements will be on this website.",
  },
  {
    question: "How do I get my ISoc Membership Card?",
    answer:
      "Come by one of our Friday socials (free to attend every Friday at 6pm in the Green Room) and look for any committee member. They will be able to get you your own card and sign your name off once you show them your membership on engage.luu.org.uk!",
  },
  {
    question: "How do I use the sponsor discounts?",
    answer:
      "Sponsorship discounts can only be redeemed in-store once you show them your membership card. If you encounter any issues regarding redeeming the offers, message us on Instagram/WhatsApp or send an email to info@leedsisoc.com!",
  },
  {
    question: "Do I have to be Muslim to come to ISoc events?",
    answer:
      "Not at all! We love seeing people come from other faiths and backgrounds, whether it be to learn more about Islam or just to hang out and enjoy an event with some friends. Everyone is welcome and we hope to see new faces all the time :)",
  },
];

export default function FAQMobile() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="faq-mobile relative w-full overflow-hidden flex flex-col items-center">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0  bg-center bg-repeat"
        style={{
          backgroundImage:
            "url('/images/FAQ/Welcome%20To%20Website.png')",
        }}
      />

      {/* ===================================================== */}
      {/* MOBILE ARTBOARD — 378px wide (matches Committee/Maps) */}
      {/* ===================================================== */}
      <div className="relative z-10 w-[378px] h-auto pb-[50px]">

        {/* ===================================================== */}
        {/* TOP — FAQ ARTWORK — scaled up ~14% */}
        {/* ===================================================== */}

        <div className="relative w-full h-[320px] overflow-hidden">

          {/* CENTRED ARTWORK — scaled up */}
          <div className="absolute left-[150px] top-[46px] h-[570px] w-[365px] -translate-x-1/2">

            {/* NOTEPAD */}
            <div className="pointer-events-none absolute left-[160px] top-[0px] z-10 w-[189px]">
              <img
                src="/images/FAQ/notepad.png"
                alt=""
                className="block w-full object-contain"
              />
            </div>

            {/* PICTURE CARD */}
            <div className="pointer-events-none absolute left-[165px] top-[30px] z-20 w-[223px]">

              {/* WHITE CARD */}
              <img
                src="/images/FAQ/piccard.png"
                alt=""
                className="block w-full object-contain"
              />

              {/* MOSQUE */}
              <div className="absolute left-[11px] top-[14px] z-20 w-[201px] overflow-hidden">
                <img
                  src="/images/FAQ/masjidfaq.png"
                  alt="Mosque"
                  className="block h-auto w-full grayscale"
                />
              </div>

              {/* FAQ TITLE */}
              <div className="absolute left-[23px] top-[171px] z-30 flex w-[177px] items-center justify-center">
                <h1
                  className="whitespace-nowrap text-[50px] font-bold leading-[0.8] tracking-[-0.07em] text-[#1f513f]"
                  style={{
                    fontFamily: "'Bodoni FLF', serif",
                  }}
                >
                  FAQS
                </h1>
              </div>

            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* FAQ QUESTIONS */}
        {/* ===================================================== */}

        <section className="relative z-40 mx-auto w-[340px] mt-[10px]">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b-[2px] border-white/80"
              >

                {/* QUESTION — taller row */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-[10px] py-[16px] text-left transition-opacity duration-200 hover:opacity-80"
                >
                  <span
                    className="text-[17px] font-bold leading-[1.2] tracking-[-0.01em] text-[#f2eae0]"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className="flex shrink-0 items-center justify-center text-[22px] font-light leading-none text-[#f2eae0] transition-transform duration-300"
                    style={{
                      transform: isOpen
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="max-w-[305px] pb-[14px] pr-[18px] text-[14px] font-medium leading-[1.5] text-[#f2eae0]/85"
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </section>

      </div>

    </main>
  );
}