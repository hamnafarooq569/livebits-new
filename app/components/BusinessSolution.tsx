"use client";

import React from "react";

interface BusinessSolutionSectionProps {
  imageSrc?: string;
  sideSmallHeading: string;
  sideMainHeading: string;
  sideParagraph: string;
  mainTitle?:string;
}

const BusinessSolutionSection: React.FC<BusinessSolutionSectionProps> = ({
  imageSrc,
  sideSmallHeading,
  sideMainHeading,
  sideParagraph,
}) => {
  return (
    <section className="w-full bg-[#eedc82] py-20 px-16">

      {/* IMAGE + RIGHT TEXT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-right gap-45">
                {/* RIGHT TEXT */}
        <div className="max-w-2xl mt-10">
          <p className="text-black font-semibold text-[18px]">{sideSmallHeading}</p>

          <h3 className="text-[28px] font-bold mt-3">{sideMainHeading}</h3>

          <p className="mt-4 text-[18px] text-black leading-relaxed">{sideParagraph}</p>
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

export default BusinessSolutionSection;
