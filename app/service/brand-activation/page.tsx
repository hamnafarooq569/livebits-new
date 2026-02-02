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
    title: "Event Activation Campaigns",
    description:
      "Immersive events designed to create lasting impressions and brand engagement.",
  },
  {
    title: "Digital & Social Media Campaigns",
    description:
      "Integrating online platforms to expand reach and enhance audience interaction.",
  },
  {
    title: "On-Ground Activations",
    description:
      "Direct customer interaction experiences at strategic locations to strengthen connections.",
  },
  {
    title: "Pop-Up Installations",
    description:
      "Creative and eye-catching setups to attract attention and effectively engage audiences.",
  },
  {
    title: "Creative Design Services",
    description:
      "Innovative visual concepts that reinforce brand identity and campaign messaging.",
  },
  {
    title: "Printing & Packaging Support",
    description:
      "High-quality materials to maintain consistent branding across campaigns and products.",
  },
  {
    title: "Product & Fashion Photography",
    description:
      "Professional visuals crafted to enhance marketing campaigns and brand appeal.",
  },
  {
    title: "Social Media Management",
    description:
      "Coordinated posting and engagement strategies to maximize campaign visibility and impact.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Clean Design",
    description:
      "Experience simplicity and elegance with a sleek, user-friendly interface that ensures seamless navigation.",
  },
  {
    number: "02",
    title: "Customizable",
    description:
      "Tailor the app to fit your unique needs! Personalize features to match your style and business goals.",
  },
  {
    number: "03",
    title: "Fully Responsive",
    description:
      "Enjoy flawless performance across all devices – mobile, tablet, or desktop. Your app adapts to every screen size effortlessly.",
  },
  {
    number: "04",
    title: "Retina Ready",
    description:
      "Crystal-clear visuals and high-resolution graphics deliver a premium look and feel for the ultimate user experience.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Brand\nActivation\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Brand Activation Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we create dynamic and customized brand activation campaigns designed to bring your brand to life. Our services focus on memorable experiences, engaging interactions, and impactful campaigns that strengthen connections between your brand and its target audience.",
        ]}
        subHeading="Why Brand Activation Matters"
        subParagraph={[
          "Successful brand activation increases visibility, builds emotional connections, and drives long-term loyalty. LiveBits combines creativity, strategy, and digital innovation to deliver experiences that leave lasting impressions and generate measurable results.",
        ]}


        mainImage={{
          src: "/CV-removebg-preview.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[500px] h-[400px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored Strategies – Bespoke campaigns aligned with your brand goals, values, and audience expectations.",
          "Engaging Experiences – Interactive activations that cultivate genuine connections with your customers.",
          "ROI-Driven Campaigns – Activations designed to achieve measurable results and market performance.",
          "Multi-Channel Integration – Combine events, digital marketing, and social media for maximum reach.",
          "Creative Expertise – Innovative concepts and designs that elevate your brand identity.",
          "Seamless Execution – Professional planning and implementation for flawless campaign delivery.",
        ]}
        partnerTitle="Take Your Brand to New Heights"
        partnerDescription="With LiveBits, your brand becomes more visible, memorable, and engaging. Our activation strategies create meaningful experiences that impact your audience and differentiate you from competitors."
        footerTitle="Ready to Activate Your Brand?"
        footerDescription="Contact LiveBits today to craft immersive brand activation campaigns that elevate your visibility and engagement."

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
        heading="Our Brand Activation Process"
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
