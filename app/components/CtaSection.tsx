"use client";

import Image from "next/image";

export default function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#050806] pb-12 pt-16">
      {/* thin yellow bar on top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-[#FFD956] via-[#FFE57F] to-[#FFF2A8]" />

      {/* soft yellow glows */}
      <div className="pointer-events-none absolute -left-32 -top-28 h-[380px] w-[380px] rounded-full bg-[#EEDC82]/18 blur-[70px]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#EEDC82]/16 blur-[70px]" />

      {/* dotted curves */}
      <div className="pointer-events-none absolute -left-10 bottom-[-70px] w-[260px] opacity-55">
        <Image
          src="/hero-shp.png"
          alt="dotted path"
          width={260}
          height={320}
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute right-[8%] bottom-[-30px] w-[260px] opacity-50 rotate-[18deg] scale-x-[-1]">
        <Image
          src="/hero-shp.png"
          alt="dotted path"
          width={260}
          height={320}
          className="object-contain"
        />
      </div>

      {/* yellow star */}
      <div className="pointer-events-none absolute left-1/2 top-8 h-8 w-8 -translate-x-1/2 rotate-[8deg]">
        <Image src="/shape-2.png" alt="star" fill className="object-contain" />
      </div>

      {/* ================== CONTENT ================== */}
      <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl md:ml-20">
          <h2 className="text-[28px] font-semibold leading-[1.25] text-white md:text-[32px]">
            Ready to Scale Your
            <br />
            Business with LiveBits?
          </h2>

          <p className="mt-3 max-w-md text-[18px] leading-relaxed text-[#D4D4D4]">
            Let’s turn your ideas into impactful digital experiences. From
            branding and web development to performance marketing, LiveBits
            helps you grow faster with smart, scalable solutions.
          </p>

          {/* CONTACT CTA */}
          <a
            href="https://wa.me/923333444825"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-[18px] font-semibold text-[#fee000] underline-offset-4 hover:underline"
          >
            Contact Us   ↗
          </a>
        </div>

        {/* RIGHT SIDE WHATSAPP BLOCK */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:items-end md:text-right md:mr-50">
          <a
            href="https://wa.me/923333444825"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[3px] border-[#fee000] bg-transparent text-[32px] text-[#FFD956] shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105">
              <span className="-mt-[2px]">☎</span>
            </div>

            <p className="text-[22px] font-semibold tracking-wide text-white md:text-[24px]">
              +92 333 <span className="text-white">( LiveBits )</span>
            </p>


            <p className="text-[11px] uppercase tracking-[0.26em] text-[#B7B7B7]">
              (WhatsApp / Call)
            </p>
          </a>
        </div>
      </div>

      {/* bottom divider */}
      <div className="pointer-events-none mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-[#f3e5c8]/70 to-transparent" />
    </section>
  );
}
