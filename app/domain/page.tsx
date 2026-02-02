// app/cloud-hosting/page.tsx (example)

import ChoosePlanToggle from "../components/ChoosePlanToggle";
import Domain from "../components/DomainHero";
import FaqSection from "../components/FaqSection";

import TestimonialsSection from "../components/TestimonialsSection";
;
import OurTrustedPartnersFaded from "../components/OurTrustedPartners";
import BlogSection from "../components/BlogSection";

export default function DomainPage() {
  return (
    <>
      <Domain />
      <ChoosePlanToggle />
      <TestimonialsSection />
      <OurTrustedPartnersFaded/>
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f9f9f9]" />

      {/* rest of the page */}
    </>
  );
}
