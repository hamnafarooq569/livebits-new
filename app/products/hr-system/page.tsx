
import WhyChooseProfessional from "@/app/components/WhyChooseProfessional";
import BlogSection from "../../components/BlogSection";
import BusinessSolutionSection from "../../components/BusinessSolution";
import InfiniteImages from "../../components/ClientSlide";
import FaqSection from "../../components/FaqSection";
import MisFeaturesSection from "../../components/FeaturesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import MarketingProcess from "../../components/MarketingProcess";
import SolutionSection from "../../components/solution";

const processSteps = [
  {
    number: "",
    title: "Enhanced Efficiency:",
    description:
      "Automate HR tasks, streamline workflows, and free up valuable time for high-impact strategic activities.",
  },
  {
    number: "",
    title: "Improved Accuracy:",
    description:
      "Eliminate manual errors and ensure precise data management across all HR functions.",
  },
  {
    number: "",
    title: "Better Decision-Making:",
    description:
      "Utilize real-time insights and predictive analytics to make informed, proactive workforce decisions.",
  },
  {
    number: "",
    title: "Increased Employee Satisfaction:",
    description:
      "Give employees easy access to self-service features, performance feedback, and personalized learning opportunities.",
  },
  {
    number: "",
    title: "Cost Savings:",
    description:
      "Optimize HR processes, reduce administrative overhead, and increase operational efficiency.",
  },
  {
    number: "",
    title: "Future-Readiness:",
    description:
      "Equip your HR team with innovative, scalable tools that evolve with your business and industry demands.",
  },
];

const features=[
        {
          title: "Comprehensive Employee Management:",
          description:
            "Manage employee profiles, job roles, performance records, and organizational structures from a centralized platform.",
        },
        {
          title: "Automated Recruitment & Onboarding:",
          description:
            "Streamline hiring with automated recruitment workflows, talent tracking, and smooth onboarding experiences.",
        },
        {
          title: "Performance Management:",
          description:
            "Monitor employee performance with goal-setting, continuous feedback, and performance review tools.",
        },
        {
          title: "Advanced Payroll Processing:",
          description:
            "Automate payroll calculations, tax deductions, and compliance to ensure accuracy and on-time payouts.",
        },
        {
          title: "Leave & Attendance Management:",
          description:
            "Track attendance and manage leave requests with fully integrated, automated workflows.",
        },
        {
          title: "Learning & Development:",
          description:
            "Support employee growth with personalized training programs, course assignments, and progress tracking.",
        },
        {
          title: "Employee Self-Service Portal:",
          description:
            "Enable employees to manage personal data, view payslips, request leave, and access HR services independently.",
        },
        {
          title: "Mobile App Integration:",
          description:
            "Offer employees and HR teams on-the-go access to key HR tools, notifications, and workflows.",
        },
        {
          title: "AI & Machine Learning Algorithms:",
          description:
            "Use intelligent insights to predict workforce trends, improve retention, and optimize resource allocation.",
        },
        {
          title: "IoT Integration:",
          description:
            "Leverage IoT devices for smart attendance tracking, environmental monitoring, and workplace safety automation.",
        },
        {
          title: "Blockchain Security:",
          description:
            "Protect HR data with tamper-proof, blockchain-backed security for maximum integrity and transparency.",
        },
        {
          title: "Voice & Facial Recognition:",
          description:
            "Enhance authentication and streamline access control with advanced biometric verification tools.",
        },
        {
          title: "Compliance Management:",
          description:
            "Stay compliant with labor laws through automated tracking, alerts, documentation, and audit-ready reporting.",
        },
        {
          title: "Customizable Dashboards & Reporting:",
          description:
            "Generate interactive dashboards and tailored HR reports for strategic workforce planning and analysis.",
        },
      ]


export default function Page() {
  return (
    <>
    <DetailServiceHeroSection
       
        title={`Attendance\nManagement System`}
        subtitle="LiveBits is transforming HR management with its state-of-the-art Attendance System, designed to streamline time-tracking processes, ensure data accuracy, and enhance operational efficiency."
    />
    
    <InfiniteImages />

    <BusinessSolutionSection
      imageSrc="/placeholder.png"
      sideSmallHeading="Human resource challenges end here:"
      sideMainHeading="We deliver a better way to manage people"
      sideParagraph="At LiveBits, we believe HR deserves more than outdated systems and manual processes. Our comprehensive HR module leverages modern technology to optimize employee management, enhance engagement, and streamline day-to-day HR functions. While others make promises, we back ours with performance and innovation."
    />

    <SolutionSection
      imageSrc="/placeholder.png"
      SmallHeading="HR Management System"
      MainHeading="Revolutionize Your HR Management with LiveBits"
      Paragraph="LiveBits is committed to transforming the HR landscape with intelligent, future-ready technologies. Our HRM solution equips your organization with powerful tools to manage employees, automate HR tasks, monitor performance, and support data-driven workforce strategies. Whether you aim to improve efficiency, strengthen employee satisfaction, or modernize operations, our system delivers everything you need to build a high-performing workplace."
    />

    <WhyChooseProfessional
      heading="Key Features of "
      highlightedWord="MIS Solution"
      features={features}
    />




    <MarketingProcess
        heading="Our Digital Marketing Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
    />

    <FaqSection bgColor="#ffffffff"/>
    <BlogSection bgColor="bg-[#f8f8f8]" />
    </>
  );
}
