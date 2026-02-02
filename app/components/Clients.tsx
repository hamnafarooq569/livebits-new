"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const totalLogos = 51;

// ✅ Your logos path
const clientLogos = Array.from(
  { length: totalLogos },
  (_, i) => `/clientslogos/${i + 1}.png`
);



// ✅ Option A filters
const FILTERS = [
  "All",
  "Healthcare",
  "Education",
  "E-commerce",
  "Tech",
  "NGO",
  "Local Businesses",
] as const;

type Filter = (typeof FILTERS)[number];

// ⚠️ Demo categorization (replace later with real mapping)
function getCategoryByIndex(idx: number): Filter {
  const categories: Filter[] = [
    "Healthcare",
    "Education",
    "E-commerce",
    "Tech",
    "NGO",
    "Local Businesses",
  ];
  return categories[idx % categories.length];
}

export default function ClientLogosOptionA() {
  const [active, setActive] = useState<Filter>("All");

  const logosWithMeta = useMemo(() => {
    return clientLogos.map((src, index) => ({
      src,
      index,
      category: getCategoryByIndex(index),
    }));
  }, []);

  const visible = useMemo(() => {
    if (active === "All") return logosWithMeta;
    return logosWithMeta.filter((l) => l.category === active);
  }, [active, logosWithMeta]);

  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      {/* Soft background glow (LiveBits vibe) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#F8EFD9] blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ===== HERO ===== */}
        <div className="text-center">

          <h2 className="py-1 text-[34px] font-extrabold tracking-tight text-[#111] md:text-[44px]">
            Trusted by growing brands
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-[#6F6F6F]">
            We collaborate with startups, SMEs, and organizations to deliver
            design, development, and marketing that drives real growth.
          </p>

          {/* Trust stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-[#E8E2CE] bg-white px-4 py-2 text-[12px] text-[#111] shadow-sm">
              <span className="font-semibold">50+</span> Clients Served
            </div>
            <div className="rounded-full border border-[#E8E2CE] bg-white px-4 py-2 text-[12px] text-[#111] shadow-sm">
              <span className="font-semibold">120+</span> Projects Delivered
            </div>
            <div className="rounded-full border border-[#E8E2CE] bg-white px-4 py-2 text-[12px] text-[#111] shadow-sm">
              <span className="font-semibold">4.8/5</span> Client Satisfaction
            </div>
          </div>
        </div>

        {/* ===== FILTERS ===== */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold transition ${
                  isActive
                    ? "bg-[#111] text-white"
                    : "bg-[#F8F6EC] text-[#111] border border-[#E0DDCF] hover:bg-[#FFD956]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* ===== LOGO WALL ===== */}
        <motion.div
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {visible.map((logo) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(logo.index * 0.02, 0.35) }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="group flex w-full items-center justify-center rounded-[12px] border border-black/10 bg-[#FFFCF3] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)]">
                <div className="flex h-[86px] w-full items-center justify-center">
                  <img
                    src={logo.src}
                    alt={`Client Logo ${logo.index + 1}`}
                    className="h-[72px] w-auto max-w-[140px] object-contain opacity-95 transition-all duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* ===== CTA ===== */}
        <div className="mt-16 overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_26px_70px_rgba(0,0,0,0.08)]">
          <div className="grid gap-6 p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:p-10">
            <div>
              <h3 className="text-[22px] font-bold text-[#111]">
                Want to be our next success story?
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6F6F6F]">
                Share your requirements and we’ll suggest the best plan for your
                business — design, website, marketing, or complete branding.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#FFD956] px-6 py-3 text-[13px] font-semibold text-[#111] shadow-[0_16px_35px_rgba(0,0,0,0.12)] transition hover:bg-[#FFE67F]"
              >
                Request a Quote
              </a>
              <a
                href="tel:+92333XXXXXXXX"
                className="inline-flex items-center justify-center rounded-[8px] border border-black/20 bg-white px-6 py-3 text-[13px] font-semibold text-[#111] transition hover:bg-[#111] hover:text-white"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
