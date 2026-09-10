import { ArrowUpRight } from "lucide-react";
import Header from "./Header";

const sans = "font-[var(--font-geist-sans)]";
const pill =
  "rounded-full border border-[#75402b] px-2 py-1 text-[10px] text-[#e6b9a4]";
const technologies = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "MongoDB",
  "Git",
  "Vercel",
  "Netlify",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[720px] overflow-hidden bg-[radial-gradient(circle_at_75%_20%,#ff6a1b_0,#ee4a09_26%,#7f2008_54%,#1a0b06_100%)] after:pointer-events-none after:absolute after:inset-[46%_0_0] after:bg-gradient-to-b after:from-transparent after:to-[#0b0b0a] max-sm:min-h-[760px]"
    >
      <Header />
      <div
        className={`relative z-[1] mx-auto grid min-h-[610px] w-[min(100%-48px,1080px)] grid-cols-1 items-center pt-16 lg:grid-cols-2 ${sans}`}
      >
        <div className="max-w-[570px] py-[72px] pb-[102px] max-sm:py-12">
          <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
            Introduction <span className="ml-[7px]">✳</span>
          </p>
          <h1 className="mb-6 text-[clamp(3.2rem,6.5vw,5.6rem)] font-semibold leading-[.9] tracking-[-.08em] max-sm:text-[clamp(2.65rem,12vw,3.4rem)]">
            Front-end work
            <br />
            with{" "}
            <em className="font-serif font-normal tracking-[-.06em]">
              purpose
            </em>
            <br />
            behind it.
          </h1>
          <p className="max-w-[335px] text-[14px] leading-[1.5] text-[#d8bfb4]">
            I&apos;m Abdallah, a Front-End Developer and second-year Computer
            Science student at SHA Academy. I build modern, responsive and
            user-focused web experiences.
          </p>
          <div className="my-[19px] flex flex-wrap gap-[5px]">
            {[
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "REST APIs",
              "JavaScript",
            ].map((item) => (
              <span className={pill} key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="w-[106px] rounded-[7px] border border-[#8e4025] bg-[#7b260f88] p-3">
              <strong className="block text-[25px]">2</strong>
              <small className="mt-[3px] block text-[9px] leading-[1.3] text-[#c99784]">
                Featured applications
              </small>
            </div>
            <div className="w-[106px] rounded-[7px] border border-[#8e4025] bg-[#7b260f88] p-3">
              <strong className="block text-[25px]">100%</strong>
              <small className="mt-[3px] block text-[9px] leading-[1.3] text-[#c99784]">
                Curiosity in every build
              </small>
            </div>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-[9px]">
            <a
              className="inline-flex items-center gap-[9px] rounded-full bg-[#f1eee8] px-[15px] py-[10px] text-[11px] text-[#191715]"
              href="#contact"
            >
              Let&apos;s connect <ArrowUpRight size={15} />
            </a>
            <a
              className="inline-flex items-center gap-[9px] rounded-full border border-[#a04d2d] px-[15px] py-[10px] text-[11px]"
              href="#work"
            >
              View my work <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="hidden lg:block justify-self-end pr-[45px] pt-20 max-lg:absolute max-lg:bottom-[55px] max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:scale-[.72] max-lg:opacity-85 max-sm:bottom-[48px] max-sm:scale-[.58]">
          <div className="relative h-[318px] w-[230px] overflow-hidden rounded-xl border border-[#a9431d] bg-[#120c09] shadow-[0_20px_80px_#05020199]">
            <div className="absolute left-5 top-2 h-[220px] w-[210px] bg-[radial-gradient(circle,#fd9a38,#75200b_55%,transparent_70%)] opacity-70" />
            <div className="absolute inset-[35px_25px_90px] grid place-items-center text-[100px] font-bold text-[#ffb175] mix-blend-screen">
              AA
            </div>
            <div className="absolute inset-6 skew-y-[-10deg] border border-[#ff8a4144]" />
            <div
              className={`absolute bottom-[46px] left-4 right-4 grid gap-1 text-[8px] ${sans}`}
            >
              <span className="text-[#ab6f5a]">
                Front-End Developer · Student
              </span>
              <strong className="text-[10px]">
                abdallahayman.dev@gmail.com
              </strong>
              <small className="text-[#ab6f5a]">Studying at SHA Academy</small>
            </div>
            <a
              href="#contact"
              className={`absolute bottom-2 left-2 right-2 flex justify-between rounded-full bg-[#22130d] p-[9px_11px] text-[9px] ${sans}`}
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-0 z-[3] w-full overflow-hidden border-t border-white/10 py-3 text-[11px] text-[#bcb1a9] ${sans}`}
      >
        <div className="flex w-max animate-[book-call-marquee_22s_linear_infinite] motion-reduce:animate-none">
          {[0, 1].map((track) => (
            <div
              className="flex shrink-0 items-center"
              aria-hidden={track === 1 ? "true" : undefined}
              key={track}
            >
              {technologies.map((technology) => (
                <span className="shrink-0" key={technology}>
                  {technology}
                  <b className="px-3 text-[#ff5b1b]">✳</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
