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
    title: "Custom Banner Designs",
    description:
      "Tailored banner designs that highlight your brand identity and marketing message effectively.",
  },
  {
    title: "Web Banner Designs",
    description:
      "High-impact digital banners optimized to boost click-through rates and online engagement.",
  },
  {
    title: "Event & Exhibition Banners",
    description:
      "Large-scale event banners designed to create strong visual presence at exhibitions and conferences.",
  },
  {
    title: "High-Resolution Print Banners",
    description:
      "Sharp, vibrant banners suitable for storefronts, billboards, stands, and promotional displays.",
  },
  {
    title: "Informational Banner Designs",
    description:
      "Clear and structured banners crafted to communicate essential details for marketing or events.",
  },
  {
    title: "Transactional CTA Banners",
    description:
      "Conversion-focused banners with strong CTAs designed to encourage immediate customer action.",
  },
  {
    title: "Social Media Banners",
    description:
      "Platform-optimized banner designs for Facebook, Instagram, LinkedIn, YouTube, and promotions.",
  },
  {
    title: "Retail & Display Banners",
    description:
      "Eye-catching retail display banners that attract walk-in customers and increase visibility.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Consultation & Requirements:",
    description:
      "Understand the client’s campaign goals, target audience, banner purpose, and required dimensions.",
  },
  {
    number: "02",
    title: "Concept Creation:",
    description:
      "Develop initial banner concepts based on the brand identity and marketing message.",
  },
  {
    number: "03",
    title: "Design Refinement:",
    description:
      "Revise and refine design concepts according to client feedback and creative direction.",
  },
  {
    number: "04",
    title: "Content Optimization:",
    description:
      "Ensure messaging clarity with refined typography, balanced layout, and compelling visuals.",
  },
  {
    number: "05",
    title: "Final Design & Resolution:",
    description:
      "Prepare the banner in proper dimensions and resolution for print or digital use.",
  },
  {
    number: "06",
    title: "Approval & Delivery:",
    description:
      "Deliver final banner files in required formats after obtaining full client approval.",
  },
  {
    number: "07",
    title: "Client Review & Edits:",
    description:
      "Share drafts with the client and incorporate feedback for polished final results.",
  },
  {
    number: "08",
    title: "Final Post & Publishing:",
    description:
      "Publish the banner online or prepare it for printing with full optimization ensured.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Banner\nDesign\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Banner Design Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we design banners that make a powerful first impression—whether for digital platforms or physical displays. Each banner is crafted to instantly capture attention, align with your brand identity, and deliver your message with clarity and visual impact. Our designs combine creativity with strategic intent to ensure your banners stand out wherever they appear."
        ]}

        subHeading="Designed to Communicate With Impact"
        subParagraph={[
          "Banner design is more than attractive visuals—it’s a communication tool that conveys your message within seconds. At LiveBits, we create banners that promote your products, highlight your brand, and engage your audience effectively. From online ads to event displays, we ensure every banner is well-structured, purposeful, and visually compelling."
        ]}

        mainImage={{
          src: "/banner-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Banner Designing?"
        points2={[
          "Custom banner designs aligned with your brand message, business tone, and marketing goals.",
          "High-impact visuals designed to improve visibility, engagement, and conversion across platforms.",
          "Strategic blending of headlines, imagery, and CTAs for powerful communication value.",
          "Designs optimized for print, web, events, storefronts, and social media advertising.",
          "Fast delivery with high-resolution outputs in all necessary formats and sizes.",
          "A skilled design team using modern tools to create impactful banners for any purpose."
        ]}

        partnerTitle="Perfect Banners for Every Purpose"
        partnerDescription="Whether your goal is to inform, promote, or convert, LiveBits creates banners designed to achieve your specific objective. With strong visuals and clear messaging, we ensure your audience notices, remembers, and responds to your banner instantly."

        footerTitle="Ready to Boost Your Brand Visibility?"
        footerDescription="Let LiveBits create compelling, results-driven banners that elevate your campaigns, strengthen your marketing presence, and deliver maximum impact."

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
        heading="Our Banner Designing Process"
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
