// app/components/QuoteSection.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ArrowRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CursorTooltip from "./CursorTooltip";

type QuoteSectionProps = {
  title: string;
  subtitle: string;
};

function HighlightLastWord({ text }: { text: string }) {
  const words = text.split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  return (
    <>
      {rest}{" "}
      <span className="relative inline-block text-[#FFD956]">
        {lastWord}
        <span className="absolute left-0 -bottom-2 h-[6px] w-full bg-[#FFD956]/30 blur-md" />
      </span>
    </>
  );
}

export default function QuoteSection({ title, subtitle }: QuoteSectionProps) {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      setResult("Sending....");

      const form = event.currentTarget;
      const formData = new FormData(form);

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error("Missing Web3Forms key in .env.local");
      }

      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data?.success) {
        toast.success("Form Submitted Successfully!");
        form.reset();
      } else {
        toast.error(data?.message || "Something went wrong!");
      }
    } catch (err: any) {
      toast.error(err?.message || "Network error!");
    } finally {
      setLoading(false);
      setResult("");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Toasts */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="pointer-events-none absolute right-6 top-6 z-10 hidden sm:block">
        <Image
          src="/hero-shp.png"
          alt="Decorative arrow"
          width={150}
          height={650}
          className="opacity-60 rotate-[8deg] drop-shadow-[0_10px_30px_rgba(255,217,86,0.15)]"
        />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-240px] top-[-180px] h-[680px] w-[680px] rounded-full bg-[#FFD956]/25 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-[-220px] left-1/3 h-[520px] w-[520px] rounded-full bg-[#4c8df5]/15 blur-[190px]" />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <h1 className="mt-10 text-2xl font-extrabold leading-[1.1] sm:text-3xl lg:text-6xl tracking-tight">
              <HighlightLastWord text={title} />
            </h1>

            <p className="mt-10 max-w-md border-l-2 border-[#FFD956]/60 pl-4 text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
              {subtitle}
            </p>

            {/* TRUST STRIP */}
            <div className="mt-15 mb-10px flex flex-col lg:flex-row items-center gap-10 text-sm font-medium text-white">
              <CursorTooltip label="Review Us on DesignRush">
                <a
                  href="https://www.designrush.com/agency/profile/livebits#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-12 w-35">
                    <Image
                      src="/review-badge.png"
                      alt="Review us on DesignRush"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </CursorTooltip>

              <div className="hidden h-10 w-px md:flex relative">
                <div className="absolute left-1/2 top-0 h-10 w-[3px] bg-white/25 rotate-[18deg]" />
              </div>

              <div className="flex items-center gap-4 text-[14px]">
                <div>
                  <p className="font-semibold text-white">
                    Best Digital Agency of 2024
                  </p>

                  <CursorTooltip label="Best Digital Agency of 2024 Forbes">
                    <div className="relative h-10 w-35 items-center -ml-5">
                      <Image
                        src="/forbes.png"
                        alt="Forbes"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CursorTooltip>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (FORM) */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD956]/70 to-transparent" />

              <div className="mb-6">
                <h3 className="text-xl font-semibold tracking-wide text-white sm:text-3xl">
                  Request A Quote
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Tell us a bit about your goals — we’ll reply within 24 hours.
                </p>
              </div>

              {/* ✅ SAME FORM AS ContactFormSection (only dark styling here) */}
              <form className="space-y-5" onSubmit={onSubmit}>
                {/* Name */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                      Your E-mail<span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Enter e-mail"
                      className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                      Phone Number<span className="text-red-400">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Service<span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  >
                    <option value="">Select a service</option>
                    <option value="Creative Designing">Creative Designing</option>
                    <option value="Printing Packaging">Printing Packaging</option>
                    <option value="Product & Fashion Photography">
                      Product & Fashion Photography
                    </option>
                    <option value="Custom Website Development">
                      Custom Website Development
                    </option>
                  </select>
                </div>

                {/* Comment */}
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/70">
                    Comment<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your comment"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/95 px-4 py-2.5 text-[14px] text-black outline-none transition focus:border-[#FFD956]/70 focus:ring-2 focus:ring-[#FFD956]/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#4c8df5] to-[#2f6fe8] px-6 py-2.5 text-[15px] font-semibold text-white shadow-[0_18px_70px_-30px_rgba(76,141,245,0.8)] transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4c8df5]/40 focus:ring-offset-2 focus:ring-offset-black"
                >
                  {loading ? "Submitting..." : "Get My Quote"}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                {result ? (
                  <p className="text-[12px] text-white/70">{result}</p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
