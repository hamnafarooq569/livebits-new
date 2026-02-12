import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import QuoteSection from "../components/QuoteSection";
import ServicesPageSection from "../components/ServiceHero";
import ServiceSection from "../components/ServiceSection";

const servicesData = [
  { title: "Digital Marketing", description: "We create data-backed digital marketing strategies that increase brand visibility, generate quality leads, and boost conversions across all major platforms.", image: "/app-development.webp", },
  { title: "Graphic Designing", description: "Our creative designs build strong brand identities through visually compelling graphics that leave a lasting impression." , image: "/app-development.webp",},
  { title: "Web Design & Development", description: "We design and develop fast, responsive, and SEO-friendly websites that deliver seamless user experiences and real business results.", image: "/app-development.webp", },
  { title: "Mobile App Development", description: "We build high-performance mobile applications with intuitive interfaces and scalable features for Android and iOS platforms.", image: "/app-development.webp", },
  { title: "Ecommerce Solutions", description: "Our ecommerce services help businesses sell online efficiently with conversion-focused stores and secure, scalable solutions.", image: "/app-development.webp", },
  { title: "Video Animation", description: "We produce engaging video animations that simplify complex ideas, capture attention, and elevate your brand storytelling.", image: "/app-development.webp", },
];


// ✅ FAQ DATA
const homeFaqs = [
  {
    question: " What services does LiveBits provide??",
    answer: (
      <p>
        LiveBits offers digital marketing, graphic designing, web design & development, mobile app development, ecommerce solutions, and video animation services.
      </p>
    ),
  },
  {
    question: "Do you offer customized service packages?",
    answer: (
      <p>
        Yes, we tailor our services based on your business goals, budget, and project requirements.
      </p>
    ),
  },
  {
    question: "How long does it take to deliver a service?",
    answer: (
      <p>
        Timelines depend on the scope of work. Smaller projects may take a 
        <strong> few weeks</strong>, while complex solutions require a longer development cycle.
      </p>
    ),
  },
  {
    question: "Will I get ongoing support after project completion?",
    answer: (
      <p>
        Absolutely. We provide ongoing support, maintenance, and optimization to ensure long-term success.
      </p>
    ),
  },
  {
    question: "How can I get started with LiveBits services?",
    answer: (
      <p>
        You can contact us through our website to schedule a consultation and discuss your project requirements.
      </p>
    ),
  },
];


export default function ServicesPage() {
  return (
    <main>

      <QuoteSection
        title="LiveBits Services"
        subtitle="At LiveBits, we deliver result-driven digital services designed to help businesses grow, scale, and stand out in today’s competitive online world."/>
      <ServiceSection services={servicesData} />;
      {/* ✅ FAQ SECTION */}
      <FaqSection
        faqs={homeFaqs}
      />
      <BlogSection />

    </main>
  );
}
