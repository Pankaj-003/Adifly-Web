import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BubbleAlert = ({ type = 'success', message, onClose }) => {
  const bubbleStyles = {
    success: 'bg-gradient-to-br from-green-400 via-green-500 to-emerald-600',
    error: 'bg-gradient-to-br from-red-400 via-red-500 to-rose-600',
    warning: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500',
    info: 'bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600'
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-8 right-8 z-[9999]"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`${bubbleStyles[type]} text-white p-6 rounded-full shadow-2xl max-w-xs relative overflow-hidden cursor-pointer`}
            onClick={onClose}
          >
            {/* Animated background bubbles */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white/20 rounded-full"
                  style={{
                    width: Math.random() * 20 + 10,
                    height: Math.random() * 20 + 10,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-4xl mb-3"
              >
                {type === 'success' ? '🎉' : type === 'error' ? '😞' : type === 'warning' ? '⚠️' : '💡'}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-bold text-sm"
              >
                {message}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BubbleAlert;
