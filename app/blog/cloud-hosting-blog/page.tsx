"use client";

import FaqSection from "@/app/components/FaqSection";
import NewsletterSection from "../../components/NewsLetter";
import RecommendsSection from "../../components/RecommendsSection";

const homeFaqs = [
  {
    question: "What services does LiveBits offer?",
    answer: (
      <p>
        LiveBits offers digital marketing, web design & development, mobile app
        development, ecommerce solutions, graphic designing, and video animation
        services.
      </p>
    ),
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: (
      <p>
        Yes. We work with startups, small businesses, and enterprises, delivering
        scalable solutions tailored to each stage of growth.
      </p>
    ),
  },
  {
    question: "How long does a website or app project take?",
    answer: (
      <p>
        Timelines depend on complexity. Most websites take
        <strong> 2–6 weeks</strong>, while apps may take longer based on features.
      </p>
    ),
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: (
      <p>
        Absolutely. We provide ongoing maintenance, updates, and technical
        support to ensure long-term performance.
      </p>
    ),
  },
  {
    question: "How do I get started with LiveBits?",
    answer: (
      <p>
        Simply contact us through our website. Our team will schedule a
        consultation to understand your goals and requirements.
      </p>
    ),
  },
];

export default function CopilotArticlePage() {
  return (
    <main className="w-full bg-white pt-20 sm:pt-24 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-5xl mb-6 text-[11px] sm:text-[12px] text-gray-600">
        <div className="flex flex-wrap items-center gap-1">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="text-gray-400">/</span>
          <span className="hover:underline cursor-pointer">Blog</span>
          <span className="text-gray-400">/</span>
          <span className="hover:underline cursor-pointer">Cloud Hosting</span>
        </div>
      </nav>

      <section className="mx-auto max-w-3xl">
        {/* Category pill + read time */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-[#fee000] px-3 py-1 text-[11px] sm:text-[12px] font-semibold">
            Cloud Hosting · 5 min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-center leading-tight">
          What is Cloud Hosting
        </h1>

        {/* Author + meta */}
        <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3 text-center text-[13px] sm:text-[14px] text-gray-600">
          <p className="font-semibold text-black">by Danish M Khan</p>
          <span className="hidden sm:inline text-gray-400">•</span>
          <p>20 June 2025, 7:00 pm</p>
        </div>

        {/* Share icons */}
        <div className="mt-4 flex justify-center gap-4 sm:gap-6 text-[18px] text-gray-600">
          <button className="hover:text-black transition">in</button>
          <button className="hover:text-black transition">x</button>
          <button className="hover:text-black transition">🔗</button>
        </div>

        {/* Hero image */}
        <div className="mt-7 sm:mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-gray-100 shadow-sm">
            <img
              src="/whatiscloud.png"
              alt="Cloud Hosting"
              className="w-full h-auto max-h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <div className="mt-7 sm:mt-8 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <p>
            Cloud hosting is a modern approach to web hosting where websites,
            applications, or data are hosted across a network of virtual and
            physical servers in the cloud. Unlike traditional hosting, which
            depends on a single machine, cloud hosting utilizes a distributed
            system that offers improved scalability, performance, and
            reliability.
          </p>
          <p>
            As digital demand grows, cloud hosting has become the preferred
            option for startups, enterprises, and developers seeking flexibility
            and cost-efficiency. Whether you're running a blog, managing
            eCommerce, or hosting complex apps, cloud hosting delivers the
            agility today's web requires.
          </p>
        </div>

        {/* Highlight box */}
        <div className="mt-6 rounded-xl border border-black/10 bg-[#F6F5F4] px-4 sm:px-6 py-4 text-[14px] sm:text-[16px] leading-relaxed">
          This comprehensive guide helps you understand Pakistan’s evolving Cloud
          Hosting landscape so you can choose the right hosting solution with
          confidence.
        </div>

        {/* Table of contents */}
        <div className="mt-8">
          <h2 className="font-bold text-[16px] sm:text-[18px]">
            Table of contents
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] sm:text-[17px] lg:text-[18px] text-[#111]">
            <li>Cloud Hosting Defined</li>
            <li>Cloud Hosting vs. Web Hosting</li>
            <li>Cloud Hosting vs. VPS</li>
            <li>How Does Cloud Hosting Work?</li>
            <li>Advantages of Cloud Hosting</li>
            <li>Why Use Cloud Hosting?</li>
            <li>Related Tools & Services</li>
          </ul>
        </div>

        {/* Sections */}
        <section className="mt-10 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Cloud Hosting Defined
          </h2>
          <p>
            Cloud hosting makes websites and applications accessible via cloud
            infrastructure. This model pulls computing resources (like CPU, RAM,
            storage) from multiple virtual machines instead of relying on a
            single physical server.
          </p>
          <p>
            The result? Instant scalability, high availability, and the freedom
            to pay only for what you use. Businesses no longer have to worry
            about server capacity or downtime—cloud hosting dynamically adjusts
            to traffic and resource needs.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Cloud Hosting vs. Web Hosting
          </h2>

          <p>
            Traditional web hosting is structured around a single-server
            environment, categorized into four types:
          </p>

          <ul className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Shared Hosting</strong>: Multiple sites share a single
              server. It's cost-effective but limited in performance.
            </li>
            <li>
              <strong>VPS Hosting</strong>: A portion of a physical server is
              allocated virtually. Offers more control, but fixed resources.
            </li>
            <li>
              <strong>Dedicated Hosting</strong>: A client leases an entire
              server. Offers high performance but demands technical expertise.
            </li>
            <li>
              <strong>Managed Hosting</strong>: Similar to dedicated, but server
              management is handled by the provider.
            </li>
          </ul>

          <p>
            Cloud hosting removes the physical limitations by distributing your
            data across a global network. This allows automatic scaling, reduced
            latency, and high uptime—features critical for modern businesses.
          </p>

          {/* ✅ Responsive table wrapper */}
          <div className="mt-4 -mx-4 sm:mx-0 overflow-x-auto sm:overflow-x-visible">
            <div className="min-w-[820px] sm:min-w-full">
              <table className="w-full table-auto text-[14px] sm:text-[16px] border border-black/10 rounded-xl overflow-hidden">
                <thead className="bg-yellow-300">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">FEATURE</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      TRADITIONAL HOSTING
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      CLOUD HOSTING
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-t">
                    <td className="px-4 py-3">Scalability</td>
                    <td className="px-4 py-3">Limited</td>
                    <td className="px-4 py-3">Instantly scalable</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Reliability</td>
                    <td className="px-4 py-3">Dependent on one server</td>
                    <td className="px-4 py-3">Redundant and fail-safe</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Pricing</td>
                    <td className="px-4 py-3">Flat monthly/annual fee</td>
                    <td className="px-4 py-3">Pay-as-you-go</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Flexibility</td>
                    <td className="px-4 py-3">Low</td>
                    <td className="px-4 py-3">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tip only on mobile */}
          <p className="mt-2 text-[12px] text-gray-500 sm:hidden">
            Tip: swipe horizontally to view the full table.
          </p>
          </section>


        <section className="mt-10 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Cloud Hosting vs. VPS
          </h2>
          <p>
            VPS (Virtual Private Server) simulates a dedicated environment using
            a portion of one physical server. It provides more autonomy than
            shared hosting, but you're still confined to a single machine.
          </p>
          <p>
            In contrast, cloud hosting operates on a network of servers. Even if
            one fails, others step in automatically.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Performance</li>
            <li>Scalability</li>
            <li>Data Security</li>
            <li>Fault Tolerance</li>
          </ul>
          <p>
            While VPS is ideal for moderate traffic websites, cloud hosting is a
            must for growing businesses and mission-critical apps.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            How Does Cloud Hosting Work?
          </h2>
          <p>
            Cloud hosting uses virtualization to partition physical servers into
            multiple virtual environments. These virtual machines are networked
            across global data centers and managed via orchestration platforms.
          </p>

          <p className="font-semibold">Key components include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Load Balancers:</strong> Distribute traffic efficiently
            </li>
            <li>
              <strong>Auto-scalers:</strong> Add/remove resources as needed
            </li>
            <li>
              <strong>Storage Replication:</strong> Ensures data durability
            </li>
            <li>
              <strong>Global CDN:</strong> Optimizes delivery based on user
              location
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Advantages of Cloud Hosting
          </h2>

          <ul className="space-y-4">
            <li>
              <strong>Scalability</strong>
              <p className="mt-1">
                Add or reduce CPU, RAM, or storage instantly. Ideal for traffic
                spikes and seasonal demand.
              </p>
            </li>
            <li>
              <strong>Flexibility</strong>
              <p className="mt-1">
                Use the tech stack of your choice and customize server
                parameters to suit your project’s needs.
              </p>
            </li>
            <li>
              <strong>Cost Efficiency</strong>
              <p className="mt-1">
                Pay only for what you use. Cloud hosting eliminates wasteful
                overprovisioning.
              </p>
            </li>
            <li>
              <strong>Security</strong>
              <p className="mt-1">
                Top providers offer multi-layer security including DDoS
                protection, firewalls, encryption, and compliance certifications
                like ISO, SOC2, and GDPR.
              </p>
            </li>
            <li>
              <strong>Reliability</strong>
              <p className="mt-1">
                With multiple nodes serving your app, failover is automatic.
              </p>
            </li>
            <li>
              <strong>Performance</strong>
              <p className="mt-1">
                Content is served from the nearest geographic location, ensuring
                low latency and fast page loads.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Why Use Cloud Hosting?
          </h2>

          <ul className="space-y-4">
            <li>
              <strong>High Availability</strong>
              <p className="mt-1">
                Uptime is ensured even in case of hardware failures.
              </p>
            </li>
            <li>
              <strong>Disaster Recovery</strong>
              <p className="mt-1">
                Advanced backup and redundancy mechanisms.
              </p>
            </li>
            <li>
              <strong>Custom Environments</strong>
              <p className="mt-1">
                Tailor VMs and containers for your specific tech stack.
              </p>
            </li>
            <li>
              <strong>Ease of Management</strong>
              <p className="mt-1">
                With managed cloud services, your team can focus on growth, not
                infrastructure.
              </p>
            </li>
          </ul>

          <p>
            Whether you're launching a startup, managing a high-traffic blog, or
            building a SaaS product—cloud hosting offers the reliability, speed,
            and scalability you need.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-[#111]">
          <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-semibold">
            Related Tools & Services
          </h2>

          <ul className="space-y-4">
            <li>
              <strong>Firebase Hosting</strong>
              <p className="mt-1">
                Host static content globally with one command.
              </p>
            </li>
            <li>
              <strong>Cloud Run</strong>
              <p className="mt-1">
                Run containers in a serverless environment.
              </p>
            </li>
            <li>
              <strong>Domain Management</strong>
              <p className="mt-1">
                Buy, link, and manage domains via integrated services.
              </p>
            </li>
            <li>
              <strong>Compute Engine</strong>
              <p className="mt-1">
                Customize your own infrastructure or use pre-built web stacks.
              </p>
            </li>
          </ul>
        </section>

        {/* Newsletter */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <NewsletterSection bgColor="#ffffff" />
        </div>

        {/* Author bio */}
        <section className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-t border-gray-200 pt-6">
          <img
            src="/team-1.jpg"
            alt="Danish M Khan"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="text-sm text-[#232323] text-center sm:text-left">
            <p className="font-semibold">Danish M Khan</p>
            <p className="mt-1 text-gray-600">
              Danish M Khan is the CEO and Founder of LiveBits.
            </p>
          </div>
        </section>

        {/* Tags */}
        <section className="mt-8 border-t border-b border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-[14px] sm:text-[16px] font-semibold uppercase">
              Tags
            </span>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "What Is Cloud Hosting",
                "Cloud Hosting In Pakistan",
                "Hosting",
                "Cloud Services",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-[13px] sm:text-[14px] font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>

      <FaqSection
        faqs={homeFaqs}
      />
    </main>
  );
}
