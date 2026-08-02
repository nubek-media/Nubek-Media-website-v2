"use client";

import { motion } from "framer-motion";

export default function Industries() {
  const industries = [
    {
      title: "Banking & Finance",
      description:
        "Building trust and credibility through strategic communication.",
    },
    {
      title: "Real Estate",
      description:
        "Creating campaigns that turn properties into valuable experiences.",
    },
    {
      title: "Education",
      description:
        "Communicating ideas through meaningful storytelling.",
    },
    {
      title: "Technology",
      description:
        "Helping innovative brands stand out in digital spaces.",
    },
  ];

  return (
    <section id="industries" className="bg-[#021D26] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]"
        >
          Industries
        </motion.span>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          We Understand
          <span className="text-[#A48C45]">
            {" "}Different Markets.
          </span>
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        >
          Our creative strategies are built around the unique challenges,
          audiences, and goals of every industry we work with.
        </motion.p>


        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-[#A48C45]/20 bg-white/5 p-8"
            >

              <h3 className="text-xl font-semibold text-white">
                {industry.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                {industry.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}