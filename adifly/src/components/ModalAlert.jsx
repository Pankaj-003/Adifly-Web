import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalAlert = ({ type = 'success', title, message, onClose, onConfirm }) => {
  const alertConfig = {
    success: {
      bg: 'from-green-400 to-emerald-600',
      icon: '🎉',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    error: {
      bg: 'from-red-400 to-rose-600',
      icon: '❌',
      buttonColor: 'bg-red-500 hover:bg-red-600'
    },
    warning: {
      bg: 'from-yellow-400 to-orange-500',
      icon: '⚠️',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    },
    info: {
      bg: 'from-blue-400 to-indigo-600',
      icon: '💡',
      buttonColor: 'bg-blue-500 hover:bg-blue-600'
    }
  };

  const config = alertConfig[type];

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            exit={{ scale: 0, rotateX: 90 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${config.bg} p-6 text-white text-center relative`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="text-6xl mb-4"
              >
                {config.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold"
              >
                {title || (type === 'success' ? 'Success!' : type === 'error' ? 'Error!' : 'Notice')}
              </motion.h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 text-lg text-center mb-8"
              >
                {message}
              </motion.p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close
                </motion.button>
                {onConfirm && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onConfirm}
                    className={`flex-1 px-6 py-3 ${config.buttonColor} text-white rounded-xl font-semibold transition-colors`}
                  >
                    Confirm
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalAlert;
