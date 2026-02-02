import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import DigitalMarketingTools, { MarqueeSection } from "../../components/MarketingTools";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Custom Printing Solutions",
    description:
      "Tailored business cards, brochures, banners, and packaging aligned with your brand identity.",
  },
  {
    title: "Premium Packaging Design",
    description:
      "Creative and functional packaging solutions that enhance product appeal and shelf presence.",
  },
  {
    title: "Logo & Branding Design",
    description:
      "Professionally crafted logos and brand visuals that ensure instant recognition.",
  },
  {
    title: "Marketing Collateral Printing",
    description:
      "High-quality flyers, posters, catalogs, and promotional materials for campaigns.",
  },
  {
    title: "Eco-Friendly Printing Options",
    description:
      "Sustainable materials and processes supporting environmentally responsible branding.",
  },
  {
    title: "Ready-to-Use Graphics",
    description:
      "Print-ready and digital-friendly graphics optimized for web and physical use.",
  },
  {
    title: "Custom Formats & Finishes",
    description:
      "Unique sizes, textures, and finishes designed for specific branding needs.",
  },
  {
    title: "High-Precision Production",
    description:
      "Advanced printing technology delivering sharp, vibrant, and flawless results.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description:
      "Set clear goals for branding, packaging, or promotions while identifying the target audience and key messaging.",
  },
  {
    number: "02",
    title: "Material Selection",
    description:
      "Choose suitable materials such as brochures, business cards, or packaging based on durability, texture, and intended use.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Collaborate with designers to create custom, brand-aligned visuals that are engaging and competitive.",
  },
  {
    number: "04",
    title: "Prototyping",
    description:
      "Develop samples to test design concepts, color accuracy, and material quality before production.",
  },
  {
    number: "05",
    title: "Pre-Production Approval",
    description:
      "Review and approve final designs to ensure brand consistency and stakeholder satisfaction.",
  },
  {
    number: "06",
    title: "Printing & Production",
    description:
      "Select the appropriate printing method (digital or offset) and begin large-scale production.",
  },
  {
    number: "07",
    title: "Quality Control",
    description:
      "Monitor color accuracy and print quality throughout production to meet defined standards.",
  },
  {
    number: "08",
    title: "Packaging",
    description:
      "Securely package printed materials while ensuring alignment with brand presentation guidelines.",
  },
  {
    number: "09",
    title: "Distribution",
    description:
      "Plan and execute timely delivery based on campaign schedules or product launch timelines.",
  },
  {
    number: "10",
    title: "Post-Delivery Review",
    description:
      "Evaluate project success and gather feedback to improve future printing and packaging initiatives.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Printing\nPackages Design\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."   />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Printing & Packaging Solutions by LiveBits"
        mainParagraph={[
          "At LiveBits, we deliver premium printing and packaging solutions that help your brand stand out with confidence. From custom packaging to marketing materials, our services are crafted to ensure visual impact, brand consistency, and professional excellence across every touchpoint.",
        ]}
        subHeading="Why Printing & Packaging Matters"
        subParagraph={[
          "High-quality printing and packaging play a vital role in brand recognition, customer trust, and purchasing decisions. LiveBits combines creative design, modern technology, and precision finishing to produce materials that leave lasting impressions and strengthen your brand identity.",
        ]}

        mainImage={{
          src: "/P&P-01.png",
          alt: "Printing and Packaging Solutions",
          width: 1250,
          height: 350,
          position: "right",
          className: "w-full max-w-[550px] h-[420px] object-contain rounded-xl",
        }}

        heading2="Why Choose LiveBits?"
        points2={[
          "Custom Brand-Focused Designs – Tailored printing and packaging solutions aligned with your brand identity and marketing goals.",
          "Unmatched Quality Standards – Exceptional attention to detail, color accuracy, and premium finishing using advanced technology.",
          "Professional Design Expertise – Skilled graphic designers create visually striking, memorable, and recognizable brand materials.",
          "Fast & Reliable Delivery – Timely execution without compromising quality, ensuring materials are delivered on schedule.",
          "Eco-Friendly Approach – Sustainable materials and processes that reduce environmental impact while maintaining premium quality.",
          "Flexible Customization – Multiple formats, finishes, and sizes designed to meet unique business requirements.",
        ]}
        partnerTitle="Take Your Brand to the Next Level"
        partnerDescription="With LiveBits, your brand presentation becomes more professional, polished, and impactful. Our printing and packaging solutions ensure consistency across all platforms, helping your business attract attention and build credibility."
        footerTitle="Ready to Elevate Your Brand?"
        footerDescription="Partner with LiveBits today to create printing and packaging solutions that enhance visibility, professionalism, and lasting brand impressions."

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
        heading="Our Printing Package Process"
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
