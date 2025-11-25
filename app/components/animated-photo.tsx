"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedPhoto() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 -inset-4"
        animate={{
          background: [
            "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
            "conic-gradient(from 120deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
            "conic-gradient(from 240deg, #ec4899, #3b82f6, #8b5cf6, #ec4899)",
            "conic-gradient(from 360deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          borderRadius: "50% 30% 50% 40%",
          filter: "blur(20px)",
          opacity: 0.7,
        }}
      />

      {/* Actual Photo with Blob Shape */}
      <motion.div
        animate={{
          borderRadius: ["50% 30% 50% 40%", "40% 50% 40% 50%", "50% 40% 50% 30%", "50% 30% 50% 40%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full overflow-hidden shadow-2xl ring-2 ring-white/10"
      >
        <Image
          src="/profile.jpg"
          alt="Marlon"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}