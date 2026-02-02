import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogListSection from "../../../components/BlogListSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";
import BlogSection from "@/app/components/BlogSection";

const offerings = [
  {
    title: "Custom Box Design",
    description:
      "Unique packaging tailored to product size, style, and branding for maximum shelf impact.",
  },
  {
    title: "Label & Instruction Design",
    description:
      "Professional labels that clearly communicate essential product information in an attractive layout.",
  },
  {
    title: "Premium Material Selection",
    description:
      "Durable, high-quality materials that protect products while enhancing visual presentation appeal.",
  },
  {
    title: "Eco-Friendly Packaging Options",
    description:
      "Sustainable materials and minimal waste designs to support environmentally conscious branding efforts.",
  },
  {
    title: "Unboxing Experience Optimization",
    description:
      "Packaging crafted to create delightful, memorable, and shareable unboxing experiences.",
  },
  {
    title: "Creative Branding Elements",
    description:
      "Incorporation of logos, brand colors, and visual assets to strengthen brand identity consistently.",
  },
  {
    title: "Custom Sizes & Shapes",
    description:
      "Innovative packaging shapes and dimensions to help your product stand out on shelves.",
  },
  {
    title: "Functional & Practical Packaging",
    description:
      "Visually appealing designs that maintain product protection, convenience, and user accessibility.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Client Brief & Product Understanding:",
    description:
      "Discuss the product, target audience, packaging needs, and overall brand expectations.",
  },
  {
    number: "02",
    title: "Market Research & Conceptualization:",
    description:
      "Analyze the market and create standout packaging concepts aligned with brand strategy.",
  },
  {
    number: "03",
    title: "Design Development:",
    description:
      "Develop packaging layouts with strong branding, clear product details, and visual appeal.",
  },
  {
    number: "04",
    title: "Material Selection & Sustainability:",
    description:
      "Choose suitable materials for the product, considering eco-friendly and cost-effective options.",
  },
  {
    number: "05",
    title: "Client Review & Revisions:",
    description:
      "Present packaging concepts and refine the designs based on client feedback.",
  },
  {
    number: "06",
    title: "Final Design & Production Files:",
    description:
      "Deliver polished, print-ready packaging files suitable for manufacturing and distribution.",
  },
];


export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Product\nPackaging Design\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."   />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Product Packaging Design Services by LiveBits"
        mainParagraph={[
          "At LiveBits, we understand that product packaging is more than just a container—it’s the first impression of your brand. A well-designed package communicates your brand’s values, quality, and uniqueness while attracting customers instantly. Whether you sell cosmetics, tech gadgets, or food products, our custom packaging designs enhance your brand image and elevate the customer experience from the shelf to unboxing."
        ]}

        subHeading="The Importance of Product Packaging Design"
        subParagraph={[
          "Product packaging serves both as a marketing tool and a practical product wrapper. Attractive and strategically designed packaging draws attention, reinforces brand identity, and increases purchase intent. High-quality packaging elevates the perceived value of your product and builds customer trust. LiveBits ensures your packaging is visually compelling, functional, and perfectly aligned with your brand's personality and goals."
        ]}

        mainImage={{
          src: "/product-pakaging-second-image.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Product Packaging Design?"
        points2={[
          "Custom Packaging Solutions – Tailored designs for every product type, ensuring a unique brand experience.",
          "Eye-Catching Aesthetics – Visually appealing packaging that instantly attracts customers and delivers clear messaging.",
          "Functional & Practical Designs – Packaging that balances creativity with usability for customer satisfaction.",
          "Sustainable & Eco-Friendly Options – Designs using biodegradable, recyclable, and low-waste materials.",
          "Professional Label Design – Clear, compliant, and attractive labels that enhance credibility.",
          "Attention to Detail – Every element is crafted with precision, from material choice to colors and textures."
        ]}

        partnerTitle="Elevate Your Product with LiveBits"
        partnerDescription="LiveBits blends strategy, design, and creativity to craft packaging that delights customers and strengthens your brand. Whether displayed on shelves or unboxed online, our designs create memorable experiences that boost customer loyalty."

        footerTitle="Make Your Packaging Stand Out Today"
        footerDescription="Partner with LiveBits to design custom packaging that reflects your brand identity, captivates your audience, and enhances every customer's experience."

          sideImage={{
          src: "/image-2.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />

      <AgencyExperienceSection />

      <MarketingProcess
        heading="Our Product Packaging Design Process"
        subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
        steps={processSteps}
      />
      <ServiceToolsTabs/>
      <TestimonialsSection bgColor="#ffffffff"/>


      <FaqSection bgColor="#ffffff"/>
      <BlogSection bgColor="bg-[#f8f8f8]" />

    </>
  );
}
