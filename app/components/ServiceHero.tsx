"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    desc: "Boost your brand's visibility and achieve measurable success with LiveBits' expert digital marketing solutions. From SEO to paid advertising.",
    link: "/service/digital-marketing",
  },
  {
    title: "Content Marketing",
    desc: "Create impactful content strategies that attract, engage, and retain your target audience across digital platforms.",
    link: "/service/content-marketing",
  },
  {
    title: "Video Editing",
    desc: "Tell your brand story with engaging, high-quality video edits tailored for social media, ads, and promotions.",
    link: "/service/video-editing",
  },
  {
    title: "App Development",
    desc: "Launch fast, secure, and scalable mobile applications aligned with your business objectives.",
    link: "/service/app-development",
  },
  {
    title: "Web Design & Development",
    desc: "Modern, responsive websites designed for performance, usability, and conversions.",
    link: "/service/web-development",
  },
  {
    title: "Graphic Design",
    desc: "Clean, memorable visuals for branding, marketing campaigns, and social media presence.",
    link: "/service/graphic-design",
  },
];

export default function ServicesPageSection() {
  return (
    <section
      className="relative overflow-hidden pt-47 pb-20"
      style={{
        background: "linear-gradient(to bottom, #050806 40%, #ffffff 40%)",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col gap-10 px-6 md:px-8">
        {/* TOP ROW */}
        <div className="flex flex-col items-center text-center w-full">
          <p className="text-[18px] font-semibold uppercase tracking-[0.25em] text-[#FFD956]">
            Services
          </p>

          <h2 className="mt-2 text-[40px] font-semibold leading-snug text-white md:text-[44px]">
            We Provide Awesome <br /> Business Solutions Globally
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group block h-[350px]"
            >
              <div
                className="
                  flex h-full flex-col rounded-t-[34px] border-3 border-black bg-white
                  shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  transition-transform duration-300
                  hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.16)]
                "
              >
                {/* TOP CONTENT */}
                <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8 pb-6 text-center">
                  <h3 className="mt-3 text-[28px] font-bold text-[#101010]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[18px] leading-relaxed text-[#4B4B4B]">
                    {service.desc}
                  </p>
                </div>

                {/* BOTTOM STRIP */}
                <div className="flex items-center justify-between bg-[#FFD956] border-t-3 border-black px-7 py-3">
                  <span className="text-[18px] font-semibold text-[#101010]">
                    Read More
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-black rounded-full bg-[#fee000] text-black transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowRight className="h-4 w-4 -rotate-45" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
