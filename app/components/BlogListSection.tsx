"use client";

import Image from "next/image";
import Link from "next/link";

type BlogListSectionProps = {
  bgColor?: string; // background color prop
};

const posts = [
  {
    slug: "complete-guide-to-pakistani-web-hosting",
    title: "Complete Guide to Pakistani Web Hosting",
    excerpt:
      "Discover how a modern digital marketing strategy helps you attract high-intent customers and grow your brand online.",
    image: "/blog1.jpg",
  },
  {
    slug: "cloud-hosting",
    title: "What is Cloud Hosting? and how it works.",
    excerpt:
      "Not all agencies are the same. Learn what to look for when picking a partner that actually delivers results.",
    image: "/blog4.jpeg",
  },
];

export default function BlogListSection({ bgColor = "#FFFFFF" }: BlogListSectionProps) {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative z-10 mx-auto max-w-[1250px] px-6 md:px-8">
        
        {/* heading */}
        <div className="mb-10 text-left md:text-left">
          <h2 className="mt-2 text-[30px] font-semibold leading-tight text-[#111111] md:text-[34px]">
            Latest News &amp; Stories
          </h2>
          <p className="mt-3 max-w-xl text-[14px] text-[#5E5E5E]">
            Stay updated with practical tips, strategies, and behind-the-scenes  
            insights from the LiveBits.
          </p>
        </div>

        {/* posts grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-[15px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border transition-transform duration-300"
            >
              {/* image */}
              <Link href={`/blog/${post.slug}`} className="relative block h-[260px] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </Link>

              {/* text */}
              <div className="flex flex-1 flex-col px-7 py-6">
                <div className="mb-2 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#A7A7A7]">
                  <span className="h-[1px] w-6 bg-[#DDD4B5]" />
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-[24px] font-semibold leading-snug text-[#111111]">
                    {post.title}
                  </h3>
                </Link>

                <p className="mt-3 text-[14px] leading-relaxed text-[#5B5B5B]">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[17px] font-semibold text-[#fee000] underline-offset-4 group-hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
