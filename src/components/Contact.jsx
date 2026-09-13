"use client";

import { ArrowUpRight, Mail } from "lucide-react";

const whatsappNumber = "201278699198";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get("name") || "Not provided"}`,
      `Email: ${formData.get("email") || "Not provided"}`,
      `Project: ${formData.get("project") || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contact"
      className="mx-auto grid w-[min(100%-32px,1080px)] grid-cols-1 gap-[35px] rounded-lg border-b border-[#201f1c] bg-[#11110f] px-4 py-16 sm:w-[min(100%-48px,1080px)] sm:px-6 sm:py-[120px] lg:grid-cols-[.75fr_1fr] lg:gap-[70px] lg:px-8"
    >
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[.12em] text-[#ff5b1b]">
          Contact <span className="ml-[7px]">✳</span>
        </p>
        <h2 className="mb-4 text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.075em]">
          Have something in
          <br />
          mind? Let&apos;s talk it
          <br />
          through.
        </h2>
        <p className="max-w-[220px] font-[var(--font-geist-sans)] text-[12px] leading-[1.5] text-[#8c8880]">
          Tell me a little about the project: what it is, where it stands and
          where it needs to go.
        </p>
        <div className="mt-[30px] grid gap-[13px] font-[var(--font-geist-sans)] text-[11px]">
          <a
            className="flex items-center gap-2"
            href="mailto:abdallahayman.dev@gmail.com"
          >
            <Mail size={15} /> abdallahayman.dev@gmail.com
          </a>
          <a
            className="flex items-center gap-2 text-[13px] font-normal leading-normal tracking-normal"
            href="https://wa.me/201278699198"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">◉</span> 01278699198 · WhatsApp
          </a>
          <a href="#contact">◉ Available for meaningful projects</a>
          <a href="#contact">◌ Start a conversation</a>
        </div>
      </div>
      <form
        className="grid content-center gap-4 rounded-lg border border-[#282621] bg-[#191815] p-4 font-[var(--font-geist-sans)] sm:p-5 lg:p-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
          <label className="grid gap-[7px] text-[10px] text-[#c7c1b8]">
            Your name
            <input
              className="w-full rounded-md border border-[#25231f] bg-[#11110f] p-[11px] text-[11px] text-[#f1eee8] outline-none focus:border-[#ff5b1b]"
              name="name"
              placeholder="What should I call you?"
            />
          </label>
          <label className="grid gap-[7px] text-[10px] text-[#c7c1b8]">
            Email address
            <input
              className="w-full rounded-md border border-[#25231f] bg-[#11110f] p-[11px] text-[11px] text-[#f1eee8] outline-none focus:border-[#ff5b1b]"
              name="email"
              type="email"
              placeholder="you@company.com"
            />
          </label>
        </div>
        <label className="grid gap-[7px] text-[10px] text-[#c7c1b8]">
          About the project
          <textarea
            className="w-full resize-y rounded-md border border-[#25231f] bg-[#11110f] p-[11px] text-[11px] text-[#f1eee8] outline-none focus:border-[#ff5b1b]"
            name="project"
            placeholder="What are we building, and where does it stand today?"
            rows="5"
          />
        </label>
        <button
          className="inline-flex w-full items-center justify-center gap-[9px] rounded-full border-0 bg-[#ff5b1b] px-[15px] py-[11px] text-[12px] text-[#1a0b05] sm:w-fit"
          type="submit"
        >
          Send the message <ArrowUpRight size={15} />
        </button>
      </form>
    </section>
  );
}
