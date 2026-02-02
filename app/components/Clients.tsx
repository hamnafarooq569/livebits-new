"use client";
import { motion } from "framer-motion";

const totalLogos = 51;
const clientLogos = Array.from({ length: totalLogos }, (_, i) => `/clientslogos/${i + 1}.jpg`);

export default function ClientLogos() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">


        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="border border-black p-4 bg-white rounded-[7px] shadow-sm hover:shadow-xl transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
