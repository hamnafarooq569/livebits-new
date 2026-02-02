export default function DarkFeaturesSection() {
  return (
    <section className="relative bg-[#050806] py-16 text-white md:py-20">
      {/* curved dotted line */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-40 w-64 text-[#1D2620]"
        viewBox="0 0 260 160"
        fill="none"
      >
        <path
          d="M0 150 C80 10, 180 10, 260 150"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="5 7"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,0.9fr]">
        {/* Left copy + cards */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9DFF5B] text-sm font-semibold text-black">
              N
            </div>
            <p className="text-xs text-white/70">
              Improve your business to the next levels
            </p>
          </div>

          <h2 className="mt-4 text-[26px] font-semibold md:text-[30px]">
            Improve your business to the next levels.
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/70">
            Use Dexon to organize campaigns, track progress, and keep your
            entire marketing stack working together.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-[#FAD94A] p-5 text-[#101010]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                SOCIAL MEDIA MASTERY
              </p>
              <p className="mt-3 text-sm">
                A simple playbook for planning and publishing content that gets
                attention.
              </p>
            </div>
            <div className="rounded-3xl bg-[#AEFF85] p-5 text-[#101010]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                CUSTOMER INCREASING
              </p>
              <p className="mt-3 text-sm">
                Clear dashboards show how every campaign contributes to real
                customer growth.
              </p>
            </div>
          </div>
        </div>

        {/* Right stats card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 text-[#101010] shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
            <p className="text-sm font-semibold">Sales statistics</p>
            <p className="mt-2 text-xs text-[#777766]">
              Compare sessions, conversions, and revenue across each channel.
            </p>
            <div className="mt-5 flex items-end gap-3">
              <div className="h-20 flex-1 rounded-2xl bg-[#FFE58A]" />
              <div className="h-24 flex-1 rounded-2xl bg-[#9DFF5B]" />
              <div className="h-28 flex-1 rounded-2xl bg-[#8ED0FF]" />
            </div>
            <p className="mt-4 text-xs text-[#777766]">
              Weekly report updated automatically from your analytics tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
