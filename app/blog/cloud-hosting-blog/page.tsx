"use client";

import { h2 } from "framer-motion/client";
import NewsletterSection from "../../components/NewsLetter";
import RecommendsSection from "../../components/RecommendsSection";

export default function CopilotArticlePage() {
  return (
    <main className="w-full bg-white py-26 px-4 md:px-6 lg:px-7">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-[12px] space-x-1 justify-left px-5">
        <span className="hover:underline cursor-pointer">Home</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Blog</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">
           Cloud Hosting
        </span>
      </nav>

      <section className="mx-auto max-w-3xl">
        {/* Category pill + read time */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-[#fee000] px-3 py-1 text-[12px] font-semibold">
            Cloud Hosting · 5 min read
          </span>
        </div>

        {/* Title */}
        <div className="flex justify-center">
          <h1 className="text-[28px] md:text-[28px] font-bold text-center">
            What is Cloud Hosting
          </h1>
        </div>

        {/* Author + meta in a single row */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center">
          <div className="text-center text-[14px] text-gray-600 flex items-center gap-2">
            <p className="font-bold"> by Danish M Khan</p>
            <p>20 June 2025, 7:00 pm</p>
          </div>
        </div>

        {/* Simple share icons moved to bottom, centered */}
        <div className="mt-4 flex justify-center gap-6 text-[18px] text-gray-600">
          <button className="hover:text-black">in</button>
          <button className="hover:text-black">x</button>
          <button className="hover:text-black">🔗</button>
        </div>

        {/* Hero image block */}
        <div className="mt-8 flex justify-center">
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src="/whatiscloud.png" // replace this with your image path
              alt="Hero Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Intro text */}
        <div className="mt-8 space-y-4 text-[18px] ">
          <p>
            Cloud hosting is a modern approach to web hosting where websites, applications, or data are hosted across a network of virtual and physical servers in the cloud. Unlike traditional hosting, which depends on a single machine, cloud hosting utilizes a distributed system that offers improved scalability, performance, and reliability.
          </p>
          <p>
            As digital demand grows, cloud hosting has become the preferred option for startups, enterprises, and developers seeking flexibility and cost-efficiency. Whether you're running a blog, managing eCommerce, or hosting complex apps, cloud hosting delivers the agility today's web requires.
          </p>
        </div>

        {/* Highlight box */}
        <div className="mt-6 rounded-md bg-[#F6F5F4] px-4 py-3 text-[16px]">
          This comprehensive guide helps you understand Pakistan’s evolving Cloud Hosting landscape so you can choose the right hosting solution with
          confidence.
        </div>

        {/* Table of contents */}
        <div className="mt-8">
          <h2 className="font-bold text-[18px] ">Table of contents</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[18px]">
            <li>Cloud Hosting Defined</li>
            <li>Cloud Hosting vs. Web Hosting</li>
            <li>Cloud Hosting vs. VPS</li>
            <li>How Does Cloud Hosting Work?</li>
            <li>Advantages of Cloud Hosting</li>
            <li>Why Use Cloud Hosting?</li>
            <li>Related Tools & Services</li>
          </ul>
        </div>

        {/* Section: What you can do with Copilot */}
        <section className="mt-10 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            Cloud Hosting Defined
          </h2>
          <p>
            Cloud hosting makes websites and applications accessible via cloud infrastructure. This model pulls computing resources (like CPU, RAM, storage) from multiple virtual machines instead of relying on a single physical server.
          </p>
          <p>
            The result? Instant scalability, high availability, and the freedom to pay only for what you use. Businesses no longer have to worry about server capacity or downtime-cloud hosting dynamically adjusts to traffic and resource needs.
          </p>
        </section>

        {/* Section: Types of Hosting Services in Pakistan */}
        <section className="mt-10 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            TCloud Hosting vs. Web Hosting
          </h2>
          <p>Traditional web hosting is structured around a single-server environment, categorized into four types:</p> 
            <ul className="list-decimal pl-5 space-y-0">
              <li><strong>Shared Hosting</strong>: Multiple sites share a single server. It's cost-effective but limited in performance.</li>
              <li><strong>VPS Hosting</strong>: A portion of a physical server is allocated virtually. Offers more control, but fixed resources.</li>
              <li><strong>Dedicated Hosting</strong>: A client leases an entire server. Offers high performance but demands technical expertise.</li>
              <li><strong>Managed Hosting</strong>: Similar to dedicated, but server management is handled by the provider.</li>
            </ul>
          <p>Cloud hosting removes the physical limitations by distributing your data across a global network. This allows automatic scaling, reduced latency, and high uptime-features critical for modern businesses.</p> 
            <table className="w-full table-auto border text-[16px] ">
            <thead className="bg-yellow-300">
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">FEATURE</th>
                <th className="px-4 py-2 text-left font-semibold">TRADITIONAL HOSTING</th>
                <th className="px-4 py-2 text-left font-semibold">CLOUD HOSTING</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Scalability</td>
                <td className="px-4 py-2">Limited</td>
                <td className="px-4 py-2">Instantly scalable</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Reliability</td>
                <td className="px-4 py-2">Dependent on one server</td>
                <td className="px-4 py-2">Redundant and fail-safe</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Pricing</td>
                <td className="px-4 py-2">Flat monthly/annual fee</td>
                <td className="px-4 py-2">Pay-as-you-go</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Flexibility</td>
                <td className="px-4 py-2">Low</td>
                <td className="px-4 py-2">High</td>
              </tr>
            </tbody>
          </table>

        </section>

        {/* Section: Key Features */}
        <section className="mt-10 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            Cloud Hosting vs. VPS
          </h2>
          <p>VPS Virtual Private Server simulates a dedicated environment using a portion of one physical server. It provides more autonomy than shared hosting, but you're still confined to a single machine.</p>
          <p>In contrast, cloud hosting operates on a network of servers. Even if one fails, others step in automatically. With features like global CDNs, load balancing, and autoscaling, cloud hosting provides better:</p>
            <ul className="list-disc pl-5 space-y-0">
              <li>Performance</li>
              <li>Scalability</li>
              <li>Data Security</li>
              <li>Fault Tolerance</li>
            </ul>
          <p>While VPS is ideal for moderate traffic websites, cloud hosting is a must for growing businesses and mission-critical apps.</p>

        </section>

        {/* Section: Pricing and Value */}
        <section className="mt-10 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            How Does Cloud Hosting Work?
          </h2>
          <p>
            Cloud hosting uses virtualization to partition physical servers into multiple virtual environments. These virtual machines are networked across global data centers and managed via orchestration platforms. When users access your website, traffic is intelligently routed through the fastest and most available nodes, ensuring high-speed performance and minimum downtime.
          </p>
          <p><strong>Key components include:</strong></p>
            <ul className="list-disc pl-5 space-y-0">
              <li><strong>Load Balancers:</strong>Distribute traffic efficiently</li>
              <li><strong>Auto-scalers:</strong>Add/remove resources as needed</li>
              <li><strong>Storage Replication:</strong>Ensures data durability</li>
              <li><strong>Global CDN::</strong>Optimizes delivery based on user location</li>
            </ul>
        </section>

        {/* Closing CTA */}
        <section className="mt-12 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            Advantages of Cloud Hosting
          </h2>
            <ul className="list  space-y-0">
              <li><strong>Scalability</strong><p>Add or reduce CPU, RAM, or storage instantly. Ideal for traffic spikes and seasonal demand.</p></li>
              <li><strong>Flexibility</strong><p>Use the tech stack of your choice and customize server parameters to suit your projects needs.</p></li>
              <li><strong>Cost Efficiency</strong><p>Pay only for what you use. Cloud hosting eliminates wasteful overprovisioning.</p></li>
              <li><strong>Security</strong><p>Top providers offer multi-layer security including DDoS protection, firewalls, encryption, and compliance certifications like ISO, SOC2, and GDPR.</p></li>
              <li><strong>Reliability</strong><p>With multiple nodes serving your app, failover is automatic. If one server fails, another picks up the load instantly.</p></li>
              <li><strong>Performance</strong><p>Content is served from the nearest geographic location, ensuring low latency and fast page loads.</p></li>            
            </ul>
        </section>

        <section className="mt-12 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            Why Use Cloud Hosting?
          </h2>
          <p>Dynamic Resource Allocation: Scale infrastructure with demand.</p>
            <ul className="list  space-y-0">
              <li><strong>High Availability:</strong><p>Uptime is ensured even in case of hardware failures.</p></li>
              <li><strong>Disaster Recovery:</strong><p>Advanced backup and redundancy mechanisms.</p></li>
              <li><strong>Custom Environments:</strong><p>Tailor VMs and containers for your specific tech stack.</p></li>
              <li><strong>Ease of Management:</strong><p>With managed cloud services, your team can focus on growth, not infrastructure.</p></li>          
            </ul>
          <p>Whether you're launching a startup, managing a high-traffic blog, or building a SaaS productâ€”cloud hosting offers the reliability, speed, and scalability you need.</p>
        </section>

        <section className="mt-12 space-y-4 text-[18px]">
          <h2 className="text-[28px] font-semibold ">
            Related Tools & Services
          </h2>
          <p>WordPress on Cloud: Easily deploy WP with autoscaling capabilities.</p>
            <ul className="list  space-y-0">
              <li><strong>Firebase Hosting:</strong><p>Host static content globally with one command.</p></li>
              <li><strong>Cloud Run</strong><p>Run containers in a serverless environment.</p></li>
              <li><strong>Domain Management:</strong><p>Buy, link, and manage domains via integrated services.</p></li>
              <li><strong>Compute Engine:</strong><p>Customize your own infrastructure or use pre-built web stacks.</p></li>
            </ul>
        </section>

                {/* Add the Newsletter section */}
        <div className="mt-10 border-t border-gray-200 pt-4">
          <NewsletterSection bgColor="#ffffff"/>
        </div>

        {/* Author bio */}
        <section className="mt-10 flex gap-4 border-t border-gray-200 pt-6">
          <img
            src="/team-1.jpg"
            alt="Elena Alston"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="text-sm text-[#232323]">
            <p className="font-semibold">Danish M Khan</p>
            <p className="mt-1 text-gray-600">
              Danish M Khan is teh CEO and Founder of LiveBits
            </p>
          </div>
        </section>

        {/* Tags */}
        <section className="mt-8 flex flex-wrap items-center gap-3 border-t border-b border-gray-200 pt-6    justify-center py-6">
          <span className="text-[16px] font-semibold uppercase ">
            Tags
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[18px] font-semibold">
              What Is Cloud Hosting
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[18px] font-semibold">
              Cloud Hosting In Pakistan
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[18px] font-semibold">
              Hosting
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[18px] font-semibold">
              Cloud Services
            </span>
          </div>
        </section>

      </section>

      <RecommendsSection/>
    </main>
  );
}
