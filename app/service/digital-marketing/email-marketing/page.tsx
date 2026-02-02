import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogListSection from "../../../components/BlogListSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";
import BlogSection from "@/app/components/BlogSection";

const offerings = [
  {
    title: "Email Campaign Strategy & Planning",
    description:
      "Design effective campaigns aligned with your business goals.",
  },
  {
    title: "Email List Building & Segmentation",
    description:
      "Build and segment highly engaged email lists for maximum impact.",
  },
  {
    title: "Personalized Email Content",
    description:
      "Create compelling, value-driven emails that resonate with your audience.",
  },
  {
    title: "Automated Campaigns & Workflows",
    description:
      "Automate sending and scheduling to maintain consistent communication.",
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "Test subject lines, content, and designs to maximize open and conversion rates.",
  },
  {
    title: "Performance Analytics & Reporting",
    description:
      "Track campaign metrics to refine strategies and achieve better ROI.",
  },
  {
    title: "Newsletter & Promotional Emails",
    description:
      "Craft engaging newsletters, announcements, and offers to keep your audience informed.",
  },
  {
    title: "Integration with Marketing Tools",
    description:
      "Seamlessly connect email campaigns with CRM and other marketing platforms for efficiency."
  },
];

const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Campaign Goals:",
    description:
      "Understand the client's objectives (e.g., lead generation, brand awareness) and audience.",
  },
  {
    number: "02",
    title: "Audience Segmentation:",
    description:
      "Segment the email list based on customer demographics, behaviors, and preferences.",
  },
  {
    number: "03",
    title: "Email Campaign Strategy:",
    description:
      "Develop an email marketing strategy, including type of email (newsletter, promotional, transactional) and frequency.",
  },
  {
    number: "04",
    title: "Email Design & Content Creation:",
    description:
      "Design visually appealing emails with compelling subject lines and content that speaks to the audience.",
  },
  {
    number: "05",
    title: "A/B Testing:",
    description:
      "Test different elements (subject lines, calls-to-action, images) to optimize email performance.",
  },
  {
    number: "06",
    title: "Send & Monitor Campaign:",
    description:
      "Send the emails at optimal times and track key metrics like open rates, click-through rates, and conversions.",
  },
  {
    number: "07",
    title: "Follow-Up & Drip Campaigns:",
    description:
      "Set up automated follow-up emails or drip campaigns to nurture leads and maintain engagement.",
  },
  {
    number: "08",
    title: "Performance Analysis & Reporting:",
    description:
      "Analyze email campaign results and provide insights for future improvements.",
  },
];




export default function EmailMarkrtingPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Email\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."
      />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Email Marketing with LiveBits"
        mainParagraph={[
          "In today’s competitive digital world, capturing attention is challenging. While social media and websites play a role, email marketing remains one of the most effective tools for building relationships, boosting sales, and retaining customers. LiveBits transforms ordinary emails into impactful opportunities, helping businesses create lasting connections with their audience.",
        ]}

        subHeading="How LiveBits Helps You Succeed"
        subParagraph={["At LiveBits, we combine creative storytelling with data-driven strategies to design email campaigns that deliver real results. Every campaign is carefully planned, executed, and monitored to ensure maximum engagement and ROI. Whether you’re nurturing leads or re-engaging existing customers, our approach is focused on sustainable growth."

        ]}

        mainImage={{
          src: "/email-marketing-first-icon.png",
          alt: "LiveBits Marketing",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Email Marketing?"
        points2={[
          "Proven ROI – Email marketing delivers a high return, with studies showing an average $42 earned for every $1 spent.",

          "Customized Campaigns – Every email is tailored to your audience and business objectives.",
      
          "Data-Driven Insights – Continuous monitoring and reporting to refine campaigns for optimal results.",

          "End-to-End Management – From list building to analytics, LiveBits handles every aspect of your email marketing."
        ]}

        partnerTitle="We Help You Build Lasting Connections"
        partnerDescription="At LiveBits, we don’t just send emails — we build meaningful customer relationships that drive engagement, trust, and long-term loyalty."

        footerTitle="Let’s Connect With Your Audience"
        footerDescription="Whether you’re starting from scratch or looking to refine your approach, LiveBits ensures your emails are not just sent—they convert. Enhance engagement, build lasting relationships, and drive meaningful results with our expert email marketing services."

          sideImage={{
          src: "/email-marketing-22.jfif",
          alt: "Social media illustration",
          className: "object-contain ",
        }}

      />



      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Email Marketing Process"
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
