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
    title: "Custom B2C Website Design",
    description:
      "Tailored websites designed to attract and engage your audience.",
  },
  {
    title: "Mobile-Responsive Layouts",
    description:
      "Device-agnostic websites accessible on smartphones, tablets, and desktops.",
  },
  {
    title: "Intuitive Navigation Setup",
    description:
      "Easy-to-use menus and structure to guide users seamlessly.",
  },
  {
    title: "Fast Loading Pages",
    description:
      "Optimized speed for enhanced user experience and reduced bounce rates.",
  },
  {
    title: "Effective Call-to-Actions",
    description:
      "Strategically placed CTAs to boost conversions and engagement.",
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Websites built to rank higher and perform efficiently.",
  },
  {
    title: "High-Quality Visuals Integration",
    description:
      "Professional graphics and media to strengthen brand identity.",
  },
  {
    title: "Content Management Solutions",
    description:
      "Easy-to-update systems to manage products, services, and pages.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Audience Analysis",
    description:
      "Understand the business model and target customers to design an engaging site.",
  },
  {
    number: "02",
    title: "Market Research & Inspiration",
    description:
      "Study industry trends and competitor designs to inspire a fresh, user-friendly approach.",
  },
  {
    number: "03",
    title: "Wireframing & Design Layout",
    description:
      "Create wireframes that focus on product display, user journey, and easy navigation.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Design an intuitive interface that offers an enjoyable shopping or browsing experience.",
  },
  {
    number: "05",
    title: "E-commerce Functionality Integration",
    description:
      "Set up online shopping carts, secure payment gateways, and customer accounts.",
  },
  {
    number: "06",
    title: "Responsive & Mobile-Friendly Design",
    description:
      "Ensure the website is fully optimized for mobile and tablet devices.",
  },
  {
    number: "07",
    title: "SEO & Marketing Integration",
    description:
      "Optimize for SEO and integrate marketing tools like email subscriptions and social sharing.",
  },
  {
    number: "08",
    title: "Final Review & Launch",
    description:
      "Test the site, address issues, and launch the website with ongoing performance monitoring.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."/>

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Engaging B2C Web Design by LiveBits"
        mainParagraph={[
          "In today’s digital era, a B2C website is more than just an online presence—it’s a direct channel to connect with customers and drive conversions. At LiveBits, we design responsive, visually appealing websites that cater to your audience’s needs while delivering a seamless user experience across all devices.",
        ]}
        subHeading="Why B2C Website Design Matters"
        subParagraph={[
          "A well-designed B2C website acts as a digital business card and sales platform simultaneously. With intuitive navigation, mobile responsiveness, fast-loading pages, and strategically placed CTAs, we ensure every visitor can effortlessly explore your products or services, boosting engagement, satisfaction, and conversions.",
        ]}

        mainImage={{
          src: "/b2c-marketing-strategies.webp",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[550px] h-[480px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "User-Centric Design – Optimized layouts that enhance user experience and drive conversions.",
          "Mobile-Optimized – Fully responsive websites accessible on smartphones, tablets, and desktops.",
          "Fast Loading Pages – Improved speed to retain visitors and reduce bounce rates.",
          "Effective Call-to-Actions – Clear and strategic CTAs to guide users toward desired actions.",
          "Custom Solutions – Tailored B2C web designs specific to your business objectives.",
          "Performance & Analytics – Track user behavior to continuously enhance website efficiency.",
        ]}
        partnerTitle="Maximize Your Customer Engagement"
        partnerDescription="With LiveBits, your B2C website is designed to attract, engage, and convert your target audience. We focus on aesthetics, usability, and functionality, ensuring your website represents your brand effectively while driving measurable business results."
        footerTitle="Ready to Boost Your B2C Website?"
        footerDescription="Contact LiveBits today to transform your online presence into a powerful platform for customer engagement and sales growth."

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
        heading="Our B2C Web Development Process"
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
