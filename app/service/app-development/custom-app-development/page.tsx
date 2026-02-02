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
    title: "Tailor-Made Solutions",
    description:
      "Apps developed specifically for your business requirements.",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Android and iOS applications that work seamlessly.",
  },
  {
    title: "Enterprise App Development",
    description:
      "Streamline operations, collaboration, and workflows.",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces that enhance experience.",
  },
  {
    title: "Backend Integration",
    description:
      "Connect your app with data systems and APIs for smooth performance.",
  },
  {
    title: "Testing & QA",
    description:
      "Comprehensive testing to ensure apps are bug-free and reliable.",
  },
  {
    title: "Performance Optimization",
    description:
      "High-speed, responsive apps that run flawlessly across devices.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Updates, enhancements, and technical assistance after launch.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Understand Client Needs:",
    description:
      "Discuss the client's business goals, target audience, and app requirements.",
  },
  {
    number: "02",
    title: "Research & Planning:",
    description:
      "Analyze competitors, industry trends, and define the app’s architecture and functionality.",
  },
  {
    number: "03",
    title: "Design User Interface:",
    description:
      "Create wireframes and UI design tailored to the client's brand and user experience.",
  },
  {
    number: "04",
    title: "App Development:",
    description:
      "Develop the app, ensuring it meets functionality and design requirements.",
  },
  {
    number: "05",
    title: "Integration with Systems:",
    description:
      "Integrate with third-party services, APIs, or backend systems as needed.",
  },
  {
    number: "06",
    title: "Testing & Quality Assurance:",
    description:
      "Test the app for bugs, performance issues, and cross-platform compatibility.",
  },
  {
    number: "07",
    title: "Launch Preparation:",
    description:
      "Finalize app details, perform store submissions, and prepare for launch.",
  },
  {
    number: "08",
    title: "Post-Launch Support & Updates:",
    description:
      "Offer ongoing support, app maintenance, and future updates based on feedback.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Custom App\nDevelopment\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."/>

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Custom Application Development Services"
        mainParagraph={[
          "At LiveBits, we transform your visions into high-quality web and mobile applications. Our custom app development services are designed to meet your unique business requirements, whether it’s enhancing your customers’ mobile experience or streamlining internal operations. We create bespoke solutions that are scalable, user-friendly, and aligned with your business goals."
        ]}

        subHeading="Why Custom Apps Matter"
        subParagraph={[
          "Custom applications give your business a competitive edge in a market flooded with generic solutions. Unlike off-the-shelf apps that serve broad audiences, custom apps are designed specifically to meet your business needs, integrate seamlessly with existing systems, and provide specialized functionality. From mobile apps to enterprise solutions, our applications help improve engagement, automate repetitive tasks, and optimize processes across sectors like e-commerce, health, education, and more."
        ]}

        mainImage={{
          src: "/mobile app development-01.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[520px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Competent Developers – Equipped with the latest technologies to ensure your app stays future-proof.",
          "360-Degree Service – From concept and design to development, testing, and maintenance, we cover it all.",
          "Timely Delivery – We respect deadlines and ensure your project goals are met on time and within budget.",
          "User-Focused Design – Apps are intuitive, engaging, and crafted for the best user experience.",
          "Scalable Solutions – Build applications that grow with your business.",
          "Affordable Development – High-quality custom apps without inflated costs.",
          "Seamless Integration – Connect your app with existing systems and workflows.",
          "Continuous Support – Post-launch updates, maintenance, and improvements.",
        ]}

        partnerTitle="Get Started With LiveBits"
        partnerDescription="Bring your idea to life with our expert team. We help businesses of all sizes develop custom apps that are functional, engaging, and designed to drive growth. Let’s create an application that perfectly fits your business requirements."

        footerTitle="Turn Your Ideas Into Reality"
        footerDescription="Contact us today to start developing your ideal custom application."

          sideImage={{
          src: "/custom-development-2.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />


      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Custom App Development Process"
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
