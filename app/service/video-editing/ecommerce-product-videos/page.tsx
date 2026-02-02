import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogSection from "../../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "High-Quality Commercial Videos",
    description:
      "Showcase your products attractively to boost brand awareness, viewer engagement, and overall sales.",
  },
  {
    title: "Informational Product Videos",
    description:
      "Educate customers about product features, benefits, and usage through clear, engaging visual content.",
  },
  {
    title: "Customer Trust-Building Videos",
    description:
      "Enhance credibility and reduce purchase hesitation using transparent, honest, and detailed product displays.",
  },
  {
    title: "Social Media Optimized Videos",
    description:
      "Create tailored product video content optimized for Instagram, TikTok, YouTube, and other social platforms.",
  },
  {
    title: "Enhanced Engagement Videos",
    description:
      "Keep viewers engaged longer with captivating product visuals that reduce bounce rates effectively.",
  },
  {
    title: "SEO-Friendly Product Videos",
    description:
      "Improve website rankings and visibility by incorporating search-optimized video elements for products.",
  },
  {
    title: "Custom Brand-Focused Videos",
    description:
      "Design product videos that reflect your unique brand identity, style, message, and values.",
  },
  {
    title: "Conversion-Driven Video Content",
    description:
      "Create persuasive product videos focused on driving purchases and accelerating customer decisions efficiently.",
  },
];





const processSteps = [
  {
    number: "01",
    title: "Understand Product & Goals:",
    description:
      "Discuss the product’s features and define the video’s purpose, such as showcase or tutorial.",
  },
  {
    number: "02",
    title: "Script & Storyboard:",
    description:
      "Write a clear script and create a storyboard to map out the video’s structure and flow.",
  },
  {
    number: "03",
    title: "Filming or Animation:",
    description:
      "Film the product from multiple angles or produce animated visuals for clear presentation.",
  },
  {
    number: "04",
    title: "Editing & Enhancements:",
    description:
      "Edit the footage, highlight key features, and enhance the visuals for better clarity.",
  },
  {
    number: "05",
    title: "Text Overlays & Call-to-Action:",
    description:
      "Add informative text overlays and a strong CTA to encourage viewer action.",
  },
  {
    number: "06",
    title: "Sound Design:",
    description:
      "Include background music, voiceovers, and sound effects to improve engagement.",
  },
  {
    number: "07",
    title: "Client Review & Revisions:",
    description:
      "Share the video with the client and make revisions based on their feedback.",
  },
  {
    number: "08",
    title: "Final Export & Delivery:",
    description:
      "Deliver the finalized product video in formats optimized for e-commerce platforms.",
  },
];





export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`E-Commerce Product Videos\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="E-Commerce Product Video Services"
        mainParagraph={[
          "In the modern era of online shopping, capturing customer attention quickly is essential. At LiveBits, we create high-quality e-commerce product videos that not only showcase your products clearly but also help customers visualize using them in real life. These videos boost engagement, drive conversions, and give your online store a polished, professional edge."
        ]}

        subHeading="Why E-Commerce Product Videos Are Important"
        subParagraph={[
          "Product videos go beyond static images and descriptions by demonstrating how items work, highlighting key features, and emphasizing real-life benefits. They increase customer confidence, reduce uncertainty, and build trust. Informational videos educate customers on product usage, while commercial videos reinforce your brand’s value. Well-crafted videos also improve SEO, increase time on your site, and enhance overall visibility."
        ]}

        mainImage={{
          src: "/product-video.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[520px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Product Videos"
        points2={[
          "Professional Quality – High-definition videos that showcase your products attractively and effectively.",
          "Conversion-Focused – Videos strategically designed to increase engagement, sales, and customer satisfaction.",
          "Custom Content – Tailored video styles that align with your brand identity and product values.",
          "Commercial & Informational – Promotional and educational videos suited for all types of e-commerce products.",
          "Customer Trust Building – Clear, transparent product displays that reduce doubts and boost confidence.",
          "Search Engine Optimization – Video content optimized to enhance rankings and overall online visibility.",
        ]}

        partnerTitle="Bring Your Products to Life"
        partnerDescription="At LiveBits, we transform your product listings into visually captivating experiences. Whether you're a startup or an established e-commerce brand, our videos enhance the customer journey, making your products more memorable, engaging, and purchase-ready."

        footerTitle="Get Started with Product Videos"
        footerDescription="Ready to increase engagement and sales with professional product videos? Contact LiveBits today and let us help your online store thrive with stunning, conversion-driven video content."

          sideImage={{
          src: "/ecommerce-product-2.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />












      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our E-Commerce Product Videos Process"
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
