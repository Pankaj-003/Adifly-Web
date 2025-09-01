import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastAlert = ({ type = 'success', message, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const alertStyles = {
    success: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      icon: '✓',
      ring: 'ring-green-200'
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-rose-600',
      icon: '✕',
      ring: 'ring-red-200'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      icon: '⚠',
      ring: 'ring-yellow-200'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      icon: 'ℹ',
      ring: 'ring-blue-200'
    }
  };

  const style = alertStyles[type];

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed top-8 right-8 z-[9999]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${style.bg} ${style.ring} ring-4 ring-opacity-40 text-white p-6 rounded-2xl shadow-2xl max-w-md cursor-pointer transform`}
            onClick={onClose}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold"
              >
                {style.icon}
              </motion.div>
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-semibold text-lg"
                >
                  {message}
                </motion.p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                ✕
              </motion.button>
            </div>
            
            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className="h-1 bg-white/30 rounded-full mt-4 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastAlert;
