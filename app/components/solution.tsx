"use client";

import React from "react";

interface SolutionSectionProps {
  imageSrc?: string;
  MainHeading: string;
  IntroParagraph: string;
  BulletPoints: string[];
  EndingParagraph?: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  imageSrc,
  MainHeading,
  IntroParagraph,
  BulletPoints,
  EndingParagraph,
}) => {
  return (
    <section className="w-full bg-white py-20 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <h3 className="text-[28px] font-bold mb-4">{MainHeading}</h3>

          {/* Intro paragraph */}
          <p className="text-[18px] text-black leading-relaxed mb-4">
            {IntroParagraph}
          </p>

          {/* Bullet points */}
          <ul className="list-disc pl-6 space-y-2 text-[17px] text-black mb-4">
            {BulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Ending paragraph */}
          <p className="text-[18px] text-black leading-relaxed">
            {EndingParagraph}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-94 h-94 bg-white rounded-3xl shadow border border-black flex items-center justify-center overflow-hidden">
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
