
import WhyChooseProfessional from "@/app/components/WhyChooseProfessional";
import BlogSection from "../../components/BlogSection";
import BusinessSolutionSection from "../../components/BusinessSolution";
import InfiniteImages from "../../components/ClientSlide";
import FaqSection from "../../components/FaqSection";
import MisFeaturesSection from "../../components/FeaturesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import MarketingProcess from "../../components/MarketingProcess";
import SolutionSection from "../../components/solution";
import WhyChoose from "@/app/components/WhyChoose";
import { data } from "@/productData/data";
import { notFound } from "next/navigation";
import IndustriesServed from "@/app/components/IndustriesServed";



type Props = {
  params:Promise<{ slug: string }>;
}

export default async function Page({params}:Props) {

  const resolvedParams = await params;

  const products = await data.find((product) => product.slug === resolvedParams.slug);

  if (!products) {
    return notFound();
  }
  
  return (
    <>
    <DetailServiceHeroSection

        title={products.producttitle}
        subtitle={products.productsubtitle}
    />
    
    <InfiniteImages />

    <BusinessSolutionSection
     
      imageSrc={products.img1}
      sideMainHeading={products.productheading1}
      sideParagraph={products.productparagraph1}
      sideParagraph2={products.productparagraph2}
    />

    <SolutionSection
      MainHeading={products.productheading2}
      IntroParagraph={products.productparagraph3}
      BulletPoints={products.productbullets}
      EndingParagraph={products.productparagraph4}
      imageSrc={products.img2}
    />

  <WhyChooseProfessional
    headingStart={products.systemworkheadingstart}
    highlightedWord={products.systemworkheadinghighlight}
    headingEnd={products.systemworkheadingend}
    features={products.systemwork}
  />


    <MarketingProcess
        heading={products.processheading}
        subtext={products.processheadingdescription}
        steps={products.processsteps}
    />

    <WhyChoose
      headingStart={products.whychooseheadingstart}
      highlightedWord={products.whychooseheadinghighlight}
      headingEnd={products.whychooseheadingend}
      features={products.whychoosepoints}
    />
    
    <IndustriesServed />
 

    <FaqSection faqs={products.faqs} />

    <BlogSection/>
    </>
  );
}
