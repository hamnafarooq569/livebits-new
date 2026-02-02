"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    desc: "Boost your brand's visibility and achieve measureable success with liveBits' expert digital marketing solution. From SEO and social media management to PPC advertising...",
    icon: "/digital-marketing-icon.webp",
    link: "/service/digital-marketing"
  },
  {
    title: "Video Editing",
    desc: "As a video editing service provider, LiveBits understands the powerful role of storytelling. Whether you’re a YouTuber, business, or individual, we deliver professional video editing services that enhance engagement and convey your message effectively.",
    icon: "/video-editing-icon.webp",
    link: "/service/video-editing"
  },
  {
    title: "Mobile App Development",
    desc: "In today’s mobile-first world, having a personalized mobile app is essential for expanding your business reach and boosting customer engagement. LiveBits develops user-friendly and scalable mobile applications designed for growth.",
    icon: "/app-development.webp",
    link: "/service/app-development"
  },
  {
    title: "Graphic Design",
    desc: "Our talented team of designers goes above and beyond to develop visually compelling designs that leave your audience spellbound and motivated. From branding to marketing visuals, we ensure your brand stands out.",
    icon: "/graphic-designing.jpg", 
    link: "/service/graphic-design"
  },
  {
    title: "Content Marketing",
    desc: "In this era of the internet, content marketing remains one of the most essential tools for attracting, engaging, and retaining your target audience. LiveBits creates impactful content strategies that capture attention and build long-term brand trust.",
    icon: "/content-marketing.webp",
    link: "/service/content-marketing"
  },
  {
    title: "Web Development",
    desc: "At LiveBits, we create web solutions that help businesses thrive in today’s ever-changing digital world. Our services are limitless when it comes to developing modern, responsive, and high-performance websites tailored to your business needs.",
    icon: "/web-development.webp",
    link: "/service/web-development"
  },
];



export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl relative">

        {/* heading */}
        <h2 className="relative z-[2] text-[32px] font-extrabold leading-snug text-[#111111] md:text-[32px]">
          What Services LiveBits Offered
        </h2>

        {/* service cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s, index) => (
            <Link
              key={`${s.title}-${index}`}
              href={s.link}
              className="block rounded-[15px] bg-white/97 px-10 pt-5 pb-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.07)] border border-black hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className="mx-auto mb-5 h-16 w-16">
                <Image
                  src={s.icon}
                  alt={s.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-[18px] font-bold text-black">
                {s.title}
              </h3>

              <p className="mt-4 text-[14px] text-black/80">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
