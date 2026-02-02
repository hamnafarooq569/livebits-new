"use client";

import { motion } from "framer-motion";

type CardConfig = {
  src: string;
  x: number;
  y: number;
  rotateY: number;
  z: number;
  hover: {
    x: number;
    y: number;
    rotateY: number;
    z: number;
  };
};

const cards: CardConfig[] = [
  {
    src: "https://framerusercontent.com/assets/ucqUkFtHrzaBQRhaXJSf8Rp1NVg.mp4",
    x: 0,
    y: -50,
    rotateY: 8,
    z: 120,
    hover: { x: 10, y: -35, rotateY: -6, z: 95 },
  },
  {
    src: "https://framerusercontent.com/assets/amgn6s4q00AtfHxntO8DfLeirM.mp4",
    x: 60,
    y: -15,
    rotateY: 8,
    z: 105,
    hover: { x: 75, y: -20, rotateY: -2,  z: 85 },
  },
  {
    src: "https://framerusercontent.com/assets/75G5fyh350LugfztXGmj6dCjh7s.mp4",
    x: 120,
    y: 20,
    rotateY: 8,
    z: 90,
    hover: { x: 135, y: -5, rotateY: 2, z: 70 },
  },
  {
    src: "https://framerusercontent.com/assets/1c4GjjokoQLTkBaYahyEK0A7vCU.mp4",
    x: 180,
    y: 55,
    rotateY: 8,
    z: 75,
    hover: { x: 195, y: 10, rotateY: 6, z: 55 },
  },
  {
    src: "https://framerusercontent.com/assets/p8zKH7k4Il8sxtSKbm6z6WX4KNQ.mp4",
    x: 240,
    y: 90,
    rotateY: 8,
    z: 60,
    hover: { x: 260, y: 25, rotateY: 10, z: 40 },
  },
  {
    src: "https://framerusercontent.com/assets/hlfgcAxvqVULGAJgcbgoV2yeStw.mp4",
    x: 300,
    y: 125,
    rotateY: 8,
    z: 45,
    hover: { x: 325, y: 40, rotateY: 14, z: 25 },
  },
];

export default function StackedVideoCardsMirrored() {
  return (
    <div className="relative w-[260px] h-[440px]">
      <div
        className="relative w-full h-full"
        style={{ perspective: "4200px" , transform: "translateX(-100px)" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="
              absolute
              top-[60%]
              w-[380px]
              h-[190px]
              -translate-y-1/2
              rounded-[10px]
              overflow-hidden
              bg-white
              shadow-2xl
            "
            style={{
              transform: `
                translateX(${card.x}px)
                translateY(${card.y}px)
                rotateY(${card.rotateY}deg)
                translateZ(${card.z}px)
              `,
            }}
            whileHover={{
              transform: `
                translateX(${card.hover.x}px)
                translateY(${card.hover.y}px)
                rotateY(${card.hover.rotateY}deg)
                translateZ(${card.hover.z}px)
              `,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <video
              src={card.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}