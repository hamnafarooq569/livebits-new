"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqSectionProps = {
  faqs: FaqItem[];
};

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className="relative w-full lg:py-10 bg-white">
      <div className="mx-auto max-w-7xl lg:px-6">
        <div className="relative overflow-hidden rounded-[15px] bg-[#eedc82] px-2 py-12 sm:py-14 lg:px-6 lg:py-16 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:px-16">
          <div className="relative z-[1] text-center">
            {/* Badge (fixed) */}
            <span className="inline-flex items-center rounded-[10px] bg-[#fee000] px-4 lg:px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-black border border-black">
              Still not convinced?
            </span>

            {/* Title (fixed) */}
            <h2 className="mt-6 text-[28px] sm:text-[32px] font-extrabold leading-tight">
              We've got the answers
            </h2>

            {/* FAQ list */}
            <div className="mt-10 sm:mt-12 space-y-5 text-left">
              {faqs.map((item, idx) => {
                const id = idx + 1;
                const isOpen = open === id;

                return (
                  <div
                    key={id}
                    className="rounded-[15px] border border-black bg-white px-4 sm:px-6 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.06)] md:px-8"
                  >
                    <button
                      onClick={() => toggle(id)}
                      className="flex w-full items-start sm:items-center justify-between gap-4 text-left"
                    >
                      <span className="text-[16px] sm:text-[18px] font-semibold leading-snug">
                        {item.question}
                      </span>

                      <span className="mt-0.5 sm:mt-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-black bg-[#fee000]">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "mt-3 max-h-[1200px]" : "max-h-0"
                      }`}
                    >
                      <div className="pr-0 sm:pr-10 text-[15px] sm:text-[18px] leading-relaxed text-[#5B5B5B] space-y-3">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
