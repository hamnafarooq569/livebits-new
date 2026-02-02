import AgencyExperienceSection from '@/app/components/AgencyExperienceSection';
import BlogSection from '@/app/components/BlogSection';
import InfiniteImages from '@/app/components/ClientSlide';
import FaqSection from '@/app/components/FaqSection';
import IndustriesSection from '@/app/components/IndustriesSection';
import MarketingProcess from '@/app/components/MarketingProcess';
import OfferingSection from '@/app/components/OfferingSection';
import ServiceToolsTabs from '@/app/components/ServiceToolsTabs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import WhyLiveBits from '@/app/components/WhyLiveBits';
import DetailServiceHeroSection from '@/app/components/MarketingHero';
import React from 'react'

const page = () => {

    const offerings = [
  {
    title: "Custom Android App Development",
    description:
      "Tailored applications built to match your business goals and user needs.",
  },
  {
    title: "UI/UX Design",
    description:
      "Sleek, modern, and intuitive interfaces that enhance user experience.",
  },
  {
    title: "Native & Cross-Platform Development",
    description:
      "High-performance apps for all Android devices and screen sizes.",
  },
  {
    title: "App Performance Optimization",
    description:
      "Faster loading, smooth navigation, and improved responsiveness.",
  },
  {
    title: "API & Third-Party Integrations",
    description:
      "Payment gateways, chat systems, maps, CRMs, and more.",
  },
  {
    title: "App Security Implementation",
    description:
      "Secure architecture to protect data and user privacy.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Rigorous testing to ensure a flawless and bug-free app.",
  },
  {
    title: "Maintenance & Post-Launch Support",
    description:
      "Updates, improvements, and ongoing technical support.",
  },
];


const processSteps = [
  {
    number: "01",
    title: "Understand Requirements:",
    description:
      "Discuss the app's purpose, target audience, and key features.",
  },
  {
    number: "02",
    title: "Research & Planning:",
    description:
      "Analyze competitors and define app architecture and technologies to be used.",
  },
  {
    number: "03",
    title: "Design the App Interface:",
    description:
      "Create wireframes and design the app’s user interface (UI).",
  },
  {
    number: "04",
    title: "App Development:",
    description:
      "Build the app, focusing on core functionality and performance.",
  },
  {
    number: "05",
    title: "Backend Integration:",
    description:
      "Set up the backend for data management and user interactions.",
  },
  {
    number: "06",
    title: "Testing & Debugging:",
    description:
      "Test the app for bugs and optimize its performance across devices.",
  },
  {
    number: "07",
    title: "App Launch:",
    description:
      "Prepare the app for launch and submit it to the Google Play Store.",
  },
  {
    number: "08",
    title: "Ongoing Support & Updates:",
    description:
      "Provide post-launch support, updates, and bug fixes as needed.",
  },
];

  return (
    <>
          <DetailServiceHeroSection
            title={`Android App\nDevelopment\nServices`}
            subtitle="Amplify your online presence with LiveBits' digital marketing solutions, designed to boost visibility, engage your audience, and deliver measurable growth." />
    
          <InfiniteImages />
    
          <OfferingSection heading="What We Are Offering" items={offerings} />
    
    
    
          <WhyLiveBits
            heading="Android App Development"
            mainParagraph={[
              "Android app development is becoming an essential part of every organization’s digital strategy as users increasingly rely on their smartphones for daily tasks. Whether you’re a startup or a well-established company, having a powerful and user-friendly Android app helps you capture attention, improve engagement, and grow your business. At LiveBits, we go beyond writing code—we create meaningful mobile experiences that elevate your brand."
            ]}
    
            subHeading="The Power of Android Applications"
            subParagraph={[
              "Modern businesses often require custom Android applications tailored to their operations, customers, and vision. Pre-built solutions rarely meet the demands of mobile commerce, entertainment, or service-focused industries. With LiveBits’ custom Android app development services, you get apps designed specifically around your goals—ensuring performance, usability, and long-term scalability."
            ]}
    
            mainImage={{
              src: "/custom-app-development.png",
              alt: "Google Ads",
              width: 1250,
              height: 350,
              position: "right", // ✅ left ya right
              className: "w-full max-w-[650px] h-[500px] object-contain rounded-xl"
            }} 
    
            heading2="Why Choose LiveBits?"
            points2={[
              "Affordable Yet High-Quality Solutions – Premium app development within your budget.",
              "Experienced Android Specialists – Skilled experts who understand the Android ecosystem deeply.",
              "User-Focused Approach – We design apps that resonate with your audience.",
              "End-to-End Services – From idea validation to deployment and support.",
              "High Performance & Speed – Apps built for reliability, fast performance, and seamless usage.",
              "Scalable Architecture – Your app grows as your business grows.",
              "Creative UI/UX Excellence – Interfaces that attract, engage, and retain users.",
              "Transparent Process & Communication – You're informed at every stage of development.",
            ]}
    
          partnerTitle="Your First Step Toward a Powerful Android App"
          partnerDescription="Getting started is simple. Reach out to our team for a consultation, and we’ll guide you from idea validation to development, launch, and ongoing support. Whether you want to integrate AI, chatbots, push notifications, or other advanced features, we ensure your app stands out in the competitive mobile landscape."
    
          footerTitle="Let’s Build Your Mobile Future"
          footerDescription="Ready to develop an Android app that attracts users and grows your business? At LiveBits, we create scalable, innovative, and results-driven applications tailored to your brand. Schedule a meeting with our experts today for a free quote—we’re excited to turn your concept into a high-performing Android app."
    
              sideImage={{
              src: "/android-development-2.jfif",
              alt: "Social media illustration",
              width: 600,
              height: 800,
              className: "w-full object-contain ",
            }}
        />
    
    
    
    
    
    
          <AgencyExperienceSection />
          <IndustriesSection />
    
          <MarketingProcess
            heading="Our Android App Development Process"
            subtext="We keep the process simple, focused, and result-driven. Our marketing services follow a clear step-by-step path, so your ideas move forward with confidence, not complexity."
            steps={processSteps}
          />
          <ServiceToolsTabs/>
          <TestimonialsSection bgColor="#ffffffff"/>
    
          <FaqSection bgColor="#ffffff"/>
          <BlogSection bgColor="bg-[#f8f8f8]" />
    
        </>
  )
}

export default page