"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ahmed Seadawy",
    role: "Founder / Chairman",
    image: "/images/team/ahmed-seadawy.jpg",
  },
  {
    name: "Jamal Al-Badrawy",
    role: "Head of Media & Press Relations",
    image: "/images/team/jamal-badrawy.jpg",
  },
  {
    name: "Sherifa El-Sos",
    role: "Head of Digital Platforms",
    image: "/images/team/sherifa-el-sos.jpg",
  },
  {
    name: "Tarek Said",
    role: "Financial and Administrative Manager",
    image: "/images/team/tarek-said.jpg",
  },
  {
    name: "Nada El-Baqer",
    role: "Creative Director",
    image: "/images/team/nada-el-baqer.jpg",
  },
];

export default function OurTeam() {
  return (
    <section id="team" className="bg-[#021D26] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A48C45]">
            Our Team
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            The Minds Behind NUBEK
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-7 text-gray-300">
            A multidisciplinary team combining leadership, media expertise,
            digital strategy, creativity, and operational excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-[#A48C45]/20 bg-[#071B23]"
            >

              <div className="relative aspect-[4/5]">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-[#A48C45]">
                  {member.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}