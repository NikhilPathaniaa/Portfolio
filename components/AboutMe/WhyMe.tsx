"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    icon: "🚀",
    title: "Business-Driven Results",
    desc: "Designs that convert — boosting sales, trust, and engagement through strategy-led creativity.",
  },
  {
    icon: "🧠",
    title: "Smart, Custom Solutions",
    desc: "No templates. Everything is purpose-built to reflect your unique business identity.",
  },
  {
    icon: "💡",
    title: "Developer + Designer + Video Pro",
    desc: "Your one-stop Ultimate digital powerhouse — no need to juggle multiple freelancers.",
  },
  {
    icon: "⚡",
    title: "Time Performance Meets Aesthetics",
    desc: "Fast, responsive, conversion-optimized — built to impress and perform.",
  },
  {
    icon: "📦",
    title: "Full Digital Package",
    desc: "From websites to UI/UX to motion videos — cohesive branding under one roof.",
  },
  {
    icon: "🎯",
    title: "Strategic Guidance",
    desc: "More than design — I align every digital decision with your growth goals.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyMe = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Why Choose <span className="text-blue-600">Me</span>
      </h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {items.map((it, i) => (
          <motion.div key={i} variants={item} whileHover={{ scale: 1.03 }} className="group bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:shadow-xl border border-gray-200 hover:border-blue-400 cursor-pointer">
            <div className="flex gap-4 items-start">
              <div className="text-4xl transition-transform duration-300 group-hover:scale-125">{it.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{it.title}</h3>
                <p className="text-sm text-gray-600">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyMe;
