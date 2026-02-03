// app/components/IndustriesServed.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    title: "Healthcare",
    desc: `Hospitals, clinics, labs, pharma & wellness brands.
We build patient-friendly websites, appointment flows, and service landing pages.
SEO for local discovery and trust-building content that converts.
Performance optimization for fast loading and clean UX.
Integration support for CRM, forms, and WhatsApp lead capture.
Security and compliance-ready implementation for sensitive workflows.`,
    href: "/industries/healthcare",
  },
  {
    title: "E-Commerce",
    desc: `Online stores, product brands & marketplaces.
Conversion-focused product pages and checkout optimization.
Speed, SEO, and structured data for better rankings.
Catalog, filters, search, and UI refinements for better UX.
Payment and delivery integrations with tracking-ready setup.
Campaign landing pages for seasonal promotions & sales.`,
    href: "/industries/ecommerce",
  },
  {
    title: "Education",
    desc: `Schools, academies, universities & edtech.
Admissions funnels, program pages, and inquiry systems.
Fast, clean UI for parents and students across devices.
Course listings, portals, and content management support.
SEO for programs, departments, and local student acquisition.
Brand consistency, visuals, and trust-first presentation.`,
    href: "/industries/education",
  },
  {
    title: "Technology",
    desc: `SaaS, startups, IT firms & digital platforms.
Landing pages built for product clarity and conversion.
UX writing, onboarding flows, and scalable UI systems.
Performance-first builds with modern development stacks.
Analytics-ready pages to measure growth and engagement.
Pitch, pricing, and feature pages designed for trust.`,
    href: "/industries/technology",
  },
];

function splitDesc(desc: string, visibleLines = 2) {
  const lines = desc.split("\n").map((l) => l.trim()).filter(Boolean);
  const visible = lines.slice(0, visibleLines).join(" ");
  const hidden = lines.slice(visibleLines).join(" ");
  return { visible, hidden };
}

export default function IndustriesServed() {
  return (
    <section className="relative bg-[#EEDC88] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">

          <h2 className="mt-3 text-[34px] font-extrabold text-black md:text-[46px]">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[14px] text-black/70 md:text-[15px]">
            We deliver tailored digital solutions across industries that demand
            performance, trust, and growth.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-24 bg-black/30" />

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((item, idx) => {
            const { visible, hidden } = splitDesc(item.desc, 2); // ✅ 2 lines-ish visible
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Link href={item.href} className="block h-full">
                  <div
                    className="
                      group relative h-full cursor-pointer
                      rounded-[14px]
                      border border-black
                      bg-white/80
                      p-7
                      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                      backdrop-blur-[4px]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                    "
                  >
                    <h3 className="text-[20px] font-bold text-black">
                      {item.title}
                    </h3>

                    <div className="mt-3 text-[13px] leading-relaxed text-black/70">
                      <p className="line-clamp-2">{visible}</p>

                      {hidden && (
                        <p
                          className="
                            mt-2
                            line-clamp-4
                            text-black/70
                            blur-[2px]
                            opacity-75
                            transition-all duration-300
                            group-hover:blur-0
                            group-hover:opacity-100
                          "
                        >
                          {hidden}
                        </p>
                      )}
                    </div>



                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Center CTA */}
        <div className="mt-18 flex justify-center">
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
