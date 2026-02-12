
import AgencyExperienceSection from "@/app/components/AgencyExperienceSection";
import BlogSection from "@/app/components/BlogSection";
import InfiniteImages from "@/app/components/ClientSlide";
import FaqSection from "@/app/components/FaqSection";
import IndustriesSection from "@/app/components/IndustriesSection";
import IndustriesServed from "@/app/components/IndustriesServed";
import QuoteSection from "@/app/components/MarketingHero";
import MarketingProcess from "@/app/components/MarketingProcess";
import OfferingSection from "@/app/components/OfferingSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import TrustStatsBar from "@/app/components/TrustStatsBar";
import WhyLiveBits from "@/app/components/WhyLiveBits";
import { data } from "@/serviceData/data";
import { notFound } from "next/navigation";

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


type Props = {
  params:Promise<{ slug: string }>;
}

export default async function Page({params}:Props) {
  const resolvedParams = await params;

  const services = await data.find((service) => service.slug === resolvedParams.slug);

  if (!services) {
    return notFound();
  }

  return (
    <>
      <QuoteSection
        title={services.title}
        subtitle={services.subtitle}
      />

      <InfiniteImages />

      <OfferingSection
        heading={services.offeringheading}
        items={services.offering}
      />

      <WhyLiveBits
        heading1={services.textheading}
        paragraph1={services.textdetail}

        image1={services.img1}

        heading2={services.textheading2}
        paragraph2={services.textdetail2}

        image2={services.img2}
      />




      <TrustStatsBar/>
      <IndustriesServed />

      <MarketingProcess
        heading={services.processheading}
        subtext={services.processtext}
        steps={processSteps}
      />
      <TestimonialsSection bgColor="#ffffffff"/>

      <FaqSection faqs={services.faqs}/>
      <BlogSection />

    </>
  );
}
