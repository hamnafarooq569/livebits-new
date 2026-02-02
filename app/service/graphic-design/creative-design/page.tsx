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
    title: "Custom Logo Designs",
    description:
      "Logos crafted to reflect your brand’s personality and build strong visual recognition.",
  },
  {
    title: "Eye-Catching Banner Designs",
    description:
      "Banners designed to boost visibility and performance across websites and social media.",
  },
  {
    title: "Professional Mockup Development",
    description:
      "Realistic mockups that help visualize final results before production or publishing.",
  },
  {
    title: "Booklet & Catalog Design",
    description:
      "Structured booklet layouts that organize information beautifully and communicate clearly.",
  },
  {
    title: "Business Card Design",
    description:
      "Professional, memorable business cards designed to leave strong first impressions.",
  },
  {
    title: "Product Packaging Design",
    description:
      "Attractive, functional packaging that enhances product appeal and draws customers in.",
  },
  {
    title: "User-Focused UI/UX Design",
    description:
      "Designs that improve navigation, usability, and digital experience across all platforms.",
  },
  {
    title: "Creative Graphic Solutions",
    description:
      "Tailored visuals for branding, marketing, and promotions across digital and print channels.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Define Objectives:",
    description:
      "Set clear goals, target audience, and purpose to ensure the design aligns with the project vision.",
  },
  {
    number: "02",
    title: "Research & Ideation:",
    description:
      "Analyze market trends, competitors, and audience behavior to generate innovative, brand-aligned ideas.",
  },
  {
    number: "03",
    title: "Concept Creation:",
    description:
      "Develop initial sketches, wireframes, or storyboards to visualize direction and gather early feedback.",
  },
  {
    number: "04",
    title: "Collect Content:",
    description:
      "Gather logos, text, images, and brand assets to ensure all design elements work cohesively.",
  },
  {
    number: "05",
    title: "Design Implementation:",
    description:
      "Use professional tools to craft visually engaging designs with strong layout, typography, and color harmony.",
  },
  {
    number: "06",
    title: "Feedback Integration:",
    description:
      "Refine and enhance the design based on stakeholder feedback to meet strategic and aesthetic goals.",
  },
  {
    number: "07",
    title: "Test & Optimize:",
    description:
      "Ensure compatibility, responsiveness, and performance across platforms with detailed design optimization.",
  },
  {
    number: "08",
    title: "Deliver Final Design:",
    description:
      "Provide polished outputs in print-ready and digital formats suitable for all intended platforms.",
  },
  {
    number: "09",
    title: "Post-Launch Support:",
    description:
      "Offer updates, revisions, and ongoing support to keep the design aligned with evolving brand needs.",
  },
];





export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."   />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Creative Design Solutions by LiveBits"
        mainParagraph={[
          "At LiveBits, we turn your ideas into powerful visual experiences that make your brand stand out. Whether you need design work for digital platforms, print media, mobile apps, or brand identity, our creative team delivers designs that are visually appealing, purposeful, and memorable. Every element we create is crafted to strengthen your brand identity and connect with your audience meaningfully."
        ]}

        subHeading="Design That Elevates Your Brand"
        subParagraph={[
          "Our goal is simple: to help businesses communicate clearly, confidently, and creatively. With designs made to enhance user engagement, build credibility, and support your brand message, LiveBits ensures that every visual element works together seamlessly — across websites, social media, packaging, marketing campaigns, or print materials."
        ]}

        mainImage={{
          src: "/designing.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[450px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Strategic, creative designs built with a deep understanding of your brand vision.",
          "High-quality visuals delivered for both digital platforms and professional print formats.",
          "Fast turnaround times without compromising creativity, detail, or quality.",
          "Cross-platform consistency to ensure your brand looks polished everywhere it appears.",
          "A skilled, experienced design team capable of delivering work from logos to full UI/UX.",
          "Complete ownership of final designs with delivery in all required formats and sizes."
        ]}

        partnerTitle="Let’s Shape Your Brand Identity Together"
        partnerDescription="From concept to final execution, LiveBits delivers visuals that elevate your brand and support long-term growth. Our designs strengthen your presence, enhance credibility, and create lasting impressions that connect with your audience."

        footerTitle="Ready to Bring Your Vision to Life?"
        footerDescription="Let’s create designs that speak louder than words. Partner with LiveBits to craft powerful, creative visuals that take your brand further."

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
        heading="Our Creative Designing Process"
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
