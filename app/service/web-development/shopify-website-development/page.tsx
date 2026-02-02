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
    title: "Custom Shopify Themes and Designs",
    description:
      "Tailored store layouts reflecting brand identity and optimized for user engagement.",
  },
  {
    title: "User-Friendly Navigation and Experience",
    description:
      "Intuitive menus, filters, and structures to ensure effortless browsing and shopping.",
  },
  {
    title: "Mobile-Optimized Shopify Stores",
    description:
      "Fully responsive designs for seamless customer experience on smartphones, tablets, and desktops.",
  },
  {
    title: "Secure Payment Gateways Integration",
    description:
      "SSL-enabled systems with multiple payment options for safe and efficient transactions.",
  },
  {
    title: "Scalable E-Commerce Solutions",
    description:
      "Store designs that grow with your business and adapt to increasing product catalogues.",
  },
  {
    title: "SEO-Friendly Shopify Pages",
    description:
      "Optimized for search engines to attract organic traffic and improve online visibility.",
  },
  {
    title: "Third-Party App Integrations",
    description:
      "Connects easily with analytics, marketing tools, and customer relationship management systems.",
  },
  {
    title: "Ongoing Maintenance and Support Services",
    description:
      "Continuous updates, performance optimization, and technical support to ensure smooth operations.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Consultation & Planning",
    description:
      "Understand your business goals, target audience, and e-commerce requirements to create a personalized strategy.",
  },
  {
    number: "02",
    title: "Design & Customization",
    description:
      "Develop a unique Shopify store design tailored to your brand, ensuring a user-friendly and mobile-responsive layout.",
  },
  {
    number: "03",
    title: "Integration",
    description:
      "Set up payment gateways, shipping solutions, and third-party integrations to enhance functionality.",
  },
  {
    number: "04",
    title: "SEO Optimization",
    description:
      "Implement SEO best practices for improved search engine visibility.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    description:
      "Conduct rigorous testing to ensure a seamless user experience before launching the site.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "Provide post-launch maintenance and updates for continued growth and optimization.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Shopify Website Development by LiveBits"
        mainParagraph={[
          "At LiveBits, we specialize in creating custom Shopify websites that scale your e-commerce business efficiently. Our solutions combine visually appealing designs, seamless navigation, and advanced functionality to deliver a superior shopping experience that engages customers and drives sales.",
        ]}
        subHeading="Why Shopify Development Matters"
        subParagraph={[
          "A Shopify store is more than a digital storefront—it’s a powerful tool for customer engagement and business growth. By leveraging custom designs, user-friendly layouts, secure checkout systems, and scalable solutions, we help businesses establish a strong online presence that converts visitors into loyal customers.",
        ]}

        mainImage={{
          src: "/b2c-marketing-strategies.webp",
          alt: "Shopify-08",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[550px] h-[480px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Optimized Performance – Websites built for fast loading, smooth interactions, and reduced bounce rates for better conversions.",
          "Mobile-Friendly Layouts – Fully responsive Shopify stores providing cohesive shopping experiences on all devices.",
          "Third-Party Integrations – Seamlessly integrate with marketing tools, payment gateways, and analytics for business efficiency.",
          "Secure Checkout – SSL-enabled checkout systems ensuring safe and trustworthy online transactions for customers.",
          "SEO-Ready Design – Shopify pages structured to rank higher in search results with minimal ongoing effort.",
          "Scalable Solutions – Websites built to grow with your business, accommodating additional products and advanced features.",
        ]}
        partnerTitle="Enhance Your E-Commerce Success"
        partnerDescription="With LiveBits, your Shopify store becomes a strategic asset. We focus on creating intuitive user interfaces, reliable performance, and custom functionality to help your business succeed in the competitive e-commerce landscape."
        footerTitle="Ready to Launch Your Shopify Store?"
        footerDescription="Contact LiveBits today to turn your e-commerce vision into a fully functional, high-performing Shopify store that drives growth."

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
        heading="Our Shopify Website Development Process"
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
