import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogListSection from "../../../components/BlogListSection";
import BlogSection from "../../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Keyword Research & Analysis",
    description:
      "Identify high-converting keywords that connect with your target audience.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize meta tags, headers, URLs, internal links, and other elements to improve ranking.",
  },
  {
    title: "Content Creation & Optimization",
    description:
      "Develop engaging content that drives traffic and improves search visibility.",
  },
  {
    title: "Technical SEO",
    description:
      "Enhance site speed, mobile responsiveness, and overall technical performance.",
  },
  {
    title: "Local SEO",
    description:
      "Increase local search visibility to attract nearby clients and foot traffic.",
  },
  {
    title: "Off-Page SEO",
    description:
      "Build authority with relevant, high-quality backlinks from trusted sources.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Monitor traffic, ranking, and performance to transform data into actionable insights.",
  },
  {
    title: "SEO Audits & Strategy Development",
    description:
      "Analyze current site performance and implement tailored strategies for measurable results.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "SEO Audit:",
    description: "Analyze your website's current performance and identify improvement areas.",
  },
  {
    number: "02",
    title: "Keyword Research:",
    description: "Identify high-value keywords relevant to your business.",
  },
  {
    number: "03",
    title: "On-Page Optimization:",
    description: "Optimize titles, meta tags, content, and internal linking.",
  },
  {
    number: "04",
    title: "Technical SEO:",
    description: "Improve site speed, mobile responsiveness, and crawlability.",
  },
  {
    number: "05",
    title: "Content Creation & Optimization:",
    description: "Develop SEO-friendly, engaging content for users and search engines.",
  },
  {
    number: "06",
    title: "Off-Page SEO:",
    description: "Build quality backlinks to increase domain authority.",
  },
  {
    number: "07",
    title: "Monitoring & Reporting:",
    description: "Track performance with analytics tools and refine strategies.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Search Engine\nOptimization\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."     />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Search Engine Optimization – Boost Your Online Visibility"
        mainParagraph={[
          "In today’s competitive digital world, being visible online is critical. Reaching and engaging the right audience is essential for business growth. LiveBits provides industry-leading SEO solutions that combine technical expertise with creative strategy to ensure your brand appears in search results while generating meaningful user engagement.",
        ]}

        subHeading="Why Your Business Needs SEO"
        subParagraph={["Search Engine Optimization ensures your business is discoverable when potential customers are actively searching. A strong SEO strategy increases organic traffic, builds credibility, and creates long-term value without relying solely on paid advertising. SEO is the foundation of sustainable digital growth."

        ]}

        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored Strategies – SEO plans designed to meet your unique business goals.",

          "Proven Results – Improve rankings, increase traffic, and achieve a positive ROI.",
      
          "Comprehensive Optimization – Covering on-page, off-page, technical, and local SEO.",

          "Tech-Driven Solutions – Leveraging the latest tools and techniques to maximize impact."

        ]}

        mainImage={{
          src: "/SEO.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        partnerTitle="Grow Your Business with LiveBits"
        partnerDescription="We help businesses achieve higher visibility, stronger online presence, and sustainable growth. Our team monitors performance, refines strategies, and ensures your SEO efforts deliver measurable results. Let’s discuss how we can help your brand blossom online."

        footerTitle="Let’s Elevate Your Online Presence"
        footerDescription="Whether you’re launching a new website or improving an existing one, LiveBits ensures your SEO strategy delivers real results. Let’s work together to transform your online presence into a powerful growth engine."

          sideImage={{
          src: "/seo-2.jpeg",
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
      <BlogSection bgColor="#f8f8f8" />

    </>
  );
}
