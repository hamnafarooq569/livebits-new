"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ImproveBusinessSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#060806] py-20">
      {/* ---- Yellow Glow ---- */}
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[650px] w-[650px] rounded-full bg-[#FFD956]/25 blur-[180px]" />

      {/* ---- Dotted Shape ---- */}
      <div className="pointer-events-none absolute right-[40px] top-6 w-[340px] opacity-50 rotate-[10deg]">
        <Image src="/hero-shp.png" alt="shape" width={340} height={340} />
      </div>

      {/* ---- Floating Star ---- */}
      <div className="pointer-events-none absolute right-[500px] top-[40px] -translate-x-1/2 h-10 w-10 rotate-[10deg]">
        <Image src="/shap-2.png" alt="star" width={82} height={82} />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-6 md:px-8">
        {/* Title */}
        <h2 className="text-center text-[38px] md:text-[38px] font-extrabold text-white">
          We Provide Wide Range of
          <br />
          Digital Services
        </h2>

        <p className="mt-2 mx-autol text-center text-[18px] text-[#D1D1D1]">
          At LiveBits, we pride ourselves on crafting unique and innovative web solutions that go beyond the typical website. 
        </p>

        {/* ==== GRID ==== */}
        <div className="mt-8 grid gap-8 md:grid-cols-4 lg:auto-rows-[230px]">
          {/* COL 1: Collect Leads (row-span 2) */}
          <div className="md:row-span-2 relative">
  <div className="relative rounded-[15px] bg-[#0F1010] border border-white h-max px-3 py-4 lg:px-10 lg:py-10 lg:h-[500px] text-white shadow-[0_28px_80px_rgba(0,0,0,0.65)] transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between">

    {/* Top-right icon */}
    <div className="absolute top-6 right-6 h-12 w-12 z-20">
      <Image
        src="/comp icon.png"
        alt="Collect Leads Icon"
        width={48}
        height={48}
        className="object-contain"
      />
    </div>

    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFD956]">
      Collect Leads
    </p>

    <h3 className="mt-3 text-[22px] font-semibold leading-snug">
      Search Engine
      <br />
      Optimization
    </h3>

    <p className="mt-2 text-[16px] text-[#D4D4D4]">
      Proven SEO strategies that serve the needs of your business.
    </p>

    <div className="relative my-6 h-24 w-full flex justify-center">
      <Image
        src="/Leads illustration.png"
        alt="Leads illustration"
        width={120}
        height={120}
        className="object-contain"
      />
    </div>

    <Link
      href="/service/digital-marketing/search-engine-optimization"
      className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[#FFD956] underline-offset-4 hover:underline"
    >
      Learn More
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </div>
</div>

          {/* COL 2: Guest Post */}
          <ServiceCard
            icon="/icon3.png"
            title="Guest Post"
            desc="Guest posting with LiveBits helps you build authority and expand your digital reach."
            link="/service/content-marketing/guest-post"
            withCurve
          />

          {/* COL 3 & 4: Custom Web Development */}
          <div
            className="md:col-span-2 relative rounded-[15px] border border-white bg-[#090B09] px-3 py-4  lg:px-8 lg:py-9 text-left text-white shadow-[0_22px_70px_rgba(0,0,0,0.55)] flex items-center justify-between overflow-hidden
          transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_28px_100px_rgba(0,0,0,0.65)]"
          >
            <div className="max-w-[65%]">
              <h3 className="mt-1 text-[22px] font-semibold leading-snug">
                Ecommerce Web Design
              </h3>
              <p className="text-[16px] mt-2 text-[#D5D5D5]">
                LiveBits delivers fully custom web development solutions tailored
                to your business goals, performance needs, and growth plans.
              </p>

              <Link
                href="/service/web-development/ecommerce-web-design"
                className="mt-17 inline-flex items-center gap-1 text-[12px] font-medium text-[#FFD956] underline-offset-4 hover:underline"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="relative h-14 w-14 opacity-80">
              <Image
                src="/icon1.png"
                alt="UI/UX"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* SECOND ROW – COL 2: Logo Design */}
          <div
            className="relative rounded-[15px] border border-white bg-[#090B09] px-8 py-5 text-left text-white shadow-[0_22px_70px_rgba(0,0,0,0.55)]
          transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_28px_100px_rgba(0,0,0,0.65)]"
          >
            <div className=" flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#FFD956]">
              <Image
                src="/icon2.png"
                alt="Search Optimization"
                width={28}
                height={28}
              />
            </div>
            <h3 className="mt-2 text-[22px] font-semibold leading-snu">
              Logo Animation
            </h3>
            <p className="text-[16px] mt-2 text-[#D5D5D5]">
              LiveBits delivers unique, professional logo designs tailored to your audience.
            </p>

            <Link
              href="/service/video-editing/logo-animation"
              className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-[#FFD956] underline-offset-4 hover:underline"
            >
              Learn More
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* SECOND ROW – COL 3: App Development */}
          <ServiceCard
            icon="/icon2.png"
            title="App Development"
            desc="LiveBits develops custom, high-performance apps that boost revenue, and growth."
            link="service/app-development"
          />

          {/* SECOND ROW – COL 4: Cloud Computing */}
          <ServiceCard
            icon="/icon4.png"
            title="UI-UX Design"
            desc="Creates immersive brand activation campaigns that boost visibility."
            link="/service/graphic-design/ui-ux-design"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICE CARD ================= */
type ServiceCardProps = {
  icon: string;
  title: string;
  desc: string;
  link: string;
  withCurve?: boolean;
};

function ServiceCard({ icon, title, desc, link, withCurve }: ServiceCardProps) {
  return (
    <div
      className="relative rounded-[10px] border border-white bg-[#090B09] px-8 py-5 text-left text-white shadow-[0_22px_70px_rgba(0,0,0,0.55)]
    transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_28px_100px_rgba(0,0,0,0.65)]"
    >
      {withCurve && (
        <Image
          src="/hero-shp.png"
          alt="curve"
          width={130}
          height={130}
          className="pointer-events-none absolute right-4 top-4 opacity-40 rotate-12"
        />
      )}

      <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#FFD956]">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <h3 className="mt-1 text-[22px] font-semibold leading-snug">{title}</h3>

      <p className="text-[16px] mt-2 text-[#D5D5D5]">{desc}</p>

      <Link
        href={link}
        className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-[#FFD956] underline-offset-4 hover:underline"
      >
        Learn More
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
