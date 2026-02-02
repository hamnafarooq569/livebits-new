"use client";

export default function BlogHeroSection() {
  const data = [
    {
      title: "Chrome split screen: How to view pages side by side in your browser",
      date: "December 11, 2025",
      read: "3 min read",
      tag: "App tips",
    },
    {
      title: "The best document management software in 2026",
      date: "December 11, 2025",
      read: "18 min read",
      tag: "Best apps",
    },
    {
      title: "The 7 best note-taking apps in 2026",
      date: "December 11, 2025",
      read: "19 min read",
      tag: "Best apps",
    },
    {
      title: "The best invoicing software in 2026",
      date: "December 10, 2025",
      read: "15 min read",
      tag: "Best apps",
    },
  ];

  return (
    <section className="w-full bg-white py-50 px-6 pb-28">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-[#6F6F6F]">Zapier initiatives</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Why we have an AI
            <br /> Transformation
            <br /> Officer at Zapier
          </h1>

          <p className="mt-6 text-[18px] leading-relaxed max-w-xl">
            If your title is something like Director of Operations, yet everyone
            turns to you for AI guidance—you might be an AI transformation leader.
            Here's how to leverage your position.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <img
              src="/team-1.jpg"
              alt="author"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-[14px] flex items-center gap-2">
              By <span className="font-medium">Danish Mehmood</span>
              <span className="text-gray-600">• 3 min read</span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <div className="relative w-full rounded-[15px] overflow-hidden bg-white p-10">
            <span className="absolute top-10 left-10 bg-[#F2FBEF] text-[#3A7A2F] text-xs font-medium py-1 px-3 rounded">
              Featured article
            </span>

            <div className="w-[580px] h-[350px] border bg-white rounded-[12px] flex items-center justify-center mx-auto">
            <img
              src="/logo-1.svg"
              alt="logo"
              className="w-[400] h-[140px] object-cover"
            />
          </div>
        </div>
        </div>

      </div>

      <div className="max-w-full mx-auto mt-16">
        <div className="h-[1px] bg-gray-400 w-full"></div>
      </div>

      {/* ---------------------- FOOTER ARTICLES MERGED HERE ---------------------- */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

        {data.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-[14px]">{item.tag}</p>

            <h3 className="mt-3 text-[18px] font-semibold text-gray-900 leading-snug">
              {item.title}
            </h3>

            <p className="mt-2 text-[14px] text-gray-700">
              {item.date} | {item.read}
            </p>
          </div>
        ))}

      </div>
      {/* ------------------------------------------------------------------------ */}
    </section>
  );
}
    