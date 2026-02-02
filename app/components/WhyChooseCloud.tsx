"use client";
import { motion } from "framer-motion";
import { Server, Zap, Shield, Layers, Settings } from "lucide-react";

const features = [
  {
    icon: <Server className="w-8 h-8 text-[#fee000]" />,
    title: "Reliability",
    description: "99.9% Uptime Guarantee",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#fee000]" />,
    title: "Speed",
    description: "Optimized servers for fast loading times",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#fee000]" />,
    title: "Security",
    description: "Free SSL certificates and data backups",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#fee000]" />,
    title: "Scalability",
    description: "Plans that grow with your needs",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#fee000]" />,
    title: "Ease of Use",
    description: "Intuitive control panel for seamless management",
  },
];

export default function WhyChooseCloud() {
  return (
    <section className="bg-[#EEDC82] py-24 px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-[32px] font-extrabold ">
          Why Choose Our Cloud Hosting?
        </h2>

        {/* Subtext */}
        <p className=" text-[18px] mt-1">
          Experience top-tier cloud hosting with unmatched reliability, speed, security, scalability, and ease of use.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center bg-white text-center p-6 border border-black rounded-[5px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)] "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="text-[22px] font-bold mb-2">{feature.title}</h3>
              <p className="text-black text-[18px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
