"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqSectionProps = {
  bgColor?: string;
};

export default function FaqSection({ bgColor = "#EEDC82" }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="relative w-full lg:py-10 " style={{ backgroundColor: bgColor }}>
      <div className="mx-auto max-w-7xl lg:px-6 ">
        <div className="relative overflow-hidden bg-[#eedc82] rounded-[15px] px-2 lg:px-6 py-16 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:px-16">
          <div className="relative z-[1] text-center">
            <span className="inline-flex items-center rounded-[10px] bg-[#fee000] lg:px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black border border-black">
              Still not convinced?
            </span>

            <h2 className="mt-6 text-[32px] font-extrabold leading-tight">
              We've got the answers
            </h2>

            <div className="mt-12 space-y-5 text-left">
              {/* Q1 */}
              <div className="rounded-[15px] bg-white px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8 border border-black">
                <button
                  onClick={() => toggle(1)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-[18px] font-semibold">
                    How much does domain hosting cost?
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                    {open === 1 ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === 1 ? "mt-3 max-h-[400px]" : "max-h-0"
                  }`}
                >
                  <div className="pr-10 text-[18px] leading-relaxed text-[#5B5B5B] space-y-3">
                    <p>
                      At <strong>LiveBits</strong>, domain hosting is available at
                      highly affordable prices:
                    </p>
                    <p>
                      <strong>.com, .net, .org</strong> → Rs. 5,500 per year
                      <br />
                      <strong>.pk, .com.pk, .edu.pk</strong> → Rs. 5,500 every two
                      years (biennially)
                    </p>
                    <p>
                      <strong>Hosting Plans:</strong>
                    </p>
                    <ul className="list-disc pl-5">
                      <li>Solo (Basic Hosting) – Rs. 12,500/year</li>
                      <li>Team (Premium Hosting) – Rs. 22,500/year</li>
                      <li>Agency (Business Hosting) – Rs. 35,000/year</li>
                      <li>Enterprise (Cloud Hosting) – Rs. 55,000/year</li>
                    </ul>
                    <p>
                      👉 You can start your website with both a domain and hosting
                      for as low as <strong>Rs. 18,000/year</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="rounded-[15px] border border-black bg-white px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8">
                <button
                  onClick={() => toggle(2)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-[18px] font-semibold">
                    How to buy domain hosting?
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                    {open === 2 ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === 2 ? "mt-3 max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <ol className="pr-10 text-[18px] leading-relaxed text-[#5B5B5B] list-decimal pl-5 space-y-1">
                    <li>Choose your domain name (e.g., .com, .pk, .net).</li>
                    <li>Select a hosting plan (Solo, Team, Agency, or Enterprise).</li>
                    <li>Click “Buy Now” and add to cart.</li>
                    <li>Complete checkout using your preferred payment method.</li>
                    <li>
                      Once payment is done, your domain and hosting will be activated
                      instantly.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Q3 */}
              <div className="rounded-[15px] border border-black bg-white px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8">
                <button
                  onClick={() => toggle(3)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-[18px] font-semibold">
                    Which domain hosting is the best?
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                    {open === 3 ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === 3 ? "mt-3 max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="pr-10 text-[18px] leading-relaxed text-[#5B5B5B] space-y-2">
                    <p>
                      <strong>Solo Plan</strong> – Best for personal blogs & small websites
                    </p>
                    <p>
                      <strong>Team Plan</strong> – Ideal for growing businesses
                    </p>
                    <p>
                      <strong>Agency Plan</strong> – Perfect for e-commerce & agencies
                    </p>
                    <p>
                      <strong>Enterprise Plan</strong> – Best for large organizations & cloud hosting
                    </p>
                    <p>
                      👉 For beginners, <strong>Solo Hosting + .com domain</strong> is the
                      most popular choice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div className="rounded-[15px] border border-black bg-white px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8">
                <button
                  onClick={() => toggle(4)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-[18px] font-semibold">
                    How to connect domain hosting?
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                    {open === 4 ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === 4 ? "mt-3 max-h-[250px]" : "max-h-0"
                  }`}
                >
                  <ol className="pr-10 text-[18px] leading-relaxed text-[#5B5B5B] list-decimal pl-5 space-y-1">
                    <li>Log in to your LiveBits control panel.</li>
                    <li>Go to DNS settings of your domain.</li>
                    <li>Update the nameservers provided by LiveBits hosting.</li>
                    <li>Wait for DNS propagation (usually 2–24 hours).</li>
                  </ol>
                </div>
              </div>

              {/* Q5 */}
              <div className="rounded-[15px] border border-black bg-white px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8">
                <button
                  onClick={() => toggle(5)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-[18px] font-semibold">
                    What is Cloud Hosting?
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                    {open === 5 ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === 5 ? "mt-3 max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="pr-10 text-[18px] leading-relaxed text-[#5B5B5B] space-y-2">
                    <p>
                      Cloud hosting runs your website on multiple interconnected servers, making it:
                    </p>
                    <ul className="list-disc pl-5">
                      <li>Faster</li>
                      <li>Scalable</li>
                      <li>Reliable</li>
                      <li>Secure (with free SSL)</li>
                    </ul>
                    <p>
                      At LiveBits, our <strong>Enterprise Plan (Rs. 55,000/year)</strong> is based
                      on cloud hosting for maximum performance.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
