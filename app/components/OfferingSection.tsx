// app/components/OfferingSection.tsx
"use client";

type OfferingItem = {
  title: string;
  description: string;
};

type OfferingSectionProps = {
  heading: string;
  items: OfferingItem[];
  bgColor?: string; // hex color allowed
};

export default function OfferingSection({
  heading,
  items,
  bgColor = "#f8f8f8",
}: OfferingSectionProps) {
  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: bgColor }}   // ✅ FIX
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-left text-[32px] font-extrabold text-black md:text-4xl">
          {heading}
        </h2>

        {/* grid */}
        <div className="relative grid gap-y-12 gap-x-16 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const isTopRow = index < 4;
            const isBottomRow = index >= 4;
            const isLastColumn = (index + 1) % 4 === 0;

            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* card */}
                <div
                  className="
                    group w-full h-58 rounded-[15px]
                    border border-black
                    bg-white p-4
                    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                    transition-all duration-300 ease-out
                    hover:bg-black hover:-translate-y-1
                    hover:shadow-[0_22px_55px_rgba(0,0,0,0.45)]
                    cursor-pointer
                  "
                >
                  <h3 className="mb-2 text-[24px] font-semibold text-black transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-[18px] text-black transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                </div>

                {/* connectors */}
                {isTopRow && (
                  <div className="absolute bottom-[-28px] left-1/2 h-7 w-[2px] -translate-x-1/2 bg-black" />
                )}

                {isBottomRow && (
                  <div className="absolute top-[-28px] left-1/2 h-7 w-[2px] -translate-x-1/2 bg-black" />
                )}

                {!isLastColumn && (
                  <div className="absolute top-1/2 left-full h-[2px] w-16 -translate-y-1/2 bg-black" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
