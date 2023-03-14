import React, { useState } from "react";
import Footer from "../../footer/Footer";
import Navigation from "../Navigation";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [idVisible, setIdVisible] = useState<number | null>(null);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What are you selling?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 2,
      question: "What does the guarantee cover? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 3,
      question: "Where can I find you? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 4,
      question: "Is your site secure? ? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 5,
      question: "Do you charge deals? ? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 6,
      question: "Who measures my installment? ? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 7,
      question: "How would I realize my subtleties are secure? ? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 8,
      question: "Where would I be able to discover a rebate code?? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 9,
      question: "What are your installment alternatives? ? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 11,
      question: "How might I check the situation with my request? ",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 12,
      question: "Would I be able to drop or change my request?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 13,
      question: "Would I be able to trade my request?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 14,
      question: "How would I return my request?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 15,
      question: "What do I do if my request is harmed?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 16,
      question: "For what reason did I just get part of my request?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
    {
      id: 17,
      question: "I got some unacceptable products, what do I do?",
      answer:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore voluptatem. Accusantium ipsam qui vero et consequatur harum voluptas nobis voluptatibus iusto, reprehenderit distinctio deleniti atque? Tempore accusamus laboriosam dicta.",
    },
  ]);

  const openAnswer = (id: number) => {
    if (idVisible === id) {
      setIsVisible(!isVisible);
      setIdVisible(id);
    } else if (idVisible !== id) {
      setIsVisible(true);
      setIdVisible(id);
    }
  };

  return (
    <>
      <Navigation />
      <main className={styles.faq_Wrapper}>
        <h1 className={styles.faq_HeadLine}>Frequently Asked Questions</h1>
        <section className={styles.faq_Section}>
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <div>
                  <div
                    className={styles.faq_Question}
                    onClick={() => openAnswer(question.id)}
                  >
                    {question.question}
                  </div>
                  <div
                    className={
                      isVisible === true && idVisible === question.id
                        ? styles.faq_Answer_Active
                        : styles.faq_Answer_InActive
                    }
                  >
                    {question.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
