"use client";

const cards = [
  {
    title: "Intro to\nautomation",
    primary: "IG",
    secondary: "t",
    layout: "intro",
  },
  {
    title: "How\nZapier works",
    primary: "S",
    secondary: "W",
    layout: "how",
  },
  {
    title: "Watch\na demo",
    primary: "f",
    secondary: "M",
    layout: "watch",
  },
];

export default function AutomateWorkSection() {
  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Automate your work with Zapier
        </h2>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="relative flex h-44 items-stretch overflow-hidden rounded-xl border  bg-[#FBF7F0] shadow-[0_16px_35px_rgba(0,0,0,0.35)]"
            >
              {/* LEFT TEXT */}
              <div className="flex flex-1 items-center px-8">
                <h3 className="text-[24px] md:text-[26px] font-semibold leading-snug whitespace-pre-line text-[#111] text-left">
                  {card.title}
                </h3>
              </div>

              {/* RIGHT FLOW AREA */}
              <div className="relative hidden h-full w-32 sm:block">
                {card.layout === "intro" && (
                  <>
                    {/* vertical line (top to bend) */}
                    <div className="absolute left-1/3 top-0 h-[60%] border-l border-[#D0D0D0]" />
                    {/* vertical line (bend down a bit) */}
                    <div className="absolute left-1/3 top-[60%] h-[18%] border-l border-[#D0D0D0]" />
                    {/* horizontal line to the right */}
                    <div className="absolute left-1/3 top-[78%] w-[95%] border-t border-[#D0D0D0]" />

                    {/* top icon (Instagram) */}
                    <div className="absolute left-1/3 top-[38%] -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.primary}
                      </div>
                    </div>

                    {/* bottom-right icon (Tumblr) */}
                    <div className="absolute left-[55%] top-[78%] -translate-y-1/2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.secondary}
                      </div>
                    </div>
                  </>
                )}

                {card.layout === "how" && (
                  <>
                    {/* single vertical line */}
                    <div className="absolute left-1/2 top-0 h-full border-l border-[#D0D0D0]" />

                    {/* top icon (Slack) */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.primary}
                      </div>
                    </div>

                    {/* bottom icon (Word) */}
                    <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.secondary}
                      </div>
                    </div>
                  </>
                )}

                {card.layout === "watch" && (
                  <>
                    {/* horizontal line across card */}
                    <div className="absolute right-10 top-[20%] w-[330px] border-t border-[#D0D0D0]" />
                    {/* vertical line at right side going down */}
                    <div className="absolute right-10 top-[20%] h-[85%] border-l border-[#D0D0D0]" />

                    {/* top-right icon (Facebook) */}
                    <div className="absolute right-5 top-[40%] -translate-y-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.primary}
                      </div>
                    </div>

                    {/* bottom-right icon (Mailchimp) */}
                    <div className="absolute right-5 bottom-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E2E2E2] bg-white text-xs font-semibold shadow-sm">
                        {card.secondary}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
