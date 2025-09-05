// src/pages/WorkPro.jsx
"use client";

import React, { useMemo, useRef, useState } from "react";

// Pick ONE of these imports:
// A) Framer Motion:
import { motion, useScroll, useTransform } from "framer-motion";
// B) Or Motion (formerly Framer Motion):
// import { motion, useScroll, useTransform } from "motion/react";

const THEME = {
  bg: "#0f0f0f",
  primary: "#7cc644",
  secondary: "#076c4e",
};

const TABS = ["All", "Branding", "Web", "Marketing", "Social"];

const PROJECTS = [
  { id: 1, title: "Identity System", tag: "Branding", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop" },
  { id: 2, title: "E‑commerce UI", tag: "Web", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop" },
  { id: 3, title: "Performance Campaign", tag: "Marketing", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop" },
  { id: 4, title: "Social Launch", tag: "Social", img: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80&auto=format&fit=crop" },
  { id: 5, title: "Product Microsite", tag: "Web", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop" },
  { id: 6, title: "Rebrand Sprint", tag: "Branding", img: "https://images.unsplash.com/photo-1520975922325-24baf2c0ba01?w=1200&q=80&auto=format&fit=crop" },
];

export default function WorkPro() {
  return (
    <main className="overflow-x-hidden" style={{ backgroundColor: THEME.bg, color: "white" }}>
      <Hero />
      <Intro />
      <Projects />
      <HorizontalStrip />
      <StickyCases />
      <CTA />
    </main>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative min-h-[80svh] grid place-items-center overflow-hidden">
      {/* floating accents */}
      <motion.div aria-hidden className="absolute inset-0" style={{ y }}>
        <div className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full blur-3xl" style={{ backgroundColor: `${THEME.primary}26` }} />
        <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl" style={{ backgroundColor: `${THEME.secondary}33` }} />
      </motion.div>

      {/* ghost title */}
      <motion.h2
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 0.14, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-[clamp(64px,10vw,220px)] font-black leading-none text-white text-center"
        style={{
          textShadow: `
            2px 0 0 rgba(0,0,0,.6), -2px 0 0 rgba(0,0,0,.6),
            0 2px 0 rgba(0,0,0,.6),  0 -2px 0 rgba(0,0,0,.6),
            1.5px 1.5px 0 rgba(0,0,0,.6), -1.5px 1.5px 0 rgba(0,0,0,.6),
            1.5px -1.5px 0 rgba(0,0,0,.6), -1.5px -1.5px 0 rgba(0,0,0,.6)
          `,
        }}
      >
        Our Portfolio
      </motion.h2>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative z-10 text-center px-6 font-extrabold leading-tight text-[clamp(28px,4.2vw,72px)]"
      >
        Creative Work That Drives Results
      </motion.h1>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,.35)_100%)]" />
    </section>
  );
}

function Intro() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl text-white/80 text-center"
      >
        We deliver brand systems, digital products, and growth campaigns with scroll‑first storytelling and subtle motion for clarity and impact.
      </motion.p>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState("All");
  const data = useMemo(() => (active === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === active)), [active]);

  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">
      {/* tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === tab ? "bg-[#7cc644] text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl bg-white/5"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover will-change-transform"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-white/60 text-sm">{p.tag}</p>
              </div>
              <motion.span whileHover={{ x: 4 }} className="text-[#7cc644] font-semibold">
                View →
              </motion.span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function HorizontalStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const words = ["Branding", "Web Design", "Campaigns", "Motion", "Strategy", "Content"];

  return (
    <section ref={ref} className="py-16 border-y border-white/10 bg-[#0e0e0e] overflow-hidden">
      <motion.div style={{ x }} className="flex whitespace-nowrap will-change-transform">
        {Array.from({ length: 3 }).map((_, row) => (
          <div key={row} className="flex shrink-0">
            {words.map((w, i) => (
              <span key={`${row}-${i}`} className="mx-10 text-5xl md:text-6xl font-black text-white/15 hover:text-[#7cc644] transition-colors">
                {w}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// Vertical sticky track (Y-axis)
function StickyCases() {
  const cases = [
    { k: 1, title: "Retail Replatform", copy: "Checkout overhaul and PDP strategy increased CVR by 38%." },
    { k: 2, title: "Fintech Growth Sprint", copy: "Acquisition funnels + onboarding motion lifted sign‑ups by 62%." },
    { k: 3, title: "D2C Social Engine", copy: "Always‑on content system reduced CAC and scaled UGC." },
    { k: 4, title: "B2B Demand Gen", copy: "Full‑funnel content + ABM ads created consistent pipeline." },
  ];

  // Give enough scroll length: ~120svh per panel feels natural
  const totalSVH = cases.length * 120;

  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"], // map full section scroll to [0..1]
  });

  // Travel equals the total distance to shift the stacked column
  const travel = `-${(cases.length - 1) * 100}%`;
  const y = useTransform(scrollYProgress, [0, 1], ["0%", travel]);

  return (
    <section
      ref={wrap}
      className="relative bg-[#0f0f0f]"
      style={{ height: `${totalSVH}svh` }} // dynamic scroll length
    >
      <div className="sticky top-0 h-screen overflow-hidden grid place-items-center">
        <motion.div
          style={{ y }}
          className="flex flex-col gap-8 px-8 will-change-transform"
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
              className="w-[86vw] md:w-[70vw] lg:w-[56vw] min-h-[60vh]
                         rounded-3xl p-8 bg-gradient-to-br from-white/6 to-white/3
                         border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{c.title}</h3>
              <p className="text-white/70 text-lg">{c.copy}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function CTA() {
  return (
    <section className="py-20 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-black mb-6"
      >
        Ready to Create Something Remarkable?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        className="text-white/75 max-w-2xl mx-auto mb-8"
      >
        From brand systems to conversion‑ready product journeys, our work blends clarity, craft, and motion.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3"
        style={{ backgroundColor: THEME.primary, color: "#0b0b0b" }}
      >
        Start a project →
      </motion.button>
    </section>
  );
}
