"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ---------- COUNT UP HOOK ---------- */
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

export default function PromoStatsSection() {
  // numeric values only
  const partners = useCountUp(16);
  const sales = useCountUp(16);
  const campaigns = useCountUp(5);
  const tools = useCountUp(12);

  return (
    <section className="relative w-full bg-[#eedc82] pb-10 py-5 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* SHAPE 1 */}
        <div className="pointer-events-none absolute left-[-18%] bottom-[50px] w-[700px] h-[300px]">
          <Image src="/shape-1.png" alt="shape" fill className="object-contain" />
        </div>

        {/* SHAPE 2 */}
        <div className="pointer-events-none absolute right-[18%] bottom-[220px] w-10 h-10 animate-floating-small-star">
          <Image src="/shape-2.png" alt="star" fill className="object-contain" />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 items-center mt-10 gap-1">
          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[450px] max-w-[450px] rounded-[10px] bg-white">
              <Image
                src="/about.png"
                alt="about"
                fill
                className="rounded-[10px] object-cover shadow-[0_24px_70px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-[38px] font-extrabold leading-snug text-[#111]">
              Specialize in help Companies
              <br />
              Promote Your Business
            </h3>

            <p className="mt-4 text-[18px]">
              Ullamcorper risus ultricies risus lorem. Mollis libero in pellentesque potenti.
            </p>

            <ul className="mt-5 space-y-2 text-[14px]">
              <li>✔ Continually engineer ethical partnership</li>
              <li>✔ Seamlessly pursue orthogonal customer service</li>
              <li>✔ Dynamically reconceptualize value</li>
            </ul>

            <button className="mt-6 text-[18px] font-semibold hover:underline">
              Learn More ↗
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-10 md:grid-cols-4 text-left">
          
          <div>
            <p className="text-[30px] font-semibold text-[#111]">
              {partners}M+
            </p>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em]">
              Total Advertising Partners
            </p>
          </div>

          <div>
            <p className="text-[30px] font-semibold text-[#111]">
              {sales}%
            </p>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em]">
              Sales Increasements
            </p>
          </div>

          <div>
            <p className="text-[30px] font-semibold text-[#111]">
              {campaigns}K+
            </p>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em]">
              Social Campaigns
            </p>
          </div>

          <div>
            <p className="text-[30px] font-semibold text-[#111]">
              {tools}K+
            </p>
            <p className="mt-1 text-[14px] font-semibold uppercase tracking-[0.18em]">
              Paid Marketing Tools
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
