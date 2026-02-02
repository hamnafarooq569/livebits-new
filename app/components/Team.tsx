"use client";

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';  // Import React Icons

export default function TeamCards() {
  // Hardcoded team members array inside the component
  const teamMembers = [
    {
      name: "Danish Mehmood Khan",
      role: "CEO & Head of Digital",
      description: "Leads LiveBits’ digital vision, strategy, and growth initiatives, ensuring innovative solutions and strong client outcomes.",
      imageSrc: "/team-1.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Jibran Siddique",
      role: "Partner & Digital Designer",
      description: "Specializes in UI/UX and visual design, crafting user-centric digital experiences that combine creativity with functionality.",
      imageSrc: "/team-3.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Ubaid Saeed",
      role: "Partner & Team Lead",
      description: "Oversees project execution and team coordination, ensuring timely delivery and high-quality digital solutions.",
      imageSrc: "/team-2.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Iliyan Salman",
      role: "Software Engineer",
      description: "Develops scalable and efficient software solutions with a focus on performance, security, and clean code practices.",
      imageSrc: "/images/jackie.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Imran Ali",
      role: "Software Engineer",
      description: "Manages data accuracy and consistency across platforms, supporting smooth project operations and reporting.",
      imageSrc: "/images/michael.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Sameer Habib",
      role: "Software Engineer",
      description: "Works on application development and system optimization, delivering reliable and robust technical solutions.",
      imageSrc: "/images/laura.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Aarij Bawani",
      role: "Lead SEO Specialist",
      description: "Drives organic growth through advanced SEO strategies, technical optimization, and data-driven content planning.",
      imageSrc: "/images/david.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Hamna Punjwani",
      role: "Software Engineer",
      description: "Contributes to backend and frontend development, building stable and user-friendly digital products.",
      imageSrc: "/images/sophia.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Usman Awan",
      role: "Graphic Designer",
      description: "Creates compelling visual assets, branding elements, and marketing creatives that elevate brand identity.",
      imageSrc: "/images/laura.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Kashaf Nasir",
      role: "Digital Marketing Executive",
      description: "Executes performance marketing and social media strategies to increase brand visibility and engagement.",
      imageSrc: "/images/david.jpg", // Replace with actual image paths
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-8">
          Our Team
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Meet the talented people who drive our company forward.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* First Row - 3 Cards (Centered) */}
          <div className="col-span-3 flex justify-center space-x-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col"
              >
                <div className="flex flex-col items-start mb-4">
                  {/* Card image */}
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-xl"
                  />
                  {/* Card Content */}
                  <h3 className="text-[20px] font-bold text-black">{member.name}</h3>
                  <p className="text-[18px] font-semibold text-gray-500">{member.role}</p>
                  <p className="text-[16px] text-black mt-2">{member.description}</p>
                </div>
                {/* Social Media Icons */}
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
            ))}
          </div>
        </div>


        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.slice(3, 7).map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col"
            >
              <div className="flex flex-col items-start mb-4">
                {/* Card image */}
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-xl"
                />
                {/* Card Content */}
                  <h3 className="text-[20px] font-bold text-black">{member.name}</h3>
                  <p className="text-[18px] font-semibold text-gray-500">{member.role}</p>
                  <p className="text-[16px] text-black mt-2">{member.description}</p>
              </div>
              {/* Social Media Icons */}
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
          ))}
        </div>


      {/* Third Row - 3 Cards*/}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {teamMembers.slice(7, 10).map((member, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] bg-white p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col"
          >
            <div className="flex flex-col items-start mb-4">
              <img
                src={member.imageSrc}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-white shadow-xl"
              />
              <h3 className="text-[20px] font-bold text-black">{member.name}</h3>
              <p className="text-[18px] font-semibold text-gray-500">{member.role}</p>
              <p className="text-[16px] text-black mt-2">{member.description}</p>
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
        ))}
      </div>


      </div>
    </section>
  );
}
