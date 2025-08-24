"use client";

import { VideoText } from "@/components/magicui/video-text";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          {/* <p className="text-gray-400 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            Entrepreneurs who want to produce high-quality content and actually
            grow online...
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 "
        >
          <div className="h-[60px] sm:h-[70px] md:h-[80px] lg:h-[70px] w-full flex items-center justify-center mb-2 sm:mb-4">
            <VideoText 
              fontSize={7.4} 
              src="https://cdn.magicui.design/ocean-small.webm"
              className="w-full lg:w-[1000px]"
            >
              NextGen | Scale Your Brand
            </VideoText>
          </div>
          
          <div className="mt-2 sm:mt-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              with High-Impact Video
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6 sm:mt-8 px-2"
        >
          We turn your raw footage into high-converting content that builds
          trust, attracts clients, and grows your brand — effortlessly.
        </motion.p>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
}