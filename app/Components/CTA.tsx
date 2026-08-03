"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#021D26] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          rounded-3xl 
          border border-[#A48C45]/30 
          bg-[#0A2630] 
          px-8 
          py-16 
          text-center 
          md:px-20
          "
        >

          <span className="
          text-sm 
          font-medium 
          uppercase 
          tracking-[0.3em] 
          text-[#A48C45]
          ">
            Start A Project
          </span>


          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="
            mx-auto 
            mt-6 
            max-w-4xl 
            text-4xl 
            font-bold 
            leading-tight 
            text-white 
            md:text-6xl
            "
          >
            Ready To Build Something
            <span className="text-[#A48C45]">
              {" "}Remarkable?
            </span>
          </motion.h2>



          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="
            mx-auto 
            mt-6 
            max-w-2xl 
            text-lg 
            leading-8 
            text-gray-300
            "
          >
            Let’s create a powerful brand experience through strategy,
            creativity, and innovation.
          </motion.p>



          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            mt-10 
            rounded-full 
            bg-[#A48C45] 
            px-10 
            py-4 
            font-semibold 
            text-[#021D26]
            "
          >
            Be Our New Partner
          </motion.button>


        </motion.div>

      </div>
    </section>
  );
}