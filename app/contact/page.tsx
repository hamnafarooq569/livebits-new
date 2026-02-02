import ContactCtaSection from "../components/CtaSection";
import ContactFormSection from "../components/Form";
import ContactOfficesSection from "../components/Location";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import QuoteSection from "../components/QuoteSection";
import SiteFooter from "../components/SiteFooter";



export default function AboutPage() {
  return (
    <main>

      <QuoteSection
        title="Contact Us"
        subtitle="Feel free to reach out to us for any inquiries or support needs."/> 
      <ContactFormSection/>
      <ContactOfficesSection/>
      
    </main>
  );
}
