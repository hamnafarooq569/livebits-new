import AboutLiveBits from "../components/about";
import BenefitsSection from "../components/BenefitsSection";
import BlogSection from "../components/BlogSection";
import ClientLogos from "../components/Clients";
import ContactCtaSection from "../components/CtaSection";
import FaqSection from "../components/FaqSection";
import IndustriesSection from "../components/IndustriesSection";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import QuoteSection from "../components/QuoteSection";
import SiteFooter from "../components/SiteFooter";
import TeamSection from "../components/TeamMember";


export default function AboutPage() {
  return (
    <main>
      <QuoteSection
        title="Industries We Serve"
        subtitle="With a wide range of services and experience across major industries, we understand your challenges and design tailored solutions that create real business impact."/> 

      <IndustriesSection/>
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="#f8f8f8" />


    </main>
  );
}
