"use client";

import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function TeamCards() {
  const teamMembers = [
    {
      name: "Danish Mehmood Khan",
      role: "CEO & Head of Digital",
      description:
        "Leads LiveBits’ digital vision, strategy, and growth initiatives, ensuring innovative solutions and strong client outcomes.",
      imageSrc: "/team-1.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Jibran Siddique",
      role: "Partner & Digital Designer",
      description:
        "Specializes in UI/UX and visual design, crafting user-centric digital experiences that combine creativity with functionality.",
      imageSrc: "/team-3.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Ubaid Saeed",
      role: "Partner & Team Lead",
      description:
        "Oversees project execution and team coordination, ensuring timely delivery and high-quality digital solutions.",
      imageSrc: "/team-2.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Iliyan Salman",
      role: "Software Engineer",
      description:
        "Develops scalable and efficient software solutions with a focus on performance, security, and clean code practices.",
      imageSrc: "/images/jackie.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Imran Ali",
      role: "Software Engineer",
      description:
        "Manages data accuracy and consistency across platforms, supporting smooth project operations and reporting.",
      imageSrc: "/images/michael.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sameer Habib",
      role: "Software Engineer",
      description:
        "Works on application development and system optimization, delivering reliable and robust technical solutions.",
      imageSrc: "/images/laura.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Aarij Bawani",
      role: "Lead SEO Specialist",
      description:
        "Drives organic growth through advanced SEO strategies, technical optimization, and data-driven content planning.",
      imageSrc: "/images/david.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Hamna Punjwani",
      role: "Software Engineer",
      description:
        "Contributes to backend and frontend development, building stable and user-friendly digital products.",
      imageSrc: "/images/sophia.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Usman Awan",
      role: "Graphic Designer",
      description:
        "Creates compelling visual assets, branding elements, and marketing creatives that elevate brand identity.",
      imageSrc: "/images/laura.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Kashaf Nasir",
      role: "Digital Marketing Executive",
      description:
        "Executes performance marketing and social media strategies to increase brand visibility and engagement.",
      imageSrc: "/images/david.jpg",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  const Card = ({ member }: { member: (typeof teamMembers)[number] }) => (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
      <div className="flex flex-col items-start mb-4">
        <img
          src={member.imageSrc}
          alt={member.name}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-4 border-4 border-white shadow-xl object-cover"
        />

        <h3 className="text-[18px] sm:text-[20px] font-bold text-black leading-snug">
          {member.name}
        </h3>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-gray-500">
          {member.role}
        </p>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black mt-2 leading-relaxed">
          {member.description}
        </p>
      </div>

      <div className="mt-auto flex justify-start gap-3">
        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500" size={14} />
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600" size={14} />
        </a>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500" size={14} />
        </a>
      </div>
    </div>
  );

  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3, 7);
  const lastRow = teamMembers.slice(7, 10);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black text-center mb-4 sm:mb-8">
          Our Team
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
          Meet the talented people who drive our company forward.
        </p>

        {/* ✅ Base (mobile/tablet) layout stays same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Row 1 on lg */}
          {firstRow.map((m, i) => (
            <div key={m.name} className="lg:col-span-4">
              <Card member={m} />
            </div>
          ))}

          {/* Row 2 on lg */}
          {secondRow.map((m) => (
            <div key={m.name} className="lg:col-span-3">
              <Card member={m} />
            </div>
          ))}

          {/* ✅ Last row: show normal cards ONLY below lg */}
          {lastRow.map((m) => (
            <div key={m.name} className="lg:hidden">
              <Card member={m} />
            </div>
          ))}

          {/* ✅ Last row: centered ONLY on lg+ */}
          <div className="hidden lg:flex lg:col-span-12 justify-center gap-8">
            {lastRow.map((m) => (
              <div key={m.name} className="w-full max-w-[300px]">
                <Card member={m} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14" />
      </div>
    </section>
  );
}
