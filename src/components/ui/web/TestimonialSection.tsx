"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I gained 500+ followers and booked 4 appointments in my first 30 days! I finally feel like my content is working for me.",
    author: "Sarah J., Florida Realtor",
    gradient: "from-blue-600 to-blue-800",
    bgPattern: "from-blue-500/20",
  },
  {
    quote:
      "This platform transformed my business completely. I went from struggling to get clients to having a waiting list!",
    author: "Michael R., Marketing Consultant",
    gradient: "from-purple-600 to-purple-800",
    bgPattern: "from-purple-500/20",
  },
  {
    quote:
      "The results speak for themselves - 300% increase in engagement and my best month ever in sales.",
    author: "Jessica L., E-commerce Owner",
    gradient: "from-green-600 to-green-800",
    bgPattern: "from-green-500/20",
  },
  {
    quote:
      "I was skeptical at first, but after seeing my competitor's success, I had to try it. Best decision I've made!",
    author: "David K., Real Estate Agent",
    gradient: "from-orange-600 to-orange-800",
    bgPattern: "from-orange-500/20",
  },
  {
    quote:
      "Finally, a solution that actually works! My content reaches the right people and converts like crazy.",
    author: "Amanda T., Life Coach",
    gradient: "from-pink-600 to-pink-800",
    bgPattern: "from-pink-500/20",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${currentTestimonial.gradient} rounded-3xl p-12 text-center relative overflow-hidden`}
            >
              {/* Background pattern */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.bgPattern} to-transparent`}
              />

              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl font-medium text-white mb-8 leading-tight relative z-10"
              >
                <TypingAnimation duration={100} key={`quote-${currentIndex}`}>
                  {currentTestimonial.quote}
                </TypingAnimation>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-10"
              >
                <p className="text-white/80 text-lg mb-4">
                  — {currentTestimonial.author}
                </p>

                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + i * 0.1,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-4 right-4 w-16 h-16 border border-white/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
