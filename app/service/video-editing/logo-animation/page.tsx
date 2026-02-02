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
    title: "Custom Animated Logos",
    description:
      "Craft unique animated logos that perfectly reflect your brand’s vision and identity.",
  },
  {
    title: "2D & 3D Motion Logos",
    description:
      "Use dynamic two-dimensional and three-dimensional effects to fully engage audiences.",
  },
  {
    title: "Professional Brand Recognition",
    description:
      "Enhance brand recall with high-quality, visually stunning and memorable logo animations.",
  },
  {
    title: "Social Media Optimized Logos",
    description:
      "Create animated logos designed specifically for Instagram, TikTok, YouTube, and more.",
  },
  {
    title: "Engaging Visual Storytelling",
    description:
      "Convey your brand’s story creatively through captivating motion graphics and animation.",
  },
  {
    title: "Target Audience Tailored Animations",
    description:
      "Design logo animations based on audience preferences and your brand personality.",
  },
  {
    title: "Logo Animation for Businesses",
    description:
      "Boost corporate professionalism with polished, impactful, and visually appealing animated logos.",
  },
  {
    title: "Interactive Logo Effects",
    description:
      "Incorporate fade, zoom, spin, and other dynamic effects for enhanced visual impact.",
  },
];




const processSteps = [
  {
    number: "01",
    title: "Understand Brand Identity:",
    description:
      "Review the brand’s identity, message, and goals for the animated logo.",
  },
  {
    number: "02",
    title: "Concept Development:",
    description:
      "Create a concept for the animation that aligns with the brand’s vision and message.",
  },
  {
    number: "03",
    title: "Animation Design:",
    description:
      "Develop the logo animation including movement, color transitions, and visual effects.",
  },
  {
    number: "04",
    title: "Sound Design:",
    description:
      "Add sound effects or music that complement the logo animation’s style and tone.",
  },
  {
    number: "05",
    title: "Client Review & Adjustments:",
    description:
      "Present the animation to the client and make revisions based on their feedback.",
  },
  {
    number: "06",
    title: "Refinement:",
    description:
      "Polish the animation to ensure smooth transitions and professional-quality output.",
  },
  {
    number: "07",
    title: "Final Export:",
    description:
      "Export the animated logo in the required formats such as MP4, MOV, or GIF.",
  },
  {
    number: "08",
    title: "Delivery:",
    description:
      "Provide the final logo animation files ready for use in branding and marketing.",
  },
];




export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Logo\nAnimation\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Logo Animation Services"
        mainParagraph={[
          "In today’s digital landscape, a static logo is no longer enough to make a lasting impression. At LiveBits, we create custom logo animations that bring your brand to life. By adding movement, style, and emotion, your logo can captivate audiences while reflecting your brand’s personality, values, and vision. Our animations ensure your brand leaves a memorable mark in a competitive market."
        ]}

        subHeading="Why Logo Animation is Essential"
        subParagraph={[
          "A logo is the face of your brand, and animation adds energy, depth, and engagement. Animated logos grab attention quickly, evoke emotions, and enhance brand recall. By combining graphics, motion effects, and creative storytelling, animated logos make your brand more professional, modern, and visually appealing. Whether using 2D, 3D, or motion graphics, LiveBits ensures every logo resonates with your target audience."
        ]}

        mainImage={{
          src: "/logo-animation.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[520px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Logo Animation"
        points2={[
          "Custom Designs – Each logo animation is tailored to your brand identity and goals.",
          "Professional Quality – High-definition, visually clear animations that elevate brand perception.",
          "Advanced Techniques – 2D, 3D, zoom, fade, spin, and other dynamic effects for stunning results.",
          "Audience-Focused – Animations crafted to resonate with your target market and brand personality.",
          "Full Collaboration – We involve you at every stage to ensure your creative vision is achieved.",
          "Timely Delivery – Projects completed efficiently without compromising creativity or quality.",
        ]}

        partnerTitle="Bring Your Brand to Life"
        partnerDescription="Logo animation transforms your brand from static to dynamic, helping your business stand out. Whether you’re a startup or an established company, LiveBits ensures your logo communicates your story, engages viewers, and strengthens brand recognition."

        footerTitle="Get Started with Logo Animation"
        footerDescription="Ready to create an animated logo that captures attention and elevates your identity? Contact LiveBits today and let’s bring your vision to life."

          sideImage={{
          src: "/logo-animation-02.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "object-contain ",
        }}
      />











      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our Logo Animation Process"
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
