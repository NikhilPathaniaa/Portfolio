"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    icon: "🚀",
    title: "Outcome-Focused Work",
    desc: "I think beyond visuals — prioritizing clarity, usability, and performance that support real business goals.",
  },
  {
    icon: "🧠",
    title: "Thoughtful, Custom Builds",
    desc: "Each project is approached from scratch with context, constraints, and users in mind — no blind templates.",
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
    title: "End-to-End Perspective",
    desc: "Understanding how design, code, motion, and content work together — even when collaborating with teams.",
  },
  {
    icon: "🎯",
    title: "Practical Decision-Making",
    desc: "I help break down unclear requirements into concrete, buildable steps through discussion and iteration.",
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
        What I <span className="text-blue-600">Bring</span>
      </h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {items.map((it, i) => (
          <motion.div key={i} variants={item} whileHover={{ scale: 1.015, boxShadow: "0 10px 30px rgba(0,0,0,0.08)", }} className="group bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:shadow-xl border border-gray-200 hover:border-blue-400 cursor-pointer">
            <div className="flex gap-4 items-start">
              <h2 className="text-3xl transition-transform duration-300 group-hover:scale-125">{it.icon}</h2>
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
