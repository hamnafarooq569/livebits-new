"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FC } from "react";

const TopAnnouncementBar: FC = () => {
  return (
    <div className="sticky top-0 z-9999 w-full bg-[#fee000] text-black text-[12px]">
      <div className="mx-auto hidden lg:flex max-w-[1250px] items-center justify-between px-6 py-2">

        {/* LEFT SIDE */}
        <div className="flex flex-wrap items-center gap-4">

          {/* WhatsApp Number */}
          <a
            href="https://wa.me/923354832487"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaWhatsapp className="text-[12px]" />
            +92 33 <span className="font-semibold">(LiveBits)</span>
          </a>

          <span className="opacity-40">|</span>

          {/* Normal Call Number */}
          <a
            href="tel:+923333444825"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt className="text-[11px]" />
            +92 333 <span className="font-semibold">(DIGITAL)</span>
          </a>

          <span className="opacity-40">|</span>

          {/* Email */}
          <a
            href="mailto:info@livebits.pk"
            className="flex items-center gap-2 hover:underline"
          >
            <FaEnvelope className="text-[11px]" />
            info@livebits.pk
          </a>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Company Profile */}
          <a
            href="/LiveBits-Company-Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-black px-3 py-[5px] text-[11px] font-medium text-black transition hover:bg-black hover:text-[#FEE000]"
          >
            Company Profile
          </a>

          {/* Client Area */}
          <Link
            href="#"
            className="rounded-md border border-black px-3 py-[5px] text-[11px] font-medium text-black transition hover:bg-black hover:text-[#FEE000]"
          >
            Client Area
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TopAnnouncementBar;
