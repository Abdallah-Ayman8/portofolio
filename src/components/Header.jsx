"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = ["Work", "About", "Experience", "Services", "Contact"];
const sans = "font-[var(--font-geist-sans)]";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollTimeout = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    setIsScrolling(true);
    window.clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      setIsScrolling(false);
    }, 120);
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktopState = () => setIsDesktop(mediaQuery.matches);

    updateDesktopState();
    mediaQuery.addEventListener("change", updateDesktopState);

    return () => {
      window.clearTimeout(scrollTimeout.current);
      mediaQuery.removeEventListener("change", updateDesktopState);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: isDesktop && isScrolling ? -88 : 0,
        x: scrolled ? "-50%" : "0%",
        opacity: 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed z-50 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-radius,top,width] duration-300 ${scrolled ? "left-1/2 top-3 w-[calc(100%-24px)] max-w-[1080px] rounded-2xl bg-[#0b0b0a99] shadow-[0_12px_35px_#00000055] backdrop-blur-2xl backdrop-saturate-200" : "left-0 top-0 w-full bg-[#0b0b0a99]"}`}
    >
      <nav
        className={`relative z-10 mx-auto flex h-16 items-center justify-between text-[12px] text-[#fff8ef] drop-shadow-[0_1px_2px_#00000099] ${scrolled ? "w-full px-5 sm:px-6" : "w-[min(100%-48px,1080px)]"} ${sans}`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-[-.03em]"
        >
          <span className="grid h-4 w-4 place-items-center rounded-full bg-[#080706] font-serif text-[11px] text-[#ff5b1b]">
            A
          </span>{" "}
          Abdallah Ayman
        </a>
        <div
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[53px] flex-col gap-[18px] rounded-lg border border-[#70402c] bg-[#100c0af5] p-[18px] text-[#fff8ef] shadow-[0_16px_35px_#00000055] lg:static lg:flex lg:flex-row lg:gap-[27px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-[#ffb38f]"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-5 text-[#fff0e5] lg:flex">
          <span>Front-End Developer · SHA Academy </span>
          <a
            className="inline-flex items-center gap-[9px] rounded-full bg-[#f1eee8] px-[15px] py-[10px] text-[#131210]"
            href="#contact"
          >
            Let&apos;s connect <ArrowUpRight size={13} />
          </a>
        </div>
        <button
          className="block border-0 bg-transparent p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <motion.div
        className={`${scrolled ? "hidden" : "absolute bottom-0 left-0 right-0 h-px rounded-b-2xl bg-[#ff5b1b]"}`}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        aria-hidden="true"
      />
    </motion.header>
  );
}
