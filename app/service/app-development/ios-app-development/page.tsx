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

const offerings = [
  {
    title: "Custom iOS App Development",
    description:
      "Tailored solutions for your specific business needs.",
  },
  {
    title: "UI/UX Design",
    description:
      "Engaging and intuitive interfaces for an exceptional user experience.",
  },
  {
    title: "Enterprise iOS Solutions",
    description:
      "Scalable apps designed for complex business operations.",
  },
  {
    title: "Payment Integration",
    description:
      "Secure and seamless in-app payment systems.",
  },
  {
    title: "Push Notifications & Alerts",
    description:
      "Keep users engaged and informed with timely updates.",
  },
  {
    title: "App Testing & Quality Assurance",
    description:
      "Ensure flawless performance across all iOS devices.",
  },
  {
    title: "App Maintenance & Updates",
    description:
      "Continuous improvements, optimizations, and post-launch support.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track performance and gain actionable insights for better decision-making.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Understand Requirements:",
    description:
      "Gather the app's purpose, target audience, and key features.",
  },
  {
    number: "02",
    title: "Research & Planning:",
    description:
      "Analyze market trends, competitors, and define the app’s architecture.",
  },
  {
    number: "03",
    title: "Design the App Interface:",
    description:
      "Create wireframes and design the app’s user interface (UI) with a focus on usability.",
  },
  {
    number: "04",
    title: "App Development:",
    description:
      "Begin building the app, focusing on functionality and platform-specific features.",
  },
  {
    number: "05",
    title: "Backend Integration:",
    description:
      "Set up and integrate backend systems for data storage and management.",
  },
  {
    number: "06",
    title: "Testing & Debugging:",
    description:
      "Perform extensive testing to fix bugs and ensure smooth app performance across devices.",
  },
  {
    number: "07",
    title: "App Launch:",
    description:
      "Prepare the app for submission to the Apple App Store and ensure compliance with store guidelines.",
  },
  {
    number: "08",
    title: "Ongoing Support & Updates:",
    description:
      "Provide post-launch support, maintenance, and regular updates as needed.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`IOS App\nDevelopment\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="IOS App Development Services"
        mainParagraph={[
          "In today’s mobile-first world, businesses need applications designed specifically for their unique goals and user needs. At LiveBits, we provide iOS app development services that focus on building scalable, secure, and intuitive mobile applications. Whether you are a startup or an established business, our team delivers engaging user experiences that help your business grow and thrive in a competitive marketplace."
        ]}

        subHeading="Tailor-Made iOS Applications for Your Business"
        subParagraph={[
          "Our custom iOS applications cater to a variety of industries including Retail, Education, Finance, and Healthcare. Unlike generic off-the-shelf solutions, our apps are built to meet your specific business requirements, delivering better usability, seamless performance, and a polished user experience. From simple utility apps to complex enterprise solutions, LiveBits ensures your app aligns perfectly with your brand and vision."
        ]}

        mainImage={{
          src: "/ios-app-development.jpeg",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[550px] h-[590px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for iOS App Development?"
        points2={[
          "Expert Developers – Skilled in building high-quality, scalable iOS applications.",
          "Custom Solutions – Tailored apps designed specifically for your business objectives.",
          "User-Centric Design – Focused on creating intuitive and engaging experiences.",
          "End-to-End Service – From ideation and wireframing to development, testing, and deployment.",
          "Performance & Optimization – Fast, responsive, and reliable apps that work across devices.",
          "Quality Assurance – Rigorous testing to ensure bug-free, top-performance apps.",
          "Scalable Architecture – Solutions that grow with your business and future needs.",
          "Ongoing Support – Updates, enhancements, and maintenance post-launch.",
        ]}

        partnerTitle="Building iOS Apps That Drive Business Growth"
        partnerDescription="Our iOS development process is thorough and structured. We begin with market analysis and wireframing, followed by UX/UI design, coding, testing, and deployment. The result is an app that not only functions flawlessly but also strengthens customer engagement, drives conversions, and boosts brand recognition."

        footerTitle="Get Started With LiveBits Today"
        footerDescription="Ready to bring your iOS app idea to life? Whether it’s an app to enhance customer interaction, increase revenue, or expand your digital presence, LiveBits is your partner in creating innovative and impactful iOS applications. Let’s build your iOS app together."

          sideImage={{
          src: "/ios-app-development-2.jfif",
          alt: "ios app development",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />

      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Digital Marketing Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <TestimonialsSection bgColor="#ffffffff"/>

      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </>
  );
}
