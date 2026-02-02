
import WhyChooseProfessional from "@/app/components/WhyChooseProfessional";
import BlogSection from "../../components/BlogSection";
import BusinessSolutionSection from "../../components/BusinessSolution";
import InfiniteImages from "../../components/ClientSlide";
import FaqSection from "../../components/FaqSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import MarketingProcess from "../../components/MarketingProcess";
import SolutionSection from "../../components/solution";


const processSteps = [
  {
    number: "",
    title: "Work Smarter",
    description:
      "Automate processes and remove displays",
  },
  {
    number: "",
    title: "Make better decisions",
    description:
      "Get accurate, timely data to guide your choices.",
  },
  {
    number: "",
    title: "Save Money",
    description:
      "Reduce waste and use resource efficiently.",
  },
  {
    number: "",
    title: "Happy Customers",
    description:
      "Respond faster and offer personalized services.",
  },
  {
    number: "",
    title: "Be Ready for the Future",
    description:
      "Grow with tools that adapt and use the latest tech.",
  },
];

const features = [
  {
    title: "All-in-One Data:",
    description: "Keep all your important data in one place.",
  },
  {
    title: "Live Insights:",
    description: "Get up-to-date information to make smart decisions.",
  },
  {
    title: "Custom Dashboards:",
    description: "See what matters most to you at a glance.",
  },
  {
    title: "Automatic Reports:",
    description: "Save time with instant, error-free reports.",
  },
  {
    title: "Team Collaboration:",
    description: "Work together easily across departments.",
  },
  {
    title: "Grows With You:",
    description: "Flexible solutions as your business expands.",
  },
  {
    title: "Safe & Compliant:",
    description: "Strong security to protect your data.",
  },
  {
    title: "Easy Integration:",
    description: "Works smoothly with your other tools.",
  },
  {
    title: "Smart Technology:",
    description: "Use AI to automate tasks and predict trends.",
  },
];

export default function Page() {
  return (
    <>
    <DetailServiceHeroSection
        title={`Management\nInformation System`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."
    />
    
    <InfiniteImages />

    <BusinessSolutionSection
      imageSrc="/placeholder.png"
      sideSmallHeading="Technology frustration ends here:"
      sideMainHeading="Streamline Opertaions and Drive Growth"
      sideParagraph="LiveBits offers a comprehensive managemnt information System (MIS) designed to optimize business operations, enhance productivity and fuel growth. Our MIS framework collects, processes and manaes to provide actionable insights that support informed decision-making. Tailored to your business's uniques needs, our solutions offer real time data and analytics to help streamline processes and boost efficiency."
    />

    <SolutionSection
      imageSrc="/placeholder.png"
      SmallHeading="MIS Solution"
      MainHeading="Streamline Opertaions and Drive Growth"
      Paragraph="LiveBits offers a comprehensive managemnt information System (MIS) designed to optimize business operations, enhance productivity and fuel growth. Our MIS framework collects, processes and manaes to provide actionable insights that support informed decision-making. Tailored to your business's uniques needs, our solutions offer real time data and analytics to help streamline processes and boost efficiency."    />  

    <WhyChooseProfessional
      heading="Key Features of "
      highlightedWord="MIS Solution"
      features={features}
    />

    <MarketingProcess
        heading="Our MIS-Syestem Features"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
    />

      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />
    </>
  );
}
