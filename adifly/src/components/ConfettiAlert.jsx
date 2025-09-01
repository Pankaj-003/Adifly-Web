import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConfettiAlert = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={onClose}
        >
          {/* Confetti particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded"
              style={{
                backgroundColor: ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'][i % 5],
                left: `${50 + (Math.random() - 0.5) * 100}%`,
                top: `${50 + (Math.random() - 0.5) * 100}%`
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: 360,
                y: [0, -100, 200]
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 0.5,
                ease: "easeOut"
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0, rotateY: 180 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-8xl mb-6"
            >
              🎉
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Awesome!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-600 text-lg mb-8"
            >
              {message}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfettiAlert;
