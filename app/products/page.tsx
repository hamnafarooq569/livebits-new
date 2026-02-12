import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import ProductsPageSection from "../components/ProductHero";
import QuoteSection from "../components/QuoteSection";
import ServiceSection from "../components/ServiceSection";

const servicesData = [
  { title: "MIS System", description: "LiveBits provides a tailored MIS solution that streamlines operations, boosts productivity, and delivers real-time actionable insights.", image: "/app-development.webp", },
  { title: "Attendance System", description: "LiveBits’ Attendance Management System streamlines HR processes, ensures accurate tracking, and provides real-time actionable insights.", image: "/app-development.webp", },
  { title: "HR System", description: "LiveBits’ comprehensive HRM system streamlines HR operations, enhances employee management, and delivers real-time actionable insights.", image: "/app-development.webp", },
  { title: "POS System", description: "LiveBits’ advanced POS software streamlines retail operations, enhances customer experience, and drives smarter, data-driven growth.", image: "/app-development.webp", },
];

const faqsData = [
  {
    question: "Are LiveBits systems customizable for different businesses?",
    answer:
      "Yes, all our systems are fully customizable and tailored to match your business processes, industry requirements, and growth goals.",
  },
  {
    question: "Can these systems be integrated with existing software?",
    answer:
      "Absolutely. Our systems can integrate with existing tools such as accounting software, CRMs, and third-party platforms.",
  },
  {
    question: "Are LiveBits products secure and reliable?",
    answer:
      "Security is a top priority. We implement industry-standard security measures to ensure data protection and system reliability.",
  },
  {
    question: "Do you provide training and support after deployment?",
    answer:
      "Yes, we offer complete onboarding, user training, and ongoing technical support to ensure smooth operations.",
  },
  {
    question: "Can these systems scale as my business grows?",
    answer:
      "Definitely. Our MIS, HR, Attendance, and POS systems are built to scale and adapt as your business expands.",
  },
];


export default function ServicesPage() {
  return (
    <main>

      <QuoteSection
        title="LiveBits Products"
        subtitle=" LiveBits develops smart, scalable digital systems designed to simplify operations, improve efficiency, and support business growth."/>
      <ServiceSection services={servicesData} />;      
      <FaqSection
        faqs={faqsData}
      />

      <BlogSection />

    </main>
  );
}
