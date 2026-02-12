"use client";

import React from "react";

type Feature = {
  title: string;
  description: string;
};

type WhyChooseHRProps = {
  headingStart: string;
  highlightedWord: string;
  headingEnd?: string;
  features: Feature[];
};

export default function WhyChooseHR({
  headingStart,
  highlightedWord,
  headingEnd = "",
  features,
}: WhyChooseHRProps) {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Decorative Background Shapes (very subtle for white bg) */}
      <img
        src="/hero-shp.png"
        alt=""
        className="absolute -top-32 -left-40 w-[420px] opacity-[0.04] pointer-events-none select-none"
      />
      <img
        src="/shape-1.png"
        alt=""
        className="absolute top-16 right-[-140px] w-[360px] opacity-[0.05] pointer-events-none select-none"
      />
      <img
        src="/shape4.png"
        alt=""
        className="absolute bottom-16 left-16 w-[70px] opacity-[0.08] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[38px] font-bold text-black leading-snug">
            {headingStart}{" "}
            <span className="relative inline-block font-extrabold text-black">
              {highlightedWord}
              {/* subtle underline */}
              <span className="absolute left-0 right-0 -bottom-1 h-[6px] bg-[#eedc82]/70 rounded-full" />
            </span>{" "}
            {headingEnd}
          </h2>

          <p className="mt-3 text-[14px] md:text-[16px] text-black/60 max-w-xl mx-auto">
            Smart, scalable HR software designed for growing teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const num = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="
                  bg-white rounded-2xl px-6 py-5
                  border border-black/5
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]
                "
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#eedc82] font-extrabold text-[15px]">
                    {num}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-black">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-black/65 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
