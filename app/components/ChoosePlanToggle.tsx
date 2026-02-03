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
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-0 left-6 w-52 h-52 bg-[#ffd000]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-6 w-64 h-64 bg-[#ffd000]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-extrabold tracking-tight text-[#111] md:text-[30px]">
          Domain Pricing
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-[14px] sm:text-[16px] md:text-[18px] mb-8 sm:mb-12 text-black/70">
          Choose the Perfect Domain Hosting Plan for Your Needs
        </p>

        {/* Domain Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {domainPlans.map((domain, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="border border-black bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center p-4 sm:p-5"
            >
              {/* Logo */}
              <img
                src={domain.img}
                alt="domain"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-3"
              />

              {/* Price */}
              <p className="text-[15px] sm:text-[17px] font-bold mb-4">
                {domain.price}
              </p>

              {/* Button */}
              <a
                href={`https://api.whatsapp.com/send?phone=923354832487&text=${encodeURIComponent(
                  `I'm interested in purchasing the ${domain.img} domain.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto w-full
                  bg-[#fee000] text-black
                  px-3 py-2
                  rounded-md font-semibold
                  text-[12px] sm:text-[14px] md:text-[18px]
                  hover:bg-black hover:text-white
                  transition
                  inline-flex items-center justify-center gap-1
                  whitespace-nowrap
                "
              >
                Get Domain <span>→</span>
              </a>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
