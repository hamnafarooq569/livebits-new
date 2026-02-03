"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Solo",
    icon: "👤",
    currency: "Rs",
    amount: "12,500",
    per: "/ year",
    description:
      "Affordable hosting with essential features for small websites.",
    features: [
      "1 Free Domain",
      "5GB Hosting Space",
      "Unlimited Bandwidth",
      "Unlimited Sub-Domains",
      "Unlimited FTP Accounts",
      "Unlimited Email Accounts",
      "Softaculous 370+ Scripts",
      "Free SSL",
      "Dedicated Control Panel",
    ],
    popular: false,
  },
  {
    name: "Team",
    icon: "👥",
    currency: "Rs",
    amount: "22,500",
    per: "/ year",
    description:
      "Enhanced hosting with extra resources for growing sites.",
    features: [
      "1 Free Domain",
      "30GB Hosting Space",
      "Unlimited Bandwidth",
      "Unlimited Sub-Domains",
      "Unlimited FTP Accounts",
      "Unlimited Email Accounts",
      "Softaculous 370+ Scripts",
      "Free SSL",
      "Dedicated Control Panel",
    ],
    popular: false,
  },
  {
    name: "Agency",
    icon: "🏢",
    currency: "Rs",
    amount: "35,500",
    per: "/ year",
    description:
      "Premium hosting for high-performance websites.",
    features: [
      "1 Free Domain",
      "50GB Hosting Space",
      "Unlimited Bandwidth",
      "Unlimited Sub-Domains",
      "Unlimited FTP Accounts",
      "Unlimited Email Accounts",
      "Softaculous 370+ Scripts",
      "Free SSL",
      "Dedicated Control Panel",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: "🏬",
    currency: "Rs",
    amount: "55,000",
    per: "/ year",
    description:
      "Ultimate hosting with limitless possibilities for all your needs.",
    features: [
      "1 Free Domain",
      "100GB Hosting Space",
      "Unlimited Bandwidth",
      "Unlimited Sub-Domains",
      "Unlimited FTP Accounts",
      "Unlimited Email Accounts",
      "Softaculous 370+ Scripts",
      "Free SSL",
      "Dedicated Control Panel",
    ],
    popular: false,
  },
];

export default function ChooseHostingPlan() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* soft yellow background blobs */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#FFD956]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFD956]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* heading */}
        <h2 className="text-[28px] md:text-5xl font-bold mb-4">
          Choose Hosting Plan
        </h2>

        {/* Subtext */}
        <p className=" text-[18px] mb-12">
          Fast, secure, and affordable hosting plans for any budget.
        </p>


        {/* managed cloud badge */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center rounded-[4px] bg-[#fee000] px-8 py-2 text-md font-normal text-black mb-16 shadow-sm border border-black"
        >
          Managed Cloud Hosting
        </motion.button>

        {/* plans row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-[15px] border border-black shadow-sm px-8 py-10 text-left transition-all duration-300
                  ${
                    isPopular
                      ? "bg-[#111111] border-[#111111] text-white scale-[1.02]"
                      : "bg-white border-[#e5e5e5] text-[#111111]"
                  } hover:bg-black hover:text-white`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <span className="absolute top-3 right-4 text-[11px] text-[#fee000]">
                    Popular
                  </span>
                )}

                {/* icon + name */}
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-lg
                    ${
                      isPopular
                        ? "bg-[#ffd000] text-black"
                        : "bg-[#f7f7f7] text-[#444]"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-[18px] font-bold">{plan.name}</h3>
                </div>

                {/* short description */}
                <p
                  className={`mb-6 text-[14px] leading-relaxed text-center ${
                    isPopular ? "text-[#e8e8e8]" : "text-[#777]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* price block (Rs small, amount large, /year small) */}
                <div className="mb-6 flex items-baseline justify-center gap-1">
                  <span
                    className={`text-[18px] font-semibold ${
                      isPopular ? "text-[#fee000]" : "text-[#444]"
                    }`}
                  >
                    {plan.currency}
                  </span>
                  <span className="text-3xl font-bold">{plan.amount}</span>
                  <span className="text-xs text-[#666] ml-1">{plan.per}</span>
                </div>

                {/* button centered with WhatsApp link (single effect only) */}
                <div className="flex justify-center mb-6">
                  <a
                    href={`https://api.whatsapp.com/send?phone=923354832487&text=${encodeURIComponent(
                      `I'm interested in purchasing the ${plan.name} hosting plan.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[140px] text-center rounded-[4px] py-2 text-[14px] font-semibold bg-[#fee000] text-black hover:bg-[#fee000] transition-colors border border-black"
                  >
                    Buy Now
                  </a>
                </div>

                {/* features */}
                <ul className="mb-0 space-y-1 text-[14px] leading-relaxed">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span
                        className={`mt-[2px] text-[10px] ${
                          isPopular ? "text-[#fee000]" : "text-[#00a65a]"
                        }`}
                      >
                        ✔
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
