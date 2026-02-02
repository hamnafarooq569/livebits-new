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
    title: "Custom B2B Website Design",
    description:
      "Tailored layouts reflecting professionalism and boosting brand credibility.",
  },
  {
    title: "Mobile-Responsive Layouts",
    description:
      "Optimized for easy access on smartphones, tablets, and desktops.",
  },
  {
    title: "Lead Generation Tools",
    description:
      "CTAs, forms, and chatbots to engage visitors and increase conversions.",
  },
  {
    title: "SEO-Optimized Structure",
    description:
      "On-page and technical SEO to improve visibility in search results.",
  },
  {
    title: "Content Marketing Integration",
    description:
      "Blogs, case studies, and whitepapers to showcase industry expertise.",
  },
  {
    title: "Branding & Visual Consistency",
    description:
      "Logos, colors, and fonts aligned for a unified identity.",
  },
  {
    title: "B2B E-commerce Integration",
    description:
      "Secure transactional systems with product catalogs for business clients.",
  },
  {
    title: "Performance & Analytics Setup",
    description:
      "Track visitor behavior and optimize website performance for results.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Client Consultation & Business Goals",
    description:
      "Understand the client's business model, target audience, and specific needs.",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description:
      "Analyze competitor websites and design an effective strategy tailored to the B2B market.",
  },
  {
    number: "03",
    title: "Wireframing & Layout Design",
    description:
      "Design a layout that emphasizes clarity, ease of navigation, and functionality.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Develop a user-friendly interface that focuses on lead generation and engagement.",
  },
  {
    number: "05",
    title: "Content Management System (CMS) Setup",
    description:
      "Implement a CMS for easy content updates and management.",
  },
  {
    number: "06",
    title: "SEO & Conversion Optimization",
    description:
      "Optimize for SEO and focus on conversion optimization strategies, such as contact forms and CTA buttons.",
  },
  {
    number: "07",
    title: "Testing & Feedback",
    description:
      "Test the website across devices and gather client feedback for improvements.",
  },
  {
    number: "08",
    title: "Final Launch & Ongoing Support",
    description:
      "Launch the site and offer post-launch support and updates.",
  },
];




export default function B2BWebDesignPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Digital\nMarketing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."  />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Professional B2B Web Design by LiveBits"
        mainParagraph={[
          "In today’s competitive marketplace, a business-to-business (B2B) website is often the first point of contact between companies. At LiveBits, we craft B2B websites that reflect professionalism, credibility, and trust, helping your business make a strong first impression while generating leads and fostering long-term relationships.",
        ]}
        subHeading="Why B2B Website Design Matters"
        subParagraph={[
          "A well-designed B2B website is more than just visually appealing—it drives results. From simple, user-friendly navigation to mobile responsiveness, our designs ensure that your clients can easily access key information, interact with your services, and take desired actions such as booking consultations, filling forms, or making purchases. Strong branding, consistent visuals, and intuitive layouts work together to enhance your company’s credibility and overall digital presence.",
        ]}

        mainImage={{
          src: "/b2b-web-desgine.svg",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Professional & Reliable Design – Websites that reflect credibility and professionalism to impress potential clients.",
          "Mobile-Optimized – Fully responsive layouts so business clients can access key information anywhere.",
          "Lead Generation Focus – Strategically placed CTAs, forms, and interactive elements to boost conversions.",
          "SEO-Enhanced – Optimized for search engines to attract organic traffic and generate quality leads.",
          "Content-Rich Approach – Blogs, case studies, and testimonials to showcase your industry expertise.",
          "Custom Solutions – Tailored B2B web designs to meet the unique needs of your business.",
        ]}
        partnerTitle="Elevate Your Business Presence"
        partnerDescription="With LiveBits, your B2B website becomes a powerful tool for lead generation and relationship building. We ensure your site is not only visually professional but also functional, scalable, and aligned with your company’s brand identity."
        footerTitle="Ready to Upgrade Your B2B Website?"
        footerDescription="Contact LiveBits today to discuss how a professional B2B website can enhance your credibility, generate leads, and grow your business."

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
        heading="Our B2B Web Design Development Process"
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
