"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your brand, audience, challenges, and objectives through research and insights.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "We create a clear strategy and creative direction aligned with your goals.",
    },
    {
      number: "03",
      title: "Create",
      description:
        "We transform ideas into visual identities, campaigns, and digital experiences.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We deliver, optimize, and measure results to maximize impact.",
    },
  ];

  return (
    <section id="process" className="bg-[#021D26] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]"
        >
          Our Process
        </motion.span>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          From Strategy To
          <span className="text-[#A48C45]">
            {" "}Impact.
          </span>
        </motion.h2>


        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-[#A48C45]/20 bg-white/5 p-8"
            >

              <span className="text-4xl font-bold text-[#A48C45]">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}