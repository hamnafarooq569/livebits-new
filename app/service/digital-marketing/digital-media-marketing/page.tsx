import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import DigitalMarketingTools, { MarqueeSection } from "../../../components/MarketingTools";
import FaqSection from "../../../components/FaqSection";
import BlogSection from "../../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Digital Media Marketing",
    description:
      "Strategic online campaigns to grow your brand and reach the right audience across all digital platforms.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your Google rankings, attract organic traffic, and increase leads with our targeted SEO strategies.",
  },
  {
    title: "Social Media Management",
    description:
      "Manage content, engagement, and growth strategies on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
  },
  {
    title: "Content Marketing",
    description:
      "Create compelling blogs, videos, infographics, and podcasts that inform, attract, and retain your audience.",
  },
  {
    title: "Digital Advertising",
    description:
      "Run targeted Google Ads, social media ads, and display campaigns to boost visibility and traffic.",
  },
  {
    title: "Email Marketing",
    description:
      "Design personalized email campaigns to nurture leads, increase conversions, and maintain customer loyalty.",
  },
  {
    title: "YouTube & Video Ads",
    description:
      "Craft engaging video ads that maximize brand awareness and audience engagement on YouTube.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Collaborate with trusted influencers to authentically promote your brand to a relevant audience.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Goal Setting",
    description: "Understand the client’s goals, target audience, and preferred digital platforms.",
  },
  {
    number: "02",
    title: "Market Research & Audience Analysis:",
    description: "Conduct research to identify the target market, competitors, and content preferences.",
  },
  {
    number: "03",
    title: "Content Strategy Development:",
    description: "Create a content strategy tailored to the client’s objectives and audience on various platforms (social media, email, etc.).",
  },
  {
    number: "04",
    title: "Platform Selection & Campaign Setup:",
    description: "Choose the most effective platforms (social media, search engines, etc.) and set up campaigns.",
  },
  {
    number: "05",
    title: "Campaign Execution",
    description: "Launch targeted campaigns across platforms.",
  },
  {
    number: "06",
    title: "Content Creation & Scheduling:",
    description: "Develop engaging content, such as posts, videos, and ads, and schedule them for optimal times.",
  },
  {
    number: "07",
    title: "Campaign Management:",
    description: "Monitor campaigns, track performance, and adjust strategies as needed to meet KPIs.",
  },
  {
    number: "08",
    title: "Audience Engagement:",
    description: "Interact with the audience through comments, messages, and feedback to build community.",
  },
  {
    number: "09",
    title: "Analytics & Reporting:",
    description: "Analyze performance, track metrics, and provide a report on campaign success and areas for improvement.",
  },
];

const toolsSections: MarqueeSection[] = [
  {
    direction: "left",
    speed: 88,
    items: ["Google Ads", "Meta Ads", "YouTube", "LinkedIn Ads", "Twitter Ads", "TikTok Ads"],
  },
  {
    direction: "right",
    speed: 92,
    items: ["Mailchimp", "HubSpot", "Klaviyo", "ActiveCampaign", "Sendinblue", "ConvertKit"],
  },
  {
    direction: "left",
    speed: 96,
    items: ["Google Analytics", "GA4", "Hotjar", "Semrush", "Ahrefs", "Moz"],
  },
];


export default function DigitalMediaMarketingPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Digital Media Marketing Services`}
        subtitle="Amplify your online presence with LiveBits’ full-stack digital marketing solutions, designed to increase visibility, drive qualified traffic, and convert audiences into long-term customers through data-driven strategy and creative execution." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings}  bgColor="#f8f8f8" />



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

        heading2="Why Choose LiveBits?"
        points2={[
          "Data-Driven Decision Making: We combine creativity with real-time analytics to ensure every marketing action is backed by data, not guesswork.",

          "Tailored Digital Media Strategies: Each business is unique — so are our strategies. We design customized plans that align with your goals and target audience.",
      
          "End-to-End Digital Media Management: From SEO and content creation to ads, analytics, and social media — we handle everything to grow your brand across all platforms.",

          "Results-Focused & Performance Optimized: Every campaign is continuously tracked, refined, and optimized to deliver measurable results and long-term business growth."
        ]}

        mainImage={{
          src: "/digital media marketing.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right",
          className:
            "w-full max-w-[650px] h-[420px] object-contain rounded-xl",
        }}

        partnerTitle="We Help Your Brand Grow"
        partnerDescription="At LiveBits, we don’t just market your brand—we help it grow sustainably with measurable results."

        footerTitle="Let’s Work Together"
        footerDescription="Elevate your brand and maximize your digital potential. Contact LiveBits today to transform your online presence into a powerful marketing tool."

          sideImage={{
          src: "/marketing.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />



      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Digital Media Marketing Process"
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
