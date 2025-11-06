"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-xl hover:shadow-indigo-900/20"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-indigo-400 text-xl">{icon}</div>}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
