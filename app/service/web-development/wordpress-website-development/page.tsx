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
    title: "Custom WordPress Themes and Designs",
    description:
      "Unique, fully customizable themes tailored to represent your brand identity perfectly.",
  },
  {
    title: "Advanced Plugin Development Solutions",
    description:
      "Custom plugins designed to extend website functionality and meet business-specific requirements.",
  },
  {
    title: "Mobile-Responsive WordPress Websites",
    description:
      "Fully optimized designs providing seamless browsing across all devices and screen sizes.",
  },
  {
    title: "SEO-Friendly WordPress Development",
    description:
      "Websites built to improve search engine visibility and attract targeted organic traffic.",
  },
  {
    title: "Enhanced Security Systems Integration",
    description:
      "Advanced security measures to protect data and ensure safe website operation.",
  },
  {
    title: "Performance Optimization and Speed Enhancements",
    description:
      "Fast-loading websites for better user retention, experience, and search ranking.",
  },
  {
    title: "E-commerce WordPress Solutions",
    description:
      "Custom WooCommerce and membership systems for robust online sales and user engagement.",
  },
  {
    title: "Ongoing Maintenance and Support Services",
    description:
      "Continuous updates, troubleshooting, and optimization to keep websites secure and performing.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Consultation & Requirements",
    description:
      "Understand goals, audience, and desired functionality (e-commerce, blogs, etc.).",
  },
  {
    number: "02",
    title: "Custom Theme Design",
    description:
      "Design a responsive WordPress theme aligned with brand identity and focused on UX across all devices.",
  },
  {
    number: "03",
    title: "Plugin Development & Integration",
    description:
      "Develop and integrate custom plugins for enhanced functionality, including e-commerce tools and user systems.",
  },
  {
    number: "04",
    title: "Content Population & SEO",
    description:
      "Organize content and optimize on-page SEO including titles, descriptions, and alt tags.",
  },
  {
    number: "05",
    title: "Performance Optimization",
    description:
      "Implement image compression, caching, and code minification for faster loading.",
  },
  {
    number: "06",
    title: "Security Measures",
    description:
      "Install security plugins, configure SSL, and schedule regular updates.",
  },
  {
    number: "07",
    title: "Testing & QA",
    description:
      "Test for cross-browser compatibility, usability, and responsiveness.",
  },
  {
    number: "08",
    title: "Launch & Support",
    description:
      "Launch the site and provide ongoing support, updates, and training for management.",
  },
];




export default function WordPressWebsiteDevelopmentPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Expert WordPress Development by LiveBits"
        mainParagraph={[
          "At LiveBits, we specialize in professional WordPress development, offering custom themes, plugins, and full website solutions. Our expertise ensures your website is not only visually appealing but also high-performing, scalable, and secure, helping your business stand out in a competitive digital landscape.",
        ]}
        subHeading="Why WordPress Development Matters"
        subParagraph={[
          "WordPress powers over 40% of websites worldwide due to its flexibility, scalability, and rich plugin ecosystem. With LiveBits, your WordPress website will deliver seamless performance, enhanced security, and optimized SEO, all while providing a fully responsive and user-friendly experience across all devices.",
        ]}

        mainImage={{
          src: "/wordpress-05.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[550px] h-[450px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Custom Themes and Plugins – Tailored WordPress solutions that align perfectly with your brand and business objectives.",
          "SEO-Optimized Development – Websites built with best practices to improve search engine rankings and drive organic traffic.",
          "Mobile-Responsive Design – Fully optimized for desktops, tablets, and smartphones for an engaging user experience.",
          "Enhanced Security Features – Advanced security systems to protect sensitive data and prevent unauthorized access.",
          "Performance Optimization – Fast-loading websites through caching, image optimization, and efficient coding standards.",
          "Continuous Support and Maintenance – Ongoing updates and support to keep your website secure and fully functional.",
        ]}
        partnerTitle="Elevate Your Brand Online"
        partnerDescription="With a custom WordPress website by LiveBits, you can connect with your audience more effectively, increase traffic, and expand your business while maintaining complete control over your website’s functionality and appearance."
        footerTitle="Ready to Build Your WordPress Website?"
        footerDescription="Contact LiveBits today to create a secure, scalable, and visually stunning WordPress website that drives results for your business."

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
        heading="Our WordPres Website Development Process"
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
