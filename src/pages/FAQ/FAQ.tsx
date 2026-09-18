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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('/images/FAQ/Welcome%20To%20Website.png')",
      }}
    >
      <div className="relative min-h-screen w-full">

        {/* =========================================
            NOTEPAD
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[49%]
            top-[5%]
            z-10
            hidden
            w-[42%]
            md:block
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

        {/* =========================================
            PICTURE CARD
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[51%]
            top-[14%]
            z-20
            hidden
            w-[48%]
            md:block
          "
        >
          <div className="relative w-full">

            {/* White picture card */}
            <img
              src="/images/FAQ/piccard.png"
              alt=""
              className="
                block
                w-full
                object-contain
              "
            />

            {/* =====================================
                MOSQUE IMAGE
            ====================================== */}

            <div
              className="
                absolute
                left-[4.7%]
                top-[6.5%]
                z-20
                w-[91.5%]
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

            {/* =====================================
                FAQ TITLE
            ====================================== */}

            <div
              className="
                absolute
                left-[24%]
                top-[78%]
                z-30
                flex
                w-[54%]
                items-center
                justify-center
              "
            >
              <img
                src="/images/FAQ/faq.png"
                alt="FAQs"
                className="
                  block
                  w-full
                  object-contain
                "
              />
            </div>
          </div>
        </div>

        {/* =========================================
            FAQ QUESTIONS
        ========================================== */}

        <section
          className="
            absolute
            left-[5%]
            top-1/2
            z-40
            w-[40%]
            max-w-[620px]
            -translate-y-1/2
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b-2 border-white/60"
              >
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
                    py-7
                    text-left
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[1.6rem]
                      leading-tight
                      text-white
                      md:text-[1.8rem]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-white
                      text-3xl
                      font-light
                      leading-none
                      text-white
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    <span className="-mt-1">+</span>
                  </span>
                </button>

                {/* Answer */}
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
                        max-w-[600px]
                        pb-8
                        pr-12
                        font-sans
                        text-base
                        leading-relaxed
                        text-white/80
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
    </main>
  );
}