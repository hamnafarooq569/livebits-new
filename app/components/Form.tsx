"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactFormSection() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      setResult("Sending....");

      const form = event.currentTarget;
      const formData = new FormData(form);

      // Web3Forms access key (env)
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
    <section className="relative overflow-hidden bg-white py-24">
      {/* Toast container (can be moved to layout.tsx if you want global) */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* soft bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-140px] h-[420px] bg-gradient-to-t from-[#F8EFD9] via-transparent to-transparent" />

      {/* floating star */}
      <div className="pointer-events-none absolute left-[12%] top-[90px] h-9 w-9 rotate-[10deg]">
        <Image src="/shape-2.png" alt="star" fill className="object-contain" />
      </div>

      {/* curved dotted shape */}
      <div className="pointer-events-none absolute right-[-40px] bottom-[-40px] w-[320px] opacity-70 rotate-[12deg]">
        <Image
          src="/hero-shp.png"
          alt="decor curve"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      {/* ===== SINGLE CARD ===== */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="grid overflow-hidden rounded-[12px] bg-white shadow-[0_26px_70px_rgba(0,0,0,0.15)] md:grid-cols-2">
          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            {/* yellow corner shape */}
            <div className="absolute -left-6 top-10 z-10 h-20 w-20 rounded-3xl bg-[#FFD956]" />

            <div className="relative h-[380px] w-full md:h-full">
              <Image
                src="/contact.jpg"
                alt="LiveBits team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="p-10 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6A6A6]">
              Contact
            </p>

            <h2 className="mt-2 text-[28px] font-semibold leading-snug text-[#111111] md:text-[32px]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-[13px] text-[#6F6F6F]">
              Send us your valuable message and we’ll reply as soon as possible.
              We’re here to help you grow with LiveBits.
            </p>

            <form className="mt-8 space-y-5" onSubmit={onSubmit}>
              {/* Name */}
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#2B2B2B]">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-[2px] border border-[#E0DDCF] bg-[#F8F6EC] px-4 py-3 text-[13px] outline-none transition focus:border-[#FFD956] focus:ring-2 focus:ring-[#FFD956]/40"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[13px] font-medium text-[#2B2B2B]">
                    Your E-mail<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Enter e-mail"
                    className="w-full rounded-[2px] border border-[#E0DDCF] bg-[#F8F6EC] px-4 py-3 text-[13px] outline-none transition focus:border-[#FFD956] focus:ring-2 focus:ring-[#FFD956]/40"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-medium text-[#2B2B2B]">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-[2px] border border-[#E0DDCF] bg-[#F8F6EC] px-4 py-3 text-[13px] outline-none transition focus:border-[#FFD956] focus:ring-2 focus:ring-[#FFD956]/40"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="mb-1 block text-[13px] font-medium text-[#2B2B2B]">
                  Service<span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-[2px] border border-[#E0DDCF] bg-[#F8F6EC] px-4 py-3 text-[13px] text-[#111111] outline-none transition focus:border-[#FFD956] focus:ring-2 focus:ring-[#FFD956]/40"
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
                <label className="mb-1 block text-[13px] font-medium text-[#2B2B2B]">
                  Comment<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your comment"
                  className="w-full resize-none rounded-[2px] border border-[#E0DDCF] bg-[#F8F6EC] px-4 py-3 text-[13px] outline-none transition focus:border-[#FFD956] focus:ring-2 focus:ring-[#FFD956]/40"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-[2px] bg-[#FFD956] px-7 py-3 text-[13px] font-semibold text-[#111111] shadow-[0_16px_35px_rgba(0,0,0,0.18)] transition hover:translate-y-[1px] hover:bg-[#FFE67F] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Now"}
                <ArrowRight className="h-4 w-4" />
              </button>

              {result ? (
                <p className="text-[12px] text-[#6F6F6F]">{result}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
