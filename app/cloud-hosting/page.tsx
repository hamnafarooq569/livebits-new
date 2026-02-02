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
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f9f9f9]" />

    </main>
  );
}
