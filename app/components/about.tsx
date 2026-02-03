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
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      {/* Dotted curve decoration */}
      <div className="pointer-events-none absolute left-[-60px] top-6 w-[180px] opacity-30 sm:top-10 sm:w-[220px] sm:opacity-40 lg:w-[260px]">
        <Image
          src="/hero-shp.png"
          alt="dotted decoration"
          width={260}
          height={260}
          className="object-contain"
        />
      </div>

      <div className="pointer-events-none absolute right-[-60px] bottom-[80px] rotate-[60deg] w-[200px] opacity-60 sm:right-[-40px] sm:bottom-[120px] sm:w-[240px] sm:opacity-100 lg:w-[280px]">
        <Image
          src="/inner-shp.png"
          alt="dotted decoration"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-16 md:grid-cols-2 md:items-end">
          {/* LEFT COLUMN: Image */}
          <div className="relative w-full max-w-[520px] mx-auto md:mx-0 border rounded-[15px] h-[280px] sm:h-[340px] md:h-[400px] flex items-end">
            <Image
              src="/about.png"
              alt="About LiveBits"
              fill
              className="rounded-[15px] object-cover shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              priority
            />

            {/* Yellow tape decoration */}
            <div className="absolute -left-2 -bottom-5 h-16 w-6 rotate-[-25deg] rounded-lg bg-[#FFD956] sm:-bottom-6 sm:h-20" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5 sm:space-y-6">
            <h2 className="text-[24px] sm:text-[28px] font-bold md:text-[32px]">
              About LiveBits
            </h2>

            <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-black/80">
              At LiveBits, we craft powerful and modern digital solutions that go
              beyond traditional websites. From secure hosting to full-scale
              applications — we deliver scalable, high-performance platforms
              trusted by thousands of users globally.
            </p>

            {/* Highlight Box */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-black text-white px-5 sm:px-6 py-4 rounded-[15px] font-semibold text-[15px] sm:text-[16px] md:text-[18px]">
              <span className="font-bold">24/7 Support</span>
              <span className="font-bold">Up To 20X Faster Turbo</span>
            </div>

            {/* Features List */}
            <div className="grid gap-2 sm:grid-cols-2 text-[14px] sm:text-[16px] md:text-[18px]">
              <p className="text-black">• Comprehensive tools for all</p>
              <p className="text-black">• Research Hosting Providers</p>
              <p className="text-black">• WordPress.org-recommended</p>
              <p className="text-black">• Define Your Hosting Needs</p>
              <p className="text-black">• Trusted by 2M+ users</p>
              <p className="text-black">• Evaluate Features & Resources</p>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-[#E4DFCF] pt-8 sm:pt-10">
          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label} className="text-left">
                <p className="text-[22px] sm:text-[28px] md:text-[32px] font-extrabold text-black">
                  {item.value}
                </p>
                <p className="mt-1 text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-wide text-black/70">
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
