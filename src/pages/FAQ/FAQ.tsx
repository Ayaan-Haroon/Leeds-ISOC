import { useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="faq-page relative w-full overflow-hidden 
      "
      style={{
        backgroundImage:
          "url('/images/FAQ/Welcome%20To%20Website.png')",
      }}
    >
      {/* =====================================================
          FULL-VIEWPORT BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/FAQ/Welcome%20To%20Website.png')",
        }}
      />

      {/* =====================================================
          1460 × 900 MASTER CANVAS
      ====================================================== */}

      <div className="relative z-10 w-full flex justify-center">
        <MasterCanvas>
          <div
            className="
              faq-content
              relative
              h-[900px]
              w-[1460px]
              overflow-hidden
            "
          >
            {/* =================================================
                NOTEPAD
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-[715px]
                top-[45px]
                z-10
                w-[613px]
              "
            >
              <img
                src="/images/FAQ/notepad.png"
                alt=""
                className="
                  block
                  w-full
                  object-contain
                "
              />
            </div>

            {/* =================================================
                PICTURE CARD
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-[745px]
                top-[126px]
                z-20
                w-[701px]
              "
            >
              <div className="relative w-full">

                {/* WHITE PICTURE CARD */}

                <img
                  src="/images/FAQ/piccard.png"
                  alt=""
                  className="
                    block
                    w-full
                    object-contain
                  "
                />

                {/* =============================================
                    MOSQUE IMAGE
                ============================================== */}

                <div
                  className="
                    absolute
                    left-[33px]
                    top-[46px]
                    z-20
                    w-[641px]
                    overflow-hidden
                  "
                >
                  <img
                    src="/images/FAQ/masjidfaq.png"
                    alt="Mosque"
                    className="
                      block
                      h-auto
                      w-full
                      grayscale
                    "
                  />
                </div>

                {/* =============================================
                    FAQ TITLE
                ============================================== */}

                <div
                  className="
                    absolute
                    left-[70px]
                    top-[540px]
                    z-30
                    flex
                    w-[561px]
                    items-center
                    justify-center
                  "
                >
                  <h1
                    className="
                      whitespace-nowrap
                      text-[160px]
                      font-bold
                      leading-[0.8]
                      tracking-[-0.07em]
                      text-[#1f513f]
                    "
                    style={{
                      fontFamily: "'Bodoni FLF', serif",
                    }}
                  >
                    FAQS
                  </h1>
                </div>
              </div>
            </div>

            {/* =================================================
                FAQ QUESTIONS
            ================================================== */}

            <section
              className="
                faq-questions
                absolute
                left-[73px]
                top-1/2
                z-40
                w-[584px]
                -translate-y-1/2
              "
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      border-b-[5px]
                      border-white/80
                      last:border-b-[5px]
                    "
                  >
                    {/* QUESTION */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        py-[32px]
                        text-left
                        transition-opacity
                        duration-200
                        hover:opacity-80
                      "
                    >
                      {/* QUESTION TEXT */}

                      <span
                        className="
                          text-[36px]
                          font-medium
                          leading-[1.1]
                          tracking-[-0.025em]
                          text-[#f2eae0]
                        "
                        style={{
                          fontFamily: "'Bodoni FLF', serif",
                        }}
                      >
                        {faq.question}
                      </span>

                      {/* PLUS */}

                      <span
                        className="
                          flex
                          shrink-0
                          items-center
                          justify-center
                          text-[43px]
                          font-light
                          leading-none
                          text-[#f2eae0]
                          transition-transform
                          duration-300
                        "
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
                          className="
                            max-w-[570px]
                            pb-[32px]
                            pr-[48px]
                            font-sans
                            text-[16px]
                            font-medium
                            leading-[1.55]
                            text-[#f2eae0]/85
                          "
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
        </MasterCanvas>
      </div>
    </main>
  );
}