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
    title: "Custom Campaign Strategy",
    description:
      "Develop a Google Ads plan tailored to your business objectives and target audience.",
  },
  {
    title: "Keyword Research & Selection",
    description:
      "Identify high-performing keywords to reach users actively searching for your products or services.",
  },
  {
    title: "Ad Copywriting & Creative Design",
    description:
      "Craft compelling ad copy and visuals that attract clicks and conversions.",
  },
  {
    title: "Campaign Setup & Management",
    description:
      "Configure campaigns, ad groups, and settings for optimal performance.",
  },
  {
    title: "Bidding & Budget Optimization",
    description:
      "Allocate budgets strategically and adjust bids to maximize ROI.",
  },
  {
    title: "Targeting & Segmentation",
    description:
      "Reach audiences based on location, interests, demographics, and search intent.",
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "Continuously test ads to improve performance and reduce wasted spend.",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "Track campaign metrics and provide actionable insights for ongoing improvement.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Goal Definition:",
    description:
      "Understand the client's goals (sales, leads, brand awareness) and target audience.",
  },
  {
    number: "02",
    title: "Keyword Research:",
    description:
      "Conduct extensive keyword research to identify high-performing, relevant keywords for paid search.",
  },
  {
    number: "03",
    title: "Campaign Setup:",
    description:
      "Set up Google Ads campaigns, defining ad groups, targeting options, and budget allocations.",
  },
  {
    number: "04",
    title: "Ad Copy Creation:",
    description:
      "Write compelling ad copy with clear calls-to-action (CTAs) and relevant messaging.",
  },
  {
    number: "05",
    title: "Landing Page Optimization:",
    description:
      "Ensure the landing page is optimized for conversions, matching the ad’s message and intent.",
  },
  {
    number: "06",
    title: "Bid Strategy & Budgeting:",
    description:
      "Choose a bid strategy (e.g., CPC, CPM) and set daily or monthly budgets for the campaigns.",
  },
  {
    number: "07",
    title: "Campaign Monitoring & Optimization:",
    description:
      "Monitor campaign performance, adjust keywords, bids, and ads for maximum ROI.",
  },
  {
    number: "08",
    title: "Performance Reporting & Adjustments:",
    description:
      "Analyze metrics (CTR, conversion rates, cost per conversion) and refine campaigns accordingly.",
  },
];





export default function GoogleAdsPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Google Add\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."      />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Google Ads Featuring LiveBits"
        mainParagraph={[
        "In the ever-changing world of online marketing, Google Ads has become a game-changer for brands looking to boost their digital presence. Whether you are a startup seeking validation or an established business aiming to grow, well-crafted Google Ads campaigns can drive traffic, generate leads, and increase sales. At LiveBits, we optimize Google Ads strategies to deliver the right message to the right audience at the right time.",
      ]}



      subHeading="How LiveBits Drives High-Performance Campaigns"
      subParagraph={["At LiveBits, we blend strategic planning, creative ad copy, and real-time data analysis to build campaigns that convert. Every ad is continuously monitored, tested, and optimized to improve click-through rates, lower costs, and maximize return on investment."
        
      ]}

        mainImage={{
          src: "/google-ads.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[620px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Google Ads?"
        points2={[
         "Proven Expertise – Experienced professionals who know how to maximize ad impact.",
        "Data-Driven Decisions – Optimization based on analytics, performance, and user behavior.",
        "Cost Efficiency – Ensure your advertising budget is spent wisely for measurable results.",
        "End-to-End Management – From strategy to execution, LiveBits manages every aspect of your campaigns.",
        ]}

      partnerTitle="Drive Results with LiveBits"
      partnerDescription="Google Ads can be a powerful tool for business growth when used correctly. LiveBits helps you acquire new clients, generate leads, and boost sales by creating a unique Google Ads strategy for your business. Together, we’ll transform your campaigns into a high-performing digital engine that delivers real results."

      footerTitle="Let’s Accelerate Your Growth"
      footerDescription="Whether you want to launch your first campaign or scale existing ads, LiveBits ensures your Google Ads don’t just run they perform."

          sideImage={{
          src: "/google-adds-2.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: " object-contain ",
        }}
    />

      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Google Adds Marketing Process"
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
