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
    title: "Marketing Booklet Designs",
    description:
      "Professionally designed booklets that organize detailed marketing content into attractive, easy-to-read layouts.",
  },
  {
    title: "Product Catalog Booklets",
    description:
      "Custom catalog designs showcasing product features, visuals, descriptions, and pricing with clean formatting.",
  },
  {
    title: "Corporate & Event Booklets",
    description:
      "Event, company profile, and corporate booklets that reinforce branding and enhance presentations.",
  },
  {
    title: "Informational & Instructional Booklets",
    description:
      "Educational, instructional, and manual-style booklets designed for clarity, structure, and comprehension.",
  },
  {
    title: "Print-Ready Brochure Files",
    description:
      "High-resolution, print-ready booklet files ensuring perfect alignment, clarity, and professional finish.",
  },
  {
    title: "Custom Typography & Theme Design",
    description:
      "Tailored typography, color schemes, and imagery perfectly aligned with your brand’s strategy and tone.",
  },
  {
    title: "Engaging Multi-Page Layouts",
    description:
      "Thoughtfully designed booklet spreads that capture attention and communicate messages effectively.",
  },
  {
    title: "Creative Multi-Page Concepts",
    description:
      "Eye-catching booklet concepts that enhance your marketing, sales, and communication effectiveness.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Initial Consultation & Strategy:",
    description:
      "Discuss the booklet’s purpose, target audience, and overall content structure for clarity.",
  },
  {
    number: "02",
    title: "Creative Conceptualization:",
    description:
      "Develop design concepts that align with the booklet’s theme, branding, and communication goals.",
  },
  {
    number: "03",
    title: "Content Layout & Design:",
    description:
      "Organize written content and design page layouts focused on readability, flow, and structure.",
  },
  {
    number: "04",
    title: "Visual Enhancements:",
    description:
      "Add high-quality images, graphics, icons, and typography to elevate the booklet’s visual appeal.",
  },
  {
    number: "05",
    title: "Proofing & Revisions:",
    description:
      "Review the booklet design with the client and refine pages based on detailed feedback.",
  },
  {
    number: "06",
    title: "Final Output & Delivery:",
    description:
      "Deliver the complete booklet design in print-ready and digital formats for distribution.",
  },
];





export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Booklet\nDesigning\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Booklet Design Services by LiveBits"
        mainParagraph={[
          "Booklets are one of the most powerful tools for presenting information in a structured, creative, and engaging way. At LiveBits, we design booklets that not only reflect your brand’s identity but also communicate your message clearly and professionally. Whether you need a marketing booklet, product catalog, company profile, or an informational guide, we transform your ideas into visually compelling designs that deliver impact."
        ]}

        subHeading="Why Booklets Matter in Effective Communication"
        subParagraph={[
          "Booklets offer a unique balance between design and detailed information, allowing businesses to explain products, services, or stories in a visually organized format. They help brands educate, inform, and engage their audience while maintaining a polished and professional appearance. With LiveBits, every page is crafted to align with your brand identity, ensuring clarity, consistency, and value for the reader."
        ]}

        mainImage={{
          src: "/booklet-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Booklet Design?"
        points2={[
          "Visually rich booklet designs that combine creativity with professional layout and aesthetics.",
          "Structured layouts that enhance readability, information flow, and audience engagement.",
          "Fully customized designs tailored to your industry, brand personality, and communication goals.",
          "Complete layout planning, typography, imagery, and print-ready formatting done with precision.",
          "Booklets that create a strong first impression and enhance brand credibility.",
          "Custom marketing, product, or informational booklets designed to meet your unique needs."
        ]}

        partnerTitle="Designed to Make Your Brand Stand Out"
        partnerDescription="From product catalogs to event booklets, our designs ensure your content is easy to navigate, visually appealing, and aligned with your goals. We create layouts that not only look stunning but also support your marketing, communication, and branding objectives."

        footerTitle="Create a Lasting Impression with LiveBits"
        footerDescription="Let LiveBits turn your content into a compelling visual experience. With expert layout structuring, typography, branding, and elegant design, your booklet will reflect professionalism, trust, and clarity from the very first page."

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
        heading="Our Booklet Designing Process"
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
