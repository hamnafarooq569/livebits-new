import AboutLiveBits from "../components/about";
import BenefitsSection from "../components/BenefitsSection";
import ClientLogos from "../components/Clients";
import ContactCtaSection from "../components/CtaSection";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import QuoteSection from "../components/QuoteSection";
import SiteFooter from "../components/SiteFooter";
import TeamSection from "../components/TeamMember";


export default function ClientPage() {
  return (
    <main className="min-h-screen bg-[#F6F4E7]">
      <QuoteSection
        title="Our Clients"
        subtitle="LiveBits works with a diverse range of clients, delivering tailored digital solutions that help businesses grow, scale, and succeed."/> 
      <ClientLogos/>

    </main>
  );
}
