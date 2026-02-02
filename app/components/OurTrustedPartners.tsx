"use client";

import Image from "next/image";

const partners = [
  { name: "cPanel", logoUrl: "/cpanel.svg" },
  { name: "Webmail", logoUrl: "/webmail.svg" },
  { name: "WHM", logoUrl: "/whm.svg" },
  { name: "WHMCS", logoUrl: "/whmcs.svg" },
  { name: "CloudLinux", logoUrl: "/cloudlinux.svg" },
  { name: "Google Workspace", logoUrl: "/gws.svg" },
  { name: "Sectigo", logoUrl: "/sectigo.svg" },
];

export default function OurTrustedPartners() {
  return (
    <section className="py-20 bg-white text-center relative overflow-hidden">

      {/* ===== HEADING ===== */}
      <div className="mb-1">

        <h2 className="text-[32px] font-extrabold text-[#111111]">
          Our Trusted Partners
        </h2>
      </div>

      {/* ===== LOGOS ===== */}
      <div className="border-t border-gray-300/30 pt-12">
        <div className="flex flex-wrap justify-center items-center gap-14">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logoUrl}
              alt={partner.name}
              width={150}
              height={60}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* Subtle background glow (optional) */}
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-yellow-50/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute -top-10 right-20 w-[420px] h-[420px] bg-yellow-50/10 rounded-full blur-[120px] -z-10" />

    </section>
  );
}
