"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-20 md:flex-row md:justify-between md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left"
        >

          <span className="inline-block rounded-full border border-[#A48C45]/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#A48C45]">
            Creative Advertising Agency
          </span>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            We Build
            <span className="text-[#A48C45]">
              {" "}Brands
            </span>
            That Inspire
            <br />
            And Drive Results.
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg"
          >
            NUBEK Media helps brands grow through strategic branding,
            creative campaigns, content production, motion graphics,
            digital marketing, and innovative experiences.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >

            <button className="rounded-full bg-[#A48C45] px-7 py-3 text-base font-semibold text-[#021D26] transition duration-300 hover:scale-105">
              Let's Talk
            </button>


            <button className="rounded-full border border-[#A48C45] px-7 py-3 text-base font-semibold text-white transition duration-300 hover:bg-[#A48C45] hover:text-[#021D26]">
              View Our Work
            </button>

          </motion.div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative mt-16 flex h-72 w-72 items-center justify-center rounded-full border border-[#A48C45]/30 md:mt-0 md:h-96 md:w-96"
        >

          <div className="absolute inset-6 rounded-full border border-[#A48C45]/20"></div>

          <div className="text-center text-white">
            <span className="block text-5xl font-bold text-[#A48C45]">
              NUBEK
            </span>

            <span className="text-sm uppercase tracking-[0.3em] text-gray-300">
              Media
            </span>
          </div>

        </motion.div>


      </div>
    </section>
  );
}