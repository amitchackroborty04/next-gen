"use client"

import { CoolMode } from "@/components/magicui/cool-mode"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

interface HeaderProps {
  onNavigate: (section: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Results", id: "results" },
    { name: "About", id: "about" },
    { name: "Contact-US", id: "contact" },
  ]

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="cursor-pointer"
            onClick={() => handleNavigate("hero")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">ZW</span>
              </div>
              <div className="text-white">
                <div className="text-xs sm:text-sm font-semibold">ZEEWORKS</div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <CoolMode key={index}>
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(item.id)}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.name}
              </motion.button>
              </CoolMode>
            ))}
          </nav>

          {/* Right side - Social Icons and Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com" // Replace with actual link
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com" // Replace with actual link
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 absolute top-full left-0 right-0 z-50"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-2"
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com" // Replace with actual link
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com" // Replace with actual link
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}