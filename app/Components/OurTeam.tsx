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
    name: "Hanaa Mohamed",
    role: "Managing Editor",
    image: "/images/team/Hanaa Mohamed .png",
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
    <section
      id="team"
      className="bg-[#021D26] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#A48C45]">
            Our Team
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            The Minds Behind NUBEK
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
            A multidisciplinary team combining leadership,
            media expertise, digital strategy,
            creativity, and operational excellence.
          </p>

        </div>


        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member, index) => (

            <motion.div
              key={member.name}

              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.08,
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group 
                overflow-hidden 
                rounded-2xl 
                border 
                border-[#A48C45]/20 
                bg-[#071B23]
                transition-all 
                duration-500
                hover:border-[#A48C45]/60
                hover:shadow-[0_20px_45px_rgba(164,140,69,0.15)]
              "
            >

              <div className="relative aspect-[4/4.5] overflow-hidden sm:aspect-[4/5]">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute 
                    inset-0 
                    bg-gradient-to-t 
                    from-[#021D26]/60 
                    via-transparent 
                    to-transparent
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

              </div>


              <div className="p-4 sm:p-6">

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                    transition
                    duration-300
                    group-hover:text-[#A48C45]
                    sm:text-2xl
                  "
                >
                  {member.name}
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[0.14em]
                    text-[#A48C45]
                    sm:text-sm
                    sm:tracking-[0.18em]
                  "
                >
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