"use client";

import { Users, CheckCircle2, Clock3 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Expert Team",
    desc: "Our experienced designers, developers, and digital marketers work together to deliver customized solutions aligned with your business goals.",
    Icon: Users,
  },
  {
    title: "Proven Results",
    desc: "We focus on performance and measurable outcomes, helping businesses grow through reliable hosting, modern websites, and effective digital strategies.",
    Icon: CheckCircle2,
  },
  {
    title: "24/7 Support",
    desc: "LiveBits provides round-the-clock support to ensure your website, hosting, and digital services remain secure, fast, and always available.",
    Icon: Clock3,
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050806] py-24">
      {/* yellow glow */}
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[650px] w-[650px] rounded-[15px] bg-[#FFD956]/25 blur-[180px]" />

      {/* dotted decorative curve */}
      <div className="pointer-events-none absolute right-[-40px] top-[40px] hidden h-[320px] w-[260px] opacity-80 md:block">
        <Image
          src="/hero-shp.png"
          alt="decor curve"
          fill
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[1250px] px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-snug text-white md:text-[32px]">
            What Benefits You Get
            <br />
            With LiveBits
          </h2>

          <p className="mt-4 text-[18px] text-[#C9D0D2] md:text-[14px]">
            We combine creativity, technology, and strategy to deliver reliable
            digital solutions that help your business grow, scale, and succeed
            online.
          </p>
        </div>

        {/* cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {benefits.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="
                group relative overflow-hidden
                rounded-[15px] bg-[#050806]
                border border-white
                px-10 py-12 text-center
                shadow-[0_26px_70px_rgba(0,0,0,0.65)]
                ring-1 ring-white/5
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_40px_100px_rgba(180,255,147,0.18)]
              "
            >
              {/* icon */}
              <div
                className="
                  mx-auto mb-6 flex h-16 w-16 items-center justify-center
                  rounded-2xl bg-[#fee000] text-black
                  shadow-[0_16px_40px_rgba(0,0,0,0.65)]
                  transition-all duration-500
                  group-hover:bg-[#FFE57F]
                  group-hover:scale-110
                  group-hover:shadow-[0_22px_55px_rgba(180,255,147,0.45)]
                "
              >
                <Icon className="h-7 w-7 transition-transform duration-500 group-hover:rotate-6" />
              </div>

              <h3 className="text-[18px] font-bold text-white">
                {title}
              </h3>

              <p className="mt-1 text-[18px] text-[#C4CBCF]">
                {desc}
              </p>

              {/* glow bottom */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 bottom-0 h-[80px]
                  bg-gradient-to-t from-[#fee000]/12 via-transparent to-transparent
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
