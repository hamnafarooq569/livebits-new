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
    title: "360° Product Views",
    description:
      "Allow customers to explore every angle of your product interactively for better clarity.",
  },
  {
    title: "Exploded View Animations",
    description:
      "Show product components dynamically to explain internal structure, assembly, and detailed design clearly.",
  },
  {
    title: "Product Demonstration Videos",
    description:
      "Show real-life product usage through captivating animated demonstrations that enhance customer confidence.",
  },
  {
    title: "High-Quality 3D Renders",
    description:
      "Produce visually stunning, realistic 3D product animations ideal for advertising and marketing campaigns.",
  },
  {
    title: "Interactive E-Commerce Content",
    description:
      "Enhance online shopping experiences using immersive, clickable, and interactive 3D animated product visuals.",
  },
  {
    title: "Marketing & Advertising Videos",
    description:
      "Use professional 3D animations in social media ads, email campaigns, and digital promotions effectively.",
  },
  {
    title: "Technical Product Visualization",
    description:
      "Display complex machinery, tools, or gadgets with precision using detailed and accurate 3D animations.",
  },
  {
    title: "Custom Brand Animation Solutions",
    description:
      "Create tailored 3D product animations designed specifically around your brand goals and marketing needs.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Understand Product & Requirements:",
    description:
      "Discuss the product details, animation objectives, and key features to highlight.",
  },
  {
    number: "02",
    title: "Create 3D Models:",
    description:
      "Design accurate, high-quality 3D models of the product using specialized software.",
  },
  {
    number: "03",
    title: "Scene Creation:",
    description:
      "Build environments, backgrounds, and setups that enhance the 3D product showcase.",
  },
  {
    number: "04",
    title: "Animation Process:",
    description:
      "Animate the product to demonstrate movement, functionality, and interaction clearly.",
  },
  {
    number: "05",
    title: "Lighting & Rendering:",
    description:
      "Apply professional lighting and render the animation for realistic, high-quality visuals.",
  },
  {
    number: "06",
    title: "Sound & Effects:",
    description:
      "Add sound effects and background music to complement the animation experience.",
  },
  {
    number: "07",
    title: "Client Review & Adjustments:",
    description:
      "Present the 3D animation to the client and refine the visuals based on feedback.",
  },
  {
    number: "08",
    title: "Final Export & Delivery:",
    description:
      "Deliver the completed animation in required formats for marketing or product showcases.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`3d Product\nAnimation\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="3D Product Animation Services"
        mainParagraph={[
          "In today’s digital marketing and e-commerce landscape, 3D product animations are essential for showcasing products with unmatched clarity and realism. At LiveBits, we create immersive 3D animations that enhance customer understanding, elevate brand appeal, and drive higher engagement."
        ]}

        subHeading="Why 3D Product Animation is Important"
        subParagraph={[
          "3D animations allow customers to view products from every angle, explore inner components, and understand functionality in ways traditional photos cannot. This immersive visual experience builds trust, increases purchase confidence, and improves overall product perception—making it a powerful tool for marketing and sales."
        ]}

        mainImage={{
          src: "/3d product-animation.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for 3D Product Animation"
        points2={[
          "Immersive Product Visuals – Show products in lifelike detail from every angle.",
          "Interactive Animations – Allow users to rotate, zoom, and explore features seamlessly.",
          "High Conversion Potential – Boost customer confidence and increase sales with realistic visuals.",
          "Custom-Branded Solutions – Animations tailored to match your branding and marketing goals.",
          "Enhanced Marketing Assets – Perfect for websites, social media, ads, and product launches.",
          "Technical Expertise – Skilled animators delivering precise, high-quality 3D renderings.",
        ]}

        partnerTitle="Bring Your Products to Life"
        partnerDescription="LiveBits transforms your static product images into captivating 3D experiences that improve understanding, build trust, and elevate the customer journey. From exploded views to fully interactive models, we deliver premium animations designed to support conversions and enhance brand value."

        footerTitle="Get Started with 3D Product Animation"
        footerDescription="Ready to showcase your products with immersive 3D visuals? Contact LiveBits today and let our experts bring your product ideas to life."

          sideImage={{
          src: "/3d-product-2.jfif",
          alt: "Social media illustration",
          className: "w-full object-contain ",
        }}
      />

      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our 3D Product Animation Process"
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
