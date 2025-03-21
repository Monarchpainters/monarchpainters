'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(prev + Math.random() * 10, 100);
        });
      }, 150);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  if (!isLoading && progress === 100) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-50"
    >
      <div className="relative w-full max-w-md p-8 text-center">
        {/* Logo */}
        <div className="mb-8 relative">
          <Image
            src="/images/logo.png"
            alt="Monarch Painters Logo"
            width={200}
            height={100}
            className="mx-auto"
            priority
          />
        </div>

        {/* Paint Splash Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 -z-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100,20 Q130,60 100,100 T100,180"
              fill="none"
              stroke="#7B1F1F"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M100,20 Q130,60 100,100 T100,180;
                        M100,20 Q70,60 100,100 T100,180;
                        M100,20 Q130,60 100,100 T100,180"
              />
            </path>
          </svg>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-burgundy-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 h-full bg-burgundy-800"
          />
        </div>

        {/* Progress Text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-burgundy-900 font-semibold"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
}