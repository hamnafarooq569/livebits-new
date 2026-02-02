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
    title: "Custom Design Creation",
    description:
      "Professionally designed business cards tailored to your brand identity and visual style requirements.",
  },
  {
    title: "Premium Printing Options",
    description:
      "High-quality printing with vibrant colors, sharp detailing, and luxurious finishing choices available.",
  },
  {
    title: "Logo Integration",
    description:
      "Business cards that seamlessly incorporate your company logo for strong and consistent branding.",
  },
  {
    title: "Readable Typography & Layout",
    description:
      "Strategically arranged text and typography ensuring clear visibility of all essential contact details.",
  },
  {
    title: "Unique Shapes & Finishes",
    description:
      "Creative card designs featuring embossing, foil, raised print, or custom shapes for impact.",
  },
  {
    title: "Corporate & Personal Bundles",
    description:
      "Flexible design packages suitable for individuals, small teams, or large organizations requiring consistency.",
  },
  {
    title: "Quick Customization & Delivery",
    description:
      "Fast customization options and instant digital delivery for stress-free business card ordering.",
  },
  {
    title: "Creative & Modern Styles",
    description:
      "Stylish, innovative card designs blending modern aesthetics with professional business appeal effectively.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Consultation & Branding Analysis:",
    description:
      "Understand the brand, target audience, and essential information required for the business card.",
  },
  {
    number: "02",
    title: "Creative Concept Development:",
    description:
      "Design initial business card concepts that reflect the brand’s identity and professional purpose.",
  },
  {
    number: "03",
    title: "Layout & Typography Selection:",
    description:
      "Select clear, readable typography and organize card content for maximum clarity and impact.",
  },
  {
    number: "04",
    title: "Visual Enhancement:",
    description:
      "Incorporate logo, colors, and visual elements to ensure the business card stands out.",
  },
  {
    number: "05",
    title: "Feedback & Refinement:",
    description:
      "Present the design to the client and refine the layout and visuals based on feedback.",
  },
  {
    number: "06",
    title: "Final Design & File Delivery:",
    description:
      "Provide the finalized business card design in high-resolution, print-ready file formats.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Business Card\nDesigning\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Business Card Design Services by LiveBits"
        mainParagraph={[
          "A business card is often the first tangible impression of your brand. At LiveBits, we specialize in designing bespoke business cards that are creative, professional, and memorable. Whether you are a freelancer, entrepreneur, or part of a large organization, we craft designs that reflect your brand identity while leaving a lasting impact on your clients, partners, and prospects."
        ]}

        subHeading="The Importance of Professional Business Card Design"
        subParagraph={[
          "A well-designed business card extends your branding into the real world. It communicates professionalism, creativity, and the values of your business at a glance. Our cards ensure that your brand message is consistent while helping you stand out in competitive marketplaces. Every design element—from color schemes to typography and logo placement—is thoughtfully chosen to reflect your business tone and ethics."
        ]}

        mainImage={{
          src: "/business-card-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Business Card Design?"
        points2={[
          "Custom & Memorable Designs – Tailored business cards that reflect your unique brand identity.",
          "High-Quality Print Ready – Fully prepared files ensuring vivid colors, clarity, and premium printing.",
          "Brand Consistency – Designs aligned with your logo, color palette, and overall brand style.",
          "Clarity & Readability – Clean typography and structured layouts for easy information access.",
          "Innovative Options – Creative shapes, finishes, textures, and premium design enhancements.",
          "Quick & Convenient – Easy customization, fast turnaround, and downloadable ready-to-print files."
        ]}

        partnerTitle="Enhance Your Brand Image with LiveBits"
        partnerDescription="Our business card designs help you make a powerful first impression, build credibility, and communicate professionalism. Each card is crafted to reflect your brand’s personality while maintaining functionality, elegance, and clarity."

        footerTitle="Create Lasting Impressions with LiveBits"
        footerDescription="Partner with LiveBits to craft stunning, memorable business cards that elevate your brand identity and leave a lasting impact on every potential client or connection."

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
        heading="Our Business Card Designing Process"
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
