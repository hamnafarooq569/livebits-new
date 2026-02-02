"use client";

const INDUSTRIES = [
  {
    title: "Automotive",
    description:
      "Enhance your vehicle management operations, boost customer satisfaction, and streamline workflows with tailored software.",
  },
  {
    title: "Finance",
    description:
      "Build secure, compliant financial platforms that improve operational efficiency and customer experience.",
  },
  {
    title: "Real Estate",
    description:
      "Digitize property listings, automate workflows, and manage leads with intuitive real estate solutions.",
  },
  {
    title: "Healthcare",
    description:
      "Create patient-centric healthcare apps that streamline operations, reduce admin work, and improve care quality.",
  },
  {
    title: "Hospitality",
    description:
      "Deliver seamless guest experiences with booking, check-in, and operations tools tailored for hospitality.",
  },
  {
    title: "Education",
    description:
      "Revolutionize learning with e-learning platforms, LMS systems, and student engagement solutions.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Boost sales with modern storefronts, inventory management, and omnichannel shopping experiences.",
  },
  {
    title: "Logistics",
    description:
      "Optimize fleet, shipping, and last-mile delivery with real-time tracking and route optimization.",
  },
  {
    title: "Media & Entertainment",
    description:
      "Launch streaming, content, and creator platforms that scale with your audience.",
  },
  {
    title: "Manufacturing",
    description:
      "Connect machines, people, and data to increase production efficiency and minimize downtime.",
  },
  {
    title: "Government & Public Sector",
    description:
      "Digitize citizen services with secure, scalable portals and workflow systems.",
  },
  {
    title: "Startups",
    description:
      "Go from idea to MVP fast with product strategy, UX, and full-stack development support.",
  },
  {
    title: "Telecommunications",
    description:
      "Power billing, provisioning, and customer portals for telco and ISP providers.",
  },
  {
    title: "Energy & Utilities",
    description:
      "Build monitoring dashboards, field apps, and reporting tools for modern energy operations.",
  },
  {
    title: "Non-profits",
    description:
      "Engage donors, manage programs, and track impact with custom CRM and web platforms.",
  },
  {
    title: "Custom Solutions",
    description:
      "Have a unique industry need? We design and develop tailored solutions around your workflows.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INDUSTRIES.map((item) => (
            <article
              key={item.title}
              className="
                group relative flex flex-col h-50
                rounded-[10px] border border-black
                bg-white pt-2 pb-2 px-2
                shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                transition-all duration-300 ease-out
                hover:bg-black hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                hover:border-black
                cursor-pointer
              "
            >

              <h3 className="text-[24px] font-semibold text-black transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-[18px] leading-relaxed text-black transition-colors duration-300 group-hover:text-white">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
