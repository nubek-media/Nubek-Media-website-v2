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
    <section className="-mt-10 bg-[#021D26] pb-16 pt-10 md:-mt-16 md:pb-20 md:pt-12">

      <Container>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-y border-[#A48C45]/20 py-8 md:grid-cols-4 md:gap-8 md:py-10">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="text-center md:text-left"
            >

              <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {item.number}
              </h3>


              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A48C45] sm:text-xs md:text-sm md:tracking-[0.22em]">
                {item.label}
              </p>


            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}