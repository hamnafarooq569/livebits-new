"use client";

import React from "react";

interface SolutionSectionProps {

  imageSrc?: string;
  SmallHeading: string;
  MainHeading: string;
  Paragraph: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  imageSrc,
  SmallHeading,
  MainHeading,
  Paragraph,
}) => {
  return (
    <section className="w-full bg-white py-20 px-16">

      {/* IMAGE + RIGHT TEXT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-right gap-45">
                {/* RIGHT TEXT */}
        <div className="max-w-2xl">
          <p className="text-black font-semibold text-[18px]">{SmallHeading}</p>

          <h3 className="text-[28px] font-bold mt-3">{MainHeading}</h3>

          <p className="mt-4 text-[18px] text-black leading-relaxed">{Paragraph}</p>
        </div>

        {/* LEFT IMAGE BOX */}
        <div className="w-94 h-94 bg-white rounded-3xl shadow border border-black flex items-right justify-right  overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Section visual"
              className="w-full h-full object-cover rounded-3xl"
            />
          ) : (
            <div className="text-gray-400 text-sm">Image</div>
          )}
        </div>


      </div>
    </section>
  );
};

export default SolutionSection;
