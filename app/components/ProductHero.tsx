"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "MIS System",
    desc: "LiveBits provides a tailored MIS solution that streamlines operations, boosts productivity, and delivers real-time actionable insights.",
    link: "/products/mis-system",
  },
  {
    title: "Attendance System",
    desc: "LiveBits’ Attendance Management System streamlines HR processes, ensures accurate tracking, and provides real-time actionable insights.",
    link: "/products/attendance-system",
  },
  {
    title: "HR System",
    desc: "LiveBits’ comprehensive HRM system streamlines HR operations, enhances employee management, and delivers real-time actionable insights.",
    link: "/products/hr-system",
  },
  {
    title: "POS-System",
    desc: "LiveBits’ advanced POS software streamlines retail operations, enhances customer experience, and drives smarter, data-driven growth.",
    link: "/products/pos-system",
  },
];

export default function ProductsPageSection() {
  return (
    <section
      className="relative overflow-hidden pt-50 pb-20"
      style={{
        background: "linear-gradient(to bottom, #050806 40%, #ffffff 40%)",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-[1250px] flex-col gap-10 px-6 md:px-8">
        {/* HEADING */}
        <div className="flex flex-col items-center text-center w-full">
          <p className="text-[18px] font-semibold uppercase tracking-[0.25em] text-[#FFD956]">
            Products
          </p>

          <h2 className="mt-2 text-[40px] font-semibold leading-snug text-white md:text-[44px]">
            We Provide Awesome <br /> Business Solutions Globally
          </h2>
        </div>

        {/* GRID */}
        <div className="flex justify-center">
          <div className="grid w-fit gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group block h-[350px] w-[400px]"
              >
                <div
                  className="
                    flex h-full flex-col rounded-t-[34px]
                    border-3 border-black bg-white
                    shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                    transition-transform duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_30px_70px_rgba(0,0,0,0.16)]
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
      </div>
    </section>
  );
}
