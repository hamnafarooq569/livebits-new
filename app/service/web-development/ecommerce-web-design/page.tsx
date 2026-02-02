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
    title: "Custom Online Store Design",
    description:
      "Tailored layouts that enhance shopping experiences and conversions.",
  },
  {
    title: "Responsive Ecommerce Design",
    description:
      "Mobile-optimized sites for seamless browsing on all devices.",
  },
  {
    title: "Optimized Checkout Systems",
    description:
      "Fast and secure processes to reduce cart abandonment rates.",
  },
  {
    title: "High-Quality Product Imagery",
    description:
      "Zoomable, detailed visuals to build customer trust and confidence.",
  },
  {
    title: "User Interface Enhancement",
    description:
      "Intuitive menus, filters, and navigation for improved usability.",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Fast-loading, SEO-friendly designs to boost online visibility.",
  },
  {
    title: "Integration With Payment Gateways",
    description:
      "Safe and reliable payment systems for smooth transactions.",
  },
  {
    title: "Ecommerce Analytics Setup",
    description:
      "Tools to monitor user behavior and optimize store performance.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Requirements",
    description:
      "Understand the business goals, target audience, and product offerings.",
  },
  {
    number: "02",
    title: "Market Research & Competitor Analysis",
    description:
      "Study competitors and industry trends to create a unique and effective design.",
  },
  {
    number: "03",
    title: "Wireframing & Prototyping",
    description:
      "Create wireframes and prototypes to plan the website's structure and user flow.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Develop a user-friendly interface that enhances user experience and aligns with the brand.",
  },
  {
    number: "05",
    title: "Product Integration",
    description:
      "Set up product catalogs, shopping carts, and payment gateways for smooth transactions.",
  },
  {
    number: "06",
    title: "Mobile Optimization",
    description:
      "Ensure the website is responsive and optimized for mobile devices.",
  },
  {
    number: "07",
    title: "SEO & Performance Optimization",
    description:
      "Optimize on-page SEO and improve page load speed for better search rankings.",
  },
  {
    number: "08",
    title: "Testing & Launch",
    description:
      "Test for functionality, fix any issues, and launch the site with continuous monitoring.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."   />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Transform Your Online Store with LiveBits"
        mainParagraph={[
          "At LiveBits, we believe your ecommerce website should be more than just a storefront—it should deliver a seamless shopping experience that converts visitors into loyal customers. By combining smart design, intuitive navigation, and optimized checkout processes, we create websites that inspire trust and drive sales.",
        ]}
        subHeading="The Importance of Ecommerce Design"
        subParagraph={[
          "A successful ecommerce website depends on more than just attractive graphics. It requires a strategic layout, responsive design for all devices, and an optimized user journey. At LiveBits, we prioritize fast-loading pages, clear calls-to-action, and easy navigation to ensure every customer enjoys a smooth and satisfying shopping experience.",
        ]}

        mainImage={{
          src: "/e-commerce.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 
        heading2="Why Choose LiveBits?"
        points2={[
          "User-Centric Design – We focus on designs that enhance user experience and increase conversions.",
          "Mobile Friendly – Responsive layouts for seamless shopping on smartphones, tablets, and desktops.",
          "Optimized Checkout – Streamlined and secure checkout processes to minimize cart abandonment.",
          "High-Quality Imagery – Detailed product visuals boost trust and encourage confident purchasing.",
          "Performance-Focused – Fast-loading pages and SEO-friendly structures for better reach.",
          "Tailored Solutions – Custom ecommerce features built specifically for your business needs.",
        ]}
        partnerTitle="Elevate Your Business Online"
        partnerDescription="With LiveBits, your ecommerce website becomes a powerful tool to grow sales and expand your market presence. We ensure your online store is not only visually appealing but also optimized for performance, security, and scalability."
        footerTitle="Ready to Launch Your Ecommerce Success?"
        footerDescription="Contact LiveBits today for a consultation and discover how our ecommerce web design services can help you boost sales and achieve long-term business growth."

          sideImage={{
          src: "/image-2.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />



      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="OurE-Commerce Web Design Process"
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
