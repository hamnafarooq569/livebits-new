"use client";

import React from "react";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};


type ServiceSectionProps = {
  services: ServiceItem[];
};



export default function ServiceSection({ services }: ServiceSectionProps) {
  return (
    <section className="w-full bg-[#f8f8f8] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-2xl border border-black bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"

            >
              {/* ICON PLACEHOLDER */}
              <div className="mx-auto mb-6 h-[120px] w-[120px] bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-400 transition group-hover:scale-105 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0%_50%)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-12 w-12 object-contain"
                   />
              </div>

            <div className="flex-1">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                    {service.description}
                </p>
            </div>


              <button
                className="
                    mt-auto mt-6
                    rounded-full
                    bg-[#FEE000]
                    px-6 py-2
                    text-sm font-semibold
                    text-black
                    border border-black
                    transition-all duration-300
                    hover:bg-[#FFE933]
                    hover:-translate-y-[1px]
                    hover:shadow-[0_10px_30px_-12px_rgba(254,224,0,0.7)] "
                >
                    Read More
                </button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
