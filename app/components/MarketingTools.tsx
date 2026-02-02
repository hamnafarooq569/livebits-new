"use client";

import Image from "next/image";

export type MarqueeSection = {
  direction?: "left" | "right";
  speed?: number;
  items: string[]; // ✅ image src paths
};

export type DigitalMarketingToolsProps = {
  heading: string;
  sections: MarqueeSection[];
};

// ✅ Same size as InfiniteImages: h-[90px] w-[200px]
function ToolLogo({ src }: { src: string }) {
  return (
    <div className="relative h-[90px] w-[200px] shrink-0 overflow-hidden">
      <Image src={src} alt="tool logo" fill className="object-contain" />
    </div>
  );
}

export default function DigitalMarketingTools({
  heading,
  sections,
}: DigitalMarketingToolsProps) {
  // ✅ Use only ONE row (first section)
  const row = sections?.[0] ?? { direction: "left", speed: 18, items: [] };

  const animationClass =
    row.direction === "right" ? "marquee-right" : "marquee-left";

  const speed = row.speed ?? 18;

  // ✅ Repeat logos for continuous loop
  const baseItems = row.items ?? [];
  const repeatedItems =
    baseItems.length === 0
      ? []
      : Array.from(
          { length: Math.max(baseItems.length * 12, 60) },
          (_, i) => baseItems[i % baseItems.length]
        );

  return (
    <section className="w-full py-14" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-extrabold text-black">
          {heading}
        </h2>

        {/* ONE marquee line */}
        <div className="mt-10 overflow-hidden">
          <div
            className={`marquee-row gap-6 ${animationClass}`}
            style={{ animationDuration: `${speed}s` }}
          >
            {repeatedItems.map((src, i) => (
              <ToolLogo key={`${i}-${src}`} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
