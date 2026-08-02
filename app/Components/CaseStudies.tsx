"use client";

import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      number: "01",
      title: "Brand Strategy & Identity",
      category: "Branding",
      description:
        "Creating distinctive brand identities through strategic thinking, visual systems, and creative direction.",
    },
    {
      number: "02",
      title: "Digital Campaign Experience",
      category: "Marketing Campaigns",
      description:
        "Developing digital campaigns that combine creativity, audience insights, and measurable impact.",
    },
    {
      number: "03",
      title: "Motion & Visual Storytelling",
      category: "Motion Graphics",
      description:
        "Producing engaging visual experiences through animation, motion design, and creative storytelling.",
    },
  ];

  return (
    <section
      id="work"
      className="bg-[#021D26] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-[#A48C45]">
            Selected Work
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Case Studies
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-gray-300">
            Strategic creative solutions designed to build memorable brands,
            powerful campaigns, and meaningful digital experiences.
          </p>
        </motion.div>


        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {cases.map((item, index) => (

            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-2xl border border-[#A48C45]/20 bg-[#071B23]"
            >

              <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#071B23] to-[#021D26]">

                <div className="absolute text-[180px] font-bold text-[#A48C45]/10">
                  {item.number}
                </div>

                <div className="relative z-10 px-6 text-center">

                  <span className="text-sm uppercase tracking-widest text-[#A48C45]">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                </div>

              </div>


              <div className="p-6">

                <p className="leading-7 text-gray-300">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="mt-6 text-sm font-medium text-[#A48C45] transition hover:text-white"
                >
                  View Project →
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}