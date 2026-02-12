// app/components/TrustStatsBar.tsx
"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "10k+", label: "Social followers" },
  { value: "500+", label: "Happy Clients" },
  { value: "700+", label: "Projects Done" },
  { value: "2", label: "Global branches" },
];

export default function TrustStatsBar() {
  return (
    <section className="w-full bg-[#0B0B0B] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2.7fr] lg:items-center">
          {/* Left text */}
          <div>
            <p className="text-[22px] font-semibold leading-tight text-white/95 md:text-[26px]">
              See why we are
              <br />
              trusted the world over
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0 sm:gap-x-10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="min-w-0"
              >
                <div className="text-[28px] font-extrabold tracking-tight text-white md:text-[34px]">
                  {s.value}
                </div>
                <div className="mt-1 text-[13px] text-white/45 md:text-[14px]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
