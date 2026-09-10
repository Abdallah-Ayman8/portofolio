import { skills } from "./portfolioData";

export default function Skills() {
  return (
    <section className="mx-auto border-b border-[#201f1c] bg-[#10100f] py-20 sm:py-[120px]">
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
          Skills <span className="ml-[7px]">✳</span>
        </p>
        <h2 className="mb-12 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
          Tools I reach for,
          <br />
          honestly rated.
        </h2>
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-[#292824] max-md:grid-cols-2 max-sm:grid-cols-1">
          {skills.map(([title, ...items]) => (
            <div
              key={title}
              className="min-h-[108px] border-b border-r border-[#292824] p-[18px_14px] font-[var(--font-geist-sans)]"
            >
              <strong className="mb-[13px] block text-[12px]">{title}</strong>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span
                    className="rounded-full border border-[#3a3935] px-[7px] py-1 text-[9px] text-[#aaa59d]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
