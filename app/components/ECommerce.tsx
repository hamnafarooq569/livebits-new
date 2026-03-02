"use client";

import Link from "next/link";
import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
  href: string;
  bgClass: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
};

const cards: CardItem[] = [
  {
    title: "Magento",
    description: "Powerful and scalable eCommerce platform.",
    href: "/services/magento-ecommerce-development-services",
    bgClass: "bg-[#fff5f2]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#e8642e]",
    icon: "/magento.png",
  },
  {
    title: "WordPress",
    description: "Flexible CMS for dynamic websites.",
    href: "/services/wordpress-website-development-services",
    bgClass: "bg-[#eef2ff]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#3858e9]",
    icon: "/1.png",
  },
  {
    title: "Shopify",
    description: "Fast online stores with secure payments.",
    href: "/services/shopify-development-services",
    bgClass: "bg-[#f3f9ed]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#95bf47]",
    icon: "/2.png",
  },
  {
    title: "Odoo",
    description: "Smart ERP solutions for businesses.",
    href: "/services/odoo-development-services",
    bgClass: "bg-[#f6eef5]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#714b67]",
    icon: "/3.png",
  },
];

export default function ECommerce() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F7F7FB]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[13px] font-semibold text-black/70">How It Work?</p>
          <h2 className="mt-2 text-[34px] font-extrabold tracking-tight text-[#111] md:text-[44px]">
            Our Proven Working Process
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-relaxed text-black/60 md:text-[15px] mb-10">
             A transparent, results-driven process designed to turn ideas into powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`
                group relative self-start overflow-hidden rounded-2xl border border-black/5
                shadow-md transition-all duration-500 ease-in-out
                ${card.bgClass}
                group-hover:bg-gradient-to-br
                ${card.gradientFrom}
                ${card.gradientTo}
                hover:shadow-xl
              `}
            >
              <div className="p-8 flex flex-col transition-all duration-500">

                {/* Icon + Title */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-black transition-colors duration-300 group-hover:text-black">
                    {card.title}
                  </h3>
                </div>
  <div className="flex justify-between">
     {/* Description */}
                <p className="text-[15px] text-black transition-colors duration-300 group-hover:text-black">
                  {card.description}
                </p>
                <div className="flex justify-end">
                     <Image
                      src={card.icon}
                      alt={card.title}
                      width={158}
                      height={158}
                    />
                </div>
 </div>                
               

                {/* Hidden Expanded Content */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                  <p className="mt-4 text-sm text-black transition-colors duration-300 group-hover:text-black">
                    We provide end-to-end development, integration,
                    optimization and long-term support tailored to your
                    business goals.
                  </p>

                  <Link
                    href={card.href}
                    className="
                      inline-block mt-6 px-5 py-2.5 text-sm font-semibold
                      rounded-xl bg-black text-black
                      transition-all duration-300
                      group-hover:bg-white group-hover:text-black
                    "
                  >
                    Read More →
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}