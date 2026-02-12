import ChooseHostingPlan from "../components/ChooseHostingPlan";
import FaqSection from "../components/FaqSection";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseCloud from "../components/WhyChooseCloud";
import OurTrustedPartnersFaded from "../components/OurTrustedPartners";
import ChoosePlanToggle from "../components/ChoosePlanToggle";
import BlogSection from "../components/BlogSection";
import QuoteSection from "../components/QuoteSection";

const homeFaqs = [
  {
    question: "What services does LiveBits offer?",
    answer: (
      <p>
        LiveBits offers digital marketing, web design & development, mobile app
        development, ecommerce solutions, graphic designing, and video animation
        services.
      </p>
    ),
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: (
      <p>
        Yes. We work with startups, small businesses, and enterprises, delivering
        scalable solutions tailored to each stage of growth.
      </p>
    ),
  },
  {
    question: "How long does a website or app project take?",
    answer: (
      <p>
        Timelines depend on complexity. Most websites take
        <strong> 2–6 weeks</strong>, while apps may take longer based on features.
      </p>
    ),
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: (
      <p>
        Absolutely. We provide ongoing maintenance, updates, and technical
        support to ensure long-term performance.
      </p>
    ),
  },
  {
    question: "How do I get started with LiveBits?",
    answer: (
      <p>
        Simply contact us through our website. Our team will schedule a
        consultation to understand your goals and requirements.
      </p>
    ),
  },
];

export default function CloudHostingPage() {
  return (
    <main>

      <QuoteSection
        title="Cloud Hosting"
        subtitle="Secure, scalable cloud hosting solutions designed to keep your business online, fast, and reliable at all times."/>

      <ChooseHostingPlan />
      <WhyChooseCloud />
      <ChoosePlanToggle/>
      <TestimonialsSection />
      <OurTrustedPartnersFaded/>
      <FaqSection
        faqs={homeFaqs}
      />
      <BlogSection />

    </main>
  );
}
