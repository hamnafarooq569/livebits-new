"use client";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-0 px-6">
      {/* base soft gradient like Dexon */}
      <div className="bg-[#EEDC82] mx-auto max-w-7xl" />

      {/* dotted / grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}

      
      />

      {/* warm tint top-center */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#FFE7B2]/38 blur-[120px]" />
      {/* green tint bottom-left */}
      <div className="pointer-events-none absolute left-[-200px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#C7F7C5]/34 blur-[140px]" />
      {/* blue tint bottom-right */}
      <div className="pointer-events-none absolute right-[-220px] bottom-[-260px] h-[520px] w-[520px] rounded-full bg-[#C5E6FF]/32 blur-[150px]" />

      <div className="relative z-10">

      </div>
    </section>
  );
}
