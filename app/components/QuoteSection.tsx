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
      {/* Decorative shape */}
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

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-20">
        {/* CONTENT */}
        <h1 className="mt-10 max-w-4xl text-left text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-6xl">
          <HighlightLastWord text={title} />
        </h1>

        <p className="mt-10 max-w-3xl border-l-2 border-[#FFD956]/60 pl-5 text-left text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          {subtitle}
        </p>


        {/* TRUST STRIP */}
        <div className="mt-14 flex flex-wrap items-center justify-start gap-10 text-sm font-medium text-white">
          <a
            href="https://www.designrush.com/agency/profile/livebits#reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-12 w-36">
              <Image
                src="/review-badge.png"
                alt="Review us on DesignRush"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <div className="hidden h-10 w-px md:block bg-white/25" />

          <div className="text-left">
            <p className="font-semibold text-white">Best Digital Agency of 2024</p>
            <div className="relative mt-1 h-10 w-36 left-[-21px]">
              <Image src="/forbes.png" alt="Forbes" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
