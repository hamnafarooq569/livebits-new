
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
    title: "Enhanced Accuracy:",
    description:
      "Eliminate errors caused by manual entry and increase the reliability of attendance data.",
  },
  {
    number: "",
    title: "Increased Productivity:",
    description:
      "Free HR teams from time-consuming administrative tasks, allowing them to focus on strategic activities.",
  },
  {
    number: "",
    title: "Improved Employee Satisfaction:",
    description:
      "Offer a user-friendly, transparent system that simplifies leave management and tracking.",
  },
  {
    number: "",
    title: "Cost Savings:",
    description:
      "Reduce administrative costs and manual errors while optimizing workforce management.",
  },
  {
    number: "",
    title: "Data-Driven Insights:",
    description:
      "Access powerful analytics to make informed decisions and optimize workforce utilization.",
  },
  {
    number: "",
    title: "Enhanced Compliance: ",
    description:
      "Stay compliant with labor laws and industry standards, avoiding penalties and risks.",
  },
];

const features=[
        {
          title: "Real-Time Attendance Tracking:",
          description: "Monitor employee attendance instantly with accurate, up-to-date data.",
        },
        {
          title: "Biometric Integration:",
          description: "Enhance security and prevent fraud with fingerprint, facial recognition, and other biometric methods.",
        },
        {
          title: "Mobile App Support:",
          description: "Empower employees and HR teams to manage attendance and leave on the go.",
        },
        {
          title: "Automated Leave Management:",
          description: "Simplify leave requests and approvals with automated workflows.",
        },
        {
          title: "Customizable Reporting:",
          description: "Tailor reports to suit your business needs and gain insights on employee attendance patterns.",
        },
        {
          title: "Seamless Payroll Integration:",
          description: "Automatically sync attendance data with payroll systems for accurate, timely payroll processing.",
        },
        {
          title: "Cloud-Based Access: ",
          description: "Access the system from anywhere, anytime, with cloud-powered technology.",
        },
        {
          title: "Voice Recognition Technology:",
          description: "Enable hands-free attendance logging with voice authentication.",
        },
        {
          title: "Blockchain Security:",
          description: "Guarantee data integrity and transparency with blockchain-powered security.",
        },
        {
          title: "AI & Machine Learning Algorithms:",
          description: "Optimize processes and predict trends with advanced technologies.",
        },
      {
          title: "Compliance & Security:",
          description: "Ensure adherence to labor laws and industry standards, with robust security features.",
        },
        {
          title: "IoT Integration:",
          description: "Utilize smart devices and sensors to enhance attendance tracking.",
        },
      ]


export default function Page() {
  return (
    <>
    <DetailServiceHeroSection

        title="Attendance\nManagement System"
        subtitle="LiveBits is transforming HR management with its state-of-the-art Attendance System, designed to streamline time-tracking processes, ensure data accuracy, and enhance operational efficiency."
    />
    
    <InfiniteImages />

    <BusinessSolutionSection
     
      imageSrc="/placeholder.png"
      sideSmallHeading="Say goodbye to outdated attendance tracking"
      sideMainHeading="A smarter, faster way to manage your workforce"
      sideParagraph="At LiveBits, we are never content with basic or outdated HR tools. Our Attendance Management System leverages intelligent automation, real-time monitoring, and seamless integration to deliver an exceptional HR management experience. While others claim efficiency, we provide results you can measure."
    />

    <SolutionSection
      imageSrc="/placeholder.png"
      SmallHeading="Attendance Management System"
      MainHeading="Transform Your Business Operations with Precision & Efficiency"
      Paragraph="LiveBits is committed to elevating HR operations through innovative, technology-driven solutions. Our Attendance Management System equips HR teams with powerful tools to manage workforce attendance effortlessly, reduce administrative load, and ensure data accuracy. Tailored to your organization’s unique needs, it provides real-time attendance data, automated reporting, and intelligent insights — helping you maintain compliance, improve productivity, and make smarter operational decisions."    />  

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
