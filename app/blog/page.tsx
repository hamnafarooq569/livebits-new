import AutomateWorkSection from "../components/AutomateWork";
import { BlogFooterArticles } from "../components/BlogFooter";
import BlogHeroSection from "../components/BlogHero";
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection";
import NewsletterSection from "../components/NewsLetter";
import RecommendsSection from "../components/RecommendsSection";

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

export default function BlogPage() {
  return (
    <>
      <BlogHeroSection/>
      <NewsletterSection/>
      <FaqSection
        faqs={homeFaqs}
      />
      <BlogSection  />


      
    </>
  );
}
