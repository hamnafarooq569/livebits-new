import AboutLiveBits from "../components/about";
import BenefitsSection from "../components/BenefitsSection";
import BlogSection from "../components/BlogSection";
import ContactCtaSection from "../components/CtaSection";
import FaqSection from "../components/FaqSection";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import QuoteSection from "../components/QuoteSection";
import SiteFooter from "../components/SiteFooter";
import TeamCards from "../components/Team";
import TeamSection from "../components/TeamMember";


export default function AboutPage() {
  return (
    <main>
      <QuoteSection
        title="About Us"
        subtitle="Working Together Leads to an Amazing Outcome."/> 

      {/* Later you can add more About sections here... */}
      <AboutLiveBits/>
      <BenefitsSection/>
      <TeamCards/>
      
      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />
      
    </main>
  );
}
