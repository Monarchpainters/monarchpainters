"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { expertiseContent } from "@/data/landingpage";

export default function Expertise() {
  return (
    <div className="bg-[#711f50] text-white px-4 md:px-6 lg:px-8 py-6 md:py-8 rounded-3xl mx-4 md:mx-6 lg:mx-8">
      <div className="flex justify-between items-center mb-4 md:mb-6 lg:mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#e6ab65]">
          {expertiseContent.title}
        </motion.h2>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" /> */}
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {expertiseContent.items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative h-48 md:h-56 lg:h-64 rounded-2xl md:rounded-3xl border-2 md:border-4 border-[#e6ab65] overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-200 text-xs md:text-sm">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}