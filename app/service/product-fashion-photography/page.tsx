import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Product Photography for E-Commerce Stores",
    description:
      "High-quality images optimized for online product listings and catalogs.",
  },
  {
    title: "Fashion Photography Sessions",
    description:
      "Professionally styled shoots that highlight clothing, accessories, and lifestyle products.",
  },
  {
    title: "Social Media Visual Content",
    description:
      "Engaging images tailored for Instagram, Facebook, and other marketing platforms.",
  },
  {
    title: "Print-Ready Photography Materials",
    description:
      "Photos formatted for brochures, banners, and promotional print media.",
  },
  {
    title: "Professional Image Retouching Services",
    description:
      "Editing and enhancement for flawless, visually compelling product imagery.",
  },
  {
    title: "High-Resolution Digital Files",
    description:
      "Crisp, clear images suitable for web, print, and marketing campaigns.",
  },
  {
    title: "Customized Visual Storytelling",
    description:
      "Photography that tells your brand story and connects with your target audience.",
  },
  {
    title: "Studio and On-Location Shoots",
    description:
      "Flexible setups in controlled studios or on-site environments for authentic results.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Pre-Shoot Planning",
    description:
      "Define the vision, target audience, and product requirements. Select locations, props, and models (if needed).",
  },
  {
    number: "02",
    title: "Lighting Setup",
    description:
      "Choose the ideal lighting to enhance product features, whether natural or studio lighting.",
  },
  {
    number: "03",
    title: "Product Styling",
    description:
      "Ensure the product is clean, polished, and well-presented. Adjust for aesthetic appeal.",
  },
  {
    number: "04",
    title: "Shoot Execution",
    description:
      "Capture multiple angles and variations, ensuring clarity, detail, and visual impact.",
  },
  {
    number: "05",
    title: "Post-Processing",
    description:
      "Edit photos for color correction, retouching, and optimization for digital platforms.",
  },
  {
    number: "06",
    title: "Delivery & Integration",
    description:
      "Provide optimized images ready for e-commerce, social media, or print use.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Product and\nFashion Photography`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."/>

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



    <WhyLiveBits
      heading="Professional Photography Services by LiveBits"
      mainParagraph={[
        "At LiveBits, we specialize in professional product and fashion photography that elevates your brand. Our high-quality images highlight every detail of your products, capturing attention and creating a lasting impression for e-commerce, social media, and promotional campaigns.",
      ]}
      subHeading="Why Photography Matters"
      subParagraph={[
        "Great visuals are key to brand recognition and customer engagement. LiveBits ensures each photo is meticulously composed, perfectly lit, and digitally optimized to showcase your products in the best possible way across all platforms.",
      ]}
      heading2="Why Choose LiveBits?"
      points2={[
        "Tailored High-Quality Photos – Custom shots designed to match your brand style and resonate with your audience.",
        "Perfect Lighting and Composition – Expertly crafted setups to tell a story and enhance product appeal.",
        "Cross-Platform Versatility – Images optimized for online stores, social media, and print marketing materials.",
        "Digital Ready Visualization – Photos prepared for web use, ensuring fast-loading and visually engaging visuals.",
        "Top-Tier Camera Equipment – Professional DSLR cameras capturing sharp, colorful, and detailed product images.",
        "Professional Retouching Services – Every image is edited and retouched to perfection for maximum impact.",
      ]}
      partnerTitle="Make Your Products Stand Out"
      partnerDescription="  With LiveBits, your products gain visual prominence that attracts attention, increases engagement, and drives conversions. Our photography services are designed to help your brand shine in a competitive marketplace."
      footerTitle="Ready to Capture Your Brand’s Essence?"
      footerDescription="Contact LiveBits today to create stunning photography that elevates your products and strengthens your brand image."

          sideImage={{
          src: "/image-2.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
    />



      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our Product and Fashion Photography Process"
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
