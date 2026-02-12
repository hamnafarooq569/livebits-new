"use client";

import Image from "next/image";

type WhyLiveBitsProps = {
  heading1: string;
  paragraph1: string;
  image1: string;

  heading2: string;
  paragraph2: string;
  image2: string;
};

export default function WhyLiveBits({
  heading1,
  paragraph1,
  image1,
  heading2,
  paragraph2,
  image2,
}: WhyLiveBitsProps) {
  return (
    <section className="w-full">
      {/* ================= BLACK SECTION ================= */}
      <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* IMAGE LEFT */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={image1}
              alt="LiveBits section image"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 92vw, 650px"
              className="w-full max-w-[650px] h-auto object-contain"
              priority
            />
          </div>

          {/* CONTENT RIGHT */}
          <div className="text-center lg:text-left">
            <h2 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl lg:text-[36px]">
              {heading1}
            </h2>
            <p className="mt-3 sm:mt-4 text-white/80 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {paragraph1}
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHITE SECTION ================= */}
      <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* CONTENT LEFT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-black font-extrabold leading-tight text-2xl sm:text-3xl lg:text-[36px]">
              {heading2}
            </h2>
            <p className="mt-3 sm:mt-4 text-black/70 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {paragraph2}
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <Image
              src={image2}
              alt="LiveBits section image"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 92vw, 520px"
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
