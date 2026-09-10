import { ArrowUpRight, Mail } from "lucide-react";

const links = ["Work", "About", "Experience", "Services", "Contact"];

export default function Footer() {
  return (
    <>
      <div className="overflow-hidden border-y border-[#201f1c] bg-[#0f0f0e] py-4 text-[40px] tracking-[-.07em] max-md:text-[30px]">
        <div className="flex w-max animate-[book-call-marquee_18s_linear_infinite] motion-reduce:animate-none">
          {[0, 1].map((track) => (
            <div
              className="flex shrink-0"
              aria-hidden={track === 1 ? "true" : undefined}
              key={track}
            >
              {[1, 2, 3].map((item) => (
                <span
                  className="mr-7 inline-flex shrink-0 items-center gap-3"
                  key={item}
                >
                  Book a call
                  <ArrowUpRight className="inline-block h-[25px] w-[25px] rounded-full border border-[#5b554e] p-[5px] align-middle" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <footer className="relative mx-auto flex min-h-[360px] w-[min(100%-32px,1080px)] justify-between overflow-hidden rounded-b-xl border-x border-b border-[#201f1c] bg-[#11110f] px-5 pt-14 font-[var(--font-geist-sans)] text-[11px] sm:w-[min(100%-48px,1080px)] sm:px-8 sm:pt-[70px] max-md:block">
        <div>
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[#080706] font-serif text-[11px] text-[#ff5b1b]">
              A
            </span>{" "}
            Abdallah Ayman
          </a>
          <p className="mt-[35px] leading-[1.5] text-[#89857e]">
            Made with curiosity and care.
            <br />A front-end developer who likes the details.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-[#292824] bg-[#0b0b0a] transition-colors hover:border-[#ff5b1b]"
              href="#contact"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-[#292824] bg-[#0b0b0a] transition-colors hover:border-[#ff5b1b]"
              href="#contact"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-[#292824] bg-[#0b0b0a] transition-colors hover:border-[#ff5b1b]"
              href="mailto:abdallahayman.dev@gmail.com"
              aria-label="Email Abdallah"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="grid content-start gap-[11px] rounded-lg border border-[#292824] bg-[#0b0b0a] p-4 max-md:absolute max-md:right-5 max-md:top-14 max-sm:right-5 max-sm:p-3 max-[380px]:static max-[380px]:mt-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex justify-between border-t border-[#292824] pt-3 text-[9px] text-[#726f69] max-sm:left-5 max-sm:right-5 max-md:flex-col max-md:gap-[9px] max-[380px]:static max-[380px]:mt-10">
          <span>© 2026 Abdallah Ayman. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
