"use client";

import Link from "next/link";

type CardItem = {
  title: string;
  description: string;
  href: string;
  bgClass: string; // light bg per card
};

const cards: CardItem[] = [
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and a clear roadmap for growth.",
    href: "/services/brand-strategy",
    bgClass: "bg-rose-50",
  },
  {
    title: "UI/UX Design",
    description: "User-friendly interfaces that convert and feel premium.",
    href: "/services/ui-ux",
    bgClass: "bg-sky-50",
  },
  {
    title: "Web Development",
    description: "Fast, responsive websites built for performance.",
    href: "/services/web-development",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Digital Marketing",
    description: "SEO, ads, and social campaigns that drive results.",
    href: "/services/digital-marketing",
    bgClass: "bg-amber-50",
  },
];

export default function ECommerce() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F7F7FB]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111]">
            Our Core Services
          </h2>
          <p className="mt-3 text-[#5F6368] max-w-2xl mx-auto">
            Hover a card to expand and explore more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={[
                "group relative overflow-hidden rounded-2xl border border-black/5",
                "shadow-[0_10px_25px_rgba(0,0,0,0.06)]",
                "transition-all duration-300 ease-out",
                "hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]",
                "hover:-translate-y-1",
                "hover:scale-[1.03]",
                "min-h-[210px] md:min-h-[220px]",
                card.bgClass,
              ].join(" ")}
            >
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/40 to-white/0" />

              <div className="relative p-7 sm:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111]">
                    {card.title}
                  </h3>

                  {/* small badge */}
                  <span className="shrink-0 text-[12px] font-semibold px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[#111]">
                    02×02
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-[#5F6368] max-w-lg">
                  {card.description}
                </p>

                {/* extra text appears on hover */}
                <div className="mt-4 max-w-lg text-[14px] text-[#5F6368] opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-24">
                  We tailor this service to your goals, timelines, and budget for
                  measurable outcomes.
                </div>

                {/* button appears on hover */}
                <div className="mt-auto pt-6">
                  <Link
                    href={card.href}
                    className={[
                      "inline-flex items-center justify-center",
                      "rounded-xl px-5 py-2.5 text-sm font-semibold",
                      "border border-black/10 bg-white/80 text-[#111]",
                      "shadow-[0_8px_18px_rgba(0,0,0,0.08)]",
                      "transition-all duration-300",
                      "opacity-0 translate-y-2 pointer-events-none",
                      "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                      "hover:bg-white",
                    ].join(" ")}
                  >
                    View More
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* accent corner */}
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}