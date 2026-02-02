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
    title: "Animated Brand Mascots",
    description:
      "Create engaging mascots that strengthen brand recall and customer loyalty effectively.",
  },
  {
    title: "Game Character Animations",
    description:
      "Design characters with fluid movements and lifelike expressions for immersive gameplay.",
  },
  {
    title: "Commercial Character Animation",
    description:
      "Develop animated characters to enhance advertisements and captivate audience attention efficiently.",
  },
  {
    title: "Explainer Video Characters",
    description:
      "Convey complex ideas simply with animated characters in informative marketing videos.",
  },
  {
    title: "Motion Graphics Integration",
    description:
      "Blend character animations seamlessly with motion graphics for dynamic and engaging content.",
  },
  {
    title: "Voice and Sound Synchronization",
    description:
      "Add realistic voice acting and sound effects to enhance overall character animation impact.",
  },
  {
    title: "Interactive Animations",
    description:
      "Develop interactive animated characters for apps, games, and digital platforms.",
  },
  {
    title: "Custom Animation Solutions",
    description:
      "Tailor character animations specifically for your project’s artistic and marketing requirements.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Character Concept & Design:",
    description:
      "Design characters that reflect the brand, personality, or story being told.",
  },
  {
    number: "02",
    title: "Script & Storyboarding:",
    description:
      "Create a script and storyboard to outline the animation's scenes and flow.",
  },
  {
    number: "03",
    title: "Voiceover Recording:",
    description:
      "Record voiceover if the character will speak, narrate, or interact verbally.",
  },
  {
    number: "04",
    title: "Animation Process:",
    description:
      "Animate the character’s movements, expressions, actions, and interactions.",
  },
  {
    number: "05",
    title: "Add Background & Environment:",
    description:
      "Design and animate environments that support and complement the character.",
  },
  {
    number: "06",
    title: "Sound Effects & Music:",
    description:
      "Add sound effects, voice syncing, and background music to enhance the animation.",
  },
  {
    number: "07",
    title: "Client Review & Revisions:",
    description:
      "Present the animation for client review and make adjustments as needed.",
  },
  {
    number: "08",
    title: "Final Output & Delivery:",
    description:
      "Deliver the completed animation in the required formats and resolutions.",
  },
];






export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Character\nAnimation\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />


      <WhyLiveBits
        heading="Character Animation Services"
        mainParagraph={[
          "In the digital age, compelling character animation brings stories to life. At LiveBits, we craft visually captivating and emotionally engaging animations that resonate with your target audience. Whether for animated series, video games, or marketing campaigns, our character animations add depth, personality, and a memorable touch to your project."
        ]}

        subHeading="Why Character Animation Matters"
        subParagraph={[
          "Character animation is more than movement—it’s storytelling. Effective animations convey emotions, simplify complex ideas, and make your content unforgettable. From branding to filmmaking and game development, animated characters enhance engagement, strengthen brand recall, and elevate your project’s overall value."
        ]}

        mainImage={{
          src: "/character-animation-2.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits for Character Animation"
        points2={[
          "Creative Expertise – Skilled animators bring your characters to life with expression and motion.",
          "Story-Driven Approach – Every gesture and movement enhances the character’s persona and narrative.",
          "Brand Impact – Mascots and characters strengthen brand recognition and loyalty effectively.",
          "High Engagement – Animations attract attention, boost viewer retention, and increase ROI.",
          "Tailored Solutions – Custom animations designed to meet your unique project goals.",
          "Professional Workflow – From design to sound sync, every detail is meticulously handled.",
        ]}

        partnerTitle="Bring Your Characters to Life"
        partnerDescription="At LiveBits, we collaborate closely with clients to ensure every character aligns with the project vision. From concept and design to movement, expression, and sound, we craft animations that leave a lasting impression and enhance your brand’s story."

        footerTitle="Get Started with LiveBits"
        footerDescription="Ready to animate characters that captivate and engage? Contact LiveBits today to turn your ideas into unforgettable animated experiences."

          sideImage={{
          src: "/character-animation-2.jfif",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />


      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our Character Animation Process"
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
