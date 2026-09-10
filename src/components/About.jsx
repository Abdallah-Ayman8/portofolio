export default function About() {
  return (
    <section
      id="about"
      className="mx-auto min-h-[650px] w-[min(100%-48px,1080px)] border-b border-[#201f1c] py-20 sm:py-[120px]"
    >
      <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
        About me <span className="ml-[7px]">✳</span>
      </p>
      <h2 className="mb-12 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
        Building interfaces
        <br />
        that connect people
        <br />
        with products.
      </h2>
      <div className="mx-auto grid max-w-[720px] grid-cols-[180px_minmax(0,1fr)] gap-7 max-md:grid-cols-1">
        <div className="relative flex h-[230px] items-end overflow-hidden border border-[#4d2719] bg-[linear-gradient(140deg,#8c2a10,#1d0c07_50%,#e76622)] p-3 text-[8px]">
          <span>THE DETAILS MATTER</span>
          <strong className="ml-auto text-[#ff5b1b]">01</strong>
        </div>
        <div className="font-[var(--font-geist-sans)] text-[14px] leading-[1.6] text-[#aaa69e]">
          <p>
            I&apos;m Abdallah Ayman, a Front-End Developer and second-year
            Computer Science student at SHA Academy. I enjoy turning ideas,
            designs and problems into complete interactive web experiences that
            are attractive, accessible and functional.
          </p>
          <p>
            My strongest focus is modern JavaScript development with React.js,
            Next.js, Tailwind CSS and REST APIs. I&apos;m also growing my
            full-stack understanding through Node.js, PostgreSQL and MongoDB so
            I can make better decisions about how data moves through an
            application.
          </p>
          <div className="mt-[25px] grid grid-cols-4 rounded-lg border border-[#292824] max-md:grid-cols-2 max-[380px]:grid-cols-1">
            {[
              ["2nd", "Year Computer Science student"],
              ["2", "Featured projects"],
              ["6+", "Core technologies"],
              ["∞", "Things left to learn"],
            ].map(([value, label]) => (
              <div
                className="border-r border-[#292824] p-[13px_11px] last:border-r-0 max-md:nth-[2]:border-r-0"
                key={label}
              >
                <strong className="text-[22px] text-[#f1eee8]">{value}</strong>
                <small className="mt-[3px] block text-[9px] leading-[1.3] text-[#c99784]">
                  {label}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
