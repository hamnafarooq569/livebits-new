import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import QuoteSection from "../components/QuoteSection";
import ServicesPageSection from "../components/ServiceHero";
import ServiceSection from "../components/ServiceSection";

const servicesData = [
  { title: "Digital Marketing", description: "Boost your brand's visibility and achieve measurable success with LiveBits' expert digital marketing solutions. From SEO to paid advertising." },
  { title: "Content Marketing", description: "Create impactful content strategies that attract, engage, and retain your target audience across digital platforms." },
  { title: "Video Editing", description: "Tell your brand story with engaging, high-quality video edits tailored for social media, ads, and promotions." },
  { title: "App Development", description: "Launch fast, secure, and scalable mobile applications aligned with your business objectives." },
  { title: "Web Design & Development", description: "Modern, responsive websites designed for performance, usability, and conversions." },
  { title: "Graphic Design", description: "Clean, memorable visuals for branding, marketing campaigns, and social media presence." },
  { title: "E-Commerce Solutions", description: "Conversion-focused online stores." },
  { title: "Digital Marketing", description: "Data-driven strategies for measurable growth.", image: "/app-development.webp", },
];

export default function ServicesPage() {
  return (
    <main>

      <QuoteSection
        title="LiveBits Services"
        subtitle="Premium digital solutions designed to scale your brand, strengthen your online presence, and drive measurable, long-term business growth."/>
      <ServiceSection services={servicesData} />;
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </main>
  );
}
