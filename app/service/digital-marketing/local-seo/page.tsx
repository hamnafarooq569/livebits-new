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
    title: "Google My Business Optimization",
    description:
      "MCreate and maintain a fully optimized, interactive Google My Business profile to attract local customers.",
  },
  {
    title: "Local Keyword Research",
    description:
      "Identify geo-specific keywords that potential customers in your area are actively searching for.",
  },
  {
    title: "Local Map Listings & Citations",
    description:
      "Ensure your business appears accurately in local directories and maps to increase discoverability.",
  },
  {
    title: "Review & Reputation Management",
    description:
      "Encourage positive customer reviews and manage your online reputation to build trust.",
  },
  {
    title: "On-Page Local SEO",
    description:
      "Optimize your website content, metadata, and location pages to improve local search visibility.",
  },
  {
    title: "Geo-Targeted Content Strategy",
    description:
      "Create content tailored to your local audience, highlighting services and products relevant to your area.",
  },
  {
    title: "Mobile & Voice Search Optimization",
    description:
      "Enhance your site for mobile users and voice search, which are crucial for local search intent.",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "Track local search performance and provide actionable insights to continually improve your visibility.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Website & Business Analysis:",
    description: "Analyze the current website and business presence for local SEO opportunities.",
  },
  {
    number: "02",
    title: "Keyword Research:",
    description: "Identify location-specific keywords and phrases that potential customers are using.",
  },
  {
    number: "03",
    title: "Google My Business Setup:",
    description: "Optimize the Google My Business profile with accurate business details, photos, and reviews.",
  },
  {
    number: "04",
    title: "Local Citations & Directories:",
    description: "List the business in local directories and ensure consistency across online platforms (name, address, phone number).",
  },
  {
    number: "05",
    title: "On-Page Optimization:",
    description: "Optimize website content, meta descriptions, and images for local search terms.",
  },
  {
    number: "06",
    title: "Customer Reviews & Engagement:",
    description: "Encourage positive reviews and respond to customer feedback across review platforms.",
  },
  {
    number: "07",
    title: "Local Link Building:",
    description: "Build local backlinks from relevant local businesses, blogs, and media to increase authority.",
  },
  {
    number: "08",
    title: "Performance Monitoring & Adjustments:",
    description: "Track local search rankings, website traffic, and conversions, making adjustments for ongoing improvement.",
  },
];



export default function LocalSEOPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Local\n SEO\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."      />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Local SEO with LiveBits"
        mainParagraph={["In today’s competitive digital environment, local visibility can make or break a business. When customers search for services “near me,” your business needs to appear at the right place and the right time. Local SEO helps your brand stand out in local searches, Google Maps, and community-based results."
         
        ]}

        subHeading="How LiveBits Helps You Grow Locally"
        subParagraph={[
          "At LiveBits, we combine local market understanding with data-driven SEO strategies to ensure your business reaches the audience that matters most — your local community. From optimizing your Google Business Profile to improving local keywords and listings, every step is designed to increase visibility and customer engagement."
        ]}

        mainImage={{
          src: "/local-seo-second-image.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
           "Community-Focused Approach – We help your business connect with the people who matter most: your local audience. ",

          "Proven Strategies – From local keyword targeting to map listings, our methods ensure maximum visibility.",
      
          "Transparent Reporting – Monitor your local SEO performance with clear, actionable insights.",

          "Growth Beyond Rankings – We focus on bringing actual customers, not just higher positions on search results."
        ]}

        partnerTitle="We Help You Build a Strong Local Presence"
        partnerDescription="At LiveBits, local SEO is more than rankings — it’s about creating lasting connections within your community and driving meaningful business growth."

        footerTitle="Grow Locally With Us"
        footerDescription="Local SEO is more than rankings—it’s about building a strong presence in your community. At LiveBits, we design strategies that attract nearby customers, drive foot traffic, and foster lasting relationships. Start optimizing your business for local success today!"

          sideImage={{
          src: "/local-seo-2.jpeg",
          alt: "Social media illustration",

          className: " object-contain ",
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
