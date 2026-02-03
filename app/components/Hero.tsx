"use client";

import Image from "next/image";
import StackedVideoCardsMirrored from "./StackedCards";
import CursorTooltip from "./CursorTooltip";


export default function AgencyHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:flex-row lg:items-start lg:py-20">
              {/* ---- Yellow Glow ---- */}
              <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[650px] w-[650px] rounded-full bg-[#FFD956]/25 blur-[180px]" />
        
              {/* ---- Dotted Shape ---- */}
              <div className="pointer-events-none absolute right-[40px] top-6 w-[340px] opacity-50 rotate-[10deg]">
                <Image src="/hero-shp.png" alt="shape" width={340} height={340} />
              </div>
        
        {/* LEFT CONTENT */}
        <div className="w-full max-w-2xl text-left">
          <h1 className="mt-10  text-4xl lg:text-6xl font-extrabold leading-tight sm:text-5xl md:text-[84px] md:leading-[1.03]">
            Custom Web
            <br/>
            Development <br/>
            Agency
          </h1>

          <p className="mt-10 border-l-2 border-[#FFD956]/60 pl-4 max-w-xl text-base md:text-xl text-white">
            Amplify your online presence with LiveBits’ full-stack digital marketing solutions, designed to increase visibility, drive qualified traffic, and convert audiences into long-term customers through data-driven strategy and creative execution.
          </p>

          <div className="mt-10">
              <button className="group inline-flex items-center justify-center rounded-[15px] bg-[#fee000] px-6 py-3 text-[16px] font-semibold text-black shadow-[0_18px_60px_-24px_rgba(254,224,0,0.8)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#ffea2b] focus:outline-none focus:ring-2 focus:ring-[#FFD956]/70 focus:ring-offset-2 focus:ring-offset-black">
                <span>Discuss with Our Experts</span>
                <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  ➜
                </span>
              </button>
          </div>

          {/* TRUST STRIP */}
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 text-sm font-medium text-white">
          <CursorTooltip label="Review Us on DesignRush">
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
          </CursorTooltip>




            <div className="hidden h-10 w-px md:flex relative">
              <div className="absolute left-1/2 top-0 h-10 w-[3px] bg-white/25 rotate-[18deg]" />
            </div>

            <div className="flex items-center gap-4 text-[14px]">
              <div>
                <p className="font-semibold text-white">
                  Best Digital Agency of 2024
                </p>
                <CursorTooltip label="Best Digital Agency of 2024 Forbes">
                  <div className="relative h-10 w-35 items-center -ml-5">
                    <Image src="/forbes.png" alt="Forbes" fill className="object-contain" />
                  </div>
                </CursorTooltip>



              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (STACKED VIDEO CARDS) */}
        <div className="w-full hidden lg:flex-1 lg:flex justify-end overflow-visible">
          <div className="w-full max-w-[560px]">
            <StackedVideoCardsMirrored />
          </div>
        </div>

      </div>
    </section>
  );
}


