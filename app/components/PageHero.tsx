"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageHero({
  badge = "",
  title="",
  subtitle="",
  align = "center",
  showBottomLine = true,
}) {
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden bg-[#EEDC82] pb-10 pt-37 ">
      {/* dotted paper background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 10)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* soft gradient from bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] h-[420px] bg-gradient-to-t from-[#F8EFD9] via-transparent to-transparent" />



      {/* ===== MOVEABLE ELEMENTS ===== */}

      {/* moveable yellow star */}
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 500, bottom: 500 }}
        className="absolute h-8 w-8 rotate-[8deg] cursor-grab"
        initial={{ right: "12%", top: "70px" }}
      >
        <Image src="/shap-2.png" alt="star" fill className="object-contain" />
      </motion.div>

      {/* moveable faint curve */}
      <motion.div
        drag
        dragConstraints={{ top: -100, left: -200, right: 200, bottom: 100 }}
        className="absolute h-[300px] w-[360px] opacity-100 scale-x-[-1] rotate-[90deg] cursor-grab"
        initial={{ right: "-120px", top: "-80px" }}
      >
        <Image src="/inner-shp.png" alt="dotted path" fill className="object-contain" />
      </motion.div>

      {/* CONTENT */}
      <div
        className={`relative z-10 mx-auto max-w-[900px] px-6 ${
          isCenter ? "flex flex-col items-center text-center" : ""
        }`}
      >
        {badge && (
          <span className="mb-5 inline-flex items-center rounded-full bg-[#fee000] px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#111111]">
            {badge}
          </span>
        )}

        <h1
          className={`text-[70px] font-extrabold leading-tight text-[#111111] md:text-[50px] ${
            isCenter ? "" : "text-left"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-5 max-w-[620px] font-bold text-[32px] leading-relaxed text-[#6F6F6F] ${
              isCenter ? "" : "text-left"
            }`}
          >
            {subtitle}
          </p>
        )}

        {showBottomLine && <div className="mt-10 h-[1px] w-[320px] bg-[#DDDACB]" />}
      </div>
    </section>
  );
}
