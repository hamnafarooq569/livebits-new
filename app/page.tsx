
import BlogSection from "./components/BlogSection";
import InfiniteImage from "./components/ClientSlide";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import ImproveBusinessSection from "./components/ImproveBusinessSection";
import IndustriesServed from "./components/IndustriesServed";
import MarketingChannelsSection from "./components/MarketingSection";
import PromoStatsSection from "./components/PromoStatsSection";
import ServicesGrid from "./components/ServicesGrid";
import SolutionsZigZagSection from "./components/StrategiesSection";

import TestimonialsSection from "./components/TestimonialsSection";
import TrustStatsBar from "./components/TrustStatsBar";
import WorkingProcess from "./components/WorkingProcess";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <InfiniteImage />
     {/* <ServicesGrid /> */}
     {/* <PromoStatsSection /> */}
      <ImproveBusinessSection />
      <IndustriesServed/>
      <TrustStatsBar/>
      <WorkingProcess/>
      <TestimonialsSection/>
      <MarketingChannelsSection/>
      <FaqSection bgColor="#ffffff" />
      <BlogSection bgColor="bg-[#f8f8f8]" />
    </main>
  );
}
