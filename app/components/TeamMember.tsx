"use client";

import Image from "next/image";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";

const TEAM = [
  {
    name: "Danish M. Khan",
    role: "Founder, Head of Digital",
    photo: "/team-1.jpg",
  },
  {
    name: "Jibran Siddiqui",
    role: "Partner, Digital Designer",
    photo: "/team-3.jpg",
  },
  {
    name: "Ubaid Saeed",
    role: "Partner, Team Lead",
    photo: "/team-2.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-[1150px] px-6 md:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-[32px] font-bold">Our Team</h1>
          <p className="mt-4  text-[18px] max-w-[600px] mx-auto">
            Meet the talented people who drive our company forward.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group relative bg-gray-50 border border-black rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-90 w-full border border-b-black overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover  group-hover:scale-105 transition-all duration-300"
                />

                {/* Bottom-right sliding icons */}
                <div
                  className="
                    absolute bottom-3 right-3 
                    flex flex-col gap-2
                    opacity-0 translate-y-6 translate-x-6
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
                    transition-all duration-300
                  "
                >
                  <IconCircle>
                    <Facebook className="h-4 w-4 text-[#1877F2]" />
                  </IconCircle>

                  <IconCircle>
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                  </IconCircle>

                  <IconCircle>
                    <Twitter className="h-4 w-4 text-black" />
                  </IconCircle>

                  <IconCircle>
                    <Mail className="h-4 w-4 text-red-600" />
                  </IconCircle>
                </div>
              </div>

              {/* Name & Role */}
              <div className="py-6 px-4 text-left">
                <p className="mt-2 text-[18px] text-gray-500">
                  {member.role}
                </p>

                {/* ↑ Name size increased here */}
                <h1 className="text-[18px] uppercase font-semibold text-gray-900">
                  {member.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Reusable rounded small icon wrapper */
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:scale-105 transition">
      {children}
    </div>
  );
}
