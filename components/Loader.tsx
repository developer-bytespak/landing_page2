"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-48 h-48">
        {/* Blueprint Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Outer Rectangle */}
          <motion.rect
            x="20"
            y="20"
            width="160"
            height="160"
            stroke="hsl(221, 83%, 53%)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          
          {/* Inner Rectangle */}
          <motion.rect
            x="40"
            y="40"
            width="120"
            height="120"
            stroke="hsl(199, 89%, 48%)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          />
          
          {/* Cross Lines */}
          <motion.line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="hsl(221, 83%, 53%)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="hsl(221, 83%, 53%)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Corner Details */}
          {[
            { x: 20, y: 20 },
            { x: 180, y: 20 },
            { x: 20, y: 180 },
            { x: 180, y: 180 },
          ].map((corner, i) => (
            <motion.circle
              key={i}
              cx={corner.x}
              cy={corner.y}
              r="3"
              fill="hsl(221, 83%, 53%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
            />
          ))}
        </svg>
        
        {/* Company Initials */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-4xl font-serif font-bold text-primary tracking-wider">
            CEF
          </span>
        </motion.div>
      </div>
      
      {/* Loading Text */}
      <motion.p
        className="absolute bottom-24 text-sm text-muted-foreground tracking-[0.3em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Building Excellence
      </motion.p>
    </motion.div>
  );
};

export default Loader;