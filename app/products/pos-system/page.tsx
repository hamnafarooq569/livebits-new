
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
    title: "Increased Efficiency:",
    description:
      "Streamline and automate daily retail operations, saving time and minimizing manual errors.",
  },
  {
    number: "",
    title: "Enhanced Customer Experience:",
    description:
      "Deliver a seamless, personalized shopping experience across in-store and online channels.",
  },
  {
    number: "",
    title: "Data-Driven Decisions:",
    description:
      "Leverage real-time insights to make informed decisions that accelerate business growth.",
  },
  {
    number: "",
    title: "Scalability:",
    description:
      "Grow effortlessly with POS solutions that adapt to your evolving retail needs.",
  },
  {
    number: "",
    title: "Cost Savings:",
    description:
      "Optimize operations, reduce overhead, and improve profitability through automation and data insights.",
  },
  {
    number: "",
    title: "Future-Readiness:",
    description:
      "Stay competitive with innovative features and integrations built for the modern retail landscape.",
  },
];

      const features=[
        {
          title: "Cloud-Based Access:",
          description:
            "Get real-time access to sales data, inventory levels, and customer information from anywhere, at any time.",
        },
        {
          title: "Inventory Management:",
          description:
            "Track stock levels, receive low-stock alerts, and automate reordering for a smooth and efficient inventory process.",
        },
        {
          title: "Sales Tracking & Reporting:",
          description:
            "Monitor sales performance, identify trends, and track top-performing products to make data-driven decisions.",
        },
        {
          title: "Customer Relationship Management (CRM):",
          description:
            "Build strong customer relationships by tracking purchase history, preferences, and contact information.",
        },
        {
          title: "Loyalty Programs:",
          description:
            "Boost customer retention with reward points, discounts, and personalized offers for loyal shoppers.",
        },

        {
          title: "Mobile POS:",
          description:
            "Process transactions on-the-go to increase convenience and flexibility during sales interactions.",
        },
        {
          title: "Omni-Channel Integration:",
          description:
            "Sync online and offline sales channels to keep your inventory and customer data consistent across platforms.",
        },
        {
          title: "Secure Payment Processing:",
          description:
            "Enable fast, secure transactions with support for multiple payment methods and encrypted processing.",
        },
        {
          title: "AI & Machine Learning:",
          description:
            "Use intelligent algorithms for sales prediction, inventory optimization, and personalized customer recommendations.",
        },
        {
          title: "IoT Integration:",
          description:
            "Enhance retail operations with IoT-enabled smart inventory tracking, automated checkouts, and in-store experience improvements.",
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
      imageSrc="/pos-img.png" // or "/POS-01.png"
      sideSmallHeading="Retail challenges end here:"
      sideMainHeading="We bring a smarter way to run your store"
      sideParagraph="At LiveBits, we don’t settle for basic POS tools. Built with modern retail in mind, our POS system combines intelligent automation, real-time reporting, and effortless usability to transform how your team manages daily operations. While others promise efficiency, we deliver proven, measurable results that elevate the entire retail workflow."
    />

    <SolutionSection
      imageSrc="/POS-01.png" // or "/pos-img.png", swap as you like
      SmallHeading="Point-of-Sale (POS) System"
      MainHeading="Partner with LiveBits to Revolutionize Your Retail Operations"
      Paragraph="LiveBits is committed to supporting retailers with world-class technology that fuels growth. Our expert team ensures seamless implementation, tailored configuration, and continuous support — whether you're a boutique shop or a growing multi-branch enterprise. With powerful tools that streamline processes, enhance customer engagement, and improve operational decision-making, our POS system empowers you to achieve retail success and stay ahead of the competition."
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
