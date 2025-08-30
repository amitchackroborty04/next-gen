"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const software = [
  {
    name: "Adobe After Effects",
    logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Adobe Premiere Pro",
       logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Adobe Audition",
      logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Adobe Photoshop",
      logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Adobe Illustrator",
      logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Final Cut Pro",
      logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "DaVinci Resolve",
     logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Blender",
    logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "Cinema 4D",
      logo: "/assets/Adobe After Effects.png",
  },
  {
    name: "CapCut",
      logo: "/assets/Adobe After Effects.png",
  },
]

const firstRow = software.slice(0, software.length / 2)
const secondRow = software.slice(software.length / 2)

const SoftwareCard = ({
  logo,
  name,
}: {
  logo: string
  name: string
}) => {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "relative flex h-24 w-32 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border p-4 transition-colors",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-blue-900/20",
      )}
    >
      <img
        className="mb-2 h-8 w-8 object-contain"
        width="32"
        height="32"
        alt={`${name} logo`}
        src={logo || "/placeholder.svg"}
      />
      <figcaption className="text-center text-xs font-medium text-white">{name}</figcaption>
    </motion.figure>
  )
}

export function SoftwareMarquee() {
  return (
    <section className="  relative">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tools</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We use industry-standard software to deliver professional results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((item) => (
              <SoftwareCard key={item.name} {...item} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((item) => (
              <SoftwareCard key={item.name} {...item} />
            ))}
          </Marquee>
         
        </motion.div>
      </div>
    </section>
  )
}