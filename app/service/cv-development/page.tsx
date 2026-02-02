import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import DigitalMarketingTools, { MarqueeSection } from "../../components/MarketingTools";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Custom CV Writing",
    description:
      "Professionally written CVs tailored to your career goals and industry standards.",
  },
  {
    title: "ATS-Friendly Formatting",
    description:
      "Keyword-optimized CVs designed to successfully pass applicant tracking systems.",
  },
  {
    title: "Modern CV Design",
    description:
      "Clean, visually appealing layouts that enhance readability and recruiter engagement.",
  },
  {
    title: "Cover Letter Writing",
    description:
      "Compelling cover letters aligned with your CV and targeted job roles.",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Keyword-rich LinkedIn profiles that boost visibility and professional credibility.",
  },
  {
    title: "Industry-Specific Templates",
    description:
      "Versatile CV templates suitable for multiple professions and experience levels.",
  },
  {
    title: "Grammar & Proofreading",
    description:
      "Error-free writing ensuring clarity, accuracy, and professional presentation.",
  },
  {
    title: "Bilingual CV Options",
    description:
      "CVs available in multiple languages for local and international opportunities.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Personal Information Gathering",
    description:
      "Collect essential details such as contact information, career objectives, and job-specific preferences.",
  },
  {
    number: "02",
    title: "Experience Assessment",
    description:
      "Highlight relevant work experience, key achievements, and professional skills.",
  },
  {
    number: "03",
    title: "Skills and Qualifications",
    description:
      "Identify and list technical skills, soft skills, certifications, and relevant training.",
  },
  {
    number: "04",
    title: "Format Selection",
    description:
      "Choose a professional CV layout that suits your industry and career stage.",
  },
  {
    number: "05",
    title: "Content Refinement",
    description:
      "Use impactful language aligned with job descriptions and industry standards.",
  },
  {
    number: "06",
    title: "Optimization for ATS",
    description:
      "Ensure the CV is compatible with Applicant Tracking Systems (ATS).",
  },
  {
    number: "07",
    title: "Final Review and Delivery",
    description:
      "Review the final document for accuracy and clarity, delivering it in multiple formats for flexibility.",
  },
];





const toolsSections: MarqueeSection[] = [
  {
    direction: "left",
    speed: 88,
    items: ["Google Ads", "Meta Ads", "YouTube", "LinkedIn Ads", "Twitter Ads", "TikTok Ads"],
  },
  {
    direction: "right",
    speed: 92,
    items: ["Mailchimp", "HubSpot", "Klaviyo", "ActiveCampaign", "Sendinblue", "ConvertKit"],
  },
  {
    direction: "left",
    speed: 96,
    items: ["Google Analytics", "GA4", "Hotjar", "Semrush", "Ahrefs", "Moz"],
  },
];


export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Professional CV\nDevelopment\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="CV Writing Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we deliver professional and tailored CV writing services designed to make you stand out. Our expertly crafted CVs highlight your skills, experience, and achievements while blending creativity, professionalism, and ATS compliance to help you get noticed by recruiters.",
        ]}
        subHeading="Why Professional CV Writing Matters"
        subParagraph={[
          "Recruiters receive thousands of CVs every week, and only a small percentage get shortlisted. A well-structured, visually appealing, and keyword-optimized CV increases your chances of being noticed, read, and selected. LiveBits combines industry standards, strategic formatting, and compelling content to ensure your CV creates a strong first impression.",
        ]}

        mainImage={{
          src: "/CV-removebg-preview.png",
          alt: "Professional CV Writing Services",
          width: 1250,
          height: 350,
          position: "right",
          className: "w-full max-w-[500px] h-[400px] object-contain rounded-xl",
        }}

        heading2="Why Choose LiveBits?"
        points2={[
          "Tailored CV Content – Customized CVs aligned with your career goals, industry standards, and job requirements.",
          "ATS-Optimized Writing – CVs structured with relevant keywords to successfully pass applicant tracking systems.",
          "Professional Design & Styling – Clean layouts, consistent headings, and modern templates that enhance readability.",
          "Multi-Platform Support – CVs, cover letters, LinkedIn profiles, and headshots optimized for professional platforms.",
          "Grammar & Accuracy Assurance – Error-free, polished writing that reflects professionalism and attention to detail.",
          "Cost-Effective Solutions – High-quality CV development using versatile templates suitable for multiple professions.",
        ]}
        partnerTitle="Take the Next Step in Your Career"
        partnerDescription="With LiveBits, your CV becomes a powerful personal marketing tool. We ensure your profile reflects confidence, clarity, and competence—helping you stand out in a competitive job market."
        footerTitle="Ready to Get Noticed?"
        footerDescription="Contact LiveBits today to create a professionally written CV that positions you for success and helps you secure your next opportunity."
      />





      <AgencyExperienceSection />
      <MarketingProcess
        heading="Our CV Development Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <ServiceToolsTabs/>
      <TestimonialsSection bgColor="#ffffffff"/>

      
      <DigitalMarketingTools heading="Digital Marketing Tools" sections={toolsSections} />

      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </>
  );
}
