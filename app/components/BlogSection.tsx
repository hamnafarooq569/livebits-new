"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Complete guide to Pakistani Web Hosting.",
    excerpt:
      "This guide unpacks everything you need to know about web hosting in Pakistan, from understanding the local market to selecting the right hosting features for your website.",
    image: "/hosting-server.jpeg",
    badge: "Funding",
    link: "/blog/web-hosting-blog",
  },
  {
    id: 2,
    title: "What is Cloud Hosting? and how it works.",
    excerpt:
      "With rising digital demands, cloud hosting has become the preferred solution for businesses seeking scalability, performance, and cost efficiency.",
    image: "/Cloud-Computing.jpg",
    badge: "Product",
    link: "/blog/cloud-hosting-blog",
  },
  {
    id: 3,
    title: "3 experiments to improve your mobile funnel in 2024",
    excerpt:
      "From onboarding tweaks to pricing tests, here are practical experiments that can lift your conversion rate without redesigning everything.",
    image: "/blog1.png",
    badge: "Growth",
    link: "/mobile-funnel-blog",
  },
];

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden pt-15 pb-20 bg-[#f8f8f8]">
      <div className="relative z-10 mx-auto max-w-[1250px] px-6 md:px-8">
        {/* HEADER */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[14px] font-semibold uppercase">
              Latest News & Stories
            </p>
            <h2 className="mt-3 text-[28px] font-bold md:text-[34px]">
              Fresh insights from our Marketing Desk
            </h2>
            <p className="mt-3 max-w-xl text-[18px] leading-relaxed text-black">
              Amplify your online presence with LiveBits' digital marketing
              solutions, designed to boost visibility, engage your audience, and
              deliver measurable growth.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border bg-white/80 text-[#555] shadow-sm hover:bg-[#F9F4E5]">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border bg-white text-[#111] shadow-sm hover:bg-[#F9E26A]/80">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const className =
              "group flex flex-col overflow-hidden border border-black rounded-[15px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 h-[550px]";

            const CardInner = (
              <>
                {/* IMAGE */}
                <div className="relative h-[230px] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] border border-b-black"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col border-t px-7 pt-7 pb-4">
                  <span className="inline-flex w-fit rounded-[10px] border border-black bg-[#fee000] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#111]">
                    {post.badge}
                  </span>

                  <h3 className="mt-2 text-[24px] font-bold leading-snug text-[#111]">
                    {post.title}
                  </h3>

                  <p className="mt-1 flex-1 text-[18px] leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-2 inline-flex items-center gap-2 text-[18px] font-semibold text-[#111]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black bg-[#fee000] text-[#111] shadow-sm transition-transform group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <span className="underline-offset-4 group-hover:underline">
                      Learn More
                    </span>
                  </div>
                </div>
              </>
            );

            return post.link ? (
              <Link key={post.id} href={post.link} className="block">
                <article className={className}>{CardInner}</article>
              </Link>
            ) : (
              <article key={post.id} className={className}>
                {CardInner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
