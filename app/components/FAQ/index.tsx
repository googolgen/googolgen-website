'use client';
import Link from "next/link";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Googolgen Education Foundation?",
      answer:
        "Googolgen Education Foundation is a registered computer training institute offering basic to advanced computer education. We empower students with future-ready skills like coding, web & app development, AI, and programming languages such as C, C++, Java, and Python.",
    },
    {
      question: "Which organizations is Googolgen affiliated with?",
      answer:
        "Googolgen Education Foundation is a proud franchise partner of Jawaharlal Nehru Youth Computer & Technical Skill Development and the National Certification Board of Skill Development, enhancing our reach and recognition.",
    },
    {
      question: "Do you provide your own certificates?",
      answer:
        "Yes! Along with certificates from our partnered organizations, Googolgen also issues its own certificates to recognize students’ skills and achievements.",
    },
    {
      question: "Who can join Googolgen courses?",
      answer:
        "Our courses are designed for school students, college learners, and anyone eager to build strong digital skills—from complete beginners to advanced learners.",
    },
    {
      question: "What makes Googolgen different from other computer institutes?",
      answer:
        "Googolgen stands out by introducing modern technologies like coding, AI, and game development to students at an early stage, combining practical learning with industry-relevant skills.",
    },
    {
      question: "What kind of courses are offered?",
      answer:
        "We offer a wide range of courses—from basic computer training to advanced programs in coding, web design, app development, data analytics, AI, and more.",
    },
    {
      question: "Are the courses practical or theory-based?",
      answer:
        "Our courses are designed to be hands-on and project-based. Students learn through real-world examples, interactive sessions, and guided projects that strengthen both knowledge and creativity.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-800">
            Want to ask us something else? 📩 Reach out anytime at
            <span className="font-medium"> <Link href="mailto:contactgoogolgen25@gmail.com" target="_blank">contactgoogolgen25@gmail.com</Link> </span>
          </p>
        </div>
      </div>
    </section>
  );
}
