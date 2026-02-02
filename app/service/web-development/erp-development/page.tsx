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
    title: "Custom ERP Modules for Specific Industries",
    description:
      "Tailored modules to enhance industry-specific business workflows and efficiency.",
  },
  {
    title: "Workflow Automation Solutions",
    description:
      "Eliminate repetitive manual tasks to boost overall operational productivity and accuracy.",
  },
  {
    title: "Advanced Analytics & Interactive Dashboards",
    description:
      "Provide real-time business insights and KPIs to support smarter decisions.",
  },
  {
    title: "Flexible Deployment Options",
    description:
      "Choose between cloud-based or on-premise ERP systems to match your company’s requirements.",
  },
  {
    title: "Mobile ERP Access Anywhere",
    description:
      "Manage essential business functions anytime and anywhere on any device.",
  },
  {
    title: "Retail & E-Commerce ERP Solutions",
    description:
      "Optimize sales, inventory, and customer management across online and offline channels.",
  },
  {
    title: "Healthcare & Education ERP Systems",
    description:
      "Streamline patient, student, and resource management efficiently across platforms.",
  },
  {
    title: "Logistics & Manufacturing ERP Modules",
    description:
      "Improve warehouse, supply chain, and production management for sustainable business growth.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Identify business needs, workflows, and processes.",
  },
  {
    number: "02",
    title: "Feasibility Study and Planning",
    description:
      "Define scope, timeline, budget, and project roadmap.",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "Create system architecture, UI/UX, and ensure scalability and security.",
  },
  {
    number: "04",
    title: "Development and Coding",
    description:
      "Build modules, integrate tools, and develop scalable solutions.",
  },
  {
    number: "05",
    title: "Testing and Quality Assurance",
    description:
      "Conduct rigorous testing to ensure functionality and security.",
  },
  {
    number: "06",
    title: "Deployment and Implementation",
    description:
      "Migrate data, configure accounts, and launch the system.",
  },
  {
    number: "07",
    title: "User Training",
    description:
      "Train employees, provide manuals, and support during onboarding.",
  },
  {
    number: "08",
    title: "Scalability and Continuous Improvement",
    description:
      "Enhance features and integrate new technologies.",
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
        heading="Tailor-Made ERP Development by LiveBits"
        mainParagraph={[
          "At LiveBits, we create specialized ERP systems tailored to your business needs. Our ERP solutions automate processes, streamline operations, and provide actionable insights, enabling businesses to improve productivity, optimize resource allocation, and achieve sustainable growth.",
        ]}
        subHeading="Why ERP Development Matters"
        subParagraph={[
          "A custom ERP system integrates all core business functions into a single platform, enhancing efficiency and decision-making. With LiveBits, your ERP is designed to be scalable, secure, and aligned with your unique business workflows, ensuring seamless performance across departments and devices.",
        ]}

        mainImage={{
          src: "/erp.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[450px] h-[400px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Business Expansion Strategies – Automate processes to save time, reduce manual tasks, and enhance operational efficiency.",
          "Advanced Analytics & Intelligence – Gain actionable insights with interactive dashboards and data-driven reporting tools.",
          "Scalable & Secure Systems – ERP solutions that grow with your business while ensuring robust data protection.",
          "Seamless Integration – Effortlessly connect your ERP with existing tools, platforms, and third-party applications.",
          "Tailored Solutions – Custom-built modules designed specifically to meet your company’s operational and strategic goals.",
          "Workflow Automation – Reduce manual tasks to enhance productivity, accuracy, and overall business performance.",
        ]}
        partnerTitle="Maximize Efficiency Across Your Organization"
        partnerDescription="With LiveBits, your ERP system becomes a strategic tool for productivity, informed decision-making, and operational excellence. Our solutions are designed to support multiple sectors while maintaining flexibility, scalability, and security."
        footerTitle="Ready to Transform Your Business with ERP?"
        footerDescription="Contact LiveBits today to implement a tailor-made ERP system that optimizes operations, enhances productivity, and drives sustained growth."

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
        heading="Our ERP Development Process"
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
