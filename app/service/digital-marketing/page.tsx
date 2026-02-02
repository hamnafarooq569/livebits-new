import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import DigitalMarketingTools, { MarqueeSection } from "../../components/MarketingTools";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Digital Media Marketing",
    description:
      "We help you reach the right target audience online through various social and digital platforms.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Improve your Google rankings and attract more organic traffic to your website.",
  },
  {
    title: "Social Media Management",
    description:
      "We manage content, engagement, and growth strategies for your social platforms.",
  },
  {
    title: "Local SEO",
    description:
      "We optimize your online presence to attract customers from nearby locations.",
  },
  {
    title: "Email Marketing",
    description:
      "We create targeted email campaigns that nurture leads and boost conversions.",
  },
  {
    title: "Google Ads",
    description:
      "We run high-performing ad campaigns to reach your ideal customers instantly.",
  },
  {
    title: "YouTube Ads",
    description:
      "We craft eye-catching video ads that maximize brand visibility across YouTube.",
  },
  {
    title: "Influencer Marketing",
    description:
      "We collaborate with influencers who authentically promote your brand to their audience.",
  },
];

const processSteps = [
  { number: "01", title: "Goal Setting", description: "Define objectives, target audience, and KPIs." },
  { number: "02", title: "Market Research", description: "Analyze competitors and audience trends." },
  { number: "03", title: "Strategy Creation", description: "Develop a tailored marketing plan." },
  { number: "04", title: "Content Development", description: "Craft optimized, engaging content." },
  { number: "05", title: "Campaign Execution", description: "Launch targeted campaigns across platforms." },
  { number: "06", title: "Analytics & Monitoring", description: "Track performance using real-time tools." },
  { number: "07", title: "Optimization", description: "Refine strategies for improved outcomes." },
  { number: "08", title: "Reporting", description: "Deliver detailed performance insights." },
];

const toolsSections: MarqueeSection[] = [
  {
    direction: "left",
    speed: 100,
    items: [
      "/logos/google-ads.png",
      "/logos/meta-ads.png",
      "/logos/youtube.png",
      "/logos/linkedin.png",
      "/logos/twitter.png",
      "/logos/tiktok.png",
      "/logos/mailchimp.png",
      "/logos/hubspot.png",
      "/logos/klaviyo.png",
      "/logos/activecampaign.png",
      "/logos/sendinblue.png",
      "/logos/convertkit.png",
      "/logos/google-analytics.png",
      "/logos/ga4.png",
      "/logos/hotjar.png",
      "/logos/semrush.png",
      "/logos/ahrefs.png",
      "/logos/moz.png",
    ],
  },
];


export default function ServicesPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions"
      />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />

      <WhyLiveBits
        heading="Why Your Business Needs Digital Marketing"
        mainParagraph={[
          "In today’s digital era, every business — whether emerging or established — needs a powerful online presence to stay competitive. Digital marketing allows you to reach the right audience at the right moment, with the message that drives action.",
        ]}
        subHeading="How LiveBits Helps You Grow"
        subParagraph={[
          "At Livebits, we blend creativity with data to deliver marketing campaigns that are visually compelling and performance-driven. Every strategy is carefully monitored and optimized to ensure maximum results and long-term growth.",
          "Ready to elevate your brand? Partner with Livebits to transform your digital presence into a powerful growth engine.",
        ]}
        // ✅ RIGHT IMAGE (Section 1)
        mainImage={{
          src: "/digital marketing-01.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right",
          className:
            "w-full max-w-[650px] h-[420px] object-contain rounded-xl",
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
        // ✅ LEFT IMAGE (Section 3 + Partner)
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
        heading="Our Digital Marketing Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />

      <ServiceToolsTabs/>
      <TestimonialsSection bgColor="#ffffffff" />



      <FaqSection bgColor="#ffffff" />
      <BlogSection bgColor="bg-[#f8f8f8]" />
    </>
  );
}
