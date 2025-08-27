'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-burgundy-50 to-burgundy-100 relative overflow-hidden">
      {/* Paint Splash SVG Animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 800 600" className="w-full h-full opacity-20">
            {/* Paint Brush Stroke */}
            <path
              d="M 100 300 Q 150 100 300 250 T 500 300 T 700 350"
              fill="none"
              stroke="#7B1F1F"
              strokeWidth="40"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M 100 300 Q 150 100 300 250 T 500 300 T 700 350;
                        M 100 350 Q 200 150 350 300 T 550 350 T 700 300;
                        M 100 300 Q 150 100 300 250 T 500 300 T 700 350"
              />
            </path>

            {/* Paint Splatters */}
            <g>
              <circle cx="200" cy="200" r="20" fill="#7B1F1F" opacity="0.6">
                <animate
                  attributeName="r"
                  values="15;25;15"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="600" cy="400" r="25" fill="#7B1F1F" opacity="0.4">
                <animate
                  attributeName="r"
                  values="20;30;20"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="400" cy="150" r="15" fill="#7B1F1F" opacity="0.5">
                <animate
                  attributeName="r"
                  values="10;20;10"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Paint Drips */}
            <path
              d="M 300 0 L 300 100 Q 300 120 290 130 T 300 150"
              fill="none"
              stroke="#7B1F1F"
              strokeWidth="8"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                dur="4s"
                repeatCount="indefinite"
                values="M 300 0 L 300 100 Q 300 120 290 130 T 300 150;
                        M 300 0 L 300 120 Q 300 140 310 150 T 300 170;
                        M 300 0 L 300 100 Q 300 120 290 130 T 300 150"
              />
            </path>
          </svg>
      </motion.div>

      <div className="relative z-10 text-center p-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-8xl font-bold text-burgundy-900 mb-4 font-diplomata"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-burgundy-800 mb-6">
            Oops! This Page Has Gone Missing
          </h2>
          <p className="text-burgundy-700 mb-8 max-w-md mx-auto">
            Like a perfect paint job, sometimes things need a touch-up. Let's get you back to where you need to be.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => router.push('/')}
              className="bg-[#711f50] hover:bg-[#511237] rounded-full  text-white px-8 py-3 font-semibold transition-colors duration-300"
            >
              Return Home
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Paint Drips */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="flex justify-around"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: [80, 100, 80] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut'
              }}
              className="w-8 bg-gradient-to-b from-burgundy-800 to-burgundy-600 rounded-t-full opacity-20"
              style={{
                transform: `translateX(${Math.sin(i) * 30}px)`
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}