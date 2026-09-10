import { ArrowUpRight } from "lucide-react";
import { projects } from "./portfolioData";

const screens = [
  "bg-[radial-gradient(circle_at_76%_18%,#f7f0be_0,#b9d84e_22%,transparent_48%),linear-gradient(135deg,#18230f,#617f27_52%,#201d13)]",
  "bg-[radial-gradient(circle_at_75%_15%,#62c8ed_0,#215273_25%,transparent_54%),linear-gradient(135deg,#09151b,#102c3e_58%,#0b1217)]",
  "bg-[radial-gradient(circle_at_18%_15%,#a7ff3d_0,#24723e_20%,transparent_45%),linear-gradient(135deg,#101d22,#193951_55%,#101729)]",
];
const headlines = [
  "Recipe discovery,\nmade simple.",
  "Find your next\ngreat read.",
  "BUILD\nLEARN\nSHIP",
];

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto border-b border-[#201f1c] bg-[#0b0b0a] py-20 sm:py-[120px]"
    >
      <div className="mx-auto w-[min(100%-48px,1080px)]">
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
              Selected work <span className="ml-[7px]">✳</span>
            </p>
            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
              Work that is live, used
              <br />
              and paid for.
            </h2>
          </div>
          <p className="max-w-[360px] font-[var(--font-geist-sans)] text-[14px] leading-[1.6] text-[#aaa69e] max-lg:mt-6">
            A mix of personal experiments and practical applications. Every
            project is a chance to make a user journey clearer.
          </p>
        </div>
        <div className="my-[50px_8px_8px] overflow-hidden whitespace-nowrap rounded-[7px] border border-[#292824] p-[10px_0] text-[23px] tracking-[-.05em]">
          Selected Work <b className="px-3 text-[#ff5b1b]">✳</b> Selected Work{" "}
          <b className="px-3 text-[#ff5b1b]">✳</b> Selected Work{" "}
          <b className="px-3 text-[#ff5b1b]">✳</b>
        </div>
        <div className="grid gap-[9px]">
          {projects.map((project, index) => (
            <article
              className="rounded-[9px] border border-[#2c2a26] bg-[#11110f] p-[10px]"
              key={project.title}
            >
              <div
                className={`relative flex h-[310px] flex-col justify-between overflow-hidden rounded-[5px] p-[18px] font-[var(--font-geist-sans)] max-sm:h-[240px] ${index === 0 ? "bg-[url('/recipelab-hero.png')] bg-cover bg-center" : index === 1 ? "bg-[url('/bookify-hero.png')] bg-cover bg-center" : screens[index]}`}
              >
                {(index === 0 || index === 1) && (
                  <div
                    className="absolute inset-0 bg-[#10170966]"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex items-center justify-between text-[11px] tracking-[.1em]">
                  <span>{project.label}</span>
                  <span className="rounded-full border border-white/30 px-2 py-1 text-[9px] tracking-normal">
                    LIVE VIEW
                  </span>
                </div>
                {index === 0 && (
                  <div className="relative z-10 mt-auto w-[min(78%,320px)] rounded-xl border border-white/50 bg-[#f8f1dcdd] p-3 text-[#263016] shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[.12em]">
                      <span>Tonight&apos;s pick</span>
                      <span className="text-[#b35e2d]">★ 4.9</span>
                    </div>
                    <strong className="mt-1 block text-[21px] tracking-[-.06em]">
                      Roasted garden pasta
                    </strong>
                    <div className="mt-2 flex gap-1">
                      <span className="rounded-full bg-[#d9e9a0] px-2 py-1 text-[8px]">
                        25 min
                      </span>
                      <span className="rounded-full bg-[#e9d9b7] px-2 py-1 text-[8px]">
                        Easy
                      </span>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="relative z-10 mt-auto w-fit rounded-full border border-white/50 bg-[#0a171dcc] px-3 py-2 text-[10px] text-white shadow-xl backdrop-blur-sm">
                    Search · Save · Discover
                  </div>
                )}
                {index === 2 && (
                  <div className="relative z-10 mx-auto mt-auto w-[88%] rounded-xl border border-[#aaff55]/60 bg-[#08151ddd] p-3 shadow-[0_0_40px_#8cff3d44] backdrop-blur-sm">
                    <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[.15em] text-[#b4d9b9]">
                      <span>Interaction lab</span>
                      <span className="text-[#9cff3d]">● recording</span>
                    </div>
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2">
                      <div className="h-20 rounded-md bg-[linear-gradient(135deg,#aaff4a,#275942)] p-2 text-[9px] text-[#102214]">
                        <span>Motion / 01</span>
                        <strong className="mt-8 block text-[17px]">
                          Explore
                        </strong>
                      </div>
                      <div className="h-20 rounded-md border border-[#5685a2] bg-[#15314c] p-2">
                        <span className="text-[9px] text-[#91c3e0]">
                          Cursor
                        </span>
                        <div className="mt-5 h-1 rounded-full bg-[#9cff3d]" />
                      </div>
                      <div className="h-20 rounded-md border border-[#5685a2] bg-[#10253b] p-2">
                        <span className="text-[9px] text-[#91c3e0]">FPS</span>
                        <strong className="mt-5 block text-[20px] text-[#9cff3d]">
                          60
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
                <strong
                  className={`relative z-10 max-w-[280px] whitespace-pre-line text-[28px] font-semibold leading-none tracking-[-.06em] ${index === 2 ? "absolute left-5 top-16 text-[42px] text-[#efffe4] [text-shadow:3px_3px_#1045aa]" : "sr-only"}`}
                >
                  {headlines[index]}
                </strong>
              </div>
              <div className="flex items-end justify-between px-[3px] pb-[3px] pt-[13px] font-[var(--font-geist-sans)]">
                <div>
                  <small className="text-[10px] text-[#807d77]">
                    {project.type} · 2025
                  </small>
                  <h3 className="mt-1 text-[15px]">{project.title}</h3>
                </div>
                <a
                  href={
                    project.title === "RecipeLab"
                      ? "https://recipe-lab-eta.vercel.app/"
                      : project.title === "Bookify"
                        ? "https://bookify-two-psi.vercel.app/"
                        : "#contact"
                  }
                  aria-label={`View ${project.title}`}
                  className="grid h-[27px] w-[27px] place-items-center rounded-full border border-[#292824]"
                  target={
                    ["RecipeLab", "Bookify"].includes(project.title)
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    ["RecipeLab", "Bookify"].includes(project.title)
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
