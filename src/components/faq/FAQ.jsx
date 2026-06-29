import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are delivered instantly after your payment is verified. In rare cases it may take a few minutes.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. All payments are processed through secure UPI methods. Your personal information is never shared.",
  },
  {
    question: "What if my payment fails?",
    answer:
      "If your payment is deducted but not received by us, it is usually refunded automatically by your bank. If you still need help, contact our support team.",
  },
  {
    question: "Can I cancel or refund an order?",
    answer:
      "Once a top-up has been delivered to your Free Fire account, it cannot be cancelled or refunded.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl px-5 py-24"
    >
      <div className="text-center">

        <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">

          Support

        </span>

        <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

          Frequently Asked Questions

        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">

          Everything you need to know before purchasing diamonds and memberships.

        </p>

      </div>

      <div className="mt-14 space-y-5">
                {faqs.map((faq, index) => {
          const active = open === index;

          return (
            <motion.div
              key={faq.question}
              layout
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                active
                  ? "border-orange-500/30 bg-gradient-to-br from-[#1A202B] to-[#11161F]"
                  : "border-white/10 bg-[#141922]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >
                <h3
                  className={`text-lg font-bold transition ${
                    active ? "text-orange-400" : "text-white"
                  }`}
                >
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ChevronDown
                    size={22}
                    className={`transition ${
                      active ? "text-orange-400" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-6">
                      <p className="leading-8 text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;