// app/components/IndustriesServed.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    title: "Healthcare",
    desc: `Create patient-centric healthcare apps that streamline operations, reduce admin work, and improve care quality.`,
    href: "/industries",
  },
  {
    title: "E-Commerce",
    desc: `Boost sales with modern storefronts, inventory management, and omnichannel shopping experiences.`,
    href: "/industries/",
  },
  {
    title: "Education",
    desc: `Revolutionize learning with e-learning platforms, LMS systems, and student engagement solutions.`,
    href: "/industries/",
  },
  {
    title: "Finance",
    desc: `Build secure, compliant financial platforms that improve operational efficiency and customer experience.`,
    href: "/industries/",
  },
];

export default function IndustriesServed() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      {/* soft top background like screenshot */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-[#FFF6B3] via-[#FFFBE6] to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[13px] font-semibold text-black/70">Neches</p>
          <h2 className="mt-2 text-[34px] font-extrabold tracking-tight text-[#111] md:text-[44px]">
            Industries We Serve

          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-relaxed text-black/60 md:text-[15px]">
             We work with diverse industries, delivering customized digital solutions that solve real challenges and drive measurable results.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-24 bg-black/30" />

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={item.href} className="block h-full">
                <div
                  className="
                    group relative h-full cursor-pointer
                    rounded-[14px]
                    border border-black/25
                    bg-white  
                    p-7
                    shadow-[0_18px_55px_rgba(0,0,0,0.0)]
                    backdrop-blur-[4px]
                    transition-all duration-300
                    hover:scale-105 hover:shadow-[0_3px_10px_rgba(0,0,0,0.65)]
                  "
                >
                  <h3 className="text-[20px] font-bold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-relaxed text-black/70">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Center CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/industries"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-black
              px-8 py-4
              text-[13px] font-semibold text-white
              shadow-[0_14px_35px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:bg-[#111]
              hover:scale-105
            "
          >
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}