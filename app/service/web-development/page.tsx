import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Ecommerce Web Design",
    description:
      "Stunning online stores designed to boost sales and engagement.",
  },
  {
    title: "B2B Web Design",
    description:
      "Professional websites tailored for businesses selling to other businesses.",
  },
  {
    title: "B2C Web Design",
    description:
      "User-friendly websites optimized for direct-to-consumer sales.",
  },
  {
    title: "Custom Web Development",
    description:
      "Unique websites built to perfectly match your brand needs.",
  },
  {
    title: "WordPress Development",
    description:
      "Customizable WordPress sites for flexibility and growth.",
  },
  {
    title: "Shopify Website Development",
    description:
      "Beautiful and functional Shopify stores for online success.",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions to streamline your business operations.",
  },
  {
    title: "Custom ERP Development",
    description:
      "Tailored ERP systems for efficient business management.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Initial Consultation & Requirement Gathering",
    description:
      "Understand the business goals, target audience, and specific features required for the project.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Conduct market research, define the project scope, and select the appropriate technology stack.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Design the website’s interface and user experience with wireframes and prototypes for client feedback and approval.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Develop the front-end and back-end, integrating features and functionality while ensuring scalability and security.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Conduct thorough testing, including functionality checks, performance optimization, and cross-device/browser compatibility.",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Launch the website, making it live for users, and monitor for any immediate post-launch issues.",
  },
  {
    number: "07",
    title: "Post-Launch Support & Maintenance",
    description:
      "Provide ongoing updates, security patches, and feature enhancements to keep the website running smoothly.",
  },
];




export default function WebDevelopmentServicesPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."    />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Power Your Digital Growth with LiveBits"
        mainParagraph={[
          "At LiveBits, we specialize in creating web solutions that empower businesses to thrive in the fast-paced digital world. From startups to established enterprises, our websites are designed to enhance your online presence, engage your audience, and drive business growth.",
          "We don’t just build websites; we craft digital experiences tailored to your brand and business goals. By combining creativity with cutting-edge technology, we ensure your website is not only visually appealing but also functional, scalable, and secure.",
        ]}
        subHeading="Why Choose LiveBits?"
        subParagraph={[
          "Our approach prioritizes custom strategies, modern technology, and long-term partnerships. Every project is built to be scalable, secure, responsive, and performance-driven, ensuring your website supports real business outcomes.",
        ]}

        mainImage={{
          src: "/website.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[480px] object-contain rounded-xl"
        }} 

        heading2="Key Advantages of Partnering with LiveBits"
        points2={[
          "Custom Solutions – Tailored websites designed specifically to meet your business objectives.",
          "Scalable & Secure – Built to grow with your business while protecting against online threats.",
          "Responsive Designs – Seamless functionality across desktops, tablets, and mobile devices.",
          "Modern Technology Stack – Utilizing the latest frameworks for fast, secure, and future-proof websites.",
          "Performance-Focused – Optimized for speed, SEO, and superior user experience.",
          "Transparent Process – Stay updated at every step with clear client-to-manager communication.",
          "Ongoing Support – Continuous maintenance to keep your site secure and high-performing.",
        ]}
        partnerTitle="Our Commitment"
        partnerDescription="At LiveBits, your website is more than just a digital tool—it’s an asset that drives growth, engagement, and long-term success. Our team is committed to delivering measurable results and ensuring your online presence makes a real impact."
        footerTitle="Ready to Transform Your Website?"
        footerDescription="Contact LiveBits today and take the first step towards a website that elevates your business, attracts customers, and guarantees online success."



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
        heading="Our Web Design & Development Process"
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
