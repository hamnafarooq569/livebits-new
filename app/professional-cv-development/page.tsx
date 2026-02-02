import AgencyExperienceSection from "../components/AgencyExperienceSection";
import InfiniteImages from "../components/ClientSlide";
import IndustriesSection from "../components/IndustriesSection";
import DetailServiceHeroSection from "../components/MarketingHero";
import OfferingSection from "../components/OfferingSection";
import WhyLiveBits from "../components/WhyLiveBits";
import MarketingProcess from "../components/MarketingProcess";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import BlogSection from "../components/BlogSection";

const offerings = [
  {
    title: "Tailored CV Writing for Professionals",
    description:
      "Customized CVs highlighting skills, achievements, and industry experience.",
  },
  {
    title: "ATS-Compliant CV Design",
    description:
      "Structured CVs that pass automated tracking systems and industry screening standards.",
  },
  {
    title: "Professional Templates and Layouts",
    description:
      "Clean, visually appealing designs that make your CV stand out.",
  },
  {
    title: "Cover Letter Development",
    description:
      "Personalized letters crafted to complement CVs and impress recruiters.",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Enhance your online professional presence to attract recruiters and networking opportunities.",
  },
  {
    title: "Bilingual CV Creation",
    description:
      "Professionally written CVs available in multiple languages for broader career reach.",
  },
  {
    title: "Grammar and Style Checks",
    description:
      "Error-free content ensuring professionalism, clarity, and readability.",
  },
  {
    title: "Industry-Specific Keyword Integration",
    description:
      "Keywords strategically placed to highlight relevant skills and improve visibility.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Personal Information Gathering",
    description:
      "Collect essential details like personal contact information, career objectives, and job-specific preferences.",
  },
  {
    number: "02",
    title: "Experience Assessment",
    description:
      "Highlight relevant work experience, key achievements, and skills.",
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
      "Choose a professional layout that suits your industry and career stage.",
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
      "Ensure the CV is compatible with Applicant Tracking Systems (ATS) for screening success.",
  },
  {
    number: "07",
    title: "Final Review and Delivery",
    description:
      "Review the final document for accuracy and clarity, delivering it in multiple file formats.",
  },
];





export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."/>

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



    <WhyLiveBits
      heading="Professional CV Writing Services by LiveBits"
      mainParagraph={[
        "At LiveBits, we provide expert CV writing services that help you stand out in a competitive job market. Our professional writers craft tailored CVs highlighting your skills, achievements, and experience, ensuring your application gets noticed by recruiters.",
      ]}
      subHeading="Why CV Design and Style Matter"
      subParagraph={[
        "In today’s competitive environment, recruiters receive thousands of CVs weekly. A well-structured, visually appealing, and keyword-optimized CV ensures your application passes ATS filters, highlights your strengths, and increases your chances of being shortlisted. LiveBits focuses on presenting your skills and accomplishments in a clear, professional, and impactful way.",
      ]}
      heading2="Why Choose LiveBits?"
      points2={[
        "Tailored CV Writing – Custom CVs designed to highlight skills, achievements, and professional experience effectively.",
        "ATS-Compliant Designs – CVs structured to pass Applicant Tracking Systems and meet industry standards.",
        "Professional Templates – Aesthetic, well-organized layouts that improve readability and recruiter engagement.",
        "Cover Letters and LinkedIn Optimization – Supporting materials crafted to strengthen your application and online presence.",
        "Bilingual CV Features – Professionally written CVs in multiple languages to broaden your career opportunities.",
        "Attention to Detail – Grammar, formatting, and clarity refined for polished and professional submissions.",
      ]}
      partnerTitle="Make Your CV Stand Out"
      partnerDescription="With LiveBits, your CV becomes a strategic tool to secure interviews and leave a lasting impression. Our expert writers ensure your profile communicates professionalism, competence, and potential."
      footerTitle="Ready to Elevate Your Career?"
      footerDescription="Contact LiveBits today to create a CV that opens doors, makes an impression, and positions you for success."

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
        heading="Our Digital Marketing Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <TestimonialsSection bgColor="#ffffffff"/>

      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="#EEDC82"/>

    </>
  );
}
