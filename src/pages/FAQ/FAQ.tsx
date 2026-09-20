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
    left-[10%]
    top-[77%]
    z-30
    flex
    w-[80%]
    items-center
    justify-center
  "
>
  <h1
    className="
      whitespace-nowrap
      text-[7rem]
      font-bold
      leading-[0.8]
      tracking-[-0.07em]
      text-[#1f513f]
      md:text-[8rem]
      lg:text-[9rem]
      xl:text-[10rem]
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
                className="
                  border-b-[5px]
                  border-white/80
                  last:border-b-[5px]
                "
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
                    py-[2rem]
                    text-left
                    transition-opacity
                    duration-200
                    hover:opacity-80
                  "
                >

                  {/* QUESTION */}

                  <span
                    className="
                      text-[1.65rem]
                      font-medium
                      leading-[1.1]
                      tracking-[-0.025em]
                      text-[#f2eae0]
                      md:text-[1.9rem]
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
                      text-[2.7rem]
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
                        pb-8
                        pr-12
                        font-sans
                        text-[1rem]
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
    </main>
  );
}