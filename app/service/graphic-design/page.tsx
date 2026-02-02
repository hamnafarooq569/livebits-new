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
import BlogListSection from "../../components/BlogListSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";
import BlogSection from "@/app/components/BlogSection";

const offerings = [
  {
    title: "Custom Logo Design",
    description:
      "Unique branding logos crafted to reflect your business identity, values, and personality effectively.",
  },
  {
    title: "Professional Banner Creation",
    description:
      "Engaging banner designs tailored for websites, advertisements, and digital promotional marketing campaigns.",
  },
  {
    title: "High-Realism Mockup Designs",
    description:
      "Photorealistic mockups displaying your brand across packaging, merchandise, devices, and marketing materials.",
  },
  {
    title: "Creative Booklet Layouts",
    description:
      "Structured booklet designs ideal for catalogs, company profiles, presentations, and marketing communication.",
  },
  {
    title: "Modern Business Card Designs",
    description:
      "Stylish and professional business card designs that create strong impressions during networking interactions.",
  },
  {
    title: "Eye-Catching Packaging Concepts",
    description:
      "Attractive packaging designs created to communicate product identity, purpose, function, and brand appeal.",
  },
  {
    title: "User-Focused UI/UX Interfaces",
    description:
      "Intuitive and user-friendly digital interfaces designed to enhance engagement across apps and websites.",
  },
  {
    title: "Comprehensive Creative Design",
    description:
      "End-to-end creative design solutions supporting branding, marketing, promotions, and communication goals.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Brand Visual Foundation:",
    description:
      "Refine logo, color palette, and typography to create a strong, professional brand identity.",
  },
  {
    number: "02",
    title: "Clear Visual Hierarchy:",
    description:
      "Organize design elements strategically to guide user attention and highlight key actions.",
  },
  {
    number: "03",
    title: "Service Visualizations:",
    description:
      "Use icons, illustrations, and graphics to simplify complex services and improve clarity.",
  },
  {
    number: "04",
    title: "Intuitive UI Design:",
    description:
      "Create a clean, user-friendly interface with smooth navigation and full responsiveness.",
  },
  {
    number: "05",
    title: "Engaging Marketing Visuals:",
    description:
      "Produce consistent, attractive graphics for ads, social media, blogs, and email campaigns.",
  },
  {
    number: "06",
    title: "Optimization & Consistency:",
    description:
      "Optimize visuals for performance and maintain a unified brand experience across platforms.",
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


export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Graphic\nDesigning\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Graphic Design Services by Livebits"
        mainParagraph={[
          "At Livebits, we believe powerful graphic design is more than just visual appeal — it is the voice of your brand. Every design we create communicates your identity, values, and message clearly while helping your business stand out in a crowded digital world. From logos to packaging, our team blends creativity with strategy to deliver designs that inspire, engage, and convert."
        ]}

        subHeading="Design That Defines Your Brand"
        subParagraph={[
          "Your brand deserves visuals that reflect your story, personality, and purpose. At Livebits, we focus on developing designs that are not only aesthetically strong but also aligned with long-term business goals. Whether you’re a startup building your identity or an established brand refreshing its look, our creative team delivers visuals that elevate your brand presence and build trust with your audience."
        ]}

        mainImage={{
          src: "/graphic-design-2.jpg",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[500px] h-[450px] object-contain rounded-xl"
        }} 

        heading2="Why Choose Livebits for Graphic Designing?"
        points2={[
          "Strategic, creative designs that blend brand personality, storytelling, and visual impact.",
          "A collaborative design process ensuring your ideas stay at the center of every project.",
          "Skilled designers experienced in branding, print media, digital graphics, and UI/UX.",
          "High-quality visuals optimized for social media, websites, printing, and advertising.",
          "Fast turnaround times without compromising creativity, precision, or detail.",
          "Comprehensive, brand-focused design solutions tailored to your industry and audience."
        ]}

        partnerTitle="We Bring Your Ideas to Life"
        partnerDescription="From banners to booklets, logos to packaging, Livebits creates visually compelling designs that tell your story effectively. Every project is handled with detail and professionalism, ensuring polished results that strengthen brand identity and increase customer engagement."

        footerTitle="Let Livebits Elevate Your Brand"
        footerDescription="Partner with Livebits to transform your ideas into powerful visual designs that support your business goals and make your brand unforgettable."

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
        heading="Our Graphic Designing Process"
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
