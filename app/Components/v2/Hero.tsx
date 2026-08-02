"use client";

import { motion } from "framer-motion";

import Container from "../Container";
import Button from "../Button";
import Section from "./Section";

import { Display, Body, Label } from "./Typography";

export default function Hero() {
  const stats = [
    {
      number: "250+",
      label: "Projects",
    },
    {
      number: "40+",
      label: "Brands",
    },
    {
      number: "12",
      label: "Industries",
    },
  ];

  return (
    <Section className="relative min-h-screen overflow-hidden bg-[#021D26]">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-[-120px] top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#A48C45]/20 blur-[120px]" />
      </div>


      <Container>
        <div className="relative grid min-h-screen items-center gap-12 lg:grid-cols-2">

          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Label>
                Creative Growth Agency
              </Label>


              <Display className="mt-6">
                Ideas
                <br />
                That Move
                <br />
                Business.
              </Display>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-8 max-w-xl"
            >
              <Body>
                We build brands, campaigns, and digital
                experiences that create measurable growth.
              </Body>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-10"
            >
              <Button>
                Start Your Project
              </Button>
            </motion.div>

          </div>



          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative hidden h-[500px] items-center justify-center lg:flex"
          >

            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#A48C45]/30" />

            <div className="absolute h-[260px] w-[260px] rounded-full bg-[#A48C45]/10 backdrop-blur-sm" />


            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-32 w-32 rounded-full border border-[#A48C45]"
            />


          </motion.div>


        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3"
        >

          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#A48C45]">
                {item.label}
              </p>
            </div>
          ))}

        </motion.div>

      </Container>

    </Section>
  );
}