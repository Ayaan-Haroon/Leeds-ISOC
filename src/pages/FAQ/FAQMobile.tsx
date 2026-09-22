import { useState } from "react";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "This website provides information, resources and answers to some of the most common questions.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by exploring the different sections of the website and following the information provided.",
  },
  {
    question: "Who can use this website?",
    answer:
      "The website is available for anyone who wants to learn more and access the resources provided.",
  },
  {
    question: "Where can I find more information?",
    answer:
      "You can explore the other sections of the website or get in touch with us if you need further information.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through the contact section of the website.",
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