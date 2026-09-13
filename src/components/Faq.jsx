"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "./portfolioData";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section className="mx-auto border-b border-[#201f1c] py-20 sm:py-[120px]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
              FAQs <span className="ml-[7px]">✳</span>
            </p>
            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
              Questions people usually ask
              <br />
              before we start.
            </h2>
          </div>
          <div className="mt-6 w-full max-w-[320px] rounded-lg border border-[#282621] bg-[#191815] p-[17px] font-[var(--font-geist-sans)] text-[11px] lg:w-[205px]">
            <span className="text-[24px] text-[#ff5b1b]">◌</span>
            <strong className="my-[13px_5px] block">
              Have a question that is not listed here?
            </strong>
            <p className="text-[10px] leading-[1.4] text-[#88847d]">
              Drop me a line. No forms, no waiting.
            </p>
            <a
              href="https://wa.me/201278699198"
              target="_blank"
              rel="noreferrer"
              className="mt-[17px] flex justify-between border-t border-[#292824] pt-[10px] text-[10px]"
            >
              Ask me directly <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-[38px] max-w-[620px] border-t border-[#292824]">
          {faqs.map(([question, answer], index) => (
            <div className="border-b border-[#292824]" key={question}>
              <button
                className="flex w-full cursor-pointer justify-between border-0 bg-transparent py-[17px] text-left font-[var(--font-geist-sans)] text-[12px] text-[#f1eee8]"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{question}</span>
                <ChevronDown
                  className={`text-[#77736e] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>
              {openFaq === index && (
                <p className="mb-4 mr-[25px] font-[var(--font-geist-sans)] text-[11px] leading-[1.5] text-[#96918a]">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
