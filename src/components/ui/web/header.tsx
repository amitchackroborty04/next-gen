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
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Results", id: "results" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ]

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800 py-2" 
          : "bg-black/80 backdrop-blur-sm border-b border-gray-800/50 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="cursor-pointer"
            onClick={() => handleNavigate("hero")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">ZW</span>
              </div>
              <div className="text-white">
                <div className="text-xs sm:text-sm font-semibold leading-tight">ZEEWORKS</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Studio</div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
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
                  className="text-white hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                >
                  {item.name}
                </motion.button>
              </CoolMode>
            ))}
          </nav>

          {/* Right side - Social Icons and Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Social Icons - Hidden on smallest screens */}
            <div className="hidden xs:flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-1 sm:p-2 rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 absolute top-full left-0 right-0 z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-300 font-medium py-3 px-3 rounded-md hover:bg-gray-800/50"
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-gray-800">
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                  aria-label="LinkedIn"
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