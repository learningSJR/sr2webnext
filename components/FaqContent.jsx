"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does SR2 Edge provide?",
    answer:
      "We specialize in providing premium office supplies, smart solutions, and stationery designed for modern workspaces.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 1–2 business days and delivered within 5–7 working days depending on your location.",
  },
  {
    question: "Do you offer bulk order discounts?",
    answer:
      "Yes! We provide customized pricing for bulk or corporate orders. Please contact our sales team for more details.",
  },
  {
    question: "Can I return or exchange products?",
    answer:
      "Absolutely. We have a 7-day return and exchange policy as long as the items are unused and in original packaging.",
  },
];

const FaqContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background with overlay */}
      <img
        src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1600&auto=format&fit=crop"
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* FAQ Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/20"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-200">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 25s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default FaqContent;
