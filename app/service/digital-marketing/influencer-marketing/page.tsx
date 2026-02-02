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
    title: "Influencer Identification & Matching",
    description:
      "Find influencers who perfectly align with your brand, audience, and industry.",
  },
  {
    title: "Campaign Strategy & Planning",
    description:
      "Build custom influencer marketing roadmaps designed to achieve your KPIs and brand goals.",
  },
  {
    title: "Content Direction & Guidance",
    description:
      "Ensure influencers produce high-quality, creative, and on-brand content for maximum impact.",
  },
  {
    title: "End-to-End Campaign Management",
    description:
      "Outreach, negotiations, content approvals, posting schedules—handled entirely by us.",
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "Analyze engagement, reach, conversions, and ROI with transparent reporting.",
  },
  {
    title: "Multi-Platform Execution",
    description:
      "Run influencer campaigns on Instagram, TikTok, YouTube, Snapchat, Twitter, and more.",
  },
  {
    title: "Long-Term Influencer Relations",
    description:
      "Build and maintain strong partnerships with creators who advocate for your brand.",
  },
  {
    title: "Compliance & Brand Safety Monitoring",
    description:
      "Ensure all content follows platform rules, disclosure guidelines, and brand standards.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Goal Definition:",
    description:
      "Understand the client’s objectives, brand message, and target audience.",
  },
  {
    number: "02",
    title: "Influencer Research:",
    description:
      "Identify potential influencers whose audience aligns with the client's brand and values.",
  },
  {
    number: "03",
    title: "Outreach & Negotiation:",
    description:
      "Reach out to influencers, negotiate terms, and establish collaboration guidelines (sponsored posts, affiliate links, etc.).",
  },
  {
    number: "04",
    title: "Campaign Strategy:",
    description:
      "Develop a strategy for the influencer campaign, including content themes, posting schedule, and key messages.",
  },
  {
    number: "05",
    title: "Content Creation:",
    description:
      "Collaborate with influencers to create authentic and engaging content that resonates with their audience.",
  },
  {
    number: "06",
    title: "Content Approval & Distribution:",
    description:
      "Review content before publishing and ensure it reaches the targeted audience across the right platforms.",
  },
  {
    number: "07",
    title: "Engagement Tracking:",
    description:
      "Monitor the campaign for engagement, comments, shares, and conversions.",
  },
  {
    number: "08",
    title: "Analysis & Reporting:",
    description:
      "Analyze the campaign’s success, ROI, and performance metrics, and provide insights for future campaigns.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Influencer\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."     />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Influencer Marketing With LiveBits"
        mainParagraph={[
          "Influencer marketing has become one of the most effective ways for brands to connect with customers in today’s social media-driven world. From rising startups to established brands, influencer collaborations help amplify your message, expand your reach, and build genuine trust. At LiveBits, we create tailored influencer marketing campaigns that align with your goals and deliver impactful results."
        ]}

        subHeading="The Power of Authentic Influence"
        subParagraph={[
          "Today’s customers trust influencers far more than traditional ads. Influencers have strong personal relationships with their followers, making their recommendations feel genuine and relatable. By partnering with the right creators, brands can reach highly engaged audiences who respond to authentic storytelling. LiveBits ensures your brand connects with the right voices to create real impact."
        ]}


        mainImage={{
          src: "/influencer-marketing.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Strategic Influencer Matching – Connect with creators who authentically align with your industry and audience.",
          "End-to-End Campaign Management – From outreach to publishing, we handle every step of your campaign.",
          "High-Impact Content Direction – Ensure influencers produce engaging, relevant, and on-brand content.",
          "Data-Driven Performance Tracking – Measure engagement, reach, conversions, and ROI with complete transparency."
        ]}

        partnerTitle="Let’s Grow Through Influence"
        partnerDescription="Whether you want stronger awareness, more engagement, or higher conversions—LiveBits helps you build influencer campaigns that truly connect with your audience. Our team manages everything from strategy to execution so your brand gets the visibility it deserves. Ready to scale with impact? Let’s build your next winning influencer campaign together."

        footerTitle="Ready to scale with impact?"
        footerDescription="Let’s build your next winning influencer campaign together."  

          sideImage={{
          src: "/infuencer-marketing-2.jfif",
          alt: "Social media illustration",

          className: "object-contain ",
        }}
      />




      <AgencyExperienceSection />

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
