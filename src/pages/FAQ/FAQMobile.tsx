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
    <main className="faq-mobile relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/FAQ/Welcome%20To%20Website.png')",
        }}
      />

      {/* ===================================================== */}
      {/* TOP — FAQ ARTWORK */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto h-[275px] w-[340px] overflow-hidden">

        {/* CENTRED ARTWORK */}
        <div className="absolute left-1/2 top-[2px] h-[270px] w-[270px] -translate-x-1/2">

          {/* NOTEPAD */}
          <div className="pointer-events-none absolute left-[120px] top-[0px] z-10 w-[140px]">
            <img
              src="/images/FAQ/notepad.png"
              alt=""
              className="block w-full object-contain"
            />
          </div>

          {/* PICTURE CARD */}
          <div className="pointer-events-none absolute left-[125px] top-[22px] z-20 w-[165px]">

            {/* WHITE CARD */}
            <img
              src="/images/FAQ/piccard.png"
              alt=""
              className="block w-full object-contain"
            />

            {/* MOSQUE */}
            <div className="absolute left-[8px] top-[10px] z-20 w-[149px] overflow-hidden">
              <img
                src="/images/FAQ/masjidfaq.png"
                alt="Mosque"
                className="block h-auto w-full grayscale"
              />
            </div>

            {/* FAQ TITLE */}
            <div className="absolute left-[17px] top-[126px] z-30 flex w-[131px] items-center justify-center">
              <h1
                className="whitespace-nowrap text-[37px] font-bold leading-[0.8] tracking-[-0.07em] text-[#1f513f]"
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

      <section className="relative z-40 mx-auto mt-[-5px] w-[305px]">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b-[2px] border-white/80"
            >

              {/* QUESTION */}
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between gap-[8px] py-[9px] text-left transition-opacity duration-200 hover:opacity-80"
              >
                <span
                  className="text-[13px] font-medium leading-[1.15] tracking-[-0.01em] text-[#f2eae0]"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {faq.question}
                </span>

                <span
                  className="flex shrink-0 items-center justify-center text-[18px] font-light leading-none text-[#f2eae0] transition-transform duration-300"
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
                    className="max-w-[270px] pb-[9px] pr-[15px] text-[8px] font-medium leading-[1.45] text-[#f2eae0]/85"
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

    </main>
  );
}