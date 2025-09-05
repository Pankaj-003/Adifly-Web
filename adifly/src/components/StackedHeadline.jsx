// StackedHeadlineTheme.jsx
"use client";

import { motion } from "framer-motion"; // or: import { motion } from "motion/react"

export default function StackedHeadlineTheme() {
  const backTitle = "Most In‑Demand"; // exact background word
  const frontTitle = `Our "Viral" Solutions for Every Brand`;

  return (
    <section className="relative flex items-center justify-center min-h-[42vh] md:min-h-[52vh] bg-[#076c4e] overflow-hidden">
      {/* Back ghost title with outline via multiple text-shadows */}
      <motion.h2
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 0.14, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="pointer-events-none select-none absolute top-24 left-1/4 -translate-x-1/2
             text-[6vw] md:text-[6vw] lg:text-[6vw] font-black leading-none tracking-tight text-white"
  style={{
    opacity: 0.14,
    textShadow: `2px 0 0 rgba(0,0,0,.65), -2px 0 0 rgba(0,0,0,.65), 0 2px 0 rgba(0,0,0,.65), 0 -2px 0 rgba(0,0,0,.65), 1.5px 1.5px 0 rgba(0,0,0,.65), -1.5px 1.5px 0 rgba(0,0,0,.65), 1.5px -1.5px 0 rgba(0,0,0,.65), -1.5px -1.5px 0 rgba(0,0,0,.65)`
  }}
  aria-hidden="true"
>
  {backTitle}
</motion.h2>


      {/* Foreground headline */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 px-4 text-center font-extrabold leading-tight
                   text-white text-[6vw] md:text-[4.2vw] lg:text-[3.6vw]"
      >
        {frontTitle}
      </motion.h1>

      {/* Soft vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,.35)_100%)]" />



{/* ===== */}

{/* <h1>this is service h1</h1> */}






















    </section>
  );
}
