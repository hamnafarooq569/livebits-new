"use client";

import React from "react";

interface BusinessSolutionSectionProps {
  imageSrc?: string;
  sideMainHeading: string;
  sideParagraph: string;
  sideParagraph2?: string; // ✅ NEW optional paragraph
}

const BusinessSolutionSection: React.FC<BusinessSolutionSectionProps> = ({
  imageSrc,
  sideMainHeading,
  sideParagraph,
  sideParagraph2,
}) => {
  return (
    <section className="w-full bg-[#eedc82] py-20 px-6 sm:px-10 lg:px-16">
      {/* IMAGE + RIGHT TEXT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
        
        {/* RIGHT TEXT */}
        <div className="max-w-2xl">
          <h3 className="text-[26px] sm:text-[28px] font-bold">
            {sideMainHeading}
          </h3>

          <p className="mt-4 text-[16px] sm:text-[18px] text-black leading-relaxed">
            {sideParagraph}
          </p>

          {sideParagraph2 && (
            <p className="mt-4 text-[16px] sm:text-[18px] text-black leading-relaxed">
              {sideParagraph2}
            </p>
          )}
        </div>

        {/* LEFT IMAGE BOX */}
        <div className="w-full max-w-[380px] h-[320px] sm:h-[360px] bg-white rounded-3xl shadow border border-black overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Section visual"
              className="w-full h-full object-cover rounded-3xl"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400 text-sm">
              Image
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionSection;
