"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    tag: "Automation with Zapier",
    title: "Zapier Copilot: Build multi-product systems with an AI assistant",
    type: "pattern" as const,
    bg: "bg-[#EBFDD0]",
    icon: "🧭",
  },
  {
    id: 2,
    tag: "Automation inspiration",
    title: "6 ways to automate your no-code app builder",
    type: "pattern",
    bg: "bg-[#CFC2FF]",
    icon: "📱",
  },
  {
    id: 3,
    tag: "Automation inspiration",
    title: "How eCommerce automation benefits your business",
    type: "pattern",
    bg: "bg-[#CFC2FF]",
    icon: "🛒",
  },
  {
    id: 4,
    tag: "Automation inspiration",
    title: "6 ways to automate your database apps with Zapier",
    type: "pattern",
    bg: "bg-[#E2F0EE]",
    icon: "📋",
  },
  {
    id: 5,
    tag: "Automation inspiration",
    title: "6 HR automation ideas to streamline your work",
    type: "pattern",
    bg: "bg-[#D6EDF4]",
    icon: "👥",
  },
  {
    id: 6,
    tag: "Customer stories",
    title: "How Healthie saves 60+ hours a week with AI agents",
    type: "image",
    image: "/healthie.jpg",
  },
  {
    id: 7,
    tag: "Automation inspiration",
    title: "7 ways to automate Shopify with Zapier",
    type: "pattern",
    bg: "bg-[#D6EDF4]",
    icon: "🛍️",
  },
  {
    id: 8,
    tag: "Automation with Zapier",
    title: "Maximize your productivity with multi-step Zaps",
    type: "pattern",
    bg: "bg-[#D6EDF4]",
    icon: "🎯",
  },
];

export default function RecommendsSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-center text-[32px] font-bold">Zapier recommends</h2>

        {/* Card Grid */}
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group cursor-pointer rounded-[15px] border border-black p-0 overflow-hidden h-[315px]"
            >
              {/* FIXED IMAGE / PATTERN SPACE */}
              <div className="h-44 w-full border-b relative overflow-hidden">
                {card.type === "pattern" ? (
                  <div className={`w-full h-full ${card.bg} relative`}>
                    {/* pattern lines */}
                    <div className="absolute inset-0">
                      <div className="absolute left-1/3 top-0 h-full border-l border-black/10" />
                      <div className="absolute left-0 top-1/3 w-full border-t border-black/10" />
                      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 border-l border-t border-black/10" />
                    </div>

                    {/* center tile */}
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[18px] border border-[#F97316] bg-white shadow-sm">
                      <span className="text-2xl text-[#F97316]">{card.icon}</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* TEXT AREA */}
              <div className="px-2.5 mt-4 text-left">
                <button className="text-[13px] font-semibold underline underline-offset-2">
                  {card.tag}
                </button>
                <h3 className="mt-2 text-[16px] font-semibold leading-snug group-hover:underline">
                  {card.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
