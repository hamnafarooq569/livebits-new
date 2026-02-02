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

const offerings = [
  {
    title: "High-Resolution Product Mockups",
    description:
      "Realistic product visuals ideal for branding, packaging, marketing presentations, and client approvals.",
  },
  {
    title: "Custom Digital Mockups",
    description:
      "Tailored mockups for websites, mobile applications, and interactive user interface preview screens.",
  },
  {
    title: "Professional Branding Mockups",
    description:
      "Showcase logos and visual identities in real-world contexts for impactful brand presentations.",
  },
  {
    title: "Editable Mockup Templates",
    description:
      "Easily customizable mockup files for changing colors, artwork, textures, and brand assets quickly.",
  },
  {
    title: "3D Mockup Visuals",
    description:
      "Three-dimensional mockups that add depth, realism, and enhanced presentation quality to designs.",
  },
  {
    title: "Apparel & Merchandise Mockups",
    description:
      "Lifelike mockups for clothing, accessories, and merchandise used in online stores and campaigns.",
  },
  {
    title: "Photorealistic Packaging Mockups",
    description:
      "Boxes, jars, pouches, labels, and containers shown realistically for packaging proposals and approvals.",
  },
  {
    title: "Complete Mockup Bundles",
    description:
      "Curated mockup sets designed to support marketing campaigns, pitch decks, and design showcases.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation & Requirements:",
    description:
      "Understand the client’s vision, product details, target audience, and overall design goals.",
  },
  {
    number: "02",
    title: "Concept Development:",
    description:
      "Create initial mockup concepts based on client input, branding guidelines, and project direction.",
  },
  {
    number: "03",
    title: "Design Iteration:",
    description:
      "Refine and adjust the mockup design based on feedback to ensure accuracy and alignment.",
  },
  {
    number: "04",
    title: "Responsive Design:",
    description:
      "Ensure the mockup adapts well across multiple devices, screen sizes, and viewing environments.",
  },
  {
    number: "05",
    title: "Final Presentation:",
    description:
      "Present the polished mockup with realistic details to visualize the final product experience.",
  },
  {
    number: "06",
    title: "Delivery & Support:",
    description:
      "Deliver final mockup files and offer support for usage, presentation, or implementation.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Mockup\nDesign\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Mockup Design Services by LiveBits"
        mainParagraph={[
          "Mockup design is essential for bringing creative ideas to life in the most realistic way possible. Whether you’re working on branding, packaging, app interfaces, or product presentations, mockups help you visualize your final results before they go into production. At LiveBits, we turn your concepts into professional and captivating visual previews that impress clients and elevate your brand."
        ]}

        subHeading="What Makes Mockup Design So Important?"
        subParagraph={[
          "Mockups give shape to your ideas, allowing you to see exactly how your design will appear in the real world. They act as a bridge between the creative concept and the final product—helping clients make confident decisions and helping designers refine their ideas. From digital interfaces to physical product packaging, mockups provide clarity, precision, and context."
        ]}

        mainImage={{
          src: "/mockup-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Mockup Design?"
        points2={[
          "High-Quality Realistic Mockups – We create mockups that showcase your ideas with lifelike clarity.",
          "Accurate Visual Representation – Help clients understand the final output before production begins.",
          "Brand-Consistent Designs – Every mockup is tailored to your branding, style, and project needs.",
          "Enhanced Presentation Value – Ideal for pitch decks, client approvals, product listings, and marketing campaigns.",
          "Modern Tools & Techniques – We use advanced tools for crisp quality, depth, and visual realism.",
          "Fast Delivery & Variations – Multiple mockup options to support decision-making and creative exploration."
        ]}

        partnerTitle="Mockups That Transform Your Visual Presentation"
        partnerDescription="Whether it’s a digital interface or a physical product, a well-designed mockup strengthens your brand image and improves how your audience perceives your work. LiveBits helps you present your designs confidently with mockups that look polished, professional, and market-ready."

        footerTitle="Bring Your Ideas to Life with Professional Mockups"
        footerDescription="From startups to established brands, our mockup designs are crafted to support all creative needs. Partner with LiveBits to turn your concepts into stunning visual realities that enhance every presentation and campaign."

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
        heading="Our Mock-Up Designing  Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <ServiceToolsTabs/>
      <TestimonialsSection bgColor="#ffffffff"/>

      <FaqSection bgColor="#ffffff"/>
      <BlogListSection bgColor="#f8f8f8"/>

    </>
  );
}
