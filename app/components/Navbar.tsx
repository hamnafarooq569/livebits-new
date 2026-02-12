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

  // ✅ Blog dropdown now
  { label: "Blog", href: "/blog", hasDropdown: true },

  { label: "Contact", href: "/contact", hasDropdown: false },
  { label: "Other", href: "/other", hasDropdown: true },
];

const BLOG_DROPDOWN = [
  { label: "Cloud Hosting", href: "/blog/cloud-hosting-blog" },
  { label: "Web Hosting", href: "/blog/web-hosting-blog" },
];

const OTHER_DROPDOWN = [
  { label: "Our Clients", href: "/our-clients" },
  { label: "CEO founder", href: "/founder" },
];

const SERVICES_DROPDOWN = [
  {
    title: "Digital Marketing",
    href: "/service/digital-marketing-services",
    items: [
      { label: "Content Marketing", href: "/service/content-marketing-services" },
      { label: "Social Media", href: "/service/social-media-marketing-services" },
      { label: "SEO", href: "/service/seo-services" },
      { label: "SEM/PPC", href: "/service/paid-search-advertising-services" },
      { label: "Email Marketing", href: "/service/email-marketing-services" },
      { label: "Google Ads", href: "/service/google-ads-services" },
      { label: "Video Marketing", href: "/service/youtube-marketing-services" },
      { label: "Influencer Marketing", href: "/service/influencer-marketing-services" },
    ],
  },
  {
    title: "Video Animation",
    href: "/service/video-animation-services",
    items: [
      { label: "2D Animation", href: "/service/2d-animation-services" },
      { label: "Animated Ads & Commercials", href: "/service/animated-ads-and-commercials-services" },
      { label: "Animated Social Media Videos", href: "/service/animated-social-media-videos-services" },
      { label: "Logo Animation", href: "/service/logo-animation-services" },
      { label: "Explainer Videos", href: "/service/explainer-video-services" },
      { label: "Motion Graphics", href: "/service/motion-graphics-services" },
      { label: "3D Animation", href: "/service/3d-animation-services" },
      { label: "Product Animation Videos", href: "/service/product-animation-videos-services" },
      { label: "Character Animation", href: "/service/character-animation-services" },
    ],
  },
  {
    title: "Web Development",
    href: "/service/web-development-services",
    items: [
      { label: "Frontend Development", href: "/service/frontend-development-services" },
      { label: "B2B Web design", href: "/service/b2b-web-design-services" },
      { label: "B2C Web Design", href: "/service/b2c-web-design-services" },
      { label: "Custom Web Development", href: "/service/custom-web-development-services" },
      { label: "Backend Development", href: "/service/backend-development-services" },
      { label: "Odoo Development", href: "/service/odoo-development-services" },
      { label: "Software Development", href: "/service/software-development-services" },
      { label: "ERP Development", href: "/service/erp-development-services" },
    ],
  },
  {
    title: "Ecommerce",
    href: "/service/ecommerce-web-designing-services",
    items: [
      { label: "Shopify Development", href: "/service/shopify-development-services" },
      { label: "WordPress Website Development", href: "/service/wordpress-website-development-services" },
      { label: "Magento Ecommerce Development", href: "/service/magento-ecommerce-development-services" },
      { label: "Wix Website Development", href: "/service/wix-website-development-services" },
      { label: "BigCommerce Development", href: "/service/bigcommerce-development-services" },
    ],
  },
  {
    title: "App Development",
    href: "/service/mobile-app-development-services",
    items: [
      { label: "Android App Development", href: "/service/android-app-development-services" },
      { label: "IOS App Development", href: "/service/ios-app-development-services" },
      { label: "Custom App Development", href: "/service/custom-app-development-services" },
    ],
  },
  {
    title: "Graphic Designing",
    href: "/service/graphic-design-services",
    items: [
      { label: "Advertising & Marketing", href: "/service/advertising-marketing-services" },
      { label: "Printing Design", href: "/service/printing-design-services" },
      { label: "Logo Design", href: "/service/logo-design-services" },
      { label: "Infographic Design", href: "/service/infographic-design-services" },
      { label: "Corporate Identity Design", href: "/service/corporate-identity-design-services" },
      { label: "Packaging Design", href: "/service/packaging-design-services" },
      { label: "UI-UX Design", href: "/service/ui-ux-design-services" },
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
  { name: "React", src: "/react.png" },
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
  const [showBlog, setShowBlog] = useState(false); // ✅ NEW

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileOther, setMobileOther] = useState(false);
  const [mobileBlog, setMobileBlog] = useState(false); // ✅ NEW

  const [openServiceCat, setOpenServiceCat] = useState<string | null>(null);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const otherHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blogHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null); // ✅ NEW

  const openServices = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShowServices(true);
  };
  const scheduleCloseServices = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowServices(false), 180);
  };

  const openProducts = () => {
    if (productsHideTimer.current) clearTimeout(productsHideTimer.current);
    setShowProducts(true);
  };
  const scheduleCloseProducts = () => {
    if (productsHideTimer.current) clearTimeout(productsHideTimer.current);
    productsHideTimer.current = setTimeout(() => setShowProducts(false), 180);
  };

  const openOther = () => {
    if (otherHideTimer.current) clearTimeout(otherHideTimer.current);
    setShowOther(true);
  };
  const scheduleCloseOther = () => {
    if (otherHideTimer.current) clearTimeout(otherHideTimer.current);
    otherHideTimer.current = setTimeout(() => setShowOther(false), 180);
  };

  // ✅ NEW Blog open/close
  const openBlog = () => {
    if (blogHideTimer.current) clearTimeout(blogHideTimer.current);
    setShowBlog(true);
  };
  const scheduleCloseBlog = () => {
    if (blogHideTimer.current) clearTimeout(blogHideTimer.current);
    blogHideTimer.current = setTimeout(() => setShowBlog(false), 180);
  };

  const closeAllMenus = () => {
    setShowServices(false);
    setShowProducts(false);
    setShowOther(false);
    setShowBlog(false); // ✅ NEW
  };

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) closeAllMenus();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobileProducts(false);
    setMobileOther(false);
    setMobileBlog(false); // ✅ NEW
    setOpenServiceCat(null);
  }, [pathname]);

  // ✅ One-at-a-time accordion (added blog)
  const toggleAccordion = (key: "services" | "products" | "other" | "blog") => {
    if (key === "services") {
      setMobileServices((v) => {
        const next = !v;
        if (!next) setOpenServiceCat(null);
        return next;
      });
      setMobileProducts(false);
      setMobileOther(false);
      setMobileBlog(false);
    }
    if (key === "products") {
      setMobileProducts((v) => !v);
      setMobileServices(false);
      setMobileOther(false);
      setMobileBlog(false);
      setOpenServiceCat(null);
    }
    if (key === "other") {
      setMobileOther((v) => !v);
      setMobileServices(false);
      setMobileProducts(false);
      setMobileBlog(false);
      setOpenServiceCat(null);
    }
    if (key === "blog") {
      setMobileBlog((v) => !v);
      setMobileServices(false);
      setMobileProducts(false);
      setMobileOther(false);
      setOpenServiceCat(null);
    }
  };

  const isActiveHref = (href: string) =>
    (href === "/" && pathname === "/") || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      ref={navRef}
      className="fixed top-0 lg:top-10 left-0 right-0 z-50 border-b border-[#E0DDCF]/70 bg-white"
    >
      <div className="w-full flex items-center px-3 py-4 lg:px-22 lg:py-3">
        <div className="shrink-0">
          <Link href="/" className="block">
            <div className="relative w-28 h-10 cursor-pointer">
              <Image src="/logo-1.svg" alt="LiveBits Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-5 text-[14px] font-medium text-black">
          {NAV_ITEMS.map((item) => {
            const isActive = isActiveHref(item.href);
            const isServices = item.label === "Services";
            const isProducts = item.label === "Products";
            const isOther = item.label === "Other";
            const isBlog = item.label === "Blog";

            const wrapperProps = isOther
              ? { onMouseEnter: openOther, onMouseLeave: scheduleCloseOther }
              : isServices
              ? { onMouseEnter: openServices, onMouseLeave: scheduleCloseServices }
              : isProducts
              ? { onMouseEnter: openProducts, onMouseLeave: scheduleCloseProducts }
              : isBlog
              ? { onMouseEnter: openBlog, onMouseLeave: scheduleCloseBlog } // ✅ NEW
              : {};

            return (
              <div key={item.label} className="relative" {...wrapperProps}>
                <Link
                  href={item.href}
                  onClick={() => closeAllMenus()}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive ? "text-black" : "text-black hover:text-black"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* ✅ Blog dropdown desktop */}
                {isBlog && showBlog && (
                  <div className="absolute left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-2 text-[14px] text-[#333]">
                      {BLOG_DROPDOWN.map((dd) => (
                        <li key={dd.label}>
                          <Link
                            href={dd.href}
                            onClick={closeAllMenus}
                            className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                          >
                            {dd.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isOther && showOther && (
                  <div className="absolute left-1/2 z-50 mt-3 w-52 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-2 text-[14px] text-[#333]">
                      {OTHER_DROPDOWN.map((dd) => (
                        <li key={dd.label}>
                          <Link href={dd.href} onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100 hover:text-black">
                            {dd.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isProducts && showProducts && (
                  <div className="absolute left-1/2 z-50 mt-3 w-52 -translate-x-1/2 rounded-md border border-gray-200 bg-white shadow-lg">
                    <ul className="py-2 text-[16px] text-[#333]">
                      {PRODUCTS_DROPDOWN.map((prod) => (
                        <li key={prod.label}>
                          <Link href={prod.href} onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100 hover:text-black">
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

        <button
          className="md:hidden ml-auto inline-flex items-center rounded-md border border-[#CBC6B7] px-3 py-2 text-xs"
          onClick={() => setMobileOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* MEGA MENU (Services) */}
      {showServices && (
        <div className="absolute left-0 right-0 top-full z-40" onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
          <div className="w-full bg-white border-t border-gray-200 shadow-xl">
            <div className="mx-auto flex max-w-[1250px] gap-10 px-8 py-12">
              <div className="w-[220px] border-r border-gray-100 pr-8">
                <h3 className="text-[16px] font-semibold text-[#111]">Services</h3>
                <div className="mt-4">
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

              <div className="flex-1 grid grid-cols-4 gap-10 text-[13px]">
                {SERVICES_DROPDOWN.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="mb-3 text-[20px] font-bold text-[#333]">
                      {cat.title === "Others" ? (
                        <span className="cursor-default">{cat.title}</span>
                      ) : (
                        <Link href={cat.href} onClick={closeAllMenus} className="hover:text-black transition-colors">
                          {cat.title}
                        </Link>
                      )}
                    </h4>
                    <ul className="space-y-1 text-[#333]">
                      {cat.items.map((it) => (
                        <li key={it.label}>
                          <Link href={it.href} onClick={closeAllMenus} className="hover:text-black transition-colors">
                            {it.label}
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

      {/* ✅ Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] md:hidden" role="dialog" aria-modal="true">
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/55" />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-[370px] bg-white shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200">
            <div className="sticky top-0 z-10 bg-white border-b border-[#E0DDCF]/70 px-5 py-4 flex items-center justify-between">
              <div className="relative w-24 h-8">
                <Image src="/logo-1.svg" alt="LiveBits Logo" fill className="object-contain" priority />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="h-9 w-9 rounded-full border border-[#CBC6B7] text-sm grid place-items-center hover:bg-[#f6f5f1] transition"
              >
                ✕
              </button>
            </div>

            <div className="h-[calc(100%-64px-92px)] overflow-y-auto px-5 py-5">
              <div className="mb-4 rounded-2xl border border-[#E0DDCF]/70 p-4 bg-[#fffdf2]">
                <div className="text-[13px] font-semibold text-black mb-3">Technologies we use</div>
                <div className="grid grid-cols-5 gap-3">
                  {TECH_LOGOS.slice(0, 10).map((t) => (
                    <div key={t.name} className="flex items-center justify-center rounded-xl border border-[#E0DDCF]/70 bg-white p-2">
                      <Image src={t.src} alt={t.name} width={22} height={22} className="opacity-90" />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-[15px] font-medium">
                {/* 1) Home */}
                <li>
                  <Link
                    href="/"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>Home</span>
                    {isActiveHref("/") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 2) About */}
                <li>
                  <Link
                    href="/about"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/about") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>About</span>
                    {isActiveHref("/about") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 3) Services (accordion) */}
                <li className="pt-2">
                  <button
                    onClick={() => toggleAccordion("services")}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-[#f6f5f1] transition"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-200 ${mobileServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 rounded-xl border border-[#E0DDCF]/70 bg-white p-3">
                        <div className="space-y-4">
                          {SERVICES_DROPDOWN.map((cat) => {
                            const isOpen = openServiceCat === cat.title;
                            const isActive = isActiveHref(cat.href);

                            return (
                              <div key={cat.title}>
                                <div className="flex items-center justify-between gap-2">
                                  <Link
                                    href={cat.href}
                                    className={`block rounded-lg px-3 py-2 font-semibold transition ${
                                      isOpen || isActive ? "bg-[#FFF7B8] text-black" : "text-black hover:bg-[#f6f5f1]"
                                    }`}
                                  >
                                    {cat.title}
                                  </Link>

                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setOpenServiceCat(isOpen ? null : cat.title);
                                    }}
                                    className="px-2 py-2"
                                    aria-label={`Toggle ${cat.title}`}
                                  >
                                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                  </button>
                                </div>

                                {isOpen && (
                                  <ul className="mt-2 space-y-1 pl-3">
                                    {cat.items.map((it) => {
                                      const active = isActiveHref(it.href);
                                      return (
                                        <li key={it.label}>
                                          <Link
                                            href={it.href}
                                            className={`block rounded-lg px-3 py-2 text-[14px] transition ${
                                              active ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-[#222]"
                                            }`}
                                          >
                                            {it.label}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 4) Domain */}
                <li>
                  <Link
                    href="/domain"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/domain") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>Domain</span>
                    {isActiveHref("/domain") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 5) Cloud Hosting */}
                <li>
                  <Link
                    href="/cloud-hosting"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/cloud-hosting") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>Cloud Hosting</span>
                    {isActiveHref("/cloud-hosting") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 6) Products (accordion) */}
                <li>
                  <button
                    onClick={() => toggleAccordion("products")}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-[#f6f5f1] transition"
                  >
                    <span>Products</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-200 ${mobileProducts ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 rounded-xl border border-[#E0DDCF]/70 bg-white p-3">
                        <ul className="space-y-1">
                          {PRODUCTS_DROPDOWN.map((it) => {
                            const active = isActiveHref(it.href);
                            return (
                              <li key={it.label}>
                                <Link
                                  href={it.href}
                                  className={`block rounded-lg px-3 py-2 text-[14px] transition ${
                                    active ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-[#222]"
                                  }`}
                                >
                                  {it.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 7) Industries */}
                <li>
                  <Link
                    href="/industries"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/industries") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>Industries</span>
                    {isActiveHref("/industries") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 8) Blog (accordion) */}
                <li>
                  <button
                    onClick={() => toggleAccordion("blog")}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-[#f6f5f1] transition"
                  >
                    <span>Blog</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileBlog ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-200 ${mobileBlog ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 rounded-xl border border-[#E0DDCF]/70 bg-white p-3">
                        <ul className="space-y-1">
                          {BLOG_DROPDOWN.map((it) => {
                            const active = isActiveHref(it.href);
                            return (
                              <li key={it.label}>
                                <Link
                                  href={it.href}
                                  className={`block rounded-lg px-3 py-2 text-[14px] transition ${
                                    active ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-[#222]"
                                  }`}
                                >
                                  {it.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 9) Contact */}
                <li>
                  <Link
                    href="/contact"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActiveHref("/contact") ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-black"
                    }`}
                  >
                    <span>Contact</span>
                    {isActiveHref("/contact") && <span className="text-xs">●</span>}
                  </Link>
                </li>

                {/* 10) Other (accordion) */}
                <li>
                  <button
                    onClick={() => toggleAccordion("other")}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-[#f6f5f1] transition"
                  >
                    <span>Other</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileOther ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`grid transition-all duration-200 ${mobileOther ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 rounded-xl border border-[#E0DDCF]/70 bg-white p-3">
                        <ul className="space-y-1">
                          {OTHER_DROPDOWN.map((it) => {
                            const active = isActiveHref(it.href);
                            return (
                              <li key={it.label}>
                                <Link
                                  href={it.href}
                                  className={`block rounded-lg px-3 py-2 text-[14px] transition ${
                                    active ? "bg-[#FFF7B8] text-black" : "hover:bg-[#f6f5f1] text-[#222]"
                                  }`}
                                >
                                  {it.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

            <div className="sticky bottom-0 border-t border-[#E0DDCF]/70 bg-white p-4">
            <a
              href="https://wa.me/923334444825?text=Hi%20LiveBits%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>

              <div className="mt-2 text-[11px] text-center text-[#555]">
                Press <span className="font-semibold">ESC</span> to close
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
