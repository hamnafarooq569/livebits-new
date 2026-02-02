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
    title: "Social Media Management",
    description:
      "Manage and grow your brand across Instagram, Facebook, LinkedIn, and more.",
  },
  {
    title: "Content Creation & Strategy",
    description:
      "Create engaging posts, captions, and media tailored to your audience.",
  },
  {
    title: "Audience Targeting & Segmentation",
    description:
      "Reach the right users at the right time with precise targeting.",
  },
  {
    title: "Brand Identity & Consistency",
    description:
      "Maintain a unified, professional look across all digital platforms.",
  },
  {
    title: "Paid Advertising (Social & Display Ads)",
    description:
      "Run high-performance campaigns that boost reach and conversions.",
  },
  {
    title: "Real-Time Analytics & Reporting",
    description:
      "Track performance and adjust strategies instantly for better outcomes.",
  },
  {
    title: "Automation & Scheduling Tools",
    description:
      "Automate posting, messaging, and workflows to save time and improve efficiency.",
  },
  {
    title: "Community Engagement & Growth",
    description:
      "Build strong relationships through interactions, responses, and engagement strategies.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Establish clear goals, identify your target audience, and set measurable KPIs aligned with your brand’s vision.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description: "Conduct in-depth research on competitors, audience preferences, and platform-specific trends to inform your strategy.",
  },
  {
    number: "03",
    title: "Strategic Planning",
    description: "Craft a customized social media plan covering content themes, optimal posting schedules, and engagement approaches.",
  },
  {
    number: "04",
    title: "Content Development",
    description: "Create visually appealing and impactful posts, videos, and graphics tailored to resonate with your audience.",
  },
  {
    number: "05",
    title: "Implementation",
    description: "Deploy content systematically across platforms such as Instagram, Facebook, LinkedIn, and others.",
  },
  {
    number: "06",
    title: "Audience Interaction",
    description: "Actively engage with followers by replying to comments, direct messages, and reviews to build loyalty and trust.",
  },
  {
    number: "07",
    title: "Performance Tracking",
    description: "Use tools like Hootsuite, Meta Insights, or Google Analytics to monitor metrics like engagement, reach, and conversions.",
  },
  {
    number: "08",
    title: "Continuous Optimization",
    description: "Adjust strategies and refine campaigns based on data insights to ensure consistent improvement.",
  },
  {
    number: "09",
    title: "Comprehensive Reporting",
    description: "Provide detailed performance reports highlighting metrics, outcomes, and areas for strategic enhancement.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Social Media Management Services`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions"/>

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Why Your Business Needs Digital Marketing"
        mainParagraph={[
          "In today’s digital era, every business — whether emerging or established — needs a powerful online presence to stay competitive. Digital marketing allows you to reach the right audience at the right moment, with the message that drives action."
        ]}
        subHeading="How LiveBits Helps You Grow"
        subParagraph={[
          "At Livebits, we blend creativity with data to deliver marketing campaigns that are visually compelling and performance-driven. Every strategy is carefully monitored and optimized to ensure maximum results and long-term growth.",
          "Ready to elevate your brand? Partner with Livebits to transform your digital presence into a powerful growth engine."
        ]}
        mainImage={{
          src: "/SM Marketing.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right",
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl",
        }}
        heading2="Why Choose LiveBits?"
        points2={[
          "AI-Driven Insights: Make smarter decisions using advanced analytics and audience behavior patterns.",
          "Automation Tools: Streamline your social media management with automated scheduling and posting.",
          "Cross-Platform Consistency: Ensure your brand looks and feels the same across all platforms.",
          "Real-Time Monitoring: Track engagement and performance instantly to stay ahead of competitors.",
        ]}
        partnerTitle="Grow Your Brand Online"
        partnerDescription="LiveBits transforms your social media presence through compelling content, optimized strategies, and meaningful engagement—helping your brand attract attention and drive results."
        footerTitle="Your Partner in Success"
        footerDescription="We don’t just manage your channels; we help you build a long-term digital identity with measurable growth and consistent performance."

        // ✅ yahan public wali image use hogi
        sideImage={{
          src: "/social media-2.jpeg",  // ✅ public/social-media-2.png
          alt: "Social media illustration",
          className: "object-contain rounded-xl",
        }}
      />




      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Social Media Management Process"
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
