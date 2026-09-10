import { ArrowUpRight } from "lucide-react";
import { services } from "./portfolioData";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto border-b border-[#201f1c] bg-[#11110f] py-20 sm:py-[120px]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
              What I do <span className="ml-[7px]">✳</span>
            </p>
            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
              One person,
              <br />
              the whole stack.
            </h2>
          </div>
          <p className="max-w-[360px] font-[var(--font-geist-sans)] text-[14px] leading-[1.5] text-[#aaa69e] max-lg:mt-6">
            You get thoughtful front-end work from the first component to the
            finished experience.
          </p>
        </div>
        <div className="mt-12 border-t border-[#292824]">
          {services.map(([number, title, text]) => (
            <div
              className="grid grid-cols-[30px_minmax(0,1fr)_22px] items-center gap-[15px] border-b border-[#292824] py-[22px] font-[var(--font-geist-sans)]"
              key={number}
            >
              <small className="text-[10px] text-[#77736e]">({number})</small>
              <div>
                <h3 className="mb-1 text-[26px] font-semibold tracking-[-.06em] max-md:text-[21px]">
                  {title}
                </h3>
                <p className="m-0 text-[10px] leading-[1.4] text-[#88847d]">
                  {text}
                </p>
              </div>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
        <div className="mt-[25px] flex flex-wrap justify-between gap-3 font-[var(--font-geist-sans)] text-[10px] text-[#88847d]">
          <span>Open to learning · Building from Egypt</span>
          <a href="#contact" className="text-[#f1eee8]">
            Contact me <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
