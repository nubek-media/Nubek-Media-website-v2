"use client";

import { motion } from "framer-motion";

import Container from "./Container";

export default function Expertise() {
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      description:
        "Building clear brand foundations through positioning, identity, and strategic direction.",
    },
    {
      number: "02",
      title: "Creative Design",
      description:
        "Creating visual systems, campaigns, and designs that make brands recognizable.",
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Developing data-driven campaigns that increase reach, engagement, and growth.",
    },
    {
      number: "04",
      title: "Content Production",
      description:
        "Producing photography, video, and creative content that tells powerful stories.",
    },
    {
      number: "05",
      title: "Motion & Animation",
      description:
        "Transforming ideas into dynamic visual experiences through motion design.",
    },
    {
      number: "06",
      title: "Web Experiences",
      description:
        "Designing modern digital experiences that combine creativity and functionality.",
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-[#021D26] py-24"
    >

      <Container>

        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-[#A48C45]"
        >
          Our Expertise
        </motion.span>



        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Creative Solutions
          <span className="text-[#A48C45]">
            {" "}That Build
          </span>
          {" "}Brands.
        </motion.h2>



        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
        >
          From strategy to execution, we combine creativity,
          technology, and marketing expertise to create experiences
          that move businesses forward.
        </motion.p>



        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-[#A48C45]/20 bg-white/[0.03] p-8 transition hover:border-[#A48C45]/60"
            >

              <span className="text-sm text-[#A48C45]">
                {service.number}
              </span>


              <h3 className="mt-6 text-2xl font-semibold text-white">
                {service.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-300">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}