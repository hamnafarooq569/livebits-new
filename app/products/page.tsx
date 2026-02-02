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

export default function ServicesPage() {
  return (
    <main>

      <QuoteSection
        title="LiveBits Products"
        subtitle="LiveBits products are designed to help businesses automate processes, improve efficiency, and scale with confidence."/>
      <ServiceSection services={servicesData} />;      
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </main>
  );
}
