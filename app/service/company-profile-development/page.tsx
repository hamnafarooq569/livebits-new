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
    title: "Professional Written Content for Profiles",
    description:
      "Engaging and concise content that highlights business strengths and achievements.",
  },
  {
    title: "Custom Visual Design Solutions",
    description:
      "Attractive designs that capture your brand identity and create a memorable impression.",
  },
  {
    title: "Editable and Scalable Profile Formats",
    description:
      "Easily updateable files that support business growth and future changes.",
  },
  {
    title: "Digital-Optimized Company Profiles",
    description:
      "Profiles designed to display perfectly on websites, presentations, and digital platforms.",
  },
  {
    title: "Strategic Storytelling Development",
    description:
      "Narratives crafted to resonate with clients, partners, and target audiences.",
  },
  {
    title: "Multi-Purpose Use Profiles",
    description:
      "Suitable for proposals, marketing, pitches, and stakeholder communication.",
  },
  {
    title: "Brand-Centric Layouts and Templates",
    description:
      "Layouts tailored to reflect your business’s personality and professionalism.",
  },
  {
    title: "Impactful Presentation Materials",
    description:
      "Visually appealing presentations designed to inform, engage, and leave lasting impressions.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description:
      "Clarify the purpose, target audience, and specific goals of the company profile to align with business needs.",
  },
  {
    number: "02",
    title: "Research & Gather Data",
    description:
      "Collect information including company history, mission, vision, milestones, offerings, and achievements.",
  },
  {
    number: "03",
    title: "Content Structuring",
    description:
      "Organize the profile into logical sections like About Us, Values, Services, and Contact Information.",
  },
  {
    number: "04",
    title: "Professional Writing",
    description:
      "Write concise, engaging, and brand-aligned content to captivate readers.",
  },
  {
    number: "05",
    title: "Visual Design",
    description:
      "Develop an attractive layout using consistent branding elements such as logos, colors, and graphics.",
  },
  {
    number: "06",
    title: "Technical Optimization",
    description:
      "Ensure compatibility for both digital and print formats with responsive and editable design structures.",
  },
  {
    number: "07",
    title: "Review & Finalize",
    description:
      "Polish content and design for clarity, accuracy, and overall coherence.",
  },
  {
    number: "08",
    title: "Deliver in Multiple Formats",
    description:
      "Provide the final company profile in versatile formats suitable for presentations, websites, and print media.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Company Profile\nDevelopment\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Company Profile Development Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we specialize in creating professional company profiles that leave a lasting impression. Our profiles are designed to showcase your brand’s strengths, values, and unique offerings, helping build trust with clients, partners, and stakeholders.",
        ]}
        subHeading="Why Company Profiles Matter"
        subParagraph={[
          "A well-crafted company profile communicates your brand story effectively, strengthens credibility, and engages your audience. LiveBits ensures that each profile combines compelling content, striking visuals, and strategic storytelling to make your business stand out in competitive markets.",
        ]}

        mainImage={{
          src: "/company-profile-development.png",
          alt: "Printing and Packaging Solutions",
          width: 1250,
          height: 350,
          position: "right",
          className: "w-full max-w-[550px] h-[420px] object-contain rounded-xl",
        }}

        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored Content Creation – Professionally written profiles highlighting mission, vision, achievements, and core offerings.",
          "Visual Excellence – Custom designs that reflect your brand personality and captivate your audience.",
          "Multi-Purpose Utility – Ideal for business proposals, online platforms, and stakeholder communications.",
          "Editable Formats – Easily updateable profiles that grow and evolve with your business needs.",
          "Digital Compatibility – Optimized for web, presentations, and other digital media platforms.",
          "Strategic Storytelling – Crafting compelling narratives that resonate with your business goals and audience.",
        ]}
        partnerTitle="Elevate Your Brand Story"
        partnerDescription="With LiveBits, your company profile becomes a powerful marketing tool. It builds credibility, highlights achievements, and strengthens relationships with clients, partners, and investors."
        footerTitle="Ready to Showcase Your Brand?"
        footerDescription="Contact LiveBits today to create a professional company profile that communicates your story and enhances your brand impact."

          sideImage={{
          src: "/image-2.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />




      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Company Profile Development Process"
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
