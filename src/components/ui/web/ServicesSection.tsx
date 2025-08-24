"use client"

import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      number: "1",
      title: "Basic Editing",
      description:
        "We handle all the essentials: **cutting, trimming, merging clips, rearranging footage, applying smooth transitions, playback adjustments (slow/fast motion), and freeze-frame effects**. Perfect for content creators, vloggers, and businesses who want clean, polished videos.",
    },
    {
      number: "2",
      title: "Audio Editing & Sound Design",
      description:
        "Our audio services ensure your videos sound as great as they look. We offer **background noise removal, syncing voice-overs, music mixing, SFX integration, volume mastering, and echo/reverb effects** for cinematic sound.",
    },
      {
      number: "3",
      title: "Color & Visual Work",
      description:
        "From simple corrections to full cinematic looks, our team provides **color grading, exposure adjustments, HDR enhancements, skin tone balancing, and creative filters (vintage, black & white, LUTs)**.",
    },
        {
      number: "4",
      title: "Text, Titles & Graphics",
      description:
        "We add a professional touch with **intros/outros, lower thirds, animated titles, captions, subtitles, branding elements, and watermark/logo placement** to make your videos memorable.",
    },
        {
      number: "5",
      title: "Motion Graphics & Animation",
      description:
        "Bring your story to life with **logo animations, infographics, explainer graphics, 2D/3D text animations, motion tracking, and highlight callouts** for dynamic engagement.",
    },
        {
      number: "6",
      title: "Visual Effects (VFX)",
      description:
        "Our VFX expertise includes **green screen removal, background replacement, masking/rotoscoping, fire/smoke/rain effects, cinematic flares, slow-motion stabilization, and glitch effects**.",
    },
         {
      number: "7",
      title: "Social Media Editing",
      description:
        "We craft **vertical videos (9:16) for TikTok/Reels, square videos (1:1) for Instagram/Facebook, YouTube intros/outros, meme-style edits, and viral content pacing** to boost visibility.",
    },
       {
      number: "8",
      title: "Advanced Editing",
      description:
        "For more complex projects, we provide **multi-camera edits, storytelling structures, documentary-style sequences, highlight reels, and sync-to-music cuts**.",
    },
       {
      number: "9",
      title: "Specialized Video Types",
      description:
        "We edit all types of content including **wedding films, corporate promos, music videos, real estate walkthroughs, training & e-learning videos, travel vlogs, gaming montages, and cinematic short films**..",
    },
       {
      number: "10",
      title: " Finalization & Delivery",
      description:
        "Every project is delivered with **high-quality rendering (1080p/4K), optimized formats (MP4, MOV, AVI), noise-free compression for web/mobile, and editable project files (Premiere Pro, After Effects, Final Cut)**.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;ve streamlined our approach to deliver maximum impact with minimal hassle
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 group"
            >
              {/* Number indicator */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative"
              >
                <span className="text-white font-bold text-lg">{service.number}</span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -inset-2 border-2 border-blue-400/30 rounded-full"
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Connecting line */}
              {index < services.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-11 mt-12 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-transparent origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
