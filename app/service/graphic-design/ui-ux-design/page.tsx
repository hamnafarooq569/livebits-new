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
    title: "User Research & Analysis",
    description:
      "Conduct surveys and usability testing to understand user needs, goals, and behaviors effectively.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Create interactive prototypes that visualize product structure and user flow before development begins.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Design adaptive layouts that work seamlessly across desktops, tablets, laptops, and mobile devices.",
  },
  {
    title: "Mobile App UI Design",
    description:
      "Craft visually appealing and intuitive interfaces for smooth iOS and Android app experiences.",
  },
  {
    title: "Interaction & Micro-Animation Design",
    description:
      "Design engaging interactions and subtle animations that enhance usability and user satisfaction.",
  },
  {
    title: "UX Strategy & Planning",
    description:
      "Develop experience strategies that optimize user journeys and improve overall business outcomes.",
  },
  {
    title: "Information Architecture Design",
    description:
      "Organize content logically to improve navigation clarity and enhance user comprehension.",
  },
  {
    title: "Usability Testing & Optimization",
    description:
      "Test and refine your digital product to ensure maximum usability, efficiency, and satisfaction.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Understand the Users:",
    description:
      "Research the target audience to understand their needs, preferences, and behaviors clearly.",
  },
  {
    number: "02",
    title: "Create Wireframes & Prototypes:",
    description:
      "Design wireframes and interactive prototypes to plan layout structure and smooth user flow.",
  },
  {
    number: "03",
    title: "Design the Interface:",
    description:
      "Select colors, typography, and visuals that align with the brand and enhance user experience.",
  },
  {
    number: "04",
    title: "Test the Usability:",
    description:
      "Conduct usability tests with real users to ensure the interface is intuitive and easy to use.",
  },
  {
    number: "05",
    title: "Improve the Design:",
    description:
      "Refine and enhance the design based on user feedback to improve clarity and usability.",
  },
  {
    number: "06",
    title: "Final Files & Support:",
    description:
      "Deliver finalized UI design assets and provide support during development implementation.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best UI-UX\nDesigning\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="UI/UX Design Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we understand that exceptional UI/UX design is the key to a successful digital product. A well-crafted user interface paired with a seamless user experience ensures that your website or application is not only visually appealing but also intuitive and engaging. Our designs focus on meeting user needs while reflecting your brand identity, ultimately driving customer satisfaction and business growth."
        ]}

        subHeading="The Importance of UI/UX Design"
        subParagraph={[
          "UI (User Interface) and UX (User Experience) work together to create products that users love. While UI focuses on visual elements like icons, buttons, and typography, UX ensures smooth navigation, logical flow, and enhanced usability. Effective UI/UX design increases engagement, improves user retention, boosts conversions, and allows businesses to deliver digital experiences that stand out in today’s competitive landscape."
        ]}

        mainImage={{
          src: "/ui-ux-design.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[520px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for UI/UX Design?"
        points2={[
          "User-Centered Design – We prioritize research and insights to design interfaces that meet real user needs.",
          "Wireframing & Prototyping – We create structured layouts and interactive prototypes to validate ideas early.",
          "Responsive Design – Our interfaces adapt flawlessly across mobile, tablet, and desktop screens.",
          "Intuitive Interaction Design – We craft seamless, user-friendly interactions that enhance engagement.",
          "Brand-Aligned Interfaces – Designs that reflect your brand identity while ensuring usability.",
          "Conversion-Focused Approach – Interfaces optimized for engagement, satisfaction, and business performance."
        ]}

        partnerTitle="Elevate Your Digital Product with LiveBits"
        partnerDescription="LiveBits crafts UI/UX solutions that combine aesthetics, functionality, and usability. We ensure your digital product not only looks beautiful but also delivers a smooth, intuitive experience that keeps users engaged and coming back."

        footerTitle="Transform Your User Experience Today"
        footerDescription="Work with LiveBits to create innovative, user-friendly digital solutions that stand out in the market and elevate your brand experience."

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
        heading="Our UI-UX Designing Process"
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
