// app/components/QuoteSection.tsx
"use client";

import Image from "next/image";
import React from "react";

type QuoteSectionProps = {
  title: string;
  subtitle: string;
};

function HighlightLastWord({ text }: { text: string }) {
  const words = text.split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  return (
    <>
      {rest}{" "}
      <span className="relative inline-block text-[#FFD956]">
        {lastWord}
        <span className="absolute left-0 -bottom-2 h-[6px] w-full bg-[#FFD956]/30 blur-md" />
      </span>
    </>
  );
}




export default function QuoteSection({ title, subtitle }: QuoteSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

    <div className="pointer-events-none absolute right-6 top-6 z-10 hidden sm:block">
      <Image
        src="/hero-shp.png"
        alt="Decorative arrow"
        width={150}
        height={650}
        className="opacity-60 rotate-[8deg] drop-shadow-[0_10px_30px_rgba(255,217,86,0.15)]"
      />
    </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[680px] w-[680px] rounded-full bg-[#FFD956]/25 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-1/3 h-[520px] w-[520px] rounded-full bg-[#4c8df5]/15 blur-[190px]" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

        <h1 className="mt-10 text-2xl font-extrabold leading-[1.1] sm:text-3xl lg:text-6xl tracking-tight">
          <HighlightLastWord text={title} />
        </h1>


            <p className="mt-10 max-w-md border-l-2 border-[#FFD956]/60 pl-4 text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
              {subtitle}
            </p>


            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center justify-center rounded-[15px] bg-[#fee000] px-6 py-3 text-[16px] font-semibold text-black shadow-[0_18px_60px_-24px_rgba(254,224,0,0.8)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#ffea2b] focus:outline-none focus:ring-2 focus:ring-[#FFD956]/70 focus:ring-offset-2 focus:ring-offset-black">
                <span>Discuss with Our Experts</span>
                <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  ➜
                </span>
              </button>

            </div>
          {/* TRUST STRIP */}
          <div className="mt-10 flex flex-wrap items-center gap-10 text-sm font-medium text-white">
            <a
              href="https://www.designrush.com/agency/profile/livebits#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative h-12 w-35">
                <Image
                  src="/review-badge.png"
                  alt="Review us on DesignRush"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <div className="hidden h-10 w-px md:flex relative">
              <div className="absolute left-1/2 top-0 h-10 w-[3px] bg-white/25 rotate-[18deg]" />
            </div>

            <div className="flex items-center gap-4 text-[14px]">
              <div>
                <p className="font-semibold text-white">
                  Best Digital Agency of 2024
                </p>
                <div className="relative h-10 w-35 items-center -ml-5">
                  <Image
                    src="/forbes.png"
                    alt="Forbes"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>


          </div>

          {/* RIGHT CONTENT (FORM) */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              {/* top glow line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD956]/70 to-transparent" />

              <div className="mb-6">
                <h3 className="text-xl font-semibold tracking-wide text-white sm:text-3xl">
                  Request A Quote
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Tell us a bit about your goals — we’ll reply within 24 hours.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 123 4567890"
                      className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      placeholder="$10,000 - $70,000"
                      className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#4c8df5] to-[#2f6fe8] px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_18px_70px_-30px_rgba(76,141,245,0.8)] transition hover:scale-[1.01] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#4c8df5]/40 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Get My Quote
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
