import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerAlert = ({ type = 'success', message, onClose }) => {
  const bannerStyles = {
    success: {
      bg: 'bg-green-500',
      icon: '✅',
      accent: 'bg-green-400'
    },
    error: {
      bg: 'bg-red-500',
      icon: '🚫',
      accent: 'bg-red-400'
    },
    warning: {
      bg: 'bg-yellow-500',
      icon: '⚡',
      accent: 'bg-yellow-400'
    },
    info: {
      bg: 'bg-blue-500',
      icon: '📢',
      accent: 'bg-blue-400'
    }
  };

  const style = bannerStyles[type];

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-24 right-4 z-[9999] max-w-sm"
        >
          <motion.div
            className={`${style.bg} text-white rounded-2xl shadow-2xl overflow-hidden relative`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${style.accent} h-2 origin-left`}
            />
            
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-3xl"
                >
                  {style.icon}
                </motion.div>
                <div className="flex-1">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-semibold text-lg leading-tight"
                  >
                    {message}
                  </motion.p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xl"
                >
                  ×
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BannerAlert;
