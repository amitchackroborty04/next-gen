"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "DRAMATIC MAKEOVER",
      category: "Transformation",
      thumbnail: "/dramatic-makeover.png",
    },
    {
      title: "BATHTUB FROM ELIE SAAB",
      category: "Luxury Content",
      thumbnail: "/luxury-bathtub.png",
    },
    {
      title: "TRAIN & CERTIFY",
      category: "Educational",
      thumbnail: "/professional-training.png",
    },
    {
      title: "OUR TEAM",
      category: "Behind the Scenes",
      thumbnail: "/professional-team-workspace.png",
    },
  ]

  return (
    <section id="results" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work in Action</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we transform raw footage into compelling content that drives results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/5]">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  width={500}
                  height={500}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-white font-bold text-lg mb-1"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-blue-400 text-sm"
                  >
                    {item.category}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
