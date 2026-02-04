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
    <section className="w-full bg-white">
      {/* HERO WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* LEFT CONTENT */}
          <div className="text-left">
            <p className="text-sm font-medium text-[#6F6F6F]">
              Zapier initiatives
            </p>

            <h1 className="mt-4 font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl">
              Why we have an AI
              <br className="hidden sm:block" /> Transformation
              <br className="hidden sm:block" /> Officer at Zapier
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-[18px] leading-relaxed max-w-xl text-gray-800">
              If your title is something like Director of Operations, yet
              everyone turns to you for AI guidance—you might be an AI
              transformation leader. Here's how to leverage your position.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src="/team-1.jpg"
                alt="author"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <p className="text-sm sm:text-[14px] flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-800">
                <span>By</span>
                <span className="font-medium">Danish Mehmood</span>
                <span className="text-gray-600">• 3 min read</span>
              </p>
            </div>
          </div>

          {/* RIGHT CARD / IMAGE */}
          <div className="w-full">
            <div className="relative w-full rounded-[15px] overflow-hidden bg-white p-4 sm:p-8 lg:p-10 border border-gray-100 shadow-sm">
              <span className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-[#F2FBEF] text-[#3A7A2F] text-xs font-medium py-1 px-3 rounded">
                Featured article
              </span>

              {/* Responsive container instead of fixed px sizes */}
              <div className="mt-10 sm:mt-12 w-full max-w-[580px] mx-auto">
                <div className="aspect-[58/35] w-full border bg-white rounded-[12px] flex items-center justify-center">
                  <img
                    src="/logo-1.svg"
                    alt="logo"
                    className="w-2/3 max-w-[420px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 sm:mt-14">
          <div className="h-px bg-gray-300 w-full" />
        </div>

        {/* FOOTER ARTICLES */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="text-left sm:text-center px-0 sm:px-3"
            >
              <p className="text-sm text-gray-700">{item.tag}</p>

              <h3 className="mt-3 text-base sm:text-[18px] font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.date} <span className="mx-1">|</span> {item.read}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
