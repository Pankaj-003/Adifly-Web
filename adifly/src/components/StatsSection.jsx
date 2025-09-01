// StatsSection.jsx
"use client"; // Add this if using Next.js App Router

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedProgressBar = ({ label, percentage, barColor, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage(prev => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-black">{label}</span>
        <span className="text-lg font-bold text-black">{animatedPercentage}%</span>
      </div>
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${animatedPercentage}%` } : { width: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};

const FloatingLabel = ({ children, position, rotation = 0, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className="absolute bg-amber-800 text-yellow-100 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg"
      style={{ 
        ...position,
        transform: `rotate(${rotation}deg)`
      }}
    >
      {children}
    </motion.div>
  );
};

const ScrollingText = () => {
  const marqueeText = [
    'TOP-NOTCH EXPERTS',
    'DEDICATED SUPPORT', 
    'FLEXIBLE PRICING',
    'INNOVATIVE SOLUTIONS',
    'RESULT-ORIENTED APPROACH',
    '24/7 AVAILABILITY'
  ];

  return (
    <div className="bg-black text-yellow-400 py-4 overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="inline-block">
            {marqueeText.map((text, index) => (
              <span key={index} className="mx-8 text-lg font-bold">
                • {text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const progressBars = [
    { label: 'Branding & Designing', percentage: 100, barColor: 'bg-black', delay: 200 },
    { label: 'Marketing', percentage: 97, barColor: 'bg-black', delay: 400 },
    { label: 'Development', percentage: 85, barColor: 'bg-white border-2 border-black', delay: 600 }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Main Stats Section */}
      <div 
        ref={ref}
        className="bg-yellow-400 py-16 px-4 sm:px-6 lg:px-8 relative"
        style={{ backgroundColor: '#FEDA00' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Large Number with Floating Labels */}
            <div className="relative flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-black relative"
                style={{ fontSize: 'clamp(8rem, 20vw, 16rem)', fontWeight: '900', lineHeight: '1' }}
              >
                05
                
                {/* Floating Labels */}
                <FloatingLabel 
                  position={{ top: '-40px', left: '-80px' }}
                  rotation={-8}
                  delay={0.5}
                >
                  Years of Experience
                </FloatingLabel>

                <FloatingLabel 
                  position={{ top: '60px', right: '-120px' }}
                  rotation={12}
                  delay={0.8}
                >
                  500+ Completed Projects
                </FloatingLabel>

                <FloatingLabel 
                  position={{ bottom: '-30px', left: '-60px' }}
                  rotation={-15}
                  delay={1.1}
                >
                  8K Happy Clients
                </FloatingLabel>

                <FloatingLabel 
                  position={{ top: '140px', left: '80px' }}
                  rotation={5}
                  delay={1.4}
                >
                  Industry Leader
                </FloatingLabel>
              </motion.div>
            </div>

            {/* Right Side - Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold text-black mb-8"
              >
                Our Expertise
              </motion.h3>
              
              {progressBars.map((bar, index) => (
                <AnimatedProgressBar
                  key={index}
                  label={bar.label}
                  percentage={bar.percentage}
                  barColor={bar.barColor}
                  delay={bar.delay}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-black/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
      </div>

      {/* Scrolling Text Bar */}
      <ScrollingText />
    </section>
  );
};

export default StatsSection;
