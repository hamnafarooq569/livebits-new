"use client";

type Feature = {
  title: string;
  description: string;
};

type WhyChooseProps = {
  headingStart: string;      // pehla heading part
  highlightedWord: string;   // middle highlight
  headingEnd: string;        // baqi heading continue
  features: Feature[];
};

export default function WhyChooseProfessional({
  headingStart,
  highlightedWord,
  headingEnd,
  features,
}: WhyChooseProps) {
  // Split features into rows of 2
  const rows: Feature[][] = [];
  for (let i = 0; i < features.length; i += 2) {
    rows.push(features.slice(i, i + 2));
  }

  return (
    <section className="w-full py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
          {headingStart}{" "}
          <span className="text-[#fee000]">{highlightedWord}</span>{" "}
          {headingEnd}
        </h1>

        {/* Feature Rows */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {row.map((feature, index) => {
                const number = String(rowIndex * 2 + index + 1).padStart(2, "0");

                return (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[#fee000] font-extrabold text-[28px]">
                        {number}
                      </span>
                      <h3 className="text-[28px] font-bold text-black">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-black leading-relaxed text-[18px]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {rowIndex !== rows.length - 1 && (
              <div className="w-full h-[2px] bg-gradient-to-r from-[#fee000] to-transparent my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
