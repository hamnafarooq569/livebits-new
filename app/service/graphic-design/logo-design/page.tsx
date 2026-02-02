import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogListSection from "../../../components/BlogListSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";
import BlogSection from "@/app/components/BlogSection";

const offerings = [
  {
    title: "Custom Logo Concepts",
    description:
      "Tailored logo designs crafted to reflect your brand identity, values, and long-term vision effectively.",
  },
  {
    title: "Industry-Focused Variations",
    description:
      "Multiple creative logo concepts designed after analyzing your industry, competitors, and audience insights.",
  },
  {
    title: "High-Resolution Output",
    description:
      "Premium-quality logo files suitable for printing, digital branding, packaging, and marketing materials.",
  },
  {
    title: "Scalable Vector Logos",
    description:
      "Vector-based logo files ensuring perfect clarity across all print sizes and digital platforms.",
  },
  {
    title: "Brand-Aligned Typography",
    description:
      "Font and color selections designed to enhance recognition and maintain brand consistency everywhere.",
  },
  {
    title: "Modern & Creative Styles",
    description:
      "Choose from minimalistic, luxury, abstract, artistic, retro, or corporate logo styling options.",
  },
  {
    title: "Refinement & Revision Cycles",
    description:
      "Iterative design improvements ensuring your chosen logo concept is perfected and client-approved.",
  },
  {
    title: "Complete Ownership Rights",
    description:
      "Editable source files included, granting full usage rights and flexibility for long-term branding.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Consultation & Research:",
    description:
      "Understand the brand, industry landscape, competitors, and target audience for strategic logo planning.",
  },
  {
    number: "02",
    title: "Concept Development:",
    description:
      "Create initial logo concepts that reflect your brand identity, values, and positioning.",
  },
  {
    number: "03",
    title: "Design Refinement:",
    description:
      "Revise and refine logo concepts based on client feedback to achieve the perfect design.",
  },
  {
    number: "04",
    title: "Typography & Color Selection:",
    description:
      "Select the ideal font styles and color palette that align with your brand personality.",
  },
  {
    number: "05",
    title: "Final Design & Formats:",
    description:
      "Prepare the final logo in multiple formats including vector, PNG, JPG, and transparent versions.",
  },
  {
    number: "06",
    title: "Delivery & Support:",
    description:
      "Deliver complete logo files with usage guidelines and ongoing support when needed.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Logo\nDesigning\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Logo Design Services by LiveBits"
        mainParagraph={[
          "A great logo is the foundation of a powerful brand identity. At LiveBits, we specialize in designing unique, memorable, and meaningful logos that reflect your brand’s personality and vision. Whether you're launching a new business or refreshing your brand, our expert designers craft logos that leave a lasting impression across digital and physical platforms."
        ]}

        subHeading="Why Professional Logo Design Matters"
        subParagraph={[
          "A logo is often the first visual element customers associate with your brand. A professionally designed logo enhances recognition, builds trust, and sets the tone for your brand identity. With LiveBits, every design is intentional—crafted to communicate your values, differentiate you from competitors, and strengthen your presence across all media."
        ]}

        mainImage={{
          src: "/logo-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[450px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Logo Design?"
        points2={[
          "Custom & Memorable Designs – Tailored logo concepts that capture your brand’s essence authentically.",
          "Industry-Researched Concepts – Designs informed by market trends, competitors, and audience behavior.",
          "High-Quality Vector Output – Logos delivered in scalable formats for all branding applications.",
          "Brand-Aligned Aesthetics – Typography, symbols, and colors chosen specifically to match your identity.",
          "Multiple Design Variations – Explore diverse logo styles before selecting the final version.",
          "Refinement & Perfection – Iterative revisions ensuring the final logo aligns with your vision completely."
        ]}

        partnerTitle="Elevate Your Brand Identity"
        partnerDescription="A logo is more than just a graphic — it’s a symbol of your brand's values, style, and uniqueness. LiveBits crafts professional logo designs that help businesses stand out, build trust, and create a strong visual identity customers remember."

        footerTitle="Start Your Logo Design Journey Today"
        footerDescription="Partner with LiveBits to create a professional, impactful, and timeless logo that strengthens your branding across all platforms."
     
          sideImage={{
          src: "/image-2.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
     
     />




      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Blog Designing Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <ServiceToolsTabs/>
      <TestimonialsSection bgColor="#ffffffff"/>

      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </>
  );
}
