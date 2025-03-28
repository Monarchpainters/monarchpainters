"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaPhone } from "react-icons/fa"
import { Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.2
        }}
      >
        <a
          href="https://wa.me/+447437531733?text=Hi,%20I'm%20interested%20in%20your%20painting%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            className="bg-[#711f50] p-4 rounded-full shadow-lg cursor-pointer relative"
            whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(230, 171, 101, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -10, 0],
              boxShadow: ['0 4px 8px rgba(0,0,0,0.1)', '0 8px 16px rgba(0,0,0,0.2)', '0 4px 8px rgba(0,0,0,0.1)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaWhatsapp className="w-8 h-8 text-[#e6ab65]" />
            <motion.div
              className="absolute -inset-2 rounded-full bg-[#711f50] opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </a>
      </motion.div>
      <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#711f50] backdrop-blur-md" : "bg-[#711f50]"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3 lg:py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo/logo.webp" 
                alt="Monarch Painters Logo" 
                className="w-8 sm:w-10 md:w-12" 
              />
              <span className="font-['navlogo'] text-[10px] sm:text-xs md:text-sm leading-loose" style={{ color: '#e6ab65' }}>
                MONARCH PAINTERS
              </span>
            </Link>
          </motion.div>

          <ul className="hidden md:flex space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="relative px-2 lg:px-4 py-2 text-[#e6ab65] hover:text-white transition-colors duration-300 text-base lg:text-lg"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e6ab65]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </Link>
              </motion.li>
            ))}
             <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.6 }}
              className="relative group"
            >
              <a
                href="tel:+447437531733"
                className=" hover:text-[#711f50]  flex items-center gap-2 relative px-2 py-2 bg-[#e6ab65] text-[#711f50] rounded-full hover:bg-white transition-colors duration-300 text-base lg:text-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.5 }}
              className="relative group"
            >
              <Link
                href="/contact"
                className="relative px-4 py-2 bg-[#e6ab65] text-[#711f50] rounded-full hover:bg-white transition-colors duration-300 text-base lg:text-lg font-medium"
              >
                Contact
              </Link>
            </motion.li>
           
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+447437531733"
              className="hover:text-[#711f50] flex items-center gap-2 relative px-2 py-2 bg-[#e6ab65] text-[#711f50] rounded-full hover:bg-white transition-colors duration-300 text-base lg:text-lg font-medium"
            >
              <Phone className="w-4 h-4" />
            </a>
            <motion.button
              className="p-2 rounded-lg hover:bg-[#711f50]/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#e6ab65]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-[#711f50]/95 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <ul className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 rounded-lg hover:bg-[#e6ab65]/10 transition-colors text-[#e6ab65] font-medium text-base sm:text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="px-4 pb-4 space-y-2"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 bg-[#e6ab65] text-[#711f50] rounded-full hover:bg-white transition-colors duration-300 text-base sm:text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  )
}
