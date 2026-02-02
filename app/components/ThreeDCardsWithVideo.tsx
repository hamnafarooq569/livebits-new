"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const ThreeDCardsWithVideo: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const xMovement = (mousePosition.x - window.innerWidth / 2) / 50;
  const yMovement = (mousePosition.y - window.innerHeight / 2) / 50;

  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        className="relative flex gap-0" // Gap set to 0 for tighter overlap
        style={{ perspective: "2000px" }} // Increase the perspective for deeper overlap
      >
        {/* Card 1 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(150px)", // Push card 1 forward
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 6, // Front card
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video1.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(130px)", // Card 2 slightly behind Card 1
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 5,
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video2.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(110px)", // Behind Card 2
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 4,
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video3.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(90px)", // Behind Card 3
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 3,
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video4.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(70px)", // Behind Card 4
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 2,
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video5.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          className="w-72 h-96 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            transform: "translateZ(50px)", // Behind all other cards
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
          animate={{
            x: xMovement,
            y: yMovement,
            rotateY: -xMovement / 2,
            rotateX: yMovement / 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/video6.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
          ></video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThreeDCardsWithVideo;
