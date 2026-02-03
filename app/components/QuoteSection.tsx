// app/components/QuoteSection.tsx
"use client";

import Image from "next/image";
import React from "react";

type QuoteSectionProps = {
  title: string;
  subtitle: string;
};

function HighlightLastWord({ text }: { text: string }) {
  const words = text.trim().split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  // ✅ safe if title is single word or empty
  if (!lastWord) return null;

  return (
    <>
      {rest ? `${rest} ` : ""}
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
      <div className="pointer-events-none absolute right-3 top-3 z-10 hidden sm:block sm:right-4 sm:top-4 lg:right-6 lg:top-6">
        <Image
          src="/hero-shp.png"
          alt="Decorative arrow"
          width={110}
          height={520}
          className="opacity-50 rotate-[8deg] drop-shadow-[0_10px_30px_rgba(255,217,86,0.15)] sm:opacity-60 lg:w-[150px]"
        />
      </div>

      {/* Ambient glows (scaled per screen) */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[360px] w-[360px] rounded-full bg-white/10 blur-[120px] sm:h-[480px] sm:w-[480px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#FFD956]/25 blur-[160px] sm:h-[640px] sm:w-[640px] sm:blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-1/3 h-[380px] w-[380px] rounded-full bg-[#4c8df5]/15 blur-[160px] sm:h-[520px] sm:w-[520px] sm:blur-[190px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ✅ Responsive container + spacing */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 sm:py-16 lg:py-20">

        {/* CONTENT */}
        <h1 className="mt-6 sm:mt-10 max-w-4xl text-left text-[28px] leading-[1.15] font-extrabold tracking-tight sm:text-4xl sm:leading-[1.1] lg:text-6xl">
          <HighlightLastWord text={title} />
        </h1>

        <p className="mt-6 sm:mt-10 max-w-3xl border-l-2 border-[#FFD956]/60 pl-4 sm:pl-5 text-left text-[15px] leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          {subtitle}
        </p>

        {/* TRUST STRIP (responsive layout) */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:flex-wrap
          items-start sm:items-center
          justify-start
          gap-5 sm:gap-10 text-sm font-medium text-white text-left">


          <a
            href="https://www.designrush.com/agency/profile/livebits#reviews"
            target="_blank"
            rel="noopener noreferrer"
          >


            <div className="relative h-10 w-32 sm:h-12 sm:w-36">
              <Image
                src="/review-badge.png"
                alt="Review us on DesignRush"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Divider only on md+ */}
          <div className="hidden h-10 w-px md:block bg-white/25" />

          <div className="w-full sm:w-auto text-left flex flex-col items-start">
            <p className="font-semibold text-white text-[13px] sm:text-sm">
              Best Digital Agency of 2024
            </p>

            {/* ✅ No negative left on mobile (prevents overflow) */}
            <div className="relative mt-2 h-8 w-28 sm:h-10 sm:w-36 sm:left-[-21px]">
              <Image src="/forbes.png" alt="Forbes" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
