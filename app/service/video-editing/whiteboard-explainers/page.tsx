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
    title: "Whiteboard Explainers",
    description:
      "Simplify complex ideas using hand-drawn visuals and engaging voiceovers for improved understanding.",
  },
  {
    title: "Animated Explainers",
    description:
      "Present dynamic concepts with colorful motion graphics that keep viewers engaged throughout the video.",
  },
  {
    title: "Marketing Animation Videos",
    description:
      "Create promotional animations designed to increase brand awareness and boost customer engagement effectively.",
  },
  {
    title: "Product Demonstration Videos",
    description:
      "Highlight product features and benefits clearly using easy-to-understand animated demonstrations.",
  },
  {
    title: "Educational Explainers",
    description:
      "Convert complex educational material into engaging animated videos for easier learning and comprehension.",
  },
  {
    title: "Training & Tutorial Videos",
    description:
      "Develop visually appealing tutorials that simplify learning for employees, customers, or online audiences.",
  },
  {
    title: "Logo Animation Videos",
    description:
      "Animate brand logos creatively for impactful introductions in presentations, ads, and social content.",
  },
  {
    title: "Social Media Video Content",
    description:
      "Produce optimized animated videos crafted to perform well on Facebook, Instagram, YouTube, and TikTok.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Understand Client Objectives:",
    description:
      "Discuss the client’s goals, target audience, and key message.",
  },
  {
    number: "02",
    title: "Script Writing:",
    description:
      "Develop a compelling script that communicates the core message clearly.",
  },
  {
    number: "03",
    title: "Storyboard Creation:",
    description:
      "Create a storyboard to visualize the sequence of scenes and animations.",
  },
  {
    number: "04",
    title: "Design Visual Elements:",
    description:
      "Design characters, backgrounds, and assets that match the script and style.",
  },
  {
    number: "05",
    title: "Voiceover Recording:",
    description:
      "Record a professional voiceover to narrate the explainer video.",
  },
  {
    number: "06",
    title: "Animation Production:",
    description:
      "Animate the visuals in sync with the script and voiceover.",
  },
  {
    number: "07",
    title: "Client Review & Feedback:",
    description:
      "Present the video to the client and make necessary revisions based on feedback.",
  },
  {
    number: "08",
    title: "Final Delivery & Support:",
    description:
      "Provide the final video in the required formats and offer post-delivery support.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Whiteboard and Animated Explainers`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Whiteboard & Animated Explainers Services"
        mainParagraph={[
          "In today’s fast-paced digital world, capturing attention while effectively communicating your message is challenging. At LiveBits, we create whiteboard and animated explainer videos that simplify complex ideas, engage audiences, and make your products, services, or concepts easier to understand."
        ]}

        subHeading="Why Whiteboard & Animated Explainers Matter"
        subParagraph={[
          "Whiteboard and animated explainers use visual storytelling to break down complex topics into digestible content. Hand-drawn illustrations, motion graphics, and dynamic animations combined with voiceovers ensure that your message resonates with viewers and keeps them engaged. These videos are highly effective for marketing, training, and brand storytelling."
        ]}

        mainImage={{
          src: "/white-board-animation.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[440px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Explainer Videos"
        points2={[
          "Creative Storytelling – Transform ideas into engaging narratives that captivate viewers.",
          "Professional Animation – High-quality, smooth animations that reflect your brand identity.",
          "Audience Engagement – Videos designed to retain attention and increase viewer interaction.",
          "Conversion Focused – Strategically crafted to drive actions and improve conversion rates.",
          "Versatile Solutions – Suitable for startups, enterprises, marketing campaigns, or product launches.",
          "End-to-End Support – From scriptwriting to final delivery, we manage every production step.",
        ]}

        partnerTitle="Enhance Your Marketing with Explainer Videos"
        partnerDescription="Our animated explainer videos simplify communication, improve engagement, and make your brand memorable. Whether for marketing, training, or internal communication, these videos help convey your message clearly and effectively."

        footerTitle="Get Started with LiveBits"
        footerDescription="Ready to transform your ideas into captivating explainer videos? Contact LiveBits today to create professional, impactful animations that make your message stand out."
      
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
        heading="Our Digital Marketing Process"
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
