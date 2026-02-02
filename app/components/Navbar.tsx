"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Services", href: "/service", hasDropdown: true },
  { label: "Domain", href: "/domain", hasDropdown: false },
  { label: "Cloud Hosting", href: "/cloud-hosting", hasDropdown: false },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
  { label: "Other", href: "/other", hasDropdown: true },
];

const OTHER_DROPDOWN = [
  { label: "Our Clients", href: "/our-clients" },
  { label: "CEO founder", href: "/founder" }
];

const SERVICES_DROPDOWN = [
  {
    title: "Digital Marketing",
    href: "/service/digital-marketing",
    items: [
      { label: "Digital Media Marketing", href: "/service/digital-marketing/digital-media-marketing" },
      { label: "Social Media Management", href: "/service/digital-marketing/social-media-management" },
      { label: "Local SEO", href: "/service/digital-marketing/local-seo" },
      { label: "Search Engine Optimization", href: "/service/digital-marketing/search-engine-optimization" },
      { label: "Email Marketing", href: "/service/digital-marketing/email-marketing" },
      { label: "Google Ads", href: "/service/digital-marketing/google-ads" },
      { label: "YouTube Ads", href: "/service/digital-marketing/youtube-ads" },
      { label: "Influencer Marketing", href: "/service/digital-marketing/influencer-marketing" },
    ],
  },
  {
    title: "Video Editing",
    href: "/service/video-editing",
    items: [
      { label: "Whiteboard & Animated Explainers", href: "/service/video-editing/whiteboard-explainers" },
      { label: "Short Video Ads", href: "/service/video-editing/short-video-ads" },
      { label: "Character Animation", href: "/service/video-editing/character-animation" },
      { label: "Animated GIFs", href: "/service/video-editing/animated-gifs" },
      { label: "Logo Animation", href: "/service/video-editing/logo-animation" },
      { label: "E-Commerce Product Videos", href: "/service/video-editing/ecommerce-product-videos" },
      { label: "3D Product Animation", href: "/service/video-editing/3d-product-animation" },
    ],
  },
  {
    title: "Web Design & Development",
    href: "/service/web-development",
    items: [
      { label: "Ecommerce Web Design", href: "/service/web-development/ecommerce-web-design" },
      { label: "B2B Web design", href: "/service/web-development/b2b-web-design" },
      { label: "B2C Web Design", href: "/service/web-development/b2c-web-design" },
      { label: "Custom Web Development", href: "/service/web-development/custom-web-development" },
      { label: "Shopify Website Development", href: "/service/web-development/shopify-website-development" },
      { label: "Wordpress Website Development", href: "/service/web-development/wordpress-website-development" },
      { label: "Software Development", href: "/service/web-development/software-development" },
      { label: "ERP Development", href: "/service/web-development/erp-development" },
    ],
  },
  {
    title: "Content Marketing",
    href: "/service/content-marketing",
    items: [
      { label: "Article Writing", href: "/service/content-marketing/article-writing" },
      { label: "Blog Post", href: "/service/content-marketing/blog-post" },
      { label: "Guest Post", href: "/service/content-marketing/guest-post" },
      { label: "Press Release", href: "/service/content-marketing/press-release" },
      { label: "Social Media Content", href: "/service/content-marketing/social-media-content" },
      { label: "Video Content", href: "/service/content-marketing/video-content" },
      { label: "Website Content", href: "/service/content-marketing/website-content" },
      { label: "Product Description", href: "/service/content-marketing/product-description" },
    ],
  },
  {
    title: "App Development",
    href: "/service/app-development",
    items: [
      { label: "Android App Development", href: "/service/app-development/android-app-development" },
      { label: "IOS App Development", href: "/service/app-development/ios-app-development" },
      { label: "Custom App Development", href: "/service/app-development/custom-app-development" },
    ],
  },
  {
    title: "Graphic Design",
    href: "/service/graphic-design",
    items: [
      { label: "Creative Design", href: "/service/graphic-design/creative-design" },
      { label: "Banner Design", href: "/service/graphic-design/banner-design" },
      { label: "Logo Design", href: "/service/graphic-design/logo-design" },
      { label: "Mockup Design", href: "/service/graphic-design/mockup-design" },
      { label: "Booklet Design", href: "/service/graphic-design/booklet-design" },
      { label: "Business Card Design", href: "/service/graphic-design/business-card-design" },
      { label: "Product Packaging Design", href: "/service/graphic-design/product-packaging-design" },
      { label: "UI-UX Design", href: "/service/graphic-design/ui-ux-design" },
    ],
  },
  {
    title: "Others",
    href: "/others",
    items: [
      { label: "Printing Packages", href: "/service/printing-packages" },
      { label: "Product And Fashion Photography", href: "/service/product-fashion-photography" },
      { label: "Company Profile Development", href: "/service/company-profile-development" },
      { label: "Professional CV Development", href: "/service/cv-development" },
      { label: "Brand Activation", href: "/service/brand-activation" },
    ],
  },
];

const PRODUCTS_DROPDOWN = [
  { label: "MIS System", href: "/products/mis-system" },
  { label: "Attendance System", href: "/products/attendance-system" },
  { label: "HR System", href: "/products/hr-system" },
  { label: "POS System", href: "/products/pos-system" },
];

const TECH_LOGOS = [
  { name: "React", src: "/React.png" },
  { name: "Next.js", src: "/nextjs.png" },
  { name: "TypeScript", src: "/typescript.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Express", src: "/express.png" },
  { name: "Laravel", src: "/laravel.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "WordPress", src: "/wordpress.png" },
  { name: "Figma", src: "/fiigma.png" },
  { name: "AWS", src: "/aws.png" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const otherHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShowServices(true);
  };

  const scheduleCloseServices = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowServices(false);
    }, 180);
  };

  const openProducts = () => {
    if (productsHideTimer.current) clearTimeout(productsHideTimer.current);
    setShowProducts(true);
  };

  const scheduleCloseProducts = () => {
    if (productsHideTimer.current) clearTimeout(productsHideTimer.current);
    productsHideTimer.current = setTimeout(() => {
      setShowProducts(false);
    }, 180);
  };

  const openOther = () => {
    if (otherHideTimer.current) clearTimeout(otherHideTimer.current);
    setShowOther(true);
  };

  const scheduleCloseOther = () => {
    if (otherHideTimer.current) clearTimeout(otherHideTimer.current);
    otherHideTimer.current = setTimeout(() => {
      setShowOther(false);
    }, 180);
  };

  const closeAllMenus = () => {
    setShowServices(false);
    setShowProducts(false);
    setShowOther(false);
  };

  const navRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (!navRef.current) return;
    if (!navRef.current.contains(event.target as Node)) {
      closeAllMenus();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



  return (
    <header
      ref={navRef}
      className="fixed top-[40px] left-0 right-0 z-50 border-b border-[#E0DDCF]/70 bg-white"
    >

      <div className="w-full flex items-center px-22 py-3">
        <div className="shrink-0">
          <Link href="/" className="block">
            <div className="relative w-28 h-10 cursor-pointer">
              <Image
                src="/logo-1.svg"
                alt="LiveBits Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>


        <nav className="hidden md:flex flex-1 items-center justify-center gap-5 text-[14px] font-medium text-black">
          {NAV_ITEMS.map((item) => {
            const isActive = (item.href === "/" && pathname === "/") || (item.href !== "/" && pathname.startsWith(item.href));
            const isServices = item.label === "Services";
            const isProducts = item.label === "Products";
            const isOther = item.label === "Other";

            const wrapperProps = isOther
              ? { onMouseEnter: openOther, onMouseLeave: scheduleCloseOther }
              : isServices
              ? { onMouseEnter: openServices, onMouseLeave: scheduleCloseServices }
              : isProducts
              ? { onMouseEnter: openProducts, onMouseLeave: scheduleCloseProducts }
              : {};

            return (
              <div key={item.label} className="relative" {...wrapperProps}>
                <Link
                  href={item.href}
                  onClick={() => {
                    closeAllMenus(); // ✅ always close on click (Services included)
                  }}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive ? "text-black" : "text-black hover:text-black"
                  }`}
                >


                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                {/* Show "Other" dropdown */}
                {isOther && showOther && (
                  <div className="absolute left-1/2 z-50 mt-3 w-52 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-2 text-[14px] text-[#333]">
                      {OTHER_DROPDOWN.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}
                {/* Show "Products" dropdown */}
                {isProducts && showProducts && (
                  <div className="absolute left-1/2 z-50 mt-3 w-52 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-2 text-[16px] text-[#333]">
                      {PRODUCTS_DROPDOWN.map((prod) => (
                        <li key={prod.label}>
                          <Link
                            href={prod.href}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                          >
                            {prod.label}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button className="md:hidden ml-auto inline-flex items-center rounded-md border border-[#CBC6B7] px-2 py-1 text-xs">
          Menu
        </button>
      </div>

      {/* MEGA MENU */}
      {showServices && (
        <div className="absolute left-0 right-0 top-full z-40" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
          <div className="w-full bg-white border-t border-gray-200 shadow-xl">
            <div className="mx-auto flex max-w-[1250px] gap-10 px-8 py-12">
              {/* Left Sidebar */}
              <div className="w-[220px] border-r border-gray-100 pr-8">
                <h3 className="text-[16px] font-semibold text-[#111]">Services</h3>
                <div>
                  <h4 className="text-[16px] font-semibold text-[#111] mb-3">Technologies</h4>
                  <div className="grid grid-cols-3 gap-4 mt-1">
                    {TECH_LOGOS.map((tech) => (
                      <div key={tech.name} className="flex items-center justify-center">
                        <Image src={tech.src} alt={tech.name} width={38} height={32} className="opacity-80 hover:opacity-100 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Multi-column Services List */}
              <div className="flex-1 grid grid-cols-4 gap-10 text-[13px]">
                {SERVICES_DROPDOWN.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="mb-3 text-[20px] font-bold text-[#333]">
                      {cat.title === "Others" ? (
                        <span className="cursor-default">
                          {cat.title}
                        </span>
                      ) : (
                        <Link href={cat.href} onClick={closeAllMenus} className="hover:text-black transition-colors">
                          {cat.title}
                        </Link>
                      )}
                    </h4>
                    <ul className="space-y-1 text-[#333]">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} onClick={closeAllMenus} className="hover:text-black transition-colors">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
