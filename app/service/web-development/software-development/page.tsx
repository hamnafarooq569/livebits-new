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
    title: "Enterprise Application Development",
    description:
      "Custom software solutions designed to automate complex business processes efficiently.",
  },
  {
    title: "CRM Software Solutions",
    description:
      "Tailored CRM platforms that improve customer management and interaction capabilities.",
  },
  {
    title: "E-commerce Platform Development",
    description:
      "Scalable, secure online shopping systems optimized for usability and conversions.",
  },
  {
    title: "Custom ERP Systems",
    description:
      "Integrates all business functions into a unified, efficient, and streamlined software solution.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps designed to enhance accessibility and user engagement.",
  },
  {
    title: "Data Analytics & Reporting Tools",
    description:
      "Software for actionable insights and better decision-making across business operations.",
  },
  {
    title: "Workflow Automation Solutions",
    description:
      "Automates repetitive tasks to boost efficiency and reduce operational errors.",
  },
  {
    title: "Software Integration Services",
    description:
      "Seamless integration with existing tools and platforms for smooth business processes.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Identify and document the specific needs and objectives of the software.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Create the architecture and design specifications based on the requirements.",
  },
  {
    number: "03",
    title: "Implementation (Coding)",
    description:
      "Develop the software by writing the necessary code.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Evaluate the software to identify and fix any defects or issues.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Release the software for use by end-users.",
  },
  {
    number: "06",
    title: "Maintenance",
    description:
      "Provide ongoing support and updates to ensure the software remains effective and secure.",
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
        heading="Custom Software Development by LiveBits"
        mainParagraph={[
          "At LiveBits, we provide custom software development tailored to your business needs. Whether you require enterprise applications, scalable e-commerce platforms, or efficient CRM systems, our solutions are designed to boost productivity, streamline operations, and enhance customer experiences.",
        ]}
        subHeading="Why Custom Software Matters"
        subParagraph={[
          "Custom software allows businesses to automate processes, integrate seamlessly with existing tools, and scale efficiently. With LiveBits, your software is designed to meet your specific workflows, ensuring enhanced performance, security, and usability for both employees and customers.",
        ]}

        mainImage={{
          src: "/website-1.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[550px] h-[400px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored Solutions – Software designed specifically to match your unique business requirements and workflows.",
          "Enhanced Efficiency – Streamlined operations to minimize disruptions and maximize team productivity.",
          "Client-Centric Approach – Transparent collaboration keeping you involved throughout the development process.",
          "Industry Expertise – Experienced team combining technical skills with deep industry knowledge.",
          "Ongoing Support – Continuous updates and maintenance to keep your software secure and effective.",
          "Scalable Architecture – Solutions built to grow and adapt with your business demands.",
        ]}
        partnerTitle="Empower Your Business with LiveBits"
        partnerDescription="With LiveBits, your custom software becomes a strategic tool to enhance operations, improve user experience, and fuel business growth. Our solutions are designed to deliver measurable results while aligning perfectly with your business goals."
        footerTitle="Ready to Build Your Custom Software?"
        footerDescription="Contact LiveBits today to transform your vision into secure, scalable, and efficient software that drives success."

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
        heading="Our Software Development Process"
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
