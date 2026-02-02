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
    title: "Custom YouTube Ad Strategy",
    description:
      "Tailor-made advertising strategies designed around your business goals, target audience, and brand identity.",
  },
  {
    title: "Full Video Ad Creation",
    description:
      "Scriptwriting, editing, and creative production to deliver compelling video ads that attract attention and convert.",
  },
  {
    title: "Ad Format Optimization",
    description:
      "Choose and optimize the right formats—skippable, non-skippable, bumper ads, in-feed video ads—to maximize performance.",
  },
  {
    title: "Audience Targeting & Segmentation",
    description:
      "Reach users based on interests, behavior, demographics, viewing patterns, and real-time content engagement.",
  },
  {
    title: "Campaign Setup & Management",
    description:
      "End-to-end management for smooth execution, from setup to daily optimization.",
  },
  {
    title: "Performance Tracking & Analytics",
    description:
      "Measure CTR, engagement, conversions, watch time, and continuously improve campaign results.",
  },
  {
    title: "Creative A/B Testing",
    description:
      "Test multiple versions of your ads to identify which visuals, hooks, and calls-to-action perform best.",
  },
  {
    title: "Budget & Bidding Optimization",
    description:
      "Manage your advertising spend efficiently to ensure maximum ROI and reduced wasted budget.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Campaign Goals:",
    description:
      "Define the objective of the YouTube ad campaign (brand awareness, lead generation, sales).",
  },
  {
    number: "02",
    title: "Audience Targeting:",
    description:
      "Choose the right targeting options such as demographics, interests, and behaviors for the ad campaign.",
  },
  {
    number: "03",
    title: "Ad Format Selection:",
    description:
      "Choose the most suitable ad format (TrueView, skippable, non-skippable, bumper ads) based on campaign goals.",
  },
  {
    number: "04",
    title: "Video Creation:",
    description:
      "Develop a high-quality video ad that captures attention within the first few seconds and includes a strong CTA.",
  },
  {
    number: "05",
    title: "Ad Placement & Budgeting:",
    description:
      "Select ad placements (YouTube, partner sites) and set a daily or campaign budget.",
  },
  {
    number: "06",
    title: "Campaign Launch & Monitoring:",
    description:
      "Launch the campaign and monitor performance metrics like views, clicks, and engagement.",
  },
  {
    number: "07",
    title: "Optimization & A/B Testing:",
    description:
      "Test different video creatives, targeting, and bidding strategies to improve performance.",
  },
  {
    number: "08",
    title: "Performance Reporting & Insights:",
    description:
      "Provide detailed performance reports and insights for future optimization.",
  },
];




export default function YoutubeAdsPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Youtube Add\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."     />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="LiveBits & Advertise With Us on YouTube"
        mainParagraph={[
          "YouTube is one of the most powerful advertising platforms in the world, with over two billion monthly active users. Whether you want to increase brand visibility, drive traffic, or boost conversions, YouTube Ads offer an unmatched opportunity to reach an engaged audience through compelling video content. At LiveBits, we ensure your campaigns not only capture attention but also deliver meaningful results through expertly crafted YouTube advertising strategies tailored to your business goals.",
        ]}

        subHeading="YouTube's Ad Serving Features"
        subParagraph={[
          "YouTube enables businesses to promote their products and services through a variety of video ad formats, including skippable ads, non-skippable ads, and short bumper ads. These flexible formats allow brands to tailor their message to the right audience at the right moment, whether the goal is awareness, engagement, or sales. With YouTube Ads, you can reach users already consuming video content—making your message more memorable and impactful."
        ]}


        mainImage={{
          src: "/youtube-ads.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[520px] object-contain rounded-xl"
        }} 


        heading2="Why Choose LiveBits for YouTube Ads?"
        points2={[
         "Strategic Video Campaign Planning – We design targeted campaigns aligned with your core business objectives.",
          "Expert Video Ad Creation – Our team crafts engaging, high-performing video ads optimized for viewer retention and conversions.",
          "Advanced Targeting & Segmentation – Reach audiences based on interests, behavior, demographics, and real-time content consumption.",
          "Full Campaign Management – From setup to optimization, LiveBits handles every stage of your YouTube ad journey.",
         "Performance Monitoring & Optimization – Continuous tracking of CTR, engagement, and conversions to enhance results.",
          "Cost-Efficient Scaling – We maximize your budget and scale your campaigns intelligently for long-term success.",
        ]}

        partnerTitle="YouTube Video Ads Management"
        partnerDescription="Managing video ads requires creativity, storytelling, and deep platform expertise. LiveBits' skilled YouTube advertising team develops end-to-end strategies, designs high-impact video creatives, and monitors campaign performance to ensure maximum reach and engagement. From brand awareness to conversions, we help transform your video ads into powerful growth assets for your business."

        footerTitle="Let’s Grow Through Video"
        footerDescription="Whether you want more traffic, stronger brand visibility, or higher sales—LiveBits helps you build winning YouTube Ad campaigns that truly connect with your audience. Our experts craft video advertising strategies that deliver real, measurable growth.
        Ready to attract, engage, and convert through YouTube?,
        Let’s create your next winning video campaign together."

        sideImage={{
          src: "/image-2.png",  // ✅ public/social-media-2.png
          alt: "Social media illustration",
          width: 600,
          height: 600,
          className: "w-full h-auto object-contain rounded-xl",
        }}
      />

      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Youtube Adds Marketing Process"
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
