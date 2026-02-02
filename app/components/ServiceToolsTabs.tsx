"use client";

import React, { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Chip = {
  label: string;
  logo?: string;
};

type Section = {
  title: string;
  chips: Chip[];
};

type Category = {
  key: string;
  label: string;
  sections: Section[];
};

function ChipPill({ label, logo }: Chip) {
  return (
    <div className="group flex items-center gap-3 rounded-full bg-[#F8F8F8] px-4 py-2 text-[18px] text-black shadow-sm transition hover:scale-105 hover:bg-black hover:text-white">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F9F9F9] shadow transition group-hover:bg-black">
        {logo ? (
          <Image
            src={logo}
            alt={label}
            width={16}
            height={16}
            className="transition group-hover:invert"
          />
        ) : (
          <div className="h-2 w-2 rounded-full bg-black transition group-hover:bg-white" />
        )}
      </div>

      <span className="whitespace-nowrap font-medium">{label}</span>
    </div>
  );
}

export default function ServiceToolsTabs() {
  const pathname = usePathname();

  const categories: Category[] = useMemo(
    () => [
      {
        key: "digital-marketing",
        label: "Digital Marketing",
        sections: [
          {
            title: "Ads & Campaigns",
            chips: [
              { label: "Google Ads", logo: "/google-ads.svg" },
              { label: "Meta Ads Manager", logo: "/meta-ads-manager.svg" },
              { label: "TikTok Ads", logo: "/tikrok-ads.svg" },
              { label: "LinkedIn Ads", logo: "/linkedin-ads.svg" },
            ],
          },
          {
            title: "Analytics & Tracking",
            chips: [
              { label: "GA4", logo: "/ga4.svg" },
              { label: "Google Tag Manager", logo: "/GOOGLE-TAG-MANAGER.svg" },
              { label: "Search Console", logo: "/search-console.svg" },
              { label: "Hotjar", logo: "/hotjar.svg" },
              { label: "Looker Studio", logo: "/looker-studio.svg" },
            ],
          },
          {
            title: "SEO Tools",
            chips: [
              { label: "Ahrefs", logo: "/ahrefs.svg" },
              { label: "SEMrush", logo: "/semrush.svg" },
              { label: "Screaming Frog", logo: "/screaming-frog.svg" },
              { label: "Ubersuggest", logo: "/ubersuggest.svg" },
              { label: "Keyword Planner", logo: "/google-keyword-planner.svg" },
            ],
          },
        ],
      },
      {
        key: "app-development",
        label: "App Development",
        sections: [
          {
            title: "Mobile",
            chips: [
              { label: "Flutter", logo: "/flutter.svg" },
              { label: "React Native", logo: "/react-native.svg" },
              { label: "Swift", logo: "/swift.svg" },
              { label: "Kotlin", logo: "/kotlin.svg" },
              { label: "Firebase", logo: "/firebase.svg" },
            ],
          },
          {
            title: "Backend & APIs",
            chips: [
              { label: "Node.js", logo: "/node.js.svg" },
              { label: "NestJS", logo: "/nextjs.svg" },
              { label: "FastAPI", logo: "/fastapi.svg" },
              { label: "PostgreSQL", logo: "/postgresql.svg" },
              { label: "MongoDB", logo: "/mongodb.svg" },
            ],
          },
          {
            title: "Testing & Release",
            chips: [
              { label: "Postman", logo: "/postman.svg" },
              { label: "Swagger", logo: "/swagger.svg" },
              { label: "Play Console", logo: "/play-console.svg" },
              { label: "App Store", logo: "/app-store.svg" },
              { label: "CI/CD", logo: "/ci_cd.svg" },
            ],
          },
        ],
      },
      {
        key: "video-editing",
        label: "Video Editing",
        sections: [
          {
            title: "Editing",
            chips: [
              { label: "Premiere Pro", logo: "/premier-pro.svg" },
              { label: "DaVinci Resolve", logo: "/davinci-resolve.svg" },
              { label: "Final Cut Pro", logo: "/final-cut-pro.svg" },
              { label: "CapCut", logo: "/capcut-pro.svg" },
            ],
          },
          {
            title: "Motion & Effects",
            chips: [
              { label: "After Effects", logo: "/after-affects.svg" },
              { label: "Blender", logo: "/blender.svg" },
              { label: "Cinema 4D", logo: "/cenima-4d.svg" },
              { label: "Element 3D", logo: "/element-3d.svg" },
            ],
          },
          {
            title: "Audio",
            chips: [
              { label: "Audition", logo: "/audition.svg" },
              { label: "Descript", logo: "/descript.svg" },
              { label: "Audacity", logo: "/audacity.svg" },
            ],
          },
        ],
      },
      {
        key: "graphic-design",
        label: "Graphic Designing",
        sections: [
          {
            title: "Design Tools",
            chips: [
              { label: "Photoshop", logo: "/photoshop.svg" },
              { label: "Illustrator", logo: "/illustrator.svg" },
              { label: "Figma", logo: "/figma.svg" },
              { label: "Canva", logo: "/canva.svg" },
              { label: "InDesign", logo: "/indesign.svg" },
            ],
          },
        ],
      },
      {
        key: "web-development",
        label: "Web Design & Development",
        sections: [
          {
            title: "Frontend",
            chips: [
              { label: "Next.js", logo: "/next.js.svg" },
              { label: "React", logo: "/react.svg" },
              { label: "TypeScript", logo: "/typescript.svg" },
              { label: "Tailwind CSS", logo: "/tailwind-css.svg" },
              { label: "Framer Motion", logo: "/framer.svg" },
            ],
          },
          {
            title: "CMS & Backend",
            chips: [
              { label: "WordPress", logo: "/wordpress.svg" },
              { label: "Strapi", logo: "/strapi.svg" },
              { label: "Shopify", logo: "/shopify.svg" },
            ],
          },
        ],
      },
      {
        key: "content-marketing",
        label: "Content Marketing",
        sections: [
          {
            title: "Planning & Publishing",
            chips: [
              { label: "Notion", logo: "/notion.svg" },
              { label: "Trello", logo: "/trello.svg" },
              { label: "Grammarly", logo: "/grammarly.svg" },
              { label: "Medium", logo: "/medium.svg" },
              { label: "Google Trends", logo: "/google trends.svg" },
              { label: "Buzzsuomo", logo: "/buzzsuomo.svg" },
            ],
          },
        ],
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState<string>("digital-marketing");

  useEffect(() => {
    const slug = pathname.split("/")[2]; // /service/<slug>/...

    const validKeys = new Set(categories.map((c) => c.key));

    if (!slug) {
      setActiveKey("digital-marketing");
      return;
    }

    // slug matches tab keys → open that
    if (validKeys.has(slug)) {
      setActiveKey(slug);
      return;
    }

    // ✅ any other /service/* page (printing-packages etc) → keep Digital Marketing open
    setActiveKey("digital-marketing");
  }, [pathname, categories]);

  const active = categories.find((c) => c.key === activeKey);
  if (!active) return null;

  return (
    <section className="w-full bg-[#f9f9f9]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-[32px] font-extrabold text-[#0B0F19]">
          Tools & Technologies
        </h2>
        <p className="mt-2 text-black">
          Explore the tools we use across different services.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveKey(c.key)}
                className={`w-full rounded-xl px-4 py-3 text-[22px] text-left transition ${
                  activeKey === c.key
                    ? "bg-[#DFF7E9] font-semibold"
                    : "hover:bg-[#F3F4F6]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </aside>

          <div className="space-y-8">
            {active.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[28px] font-semibold">{section.title}</h3>
                <div className="mt-5 flex flex-wrap gap-4">
                  {section.chips.map((chip) => (
                    <ChipPill
                      key={chip.label}
                      label={chip.label}
                      logo={chip.logo}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
