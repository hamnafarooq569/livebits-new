"use client";

import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface BusinessSolutionSectionProps {
  features: Feature[];
}

const BusinessSolutionSection: React.FC<BusinessSolutionSectionProps> = ({ features }) => {
  return (
    <section className="w-full bg-[#eedc82] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[32px] font-extrabold mb-8 text-left text-[#111]">
          Key Features of Our MIS Solutions:
        </h2>

        {/* Features List */}
        <div>
          <ul className="list-disc list-inside text-[18px] pl-6">
            {features.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="font-semibold text-[18px] text-black">
                  {item.title}
                </span>
                <span className="text-[18px] text-black ml-2">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionSection;
