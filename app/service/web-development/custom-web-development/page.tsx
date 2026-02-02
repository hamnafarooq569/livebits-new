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
    title: "Fully Customizable Website Layouts",
    description:
      "Tailor every section of your website to match unique brand identity and objectives.",
  },
  {
    title: "Advanced Mobile Responsive Features",
    description:
      "Ensure your website works flawlessly on all devices including phones, tablets, and desktops.",
  },
  {
    title: "Optimized Website Load Speed",
    description:
      "Deliver a fast-loading website for better user engagement and higher conversion rates.",
  },
  {
    title: "Scalable Web Architecture",
    description:
      "Build websites that can grow with your business without requiring complete redesigns.",
  },
  {
    title: "Enhanced Data Security Solutions",
    description:
      "Protect sensitive customer and business information with advanced security features.",
  },
  {
    title: "Custom Functionalities & Integrations",
    description:
      "Incorporate unique tools, plugins, and third-party integrations as per business requirements.",
  },
  {
    title: "SEO-Friendly Web Development",
    description:
      "Built-in SEO optimizations to improve visibility and attract targeted organic traffic.",
  },
  {
    title: "Ongoing Maintenance & Support Services",
    description:
      "Continuous updates and support to keep your website performing at its best.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Requirement Gathering",
    description:
      "Discuss the project goals, functionality, and unique needs of the client.",
  },
  {
    number: "02",
    title: "System Architecture & Design Planning",
    description:
      "Create a blueprint for the website or application, focusing on scalability and performance.",
  },
  {
    number: "03",
    title: "Database & Backend Setup",
    description:
      "Set up databases and back-end systems to support custom functionality.",
  },
  {
    number: "04",
    title: "Frontend & Backend Development",
    description:
      "Develop both the front-end design and back-end functionality tailored to client specifications.",
  },
  {
    number: "05",
    title: "Custom Feature Integration",
    description:
      "Build custom features and functionality such as APIs, payment systems, and unique business logic.",
  },
  {
    number: "06",
    title: "Quality Assurance & Testing",
    description:
      "Perform extensive testing for bugs, security issues, and overall site functionality.",
  },
  {
    number: "07",
    title: "Launch Preparation & Optimization",
    description:
      "Optimize performance and ensure the website or app is ready for launch.",
  },
  {
    number: "08",
    title: "Post-Launch Support & Maintenance",
    description:
      "Provide ongoing support, updates, and maintenance as the site or app evolves.",
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
        heading="Custom Web Development Solutions by LiveBits"
        mainParagraph={[
          "At LiveBits, we understand that every business is unique. Our custom web development services are designed to help your brand stand out in the digital landscape, whether you’re a startup launching your first site or an established business seeking to enhance your online presence.",
          "We can build your website just the way you want it—visually appealing, purpose-driven, and aligned with your goals. With our dedicated development team, the sensitive data of your customers will always remain protected.",
        ]}
        subHeading="Why Custom Web Development Matters"
        subParagraph={[
          "Custom web development allows you to create a website that is fully tailored to your business goals. Unlike templates, a custom site ensures complete control over layout, functionality, and performance, delivering a user-friendly experience that engages visitors and drives conversions. Mobile responsiveness, high performance, and seamless navigation are built into every website we create.",
        ]}

        mainImage={{
          src: "/custom-web-development.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[750px] h-[520px] object-contain rounded-xl"
        }} 
        
        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored Solutions – Custom websites designed specifically to meet your unique business objectives and requirements.",
          "Responsive Across Devices – Fully mobile-optimized designs for seamless functionality on desktop, tablet, and smartphone.",
          "Enhanced Performance – Optimized load speed and performance for improved user retention and search rankings.",
          "Scalable Designs – Websites built to grow with your business, easily accommodating future expansions and upgrades.",
          "Improved Security – Strong, custom security features to safeguard sensitive customer and business data.",
          "Full Development Support – From concept to launch, our team ensures your website achieves all intended goals.",
        ]}
        partnerTitle="Achieve Your Vision Online"
        partnerDescription="With LiveBits, your custom website becomes a true asset. We focus on delivering a visually appealing, functional, and high-performing website that aligns with your brand identity while helping you achieve business growth."
        footerTitle="Ready to Build Your Dream Website?"
        footerDescription="Contact LiveBits today to transform your ideas into a fully customized, professional, and user-friendly website that drives results."

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
        heading="Our Custom Web Development Process"
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
