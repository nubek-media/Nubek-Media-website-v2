"use client";

import { motion } from "framer-motion";

import Container from "./Container";

export default function Stats() {
  const stats = [
    {
      number: "250+",
      label: "Projects Delivered",
    },
    {
      number: "40+",
      label: "Brands Built",
    },
    {
      number: "12+",
      label: "Industries Served",
    },
    {
      number: "5+",
      label: "Years Of Experience",
    },
  ];

  return (
    <section className="bg-[#021D26] py-24">

      <Container>

        <div className="grid grid-cols-1 gap-10 border-y border-[#A48C45]/20 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center lg:text-left"
            >

              <h3 className="text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#A48C45]">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}