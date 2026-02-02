"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt, FaEnvelope
} from "react-icons/fa";

export default function LiveBitsFooter() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="mx-auto max-w-[1250px] px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ========== COLUMN 1 — LOGO + TEXT + SOCIALS ========== */}
        <div>
          <Image
            src="/logo-1.svg"
            alt="LiveBits"
            width={150}
            height={40}
          />

          <p className="mt-4 text-[13px] leading-relaxed text-[#666] max-w-[220px]">
            LiveBits is a full-service digital agency delivering innovative web
            solutions, digital marketing, and creative design to help businesses
            grow.
          </p>

          {/* Social icons */}
          <div className="mt-5 flex items-center gap-4 text-[#666]">
            <a
              href="https://facebook.com/livebits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-black" size={14} />
            </a>

            <a
              href="https://instagram.com/livebits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-black" size={14} />
            </a>

            <a
              href="https://linkedin.com/company/livebits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-black" size={14} />
            </a>
          </div>
        </div>

        {/* ========== COLUMN 2 — INFORMATION LINKS ========== */}
        <div>
          <h3 className="text-[17px] font-semibold text-black">Informations</h3>

          <ul className="mt-5 space-y-2 text-[13px] text-[#666]">
            <li>
              <Link href="/about" className="hover:text-black">
                About Company
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="/team-livebits" className="hover:text-black">
                Team Member
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-black">
                Latest Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ========== COLUMN 3 — CONTACT US ========== */}
        <div>
          <h3 className="text-[17px] font-semibold text-black">Contact Us</h3>

          <p className="mt-5 text-[13px] text-[#666] leading-relaxed">
            Suite No. 201, 2nd Floor, P.E.C.H.S Block 2,
            <br />
            Main Tariq Road, Karachi
          </p>

          {/* WhatsApp Numbers */}
          <a
            href="https://wa.me/923354832487"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-start gap-2 text-[13px] text-[#666] hover:text-black leading-tight"
          >
            <FaPhoneAlt className="mt-[3px] text-[12px]" />
            <div>
              <span className="block">+92 335 4832487</span>
              <span className="block text-[12px] text-[#666] mt-1">
                +92 33 (LiveBits)
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/923333444825"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-start gap-2 text-[13px] text-[#666] hover:text-black leading-tight"
          >
            <FaPhoneAlt className="mt-[3px] text-[12px]" />
            <div>
              <span className="block">+92 333 4444825</span>
              <span className="block text-[12px] text-[#666] mt-1">
                +92 33 (LiveBits)
              </span>
            </div>
          </a>




          {/* Email */}
          <a
            href="mailto:info@livebits.pk"
            className="mt-3 flex items-center gap-2 text-[13px] text-[#666] hover:text-black"
          >
            <FaEnvelope className="text-[13px]" />
            info@livebits.pk
          </a>

        </div>

        {/* ========== COLUMN 4 — NEWSLETTER ========== */}
        <div>
          <h3 className="text-[17px] font-semibold text-black">Newsletter</h3>

          <div className="mt-5 flex items-center rounded-md border border-[#ddd] bg-white px-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 text-[13px] bg-transparent outline-none"
            />
            <span className="text-[15px] cursor-pointer">➤</span>
          </div>

          <p className="mt-4 text-[13px] leading-relaxed text-[#666] max-w-[240px]">
            Stay updated with our latest projects, insights, and offers by
            subscribing to our newsletter.
          </p>
        </div>
      </div>

      {/* ========== BOTTOM LINE + COPYRIGHT ========== */}
      <div className="mt-14 border-t border-[#e3dccb] pt-5">
        <p className="text-center text-[13px] text-[#666]">
          © 2023 – 2030 | All rights reserved by LiveBits
        </p>
      </div>
    </footer>
  );
}
