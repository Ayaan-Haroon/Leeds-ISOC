import { useState } from "react";
import MasterCanvas from "../../components/MasterCanvas";

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