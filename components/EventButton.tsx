"use client";

import { motion } from "framer-motion";
import { sendGTMEvent } from "@next/third-parties/google";

const handleButtonClick = () => {
  sendGTMEvent({
    event: "start_project_click", // Custom GTM event name
  });
};

export default function EventButton() {
  return (
    <motion.button
      type="button"
      className="w-full bg-gradient-to-r from-[#711f50] to-[#e6ab65] text-white py-4 px-8 rounded-xl font-medium text-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleButtonClick} // Send GTM event
    >
      <span className="relative z-10">Start Your Project</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#e6ab65] to-[#711f50] opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      />
    </motion.button>
  );
}