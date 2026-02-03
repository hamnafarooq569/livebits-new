"use client";

import Image from "next/image";

export default function SolutionsZigZagSection() {
  return (
    <section className="w-full bg-white py-6 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid grid-cols-1 gap-14 lg:gap-20">

          {/* ================= ROW 1 ================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[450px]">
                <Image
                  src="/image-track-01.png"
                  alt="Top Illustration"
                  width={700}
                  height={600}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">

              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-1 py-1 lg:px-3 lg:py-1 text-sm font-medium text-black border border-black">
                <span className="inline-block h-6 w-6 rounded-full bg-yellow-400" />
                Strategies that work
              </div>

              <h2 className="text-[30px] font-extrabold leading-tight text-black">
                Track the progress towards
                <br />
                objectives with key results
              </h2>

              <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-black">
                Nivia is an independent web design studio with a rich history.
                Founded in 1999, it gathered the best web designers & developers.
              </p>

              {/* FEATURE CARDS */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Intuitive Dashboard",
                    desc: "Data-driven decisions leveraging engagement analysis for growth.",
                    icon: "/feature_icon.png",
                  },
                  {
                    title: "Engagement Analysis",
                    desc: "Boosting conversions: strategies informed by engagement analysis.",
                    icon: "/feature_icon2.png",
                  },
                  {
                    title: "Advanced Security",
                    desc: "Unlocking audience insights: a deep dive into engagement analysis.",
                    icon: "/features_icon3.png",
                  },
                  {
                    title: "Weekly Email Reports",
                    desc: "Decoding user behavior: the art of engagement analysis.",
                    icon: "/features_icon4.png",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer rounded-xl border border-black bg-white p-4
                               transition-all duration-300
                               hover:bg-black hover:-translate-y-1
                               hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  >
                    <div className="flex items-start gap-3">

                      {/* ICON */}
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-lg
                                   bg-black/5 transition-colors duration-300
                                   group-hover:bg-white"
                      >
                        <Image
                          src={f.icon}
                          alt={f.title}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* TEXT */}
                      <div>
                        <p
                          className="font-semibold text-[18px] text-black
                                     transition-colors duration-300
                                     group-hover:text-white"
                        >
                          {f.title}
                        </p>

                        <p
                          className="mt-1 text-[16px] leading-relaxed text-black
                                     transition-colors duration-300
                                     group-hover:text-white/90"
                        >
                          {f.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CURVED ARROW */}
          <div className="pointer-events-none absolute left-[48%] top-[51%] hidden lg:block">
            <Image
              src="/hero-shp.png"
              alt="Curved Arrow"
              width={90}
              height={30}
              className="object-contain rotate-16"
            />
          </div>

          {/* ================= ROW 2 ================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="w-full">
              <h3 className="text-[30px] font-extrabold leading-tight text-black">
                We bring solutions to make life easier
                <br />
                for our clients.
              </h3>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Requirement Analysis",
                    desc: "Simple and cost effective to run high-performance queries on petabytes of structured data.",
                  },
                  {
                    title: "Magic Touch",
                    desc: "Simple and cost effective to run high-performance queries and build dashboards.",
                  },
                  {
                    title: "Data Analysis",
                    desc: "Simple and cost effective to run high-performance queries and build reports.",
                  },
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[18px] text-black">{s.title}</p>
                      <p className="mt-1 text-[18px] text-black">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px]">
                <Image
                  src="/image-track.png"
                  alt="Bottom Illustration"
                  width={700}
                  height={600}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
