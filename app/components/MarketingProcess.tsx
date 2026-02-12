"use client";

type StepItem = {
  number?: string;   // ✅ optional
  title: string;
  description: string;
};

type MarketingProcessProps = {
  heading: string;
  subtext: string;
  steps: StepItem[];
  bgColor?: string;
};

export default function MarketingProcess({
  heading,
  subtext,
  steps,
  bgColor = "bg-black",
}: MarketingProcessProps) {
  return (
    <section className={`w-full py-20 px-6 ${bgColor}`}>
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        {/* LEFT */}
        <div className="self-start lg:sticky lg:top-24">
          <h2 className="text-[32px] font-extrabold text-white">{heading}</h2>
          <p className="mt-4 text-[18px] md:text-base text-white leading-relaxed max-w-lg">
            {subtext}
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {steps.map((step, index) => {
            const autoNumber = String(index + 1).padStart(2, "0"); // ✅ 01,02...
            const displayNumber = step.number?.trim() ? step.number : autoNumber;

            return (
              <div
                key={index}
                className="rounded-[10px] bg-white border border-black shadow-md px-8 py-3 flex flex-col gap-3 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-[52px] font-extrabold tracking-wide">
                  {displayNumber}
                </div>

                <h3 className="text-[28px] font-semibold text-black">
                  {step.title}
                </h3>

                <p className="text-[18px] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
