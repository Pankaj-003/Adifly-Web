// ExactStatsSection.jsx - Professional Styled with Green Palette
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedProgressCard = ({ label, percentage, delay, dark }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage((prev) => {
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
    <div className="w-full mb-0">
      {/* Background container */}
      <div className="w-full bg-transparent rounded-md overflow-hidden">
        {/* Animated width */}
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: delay / 1000 }}
          className={`p-8 rounded-md shadow-md flex justify-between items-center font-bold
            ${dark ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <span>{label}</span>
          <span>{animatedPercentage}%</span>
        </motion.div>
      </div>
    </div>
  );
};


const FloatingLabel = ({ children, position, rotation = 0, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      className="absolute text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg"
      style={{
        ...position,
        background: "linear-gradient(135deg, #7cc644, #076c4e)",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </motion.div>
  );
};

// Dual Direction Slider with Green Theme
const TildeSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const topRowItems = [
    "TOP-NOTCH EXPERTS",
    "DEDICATED SUPPORT",
    "FLEXIBLE PRICING",
    "INNOVATIVE SOLUTIONS",
    "RESULT-ORIENTED APPROACH",
    "24/7 AVAILABILITY",
  ];

  const bottomRowItems = [
    "CREATIVE DESIGNS",
    "FAST DELIVERY",
    "PREMIUM QUALITY",
    "CLIENT SATISFACTION",
    "CUTTING-EDGE TECHNOLOGY",
    "PROFESSIONAL TEAM",
  ];

  return (
    <div
      className="bg-[#7cc644] text-white py-8 d overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Row */}
      <div className="relative t-row mb-4" style={{ transform: "skewY(-2.5deg)" }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: isPaused ? 0 : [0, -2000],
          }}
          transition={{
            x: {
              repeat: isPaused ? 0 : Infinity,
              repeatType: "loop",
              duration: isPaused ? 0 : 30,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0">
              {topRowItems.map((item, itemIndex) => (
                <motion.span
                  key={`top-${groupIndex}-${itemIndex}`}
                  className="mx-8 text-xl font-bold flex items-center"
                  whileHover={{
                    scale: 1.1,
                    color: "#7cc644",
                    textShadow: "0 0 12px #7cc644",
                  }}
                >
                  • {item}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="relative b-row" style={{ transform: "skewY(3deg)" }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: isPaused ? 0 : [-2000, 0],
          }}
          transition={{
            x: {
              repeat: isPaused ? 0 : Infinity,
              repeatType: "loop",
              duration: isPaused ? 0 : 25,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex shrink-0">
              {bottomRowItems.map((item, itemIndex) => (
                <motion.span
                  key={`bottom-${groupIndex}-${itemIndex}`}
                  className="mx-8 text-xl font-bold flex items-center"
                  whileHover={{
                    scale: 1.1,
                    color: "#7cc644",
                    textShadow: "0 0 12px #7cc644",
                  }}
                >
                  ◦ {item}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}

    </div>
  );
};

const ExactStatsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="relative  overflow-hidden">
      {/* Main Section */}
      <div
        ref={ref}
        className="py-20 px-4 Main-section sm:px-6 lg:px-8 relative"
        style={{ backgroundColor: "#7cc644" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Big Number */}
            <div className="relative number flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: "spring", stiffness: 80 }}
                className="text-white relative select-none cursor-pointer"
                style={{
                  fontSize: "clamp(12rem, 25vw, 20rem)",
                  fontWeight: "900",
                  lineHeight: "0.9",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  textShadow: "0px 5px 20px rgba(0,0,0,0.25)",
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 35px rgba(0,0,0,0.4)",
                }}
              >
                05
                {/* Floating Labels */}
                <FloatingLabel
                  position={{ top: "-1px", left: "-90px" }}
                  rotation={-12}
                  delay={0.5}
                >
                  Years of Experience
                </FloatingLabel>
                <FloatingLabel
                  position={{ top: "70px", right: "-140px" }}
                  rotation={15}
                  delay={0.8}
                >
                  500+ Completed Projects
                </FloatingLabel>
                <FloatingLabel
                  position={{ bottom: "-30px", left: "-90px" }}
                  rotation={-8}
                  delay={1.1}
                >
                  8K Happy Clients
                </FloatingLabel>
              </motion.div>
            </div>

            {/* Right Side - Progress Bars */}
            {/* <h2>Our agency’s expertise &
impact in action</h2> */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
             <h2 className="h2-head">Our agency’s expertise & <br/>
impact in action</h2>
         <div className="stats-card-container w-full max-w-xl">

        <AnimatedProgressCard
          label="Branding & Designing"
          percentage={100}
          delay={400}
          dark={true}
        />
        <AnimatedProgressCard
          label="Marketing"
          percentage={97}
          delay={700}
          dark={true}
        />
        <AnimatedProgressCard
          label="Development"
          percentage={85}
          delay={1000}
          dark={false}
        />
      
          </div>  



            </motion.div>
          </div>
        </div>
      </div>
      {/* Bottom Slider */}
      <TildeSlider />
    </section>
  );
};

export default ExactStatsSection;
