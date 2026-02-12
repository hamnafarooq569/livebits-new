"use client";

import Image from "next/image";

export default function MarketingChannelsSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white pb-10 pt-10">
      {/* content wrapper */}
      <div className="lg:mx-auto flex max-w-[1250px] flex-col items-center gap-14 px-5 lg:px-24 md:flex-row md:items-center md:gap-8">
        
        {/* ================= RIGHT SIDE (Content) ================= */}
        <div className="w-full md:max-w-[520px] md:ml-auto text-left  md:text-left">
          <h2 className="text-[32px] font-bold leading-tight ">
            Your Growth-Focused 
            <br/> 
            Digital Partner
          </h2>

          <p className="mt-3 text-[18px] leading-relaxed text-black md:text-[18px]">
           At LiveBits, we don’t just deliver services—we build long-term partnerships by combining creativity, technology, and strategy to help your business grow faster and smarter.
          </p>

          {/* thin line under paragraph */}
          <div className="mt-8 h-px w-[480px] bg-[#ece2d5]" />

          {/* stats row */}
          <div className="mt-5  flex items-center gap-10 text-[#111111] justify-start">
            {/* 50% + Content Strategy */}
            <div className="flex lg:flex-row flex-col items-center gap-3">
              <p className="lg:text-[28px] font-bold leading-none">90%</p>
              <p className="lg:text-[18px] tracking-widest uppercase text-black/80">
                Content Strategy
              </p>
            </div>

            {/* vertical divider */}
            <div className="h-14 w-px bg-[#e5dacb]" />

            {/* 70% + Audience Groupup */}
            <div className="flex lg:flex-row flex-col items-center gap-3">
              <p className="lg:text-[28px] font-bold leading-none">88%</p>
              <p className="lg:text-[18px] tracking-[0.1em] uppercase text-black/80">
                Audience Groupup
              </p>
            </div>
          </div>  


        </div>

        {/* ================= LEFT SIDE (Image) ================= */}
        <div className="relative flex w-full justify-center">
          {/* chart image only */}
          <div className="relative h-70 w-[320px] lg:h-80 lg:w-[320px] md:h-[380px] md:w-[380px]">
            <Image
              src="/about2.png"
              alt="Sales channels chart"
              fill
              className="object-cover"
            />
          </div>

          {/* decorative star */}
          <div className="pointer-events-none absolute left-[1%] bottom-[16%] h-8 w-8 md:left-[14%] md:bottom-[2%]">
            <Image
              src="/shape-2.png"
              alt="decorative star"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
