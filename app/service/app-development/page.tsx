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
    title: "Android App Development",
    description:
      "High-quality, intuitive, and optimized apps designed specifically for Android devices.",
  },
  {
    title: "iOS App Development",
    description:
      "Modern, secure, and engaging applications built for iPhones and iPads.",
  },
  {
    title: "Custom App Development",
    description:
      "Fully tailored apps created according to your business needs and functionality requirements.",
  },
  {
    title: "Native & Hybrid App Solutions",
    description:
      "Choose between powerful native apps or efficient cross-platform hybrid development.",
  },
  {
    title: "UI/UX App Design",
    description:
      "Clean, branded, and user-centered designs for smooth and enjoyable user experiences.",
  },
  {
    title: "App Performance Optimization",
    description:
      "Fast loading times, smooth navigation, and high responsiveness.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Seamless integration with APIs, payment gateways, maps, social login, and more.",
  },
  {
    title: "App Security & Data Protection",
    description:
      "Strong security measures to protect user data and ensure safe interactions.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Consultation & Requirement Gathering",
    description:
      "Understand business goals, user needs, and technical requirements.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Create wireframes and prototypes to define app flow and design.",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Build the app using the latest technologies for both Android and iOS.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Perform comprehensive testing to ensure functionality and performance.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Launch the app on Google Play and Apple App Store.",
  },
  {
    number: "06",
    title: "Ongoing Support & Maintenance",
    description:
      "Provide continuous updates, bug fixes, and feature enhancements.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best App\nDevelopment\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Mobile App Development Services"
        mainParagraph={[
          "In today’s mobile-first world, having a customized mobile app is essential to grow your business, enhance user engagement, and stay competitive. At LiveBits, we build user-friendly, feature-rich, and high-performance mobile apps for both Android and iOS. Our team transforms your ideas into seamless digital experiences that help your business innovate and scale."
        ]}

        subHeading="How Mobile Apps Help Your Business Grow"
        subParagraph={[
          "A well-designed app helps your business strengthen customer relationships and increase revenue opportunities. With instant access to your products or services, customers enjoy a smoother experience, improved engagement, and stronger brand loyalty. A mobile app also boosts your brand’s visibility and sets you apart from competitors."
        ]}

        mainImage={{
          src: "/mobile app development-01.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Experienced Mobile Developers – Skilled in both native and cross-platform technologies to deliver high-quality apps.",
          "User-Focused Approach – Ensuring apps are easy, fast, and enjoyable for all users.",
          "End-to-End Development – From ideation and design to coding, testing, and deployment.",
          "Scalable Solutions – Built to grow with your business and evolving customer needs.",
          "Dedicated Support – Continuous updates, performance improvements, and feature enhancements.",
        ]}

        partnerTitle="Let’s Build Your Mobile Future Together"
        partnerDescription="At LiveBits, we specialize in building innovative, scalable, and result-driven mobile apps that support your long-term success. Whether you want to streamline operations or engage customers more effectively, our team is ready to bring your vision to life."

        footerTitle="Ready to create your custom mobile app?"
        footerDescription="Let’s start building something extraordinary."

          sideImage={{
          src: "/app-development-2.jfif",
          alt: "Social media illustration",
          className: "object-contain ",
        }}
      />





      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our App development Process"
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
