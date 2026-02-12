// app/components/WorkingProcess.tsx
"use client";

import { motion } from "framer-motion";

type Step = {
  no: number;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    no: 1,
    title: "Discovery & Strategy",
    desc: "We understand your business, goals, and audience to create a clear roadmap for success.",
  },
  {
    no: 2,
    title: "Design & Planning",
    desc: "Our team designs user-focused interfaces and plans the technical architecture for maximum performance.",
  },
  {
    no: 3,
    title: "Development & Testing",
    desc: "We build, test, and optimize your solution to ensure speed, security, and flawless functionality.",
  },
  {
    no: 4,
    title: "Launch & Growth",
    desc: "After launch, we monitor performance, provide support, and help scale your digital presence.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      {/* soft top background like screenshot */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-[#FFF6B3] via-[#FFFBE6] to-transparent" />


      <div className="relative mx-auto max-w-7xl">
        {/* heading */}
        <div className="text-center">
          <p className="text-[13px] font-semibold text-black/70">How It Work?</p>
          <h2 className="mt-2 text-[34px] font-extrabold tracking-tight text-[#111] md:text-[44px]">
            Our Proven Working Process
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-relaxed text-black/60 md:text-[15px]">
             A transparent, results-driven process designed to turn ideas into powerful digital solutions.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.08, 0.25) }}
              viewport={{ once: true }}
              className="h-full"
            >
              {/* staggered heights like screenshot (only on lg) */}
              <div
                className={[
                  "relative h-full rounded-[16px] border border-black/25 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.08)]",
                  "transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.12)]",
                  idx === 1 ? "lg:mt-10" : "",
                  idx === 3 ? "lg:mt-10" : "",
                ].join(" ")}
              >
                {/* number bubble */}
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FEE000] text-[14px] font-extrabold text-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  {s.no}
                </div>

                <h3 className="text-[18px] font-extrabold text-[#111]">
                  {s.title}
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-black/60">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
