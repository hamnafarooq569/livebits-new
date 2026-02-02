import AgencyExperienceSection from "../../../components/AgencyExperienceSection";
import InfiniteImages from "../../../components/ClientSlide";
import IndustriesSection from "../../../components/IndustriesSection";
import DetailServiceHeroSection from "../../../components/MarketingHero";
import OfferingSection from "../../../components/OfferingSection";
import WhyLiveBits from "../../../components/WhyLiveBits";
import MarketingProcess from "../../../components/MarketingProcess";
import TestimonialsSection from "../../../components/TestimonialsSection";
import FaqSection from "../../../components/FaqSection";
import BlogSection from "../../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Custom Branded GIFs",
    description:
      "Create personalized GIFs that effectively showcase your company’s brand identity.",
  },
  {
    title: "Trending Social Media GIFs",
    description:
      "Design GIFs that follow current social media trends for maximum viewer engagement.",
  },
  {
    title: "Website Enhancement GIFs",
    description:
      "Use animated GIFs to add visual interest and interactive elements to websites.",
  },
  {
    title: "High-Quality Animated GIFs",
    description:
      "Ensure all GIFs remain clear, sharp, and professional across devices and platforms.",
  },
  {
    title: "Marketing Campaign GIFs",
    description:
      "Craft promotional GIFs designed to highlight products, services, or campaigns online.",
  },
  {
    title: "Captioned GIFs Creation",
    description:
      "Convert images or videos into engaging GIFs with captions for easy understanding.",
  },
  {
    title: "Entertainment GIFs",
    description:
      "Produce fun, creative GIFs suitable for social media or personal entertainment projects.",
  },
  {
    title: "Custom Animated Reactions",
    description:
      "Develop expressive GIFs that convey emotions and reactions for diverse content needs.",
  },
];



const processSteps = [
  {
    number: "01",
    title: "Understand Purpose & Style:",
    description:
      "Discuss the purpose, style, and length of the animated GIF.",
  },
  {
    number: "02",
    title: "Design Visual Elements:",
    description:
      "Create visuals or illustrations that will be used in the GIF animation.",
  },
  {
    number: "03",
    title: "Animation Process:",
    description:
      "Animate the elements in a smooth, seamless, and looped motion.",
  },
  {
    number: "04",
    title: "Optimize File Size:",
    description:
      "Ensure the GIF is optimized for fast loading while maintaining high quality.",
  },
  {
    number: "05",
    title: "Client Review & Feedback:",
    description:
      "Share the GIF with the client for feedback, revisions, and adjustments.",
  },
  {
    number: "06",
    title: "Refinement:",
    description:
      "Implement changes and improve the animation based on client feedback.",
  },
  {
    number: "07",
    title: "Final Export:",
    description:
      "Export the animated GIF in the required format and optimal resolution.",
  },
  {
    number: "08",
    title: "Delivery:",
    description:
      "Provide the final GIF for use on social media, websites, or marketing materials.",
  },
];






export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Animated\nGIFs\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Animated GIFs Services"
        mainParagraph={[
          "Animated GIFs have become an essential part of online communication, marketing, and social media engagement. At LiveBits, we create high-quality animated GIFs that convey emotions, humor, or brand messages effectively. Whether for personal use, social media, or business marketing, our GIFs are designed to capture attention and make your content stand out."
        ]}

        subHeading="Why Animated GIFs Are Effective"
        subParagraph={[
          "GIFs simplify communication by expressing ideas and emotions visually. They are easily shareable, customizable, and highly engaging, making them a versatile tool for marketing campaigns, social media posts, or email content. Brands can leverage GIFs to connect with audiences, convey messages quickly, and boost engagement rates."
        ]}

        mainImage={{
          src: "/animation-gif-2.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Animated GIFs"
        points2={[
          "Creative Expertise – Skilled designers craft GIFs that are visually appealing and impactful.",
          "High-Quality Output – GIFs remain sharp, clear, and professional across all devices and platforms.",
          "Custom Branding – Tailored GIFs help businesses convey their brand identity effectively.",
          "Social Media Ready – Optimized GIFs for Instagram, TikTok, Twitter, and other platforms.",
          "User-Friendly Tools – Easily create captioned or image-based GIFs with LiveBits support.",
          "Trend Integration – GIFs designed using current trends to boost engagement and virality.",
        ]}

        partnerTitle="Enhance Your Brand with GIFs"
        partnerDescription="At LiveBits, we provide GIFs that elevate user experience, improve website appeal, and make social media content more interactive. Our polished and versatile GIFs resonate with audiences and strengthen your communication efforts."

        footerTitle="Get Started with Animated GIFs"
        footerDescription="Ready to create GIFs that capture attention and amplify your message? Contact LiveBits today to bring your ideas to life."

          sideImage={{
          src: "/animated-gifs-2.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />



      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our GIFs Animation Process"
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
