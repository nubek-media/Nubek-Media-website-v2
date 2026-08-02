"use client";

import { motion } from "framer-motion";

import Container from "./Container";

export default function WhyNubek() {
  const reasons = [
    {
      title: "Strategic Thinking",
      description:
        "We start with insights, research, and clear objectives to create ideas that serve real business goals.",
    },
    {
      title: "Creative Excellence",
      description:
        "We transform strategies into powerful visual experiences that build recognition and emotional connection.",
    },
    {
      title: "Integrated Solutions",
      description:
        "From branding and campaigns to digital experiences, we deliver complete solutions under one vision.",
    },
  ];

  return (
    <section className="bg-[#021D26] py-24">

      <Container>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]"
        >
          Why NUBEK
        </motion.span>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Where
          <span className="text-[#A48C45]">
            {" "}Strategy
          </span>
          {" "}Meets Creativity.
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        >
          We combine strategic thinking, creative execution, and digital
          expertise to help brands build stronger connections and achieve
          measurable growth.
        </motion.p>



        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {reasons.map((reason, index) => (

            <motion.div
              key={reason.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-[#A48C45]/20 bg-white/[0.03] p-8 transition duration-300 hover:border-[#A48C45]/60"
            >

              <div className="mb-6 h-1 w-12 bg-[#A48C45]" />


              <h3 className="text-2xl font-semibold text-white">
                {reason.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-300">
                {reason.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}