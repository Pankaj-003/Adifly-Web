// About.jsx – "Radsan Creations" style About page with smooth scroll animations
// Tech: React + TailwindCSS + Framer Motion + react-intersection-observer
// Drop this component into your React/Vite app. Make sure Tailwind is set up.
// Install deps: npm i framer-motion react-intersection-observer

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ---------- Animation helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

const useOnceInView = (opts = {}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15, ...opts });
  return { ref, inView };
};

// ---------- Small UI atoms ----------
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm font-medium tracking-wide">
    {children}
  </span>
);

const Section = ({ children, className = "" }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-4 md:px-6 ${className}`}>{children}</section>
);

const SectionHeader = ({ kicker, title, subtitle, align = "center" }) => {
  const { ref, inView } = useOnceInView();
  return (
    <motion.div
      ref={ref}
      variants={stagger(0.08)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={`mx-auto ${align === "center" ? "text-center max-w-3xl" : "text-left"}`}
    >
      {kicker && (
        <motion.div variants={fadeUp} className="mb-3">
          <Pill>{kicker}</Pill>
        </motion.div>
      )}
      {title && (
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-muted-foreground">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

// ---------- Data (replace with live CMS/api if needed) ----------
const SERVICES = [
  {
    icon: "🧭",
    title: "Branding",
    desc: "Identity, strategy, positioning & rebrand.",
  },
  {
    icon: "📣",
    title: "Marketing",
    desc: "Social, influencer & performance marketing.",
  },
  {
    icon: "💻",
    title: "Development",
    desc: "Website & mobile app experiences.",
  },
  {
    icon: "🎬",
    title: "Studio",
    desc: "Product shoots, corporate films & reels.",
  },
];

const METRICS = [
  { value: "05", label: "Years\nexperience" },
  { value: "7k+", label: "Satisfied\nclients" },
  { value: "200+", label: "Trusted\nbrands" },
];

const TEAM = [
  { name: "Radhe Singh", role: "Mentor", img: "https://images.unsplash.com/photo-1607556114526-058f5efdf49e?q=80&w=1024&auto=format&fit=crop" },
  { name: "Abhishek Dovriyal", role: "Brand Manager", img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1024&auto=format&fit=crop" },
  { name: "Nitin Yadav", role: "Performance Marketing Manager", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1024&auto=format&fit=crop" },
  { name: "Ishika Tanwar", role: "HR Manager", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1024&auto=format&fit=crop" },
  { name: "Ankit Rawat", role: "Graphic Designer", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1024&auto=format&fit=crop" },
  { name: "Gaurav Kumar", role: "Sr. Motion Graphic Artist", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1024&auto=format&fit=crop" },
  { name: "Md Amaan Ansari", role: "Motion Graphic Artist", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1024&auto=format&fit=crop" },
  { name: "Nikky Singh", role: "Visual Artist", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1024&auto=format&fit=crop" },
  { name: "Neelu Singh", role: "Zonal Head (East)", img: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1024&auto=format&fit=crop" },
  { name: "Harshir Aggarwal", role: "Business Development Manager (Jamshedpur)", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1024&auto=format&fit=crop" },
];

const BRANDS = new Array(10).fill(0).map((_, i) => ({
  id: i + 1,
  logo: `https://dummyimage.com/180x60/0a0a0a/ffffff&text=Brand+${i + 1}`,
}));

const TESTIMONIALS = [
  {
    quote:
      "It was really an excitement working with the team. Truly lived up to the reputation—professional and genuinely caring.",
    name: "Paras Gupta",
    role: "Founder",
  },
  {
    quote:
      "Quick learners who turned good ideas into the best posts and plans. Ultra satisfied—keep it on!",
    name: "Rahul Khetan",
    role: "Founder",
  },
  {
    quote:
      "Skilled, transparent, and invested in our growth. Their reporting made the value crystal clear.",
    name: "Sunil Pandey",
    role: "Founder",
  },
];

// ---------- Hero with parallax ----------
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-gradient-to-b from-black to-neutral-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      </div>

      <Section className="pt-24 pb-20 md:pt-28 md:pb-28">
        <motion.div style={{ y, opacity }} className="text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="tracking-[0.3em] text-xs md:text-sm uppercase text-white/70">
            India’s Leading Marketing Agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
          >
            About Us — Creative Innovators of Tomorrow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-white/80"
          >
            We’re more than an ad agency—we’re a brand communication partner exploring bold possibilities to move your business forward.
          </motion.p>
        </motion.div>
      </Section>
    </div>
  );
};

// ---------- Services grid ----------
const Services = () => {
  const { ref, inView } = useOnceInView();

  return (
    <Section className="py-16 md:py-24">
      <SectionHeader
        kicker="Our Service Expertise"
        title={
          <>
            We help you build a <span className="text-white bg-black px-2 rounded">creative</span> digital business
          </>
        }
        subtitle="A full-stack growth partner across branding, marketing, development, and studio production."
      />

      <motion.div
        ref={ref}
        variants={stagger(0.12)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="group rounded-2xl border p-6 backdrop-blur bg-white/5 hover:bg-white/10 transition shadow-sm"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-6 h-1 w-0 group-hover:w-16 transition-all bg-black/80 rounded" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

// ---------- Split tagline + metrics ----------
const TrustBlock = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          ref={ref}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="lg:col-span-7"
        >
          {"Don’t just partner with a marketing agency, work with a company you can trust.".split(" ").map((word, i) => (
            <motion.span key={i} variants={fadeUp} className="inline-block mr-2 text-2xl md:text-4xl font-semibold">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="lg:col-span-5 grid grid-cols-3 gap-4"
        >
          {METRICS.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="rounded-2xl border p-6 text-center bg-white/5">
              <div className="text-4xl md:text-5xl font-bold">{m.value}</div>
              <div className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

// ---------- Showreel CTA ----------
const Showreel = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={stagger(0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="rounded-3xl overflow-hidden border"
      >
        <motion.div variants={fade} className="aspect-[16/9] bg-gradient-to-br from-neutral-900 to-black grid place-items-center">
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border px-5 py-2 text-sm backdrop-blur bg-white/10"
            onClick={() => window.alert("Open your showreel modal / link here")}
          >
            ▶︎ Let’s see our showreel
          </motion.button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

// ---------- Mission / Culture ----------
const MissionCulture = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={stagger(0.12)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <motion.div variants={fadeUp} className="rounded-2xl border p-8">
          <Pill>Who we are?</Pill>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Elevating brands globally with innovative strategies & visionary design</h3>
          <p className="mt-3 text-muted-foreground">
            We deliver the extraordinary with courage and innovation—embracing challenges and redefining expectations across every engagement.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border p-8">
          <Pill>Our Culture & Studio</Pill>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold">Quality at speed, crafted with care</h3>
          <p className="mt-3 text-muted-foreground">
            We balance speed with craft. Most design requests complete in just a couple of business days without compromising on polish.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

// ---------- Team grid ----------
const Team = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <SectionHeader kicker="Our Team" title="Management & Mentorship" subtitle="A multi‑disciplinary crew of strategists, designers, engineers & filmmakers." />

      <motion.div
        ref={ref}
        variants={stagger(0.06)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
      >
        {TEAM.map((m) => (
          <motion.div key={m.name} variants={fadeUp} className="rounded-2xl overflow-hidden border bg-white/5">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="p-4">
              <div className="font-semibold leading-tight">{m.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

// ---------- Testimonials (carousel-like swipe) ----------
const Testimonials = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <SectionHeader kicker="What clients say" title="Testimonials" subtitle="Transparent, responsive & results‑focused partnerships." />
      <motion.div
        ref={ref}
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.blockquote key={i} variants={fadeUp} className="rounded-2xl border p-6 bg-white/5">
            <p className="text-sm leading-relaxed">“{t.quote}”</p>
            <footer className="mt-4 text-sm font-medium">{t.name} <span className="text-muted-foreground">· {t.role}</span></footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </Section>
  );
};

// ---------- Brand logos ----------
const Brands = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-12 md:py-20">
      <SectionHeader kicker="Partners" title="Trusted by 200+ brands" subtitle="A snapshot of the companies we’ve collaborated with." />
      <motion.div
        ref={ref}
        variants={stagger(0.05)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center"
      >
        {BRANDS.map((b) => (
          <motion.div key={b.id} variants={fadeUp} className="grid place-items-center rounded-xl border bg-white p-4">
            <img src={b.logo} alt={`Brand ${b.id}`} className="h-10 w-auto opacity-80" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

// ---------- CTA ----------
const Cta = () => {
  const { ref, inView } = useOnceInView();
  return (
    <Section className="py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={stagger(0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="rounded-3xl border p-10 md:p-14 text-center bg-gradient-to-br from-neutral-900 to-black"
      >
        <motion.h3 variants={fadeUp} className="text-2xl md:text-4xl font-semibold">
          Let’s make something great
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Tell us about your goals and we’ll craft a plan to reach them.
        </motion.p>
        <motion.a
          href="/contact"
          variants={fadeUp}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </Section>
  );
};

// ---------- Main About page ----------
export default function About() {
  return (
    <main className="[--muted:#a3a3a3] text-neutral-100 bg-white">
      <div className="bg-white text-neutral-900">
        <Hero />
        <Services />
        <TrustBlock />
        <Showreel />
        <MissionCulture />
        <Team />
        <Testimonials />
        <Brands />
        <Cta />
      </div>
    </main>
  );
}
