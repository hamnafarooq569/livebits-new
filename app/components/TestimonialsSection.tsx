"use client";

import Image from "next/image";
import { useState } from "react";

type TestimonialsSectionProps = {
  bgColor?: string; // background color prop
};

const testimonials = [
  {
    name: "Sonia Sara",
    role: "Marketer",
    text: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets rather than proof processes.",
    company: "/clientslogo/2-removebg-preview.png",
    rating: 5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "John Alexon",
    role: "Researcher",
    text: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets rather than proof processes.",
    company: "/clientslogos/6.png",
    rating: 4.5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "D. Morgan",
    role: "Marketer",
    text: "Distinctively formulate optimal outsid for interdependent schemas to evolve end action items and fully researched vortals niche markets rather than proof processes.",
    company: "/clientslogos/12.jpg",
    rating: 4.5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "Emily Roberts",
    role: "Product Manager",
    text: "Seamlessly orchestrate customer-centric strategies and holistically optimize goal-oriented solutions for maximum business impact.",
    company: "/cmp-logo2.png",
    rating: 4,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "Michael",
    role: "UI Designer",
    text: "Creatively design intuitive interfaces that elevate user experiences and consistently align with client vision and business goals.",
    company: "/clientslogo/3-removebg-preview.png",
    rating: 4.5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "SKCJSK",
    role: "Founder",
    text: "Strategically drive innovation and scale solutions by leveraging cross-functional collaboration and market insights for impactful results.",
    company: "/clientslogo/1-removebg-preview.png",
    rating: 5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "SJDCHZJKD",
    role: "Founder",
    text: "Strategically drive innovation and scale solutions by leveraging cross-functional collaboration and market insights for impactful results.",
    company: "/clientslogo/11-removebg-preview.png",
    rating: 5,
    avatarImage: "/quote.svg", // replace with your image
  },
  {
    name: "SMXNASZMC",
    role: "Founder",
    text: "Strategically drive innovation and scale solutions by leveraging cross-functional collaboration and market insights for impactful results.",
    company: "/clientslogo/9-removebg-preview.png",
    rating: 5,
    avatarImage: "/quote.svg", // replace with your image
  },
];

export default function TestimonialsSection({
  bgColor = "#EEDC82",
}: TestimonialsSectionProps) {
  const [slide, setSlide] = useState(0);

  const visibleTestimonials =
    slide === 0 ? testimonials.slice(0, 4) : testimonials.slice(4, 8);

  return (
    <section
      className="relative overflow-hidden py-20 pt-10"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative z-10 mx-auto max-w-FULL px-6 text-center">
        <h2 className="text-[28px] font-extrabold tracking-tight text-[#111] md:text-[30px]">
          What Say Our Customers
        </h2>

        {/* Cards */}
        <div className="mt-14 grid gap-8 text-left md:grid-cols-4">
          {visibleTestimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-[15px] bg-white px-8 pb-8 pt-8 border border-black shadow-[0_24px_65px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_32px_90px_rgba(0,0,0,0.12)]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Image
                    src={t.avatarImage}
                    alt={t.name + " avatar"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-[#111]">
                    {t.name}
                  </h3>
                  <p className="text-[12px] text-[#888]">{t.role}</p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-[13px] leading-relaxed text-[#555]">
                {t.text}
              </p>

              <div className="mt-6 h-[1px] w-full bg-[#EDEDED]" />

              {/* Company + Stars */}
              <div className="mt-6 flex items-center justify-between">
                <Image
                  src={t.company}
                  alt={t.name + " company logo"}
                  width={80}
                  height={24}
                  className="object-contain"
                />

                <div className="flex items-center gap-1 text-[18px] text-[#FFA928]">
                  {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}

                  {t.rating % 1 !== 0 && <span>★</span>}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          <button
            onClick={() => setSlide(0)}
            className={`h-3 w-3 rounded-full transition-all ${
              slide === 0 ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />

          <button
            onClick={() => setSlide(1)}
            className={`h-3 w-3 rounded-full transition-all ${
              slide === 1 ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
