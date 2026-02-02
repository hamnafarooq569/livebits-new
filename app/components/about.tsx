"use client";

import Image from "next/image";

const STATS = [
  { value: "10K+", label: "Projects Delivered" },
  { value: "2M+", label: "Trusted Users" },
  { value: "20+", label: "Countries Served" },
  { value: "24/7", label: "Support Availability" },
];

export default function AboutLiveBits() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Dotted curve decoration */}
      <div className="pointer-events-none absolute left-[-60px] top-10 w-[260px] opacity-40">
        <Image
          src="/hero-shp.png"
          alt="dotted decoration"
          width={260}
          height={260}
          className="object-contain"
        />
      </div>

      <div className="pointer-events-none absolute right-[-40px] bottom-[120px] rotate-[60deg] w-[280px] opacity-100">
        <Image
          src="/inner-shp.png"
          alt="dotted decoration"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-end">
          
          {/* LEFT COLUMN: Image */}
          <div className="relative w-120 border rounded-[15px] h-[400px] md:h-[400px] flex items-end">
            <Image
              src="/about.png"
              alt="About LiveBits"
              fill
              className="rounded-[15px]  object-cover shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
            />

            {/* Yellow tape decoration */}
            <div className="absolute -left-2 -bottom-6 h-25 w-6 rotate-[-25deg] rounded-lg bg-[#FFD956]" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <h2 className="text-[28px] font-bold text md:text-[32px]">
              About LiveBits
            </h2>

            <p className="text-[18px]  leading-relaxed">
              At LiveBits, we craft powerful and modern digital solutions that go
              beyond traditional websites. From secure hosting to full-scale
              applications — we deliver scalable, high-performance platforms
              trusted by thousands of users globally.
            </p>

            {/* Highlight Box */}
            <div className="flex gap-6 bg-black text-white px-6 py-4 rounded-[15px] font-semibold text-[18px]">
              <span className="font-bold">24/7 Support</span>
              <span className="font-bold">Up To 20X Faster Turbo</span>
            </div>

            {/* Features List */}
            <div className="grid gap-2 sm:grid-cols-2 text-[18px]">
              <p className="text-black">• Comprehensive tools for all</p>
              <p className="text-black">• Research Hosting Providers</p>
              <p className="text-black">• WordPress.org-recommended</p>
              <p className="text-black">• Define Your Hosting Needs</p>
              <p className="text-black">• Trusted by 2M+ users</p>
              <p className="text-black">• Evaluate Features & Resources</p>
            </div>
          </div>
        </div>

        {/* ==========================  
            STATS SECTION  
        ===========================*/}
        <div className="mt-20 border-t border-[#E4DFCF] pt-10">
          <div className="grid gap-10 md:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label}>
                <p className="text-[32px] font-extrabold ">{item.value}</p>
                <p className="mt-1 text-[18px] uppercase ">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
