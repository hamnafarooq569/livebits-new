// app/components/OfferingSection.tsx
"use client";

type OfferingItem = {
  title: string;
  description: string;
};

type OfferingSectionProps = {
  heading: string;
  items: OfferingItem[];
  bgColor?: string;
};

export default function OfferingSection({
  heading,
  items,
  bgColor = "#ffffff",
}: OfferingSectionProps) {
  return (
    <section className="w-full py-24 px-6" style={{ backgroundColor: bgColor }}>
      <div className="mx-auto max-w-7xl">

        <h2 className="mt-2 text-[40px] font-extrabold leading-tight text-[#111] md:text-[52px]">
          {heading}
        </h2>

        {/* === CENTERED TABLE WITH SIDE/BOTTOM SHADOW === */}
        <div className="mt-14 flex justify-center">
          <div
            className="
              w-full max-w-7xl
              rounded-[6px]
              bg-transparent
              shadow-[0_6px_10px_rgba(0,0,0,0.12)]
            "
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-[#EAEAEA] bg-transparent">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="
                    border-b border-[#EAEAEA]
                    border-r border-[#EAEAEA]
                    p-10 min-h-[220px]
                    flex flex-col
                    bg-transparent
                    last:border-r-0
                    md:[&:nth-child(2n)]:border-r-0
                    lg:[&:nth-child(4n)]:border-r-0
                    lg:[&:nth-last-child(-n+4)]:border-b-0
                  "
                >
                  <h3 className="text-[18px] font-semibold text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-relaxed text-[#5F6368]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* === END === */}
      </div>
    </section>
  );
}
