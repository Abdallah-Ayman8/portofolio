import { approachItems } from "./portfolioData";

export default function Approach() {
  return (
    <section
      id="experience"
      className="mx-auto border-b border-[#201f1c] bg-[#10100f] px-0 py-20 sm:py-[120px]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
          Approach <span className="ml-[7px]">✳</span>
        </p>
        <h2 className="mb-12 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
          Good interfaces
          <br />
          make complexity <span className="text-[#66635e]">feel simple.</span>
        </h2>
        <div className="border-t border-[#292824]">
          {approachItems.map(([company, role, description, date]) => (
            <article
              className="flex justify-between gap-5 border-b border-[#292824] py-[18px] font-[var(--font-geist-sans)] max-md:block"
              key={company}
            >
              <div>
                <small className="text-[10px] text-[#86837e]">{company}</small>
                <h3 className="mb-[5px] mt-1 text-[16px] font-semibold">
                  {role}
                </h3>
                <p className="m-0 max-w-[510px] text-[11px] leading-[1.4] text-[#86837e]">
                  {description}
                </p>
              </div>
              <time className="whitespace-nowrap pt-2 text-[10px] text-[#86837e] max-md:block max-md:pt-2">
                {date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
