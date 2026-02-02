"use client";

import Image from "next/image";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import PageHero from "../components/PageHero";
import QuoteSection from "../components/QuoteSection";

export default function FounderPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <QuoteSection
        title="Our Clients"
        subtitle="LiveBits works with a diverse range of clients, delivering tailored digital solutions that help businesses grow, scale, and succeed."/> 


      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        {/* TOP SECTION: IMAGE CARD + BIO */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          {/* LEFT CARD */}
          <div className="w-full max-w-[280px] overflow-hidden rounded-[8px] overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src="/team-1.jpg" // put your founder image here
                alt="Founder Headshot"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-black px-6 py-10 text-white">
              <p className="text-[16px] font-semibold uppercase text-white">
                Founder, Head of Digital
              </p>
              <h2 className="mt-2 text-[14px] font-semibold">
                Danish Mehmood Khan
              </h2>

              <div className="mt-3 h-px w-full bg-[#3A3A3A]" />

              <div className="mt-4 space-y-1 text-[11px] leading-relaxed text-[#E4E4E4]">
                <p>Phone Number: 0345-2459002</p>
                <p>Email Address: danish@livebits.pk</p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-4 text-[#FFD000]">
                <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#FFD000] hover:bg-[#FFD000] hover:text-black transition">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#FFD000] hover:bg-[#FFD000] hover:text-black transition">
                  <Instagram className="h-4 w-4" />
                </button>
                <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#FFD000] hover:bg-[#FFD000] hover:text-black transition">
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT – BIO */}
          <div className="flex-1">
            <h1 className="text-[22px] font-bold text-[#111111] mb-3">
              Danish Mehmood Khan | Founder – Head of Digital | Entrepreneur of
              the Year 2024
            </h1>

            <div className="space-y-3 text-[16px] leading-relaxed text-[#333333]">
              <p>
                Danish M. Khan is the founder of LiveBits, Broad Minds, and the group of organizations that comprise UMDA, which includes the UMDA Foundation, UMDA Vocational Training Institute, UMDA Salon, and UMDA Gym. He has worked proudly within community devotion, innovation, and educational leadership for more than 18 years, and it still growing.
              </p>
              <p>
                Danish combines hands-on computing and information systems with management/information systems, attaining an MBA, within integration from London Metropolitan University and Macquarie University in Australia, respectively. Additionally, Danish, whose learning credentials also comprise cross-border diplomas and the certificates which were acquired, is an example of learned upheld excellence which is worth commendable.
              </p>
              <p>
                For Danish, being a national certified assessor (NAVTTC & TVET SSP), DACUM certified facilitator, a master trainer and pedagogical trainer, and a chief master trainer, depicts the excellence within the learned and acquired community and organizational leadership empowerment made within the multitude of skill and capacity development training he has offered and stands offered.
              </p>
              <p>
                Danish has made opportunity where training and skill development for trained citizens of the community is completely integrated with community centered technological solutions. This is viewed to be an asset forming to economically uplifting and growing to be sustainable communities.
              </p>
              <p>
                Danish M. Khan continues to make positive changes for the gaps between education and business by creating new initiatives. He is a founder and mentor for various initiatives that spark innovation. He builds companies for the sake of creating lasting value and opportunities.
              </p>

              <div className="mt-4 h-px w-full bg-[#3A3A3A] mb-4" />

              <h2 className="text-lg font-semibold text-[#111111] mb-4">
                Education
              </h2>

          <div className="grid gap-6 ">
            {/* Degree 1 */}
            <div className="flex gap-4 rounded-none bg-none p-1 ">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/london-met.png" // your university logo (optional)
                  alt="London Metropolitan University"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  London Metropolitan University
                </h3>
                <p className="text-xs text-[#555555]">
                  Master’s degree, Masters of Information Systems Management
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Mar 2012 – Jun 2014
                </p>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="flex gap-4 rounded-none bg-none p-1 ">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/macquarie-university.png" // your logo
                  alt="Macquarie University"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Macquarie University</h3>
                <p className="text-xs text-[#555555]">
                  Master’s degree, Masters of Information Systems Management
                </p>
                <p className="mt-1 text-xs text-[#777777]">
                  Mar 2012 – Jun 2014
                </p>
              </div>
            </div>
          </div>
        </div>
              <div className="mt-3 h-px w-full bg-[#3A3A3A] mb-1" />


          <div className="grid gap-6 ">



        {/* SKILLS + AWARDS */}
        <div className="mt-7 grid gap-10  pt-0 md:grid-cols-2">
          {/* PROFESSIONAL SKILLS */}
          <div>
            <h2 className="text-md font-bold uppercase text-[#111111] mb-4">
              Professional Skills
            </h2>

            {/* skill chips */}
            <div className="mb-6  flex flex-wrap gap-1 text-xs">
              {[
                "Business Strategy and Innovation",
                "Website Design",
                "SEO",
                "Project / Program Leadership",
                "Digital Marketing & Branding",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[black] bg-white px-3 py-2.5"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* progress bars */}
            <div className="space-y-4 text-xs">
              {[
                { label: "Corporate Training Design and Delivery", width: "w-[99%]" },
                { label: "Leadership Development and Coaching", width: "w-[97%]" },
                { label: "Training of Trainers (ToT) Certification", width: "w-[99%]" },
                { label: "Competency-Based Training & Assessment", width: "w-[98%]" },
                { label: "Startup Mentorship and Advisory Services", width: "w-[99%]" },
                { label: "Career Management and CV Development", width: "w-[99%]" },
              ].map((skill) => (
                <div key={skill.label}>
                  <p className="mb-1 font-extrabold text-[#333333]">{skill.label}</p>
                  <div className="h-3 w-full rounded-full border bg-none">
                    <div
                      className={`h-2.5 rounded-full  bg-[#FFD000] ${skill.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AWARDS & HONOURS */}
          <div>
            <h2 className="text-lg font-semibold text-[#111111] mb-4">
              Awards and Honours
            </h2>

            <div className="space-y-4 text-sm text-[#333333]">
              <div>
                <h3 className="font-semibold">
                  Pakistan Entrepreneur Awards 2025
                </h3>
                <p className="mt-1 text-xs text-[#777777]">
                  2025 
                </p> 
                <p className="mt-1 text-xs leading-relaxed text-[#555555]">
                  Mr and My business Partner, Jibran Siddiqui, received the award from Kanwal Masroor Badvi (Founder of CxO Global Forum) and Mr. Nadeem Omar (The Owner of the Quetta Gladiators)
                </p>
              </div>

              <div>
                <h3 className="font-semibold">HOD Category</h3>
                <p className="mt-1 text-xs text-[#777777]">
                  20-21 Aug 
                </p> 
                <p className="mt-1 text-xs leading-relaxed text-[#555555]">
                  PC Hotel Karachi CxO Global Forum would like to congratulate Danish M. Khan Founder, Head of Digital LiveBits to be nominated for the Transform Awards 2025 happening on 20-21 Aug at PC Hotel Karachi.
                </p>
               
              </div>

            </div>
          </div>
        </div>

          </div>
        </div>
                          
            </div>
          




      </section>
    </main>
  );
}
