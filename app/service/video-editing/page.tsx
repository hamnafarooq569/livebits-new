import AgencyExperienceSection from "../../components/AgencyExperienceSection";
import InfiniteImages from "../../components/ClientSlide";
import IndustriesSection from "../../components/IndustriesSection";
import DetailServiceHeroSection from "../../components/MarketingHero";
import OfferingSection from "../../components/OfferingSection";
import WhyLiveBits from "../../components/WhyLiveBits";
import MarketingProcess from "../../components/MarketingProcess";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import ServiceToolsTabs from "@/app/components/ServiceToolsTabs";

const offerings = [
  {
    title: "Whiteboard Explainers",
    description:
      "Create engaging and informative animated explainer videos that clearly convey your story.",
  },
  {
    title: "Short Video Ads",
    description:
      "Produce captivating short videos to effectively promote your brand on social media.",
  },
  {
    title: "Character Animation",
    description:
      "Bring characters to life with dynamic animations that entertain and engage viewers.",
  },
  {
    title: "Animated GIFs",
    description:
      "Design eye-catching, shareable GIFs to increase brand visibility and audience engagement.",
  },
  {
    title: "Logo Animation",
    description:
      "Craft creative, professional logo animations to enhance brand identity and recognition.",
  },
  {
    title: "Product Videos",
    description:
      "Showcase products in high-quality videos to attract attention and drive sales effectively.",
  },
  {
    title: "3D Product Animation",
    description:
      "Create immersive 3D animations to present products from every angle beautifully.",
  },
  {
    title: "Commercial & Informational",
    description:
      "Produce professional advertisements, tutorials, guides, and corporate storytelling videos efficiently.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Understand Project Requirements:",
    description:
      "Discuss the purpose of the video, style, and target audience.",
  },
  {
    number: "02",
    title: "Content Review:",
    description:
      "Review raw footage or materials provided for editing.",
  },
  {
    number: "03",
    title: "Cutting & Sequencing:",
    description:
      "Trim and arrange clips to form a coherent video flow.",
  },
  {
    number: "04",
    title: "Add Transitions & Effects:",
    description:
      "Apply smooth transitions and visual effects to enhance the video.",
  },
  {
    number: "05",
    title: "Audio Editing:",
    description:
      "Sync audio, add background music, and adjust sound levels for clarity.",
  },
  {
    number: "06",
    title: "Text & Graphics Overlay:",
    description:
      "Add titles, subtitles, and graphics as needed for context.",
  },
  {
    number: "07",
    title: "Client Review & Revisions:",
    description:
      "Present the edited video to the client and make adjustments based on feedback.",
  },
  {
    number: "08",
    title: "Final Output & Delivery:",
    description:
      "Provide the video in required formats and resolutions for distribution.",
  },
];



export default function SocialMediaManagementPage() {
  return (
    <>
      <DetailServiceHeroSection
        title={`Best Video\nEditing\nServices`}
        subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth."     />

      <InfiniteImages />

      <OfferingSection heading="What We Are Offering" items={offerings} />



      <WhyLiveBits
        heading="Video Editing Services"
        mainParagraph={[
          "At LiveBits, we understand that video editing is more than just cutting and merging clips—it’s about telling a story. Whether you’re a YouTuber, business owner, or content creator, our professional video editing services help bring your ideas to life, captivate your audience, and elevate your content’s overall aesthetic."
        ]}

        subHeading="Why Professional Video Editing Matters"
        subParagraph={[
          "Video editing transforms raw footage into a visually compelling story that engages viewers. With social media platforms like YouTube, TikTok, and Instagram booming, quality editing is essential for marketing, tutorials, promotional campaigns, and storytelling. Our services ensure your content is clear, marketable, and stands out from the competition."
        ]}

        mainImage={{
          src: "/video-editing.png",
          alt: "Google Ads",
          width: 1250,
          height: 350,
          position: "right", // ✅ left ya right
          className: "w-full max-w-[650px] h-[420px] object-contain rounded-xl"
        }} 

        heading2="Why Choose LiveBits?"
        points2={[
          "Expert Editors – Skilled professionals delivering high-quality, visually engaging content.",
          "Platform-Specific Edits – Videos tailored for social media, YouTube, Instagram, and more.",
          "Enhanced Visual Effects – Color grading, sound peaks, and smooth transitions for maximum engagement.",
          "Time-Saving – Focus on content creation while we handle all editing tasks.",
          "Cost-Effective Solutions – Professional quality without breaking your budget.",
          "Custom Packages – Flexible options for small businesses, influencers, or enterprise clients.",
        ]}

        partnerTitle="Get Started With LiveBits Video Editing"
        partnerDescription="Let us transform your raw footage into captivating videos that leave a lasting impression. Our team is ready to bring your vision to life with efficiency, professionalism, and creativity."

        footerTitle="Ready to Elevate Your Videos?"
        footerDescription="Reach out today to start your video editing project—once-off or recurring services available."

          sideImage={{
          src: "/video-content.png",
          alt: "Social media illustration",
          width: 600,
          height: 800,
          className: "w-full object-contain ",
        }}
      />

      <AgencyExperienceSection />
      <IndustriesSection />

      <MarketingProcess
        heading="Our Video editing Process"
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
