"use client";
import { motion } from "framer-motion";

const domainPlans = [
  { img: "/domain-04.svg", price: "PKR 5,500" },
  { img: "/domain-03.svg", price: "PKR 5,500" },
  { img: "/domain-02.svg", price: "PKR 5,500" },
  { img: "/domain-info.svg", price: "PKR 5,500" },
  { img: "/domain-pk.svg", price: "PKR 5,500" },
  { img: "/domain-pk-com.svg", price: "PKR 5,500" },
  { img: "/domain-uk.svg", price: "PKR 5,500" },
  { img: "/domain-edu.svg", price: "PKR 5,500" },
];

export default function ChoosePlanToggle() {
  return (
    <section className="bg-white py-24 px-6 text-center relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#ffd000]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#ffd000]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] md:text-5xl font-bold mb-4">
          Domain Pricing
        </h2>

        {/* Subtext */}
        <p className=" text-[18px] mb-12">
          Choose the Perfect Domain Hosting Plan for Your Needs
        </p>

        {/* Domain Cards */}
        <motion.div
          key="domain"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {domainPlans.map((domain, i) => (
            <motion.div
              key={i}
              className="border border-black p-4 bg-white rounded-[7px] shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              whileHover={{ scale: 1.03 }}
            >
              {/* LOGO — last row reduced gap */}
              <div className={`${i >= 4 ? "-mb-1" : "mb-1.5"}`}>
                <img
                  src={domain.img}
                  alt="domain"
                  className={`object-contain ${
                    i >= 4
                      ? "w-24 h-24 md:w-24 md:h-24"
                      : "w-20 h-20 md:w-20 md:h-20"
                  }`}
                />
              </div>

              {/* PRICE — last row reduced gap */}
              <p
                className={` text-lg font-bold text-left ml-3 ${
                  i >= 4 ? "mb-3" : "mb-3"
                }`}
              >
                {domain.price}
              </p>

              {/* BUTTON */}
              <a
                href={`https://api.whatsapp.com/send?phone=923354832487&text=${encodeURIComponent(
                  `I'm interested in purchasing the ${domain.img} domain.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fee000] text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition inline-block"
              >
                Get Domain →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
