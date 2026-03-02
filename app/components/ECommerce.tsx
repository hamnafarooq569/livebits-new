"use client";

import Link from "next/link";
import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
  hoverDescription: string;
  href: string;
  bgClass: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
};

const cards: CardItem[] = [
  {
    title: "Magento",
    description:
      "Magento is a powerful and highly customizable  platform ideal for businesses that require flexibility and scalability. It supports advanced product management, secure payment integrations, and enterprise-grade.",
    href: "/services/magento-ecommerce-development-services",
    hoverDescription:
      "We build secure, high-performance Magento stores with custom modules, advanced integrations, and long-term support for enterprise growth.",

    bgClass: "bg-[#fff5f2]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#e8642e]",
    icon: "/magento.png",
  },
  {
    title: "WordPress",
    description:
      "WordPress is a flexible and user-friendly CMS for business websites, blogs, and custom pages. It supports plugins, SEO tools, and scalable layouts to help you manage content easily and grow online.",
    href: "/services/wordpress-website-development-services",
    hoverDescription:
      "We design SEO-optimized, responsive WordPress websites with custom themes, plugin integrations, and performance optimization.",
    bgClass: "bg-[#eef2ff]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#3858e9]",
    icon: "/1.png",
  },
  {
    title: "Shopify",
    description:
      "Shopify helps you launch fast, secure online stores with smooth checkout and payment integrations. It’s ideal for brands that want quick setup, strong performance, and easy product management.",
    href: "/services/shopify-development-services",
    hoverDescription:
      "We create conversion-focused Shopify stores with product optimization, payment gateway integration, and scalable growth strategies.",

    bgClass: "bg-[#f3f9ed]",
    gradientFrom: "group-hover:from-white",
    gradientTo: "group-hover:to-[#95bf47]",
    icon: "/2.png",
  },
  {
    title: "Odoo",
    description:
      "Odoo provides smart ERP solutions to manage sales, inventory, accounting, HR, and more in one system. It’s perfect for businesses that need automation, visibility, and scalable operations.",
    href: "/services/odoo-development-services",
    hoverDescription:
      "We implement and customize Odoo modules for CRM, HR, accounting, inventory, and workflow automation tailored to your operations.",

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
          <p className="text-[13px] font-semibold text-black/70">Setup your Store</p>
          <h2 className="mt-2 text-[34px] font-extrabold tracking-tight text-[#111] md:text-[44px]">
            Ecommerce Solution
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-relaxed text-black/60 md:text-[15px] mb-10">
            A transparent, results-driven process designed to turn ideas into
            powerful digital solutions.
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
              <div className="p-8 flex flex-col">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  {card.title}
                </h3>

                {/* Desc + Icon */}
                <div className="mt-3 flex items-start gap-6">
                  {/* LEFT: Description + hover extra + button */}
                  <div className="flex-1 min-w-0">
                    {/* Normal content */}
                    <p className="text-[15px] text-black break-words">
                      {card.description}
                    </p>

                    {/* Hover-only extra content */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-28">
                      <p className="text-[14px] text-black">
                        {card.hoverDescription}
                      </p>
                    </div>

                    {/* Hover-only button */}
                    <div className="mt-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <Link
                        href={card.href}
                        className="
                          inline-block px-5 py-2.5 text-sm font-semibold
                          rounded-xl bg-black text-white
                          transition-all duration-300
                          hover:bg-[#111]
                        "
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT: Icon */}
                  <div className="shrink-0 -mt-5">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}