// app/components/IndustriesWorkedSection.tsx
"use client";

export default function IndustriesWorkedSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
                  {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-black">
              Industries We Have Worked
            </h2>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-md">
              Drive success with industry-specific products designed to meet 
              diverse business needs.
            </p>


          {/* RIGHT SIDE GRID */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-60 w-60 rounded-xl border border-gray-300 bg-gray-50 shadow-sm"
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
