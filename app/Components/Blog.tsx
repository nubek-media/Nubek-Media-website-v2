"use client";

import { motion } from "framer-motion";

export default function Blog() {
  const articles = [
    {
      category: "Branding",
      title: "Building Brands That Stay In Minds",
      description:
        "How strategy and identity create stronger relationships between brands and audiences.",
    },
    {
      category: "Marketing",
      title: "Creativity Driven By Data",
      description:
        "Understanding how insights and creativity work together to achieve better results.",
    },
    {
      category: "Digital",
      title: "The Evolution Of Digital Experiences",
      description:
        "Exploring technologies and trends changing modern advertising.",
    },
  ];

  return (
    <section className="bg-[#021D26] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]"
        >
          Insights
        </motion.span>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          Ideas, Trends &
          <span className="text-[#A48C45]">
            {" "}Creative Insights.
          </span>
        </motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        >
          Exploring creativity, branding, marketing, and digital experiences
          that shape the future of communication.
        </motion.p>


        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-[#A48C45]/20 bg-white/5 p-8"
            >

              <span className="text-sm uppercase tracking-wider text-[#A48C45]">
                {article.category}
              </span>


              <h3 className="mt-5 text-2xl font-semibold text-white">
                {article.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-300">
                {article.description}
              </p>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}