"use client";

import Image from "next/image";

type ImageBlock = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

type WhyLiveBitsProps = {
  heading: string;
  mainParagraph?: string[];
  subHeading?: string;
  subParagraph?: string[];

  mainImage?: ImageBlock & {
    position?: "left" | "right";
  };

  heading2?: string;
  points2?: string[];

  partnerTitle: string;
  partnerDescription: string;

  footerTitle: string;
  footerDescription: string;

  sideImage?: ImageBlock;
};

export default function WhyLiveBits({
  heading,
  mainParagraph,
  subHeading,
  subParagraph,
  mainImage,
  heading2,
  points2,
  partnerTitle,
  partnerDescription,
  footerTitle,
  footerDescription,
  sideImage,
}: WhyLiveBitsProps) {
  return (
    <section className="w-full">

      {/* ================= BLACK BACKGROUND (SECTION 1 + 2) ================= */}
      <div className="w-full bg-black py-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* SECTION 1 */}
          <h2 className="text-3xl md:text-[32px] font-bold text-white mb-4">
            {heading}
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* TEXT */}
            <div className="w-full lg:flex-1 max-w-3xl">
              {mainParagraph?.map((p, i) => (
                <p
                  key={i}
                  className="mb-4 text-white text-[18px] leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {subHeading && (
                <>
                  <h3 className="text-2xl md:text-[28px] font-bold text-white mt-4 mb-4">
                    {subHeading}
                  </h3>
                  {subParagraph?.map((p, i) => (
                    <p
                      key={i}
                      className="mb-2 text-white text-[18px] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </>
              )}
            </div>

            {/* RIGHT IMAGE */}
            {mainImage && (
              <div className="w-full lg:w-[52%] lg:-mt-12">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt || "image"}
                  width={mainImage.width ?? 520}
                  height={mainImage.height ?? 420}
                  className={mainImage.className || "w-full object-contain"}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= WHITE BACKGROUND (SECTION 3 + 4 + 5) ================= */}
      <div className="w-full bg-white py-20 px-6">
        <div className="mx-auto max-w-7xl">

          {/* SECTION 3 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* LEFT IMAGE */}
            {sideImage && (
              <div className="w-full lg:w-[45%] sticky top-18">
                <Image
                  src={sideImage.src}
                  alt={sideImage.alt || "side image"}
                  width={sideImage.width ?? 420}
                  height={sideImage.height ?? 420}
                  className={sideImage.className || "w-full object-contain"}
                />
              </div>
            )}

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-[55%]">
              {heading2 && (
                <>
                  <h3 className="text-2xl md:text-[28px] font-bold text-black mb-4">
                    {heading2}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-black text-[18px] leading-relaxed">
                    {points2?.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* SECTION 4 – PARTNER */}
          <div className="mt-8">
            <h4 className="font-semibold text-black text-[24px] mb-3">
              {partnerTitle}
            </h4>
            <p className="text-black text-[18px] leading-relaxed">
              {partnerDescription}
            </p>
          </div>

          {/* SECTION 5 – FOOTER TEXT */}
          <div className="mt-8">
            <h4 className="font-semibold text-black text-[24px] mb-3">
              {footerTitle}
            </h4>
            <p className="text-black text-[18px] leading-relaxed">
              {footerDescription}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
