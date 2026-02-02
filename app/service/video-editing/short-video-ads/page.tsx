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
    title: "Social Media Short Ads",
    description:
      "Create concise, captivating videos for TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    title: "Product Promotion Videos",
    description:
      "Showcase products quickly to grab attention and boost sales efficiently.",
  },
  {
    title: "Brand Storytelling Clips",
    description:
      "Deliver your brand story in engaging, fast-paced, and highly shareable short videos.",
  },
  {
    title: "Email Marketing Videos",
    description:
      "Embed short, impactful ads into emails to increase clicks and audience engagement.",
  },
  {
    title: "User-Generated Content Integration",
    description:
      "Leverage audience-created content for authentic, relatable, and trust-building marketing videos.",
  },
  {
    title: "Call-to-Action Optimized Ads",
    description:
      "Include strong CTAs to drive purchases, sign-ups, or other high-value conversions.",
  },
  {
    title: "Analytics-Driven Improvements",
    description:
      "Monitor performance metrics to refine ad strategies and improve audience response.",
  },
  {
    title: "Cost-Effective Short Video Production",
    description:
      "Produce professional short videos affordably while maintaining high-quality visuals and impact.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Client Consultation:",
    description:
      "Understand the ad’s message, target audience, and platform.",
  },
  {
    number: "02",
    title: "Scriptwriting:",
    description:
      "Write a concise script that grabs attention and delivers the message quickly.",
  },
  {
    number: "03",
    title: "Storyboarding:",
    description:
      "Create a visual plan for each scene and sequence in the ad.",
  },
  {
    number: "04",
    title: "Filming or Animation:",
    description:
      "Shoot live footage or animate the ad elements based on the storyboard.",
  },
  {
    number: "05",
    title: "Editing & Post-Production:",
    description:
      "Edit the footage, apply transitions, and add music and sound effects.",
  },
  {
    number: "06",
    title: "Text & Call-to-Action:",
    description:
      "Overlay engaging text and include a clear and compelling call-to-action (CTA).",
  },
  {
    number: "07",
    title: "Client Review & Revisions:",
    description:
      "Share the ad with the client and make revisions based on feedback.",
  },
  {
    number: "08",
    title: "Final Export & Delivery:",
    description:
      "Deliver the ad in the desired formats, optimized for the specific platform.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Short Video Adds\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Short Video Ads Services"
        mainParagraph={[
          "In today’s fast-moving digital landscape, capturing your audience’s attention in seconds is critical. At LiveBits, we create engaging short video ads that instantly connect with viewers, helping startups promote products effectively and established brands share their story. Our ads are designed to be memorable, impactful, and optimized for social media platforms."
        ]}

        subHeading="Why Short Video Ads Are Essential"
        subParagraph={[
          "Short video ads grab attention quickly, leveraging the popularity of platforms like TikTok, Instagram Reels, and YouTube Shorts. These videos are highly shareable, have viral potential, and offer a cost-effective way to market your brand. Whether used in emails, social media, or websites, short ads drive engagement, increase conversions, and strengthen brand awareness."
        ]}

        mainImage={{
          src: "/video-ads.svg",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Short Video Ads"
        points2={[
          "Creative Content – Eye-catching visuals and compelling messaging designed to engage your audience instantly.",
          "Platform Optimized – Videos tailored for TikTok, Instagram, YouTube, and other social media channels.",
          "High Engagement – Ads crafted to increase user interaction, shares, and strong brand recall.",
          "Conversion Focused – Strategically designed to drive clicks, sign-ups, and sales effectively.",
          "Affordable Solutions – Cost-efficient production without compromising quality or impact.",
          "End-to-End Support – From concept development to post-launch analytics and optimization.",
        ]}

        partnerTitle="Maximize Your Reach with Short Video Ads"
        partnerDescription="Short video ads allow your brand to communicate quickly, engage viewers, and increase conversions. They are an effective tool to create a strong brand presence and boost customer interaction across multiple platforms."

        footerTitle="Get Started with LiveBits"
        footerDescription="Ready to capture attention in seconds with professional short video ads? Contact LiveBits today to bring your ideas to life and engage your audience like never before."

          sideImage={{
          src: "/Short-video-adds-2.jfif",
          alt: "short video adds",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />











      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our Short Video Adds Process"
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
