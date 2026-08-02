"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Brand Strategy",
    "Creative Design",
    "Social Media",
    "Production",
    "Motion Graphics",
    "Digital Experiences",
    "Marketing",
  ];

  return (
    <section className="overflow-hidden border-y border-[#A48C45]/20 bg-[#021D26] py-7">

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >

            <span className="mx-8 text-xl font-semibold uppercase tracking-[0.35em] text-[#A48C45]">
              {item}
            </span>

            <span className="text-[#A48C45]/40">
              ✦
            </span>

          </div>
        ))}

      </motion.div>

    </section>
  );
}