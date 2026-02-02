"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InfiniteImages() {
  const images = [
    "/clientslogo/1-removebg-preview.png",
    "/clientslogo/2-removebg-preview.png",
    "/clientslogo/3-removebg-preview.png",
    "/clientslogo/4-removebg-preview.png",
    "/clientslogo/5-removebg-preview.png",
    "/clientslogo/6-removebg-preview.png",
    "/clientslogo/7-removebg-preview.png",
    "/clientslogo/8-removebg-preview.png",
    "/clientslogo/9-removebg-preview.png",
    "/clientslogo/10-removebg-preview.png",
    "/clientslogo/11-removebg-preview.png",
    "/clientslogo/12-removebg-preview.png",
    "/clientslogo/13-removebg-preview.png",
    "/clientslogo/14-removebg-preview.png",
    "/clientslogo/15-removebg-preview.png",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-2">
      <div className="relative z-[5] border-b">
        <motion.div
          className="flex items-center gap-0 ml-15"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="
                relative 
                h-[110px] w-[230px]   /* 👈 image bigger */
                shrink-0 
                overflow-hidden 
                transition-all duration-300
                opacity-50            /* 👈 default fade */
                grayscale             /* 👈 faded look */
                hover:opacity-100     /* 👈 full visible */
                hover:grayscale-0     /* 👈 color on hover */
                hover:scale-105       /* 👈 slight zoom */
              "
            >
              <Image
                src={img}
                alt={`slider-${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
