"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Marquee() {
  const partners = [
    "/logos/partners/partner1.png",
    "/logos/partners/partner2.png",
    "/logos/partners/partner3.png",
    "/logos/partners/partner4.png",
    "/logos/partners/partner5.png",
    "/logos/partners/partner6.png",
  ];

  const smallLogos = [
    "/logos/partners/partner1.png",
    "/logos/partners/partner3.png",
    "/logos/partners/partner5.png",
    "/logos/partners/partner6.png",
  ];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#021D26] py-10">
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...partners, ...partners].map((logo, index) => {
          const isSmallLogo = smallLogos.includes(logo);

          return (
            <div
              key={index}
              className="mx-14 flex items-center"
            >
              <div className="flex h-20 w-56 items-center justify-center overflow-visible">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={220}
                  height={80}
                  priority
                  className={
                    isSmallLogo
                      ? "max-h-16 max-w-[190px] scale-[1.35] object-contain opacity-75 transition-all duration-500 hover:scale-[1.45] hover:opacity-100"
                      : "max-h-16 max-w-[190px] object-contain opacity-75 transition-all duration-500 hover:scale-105 hover:opacity-100"
                  }
                />
              </div>

              <div className="mx-14 h-8 w-px bg-[#A48C45]/30"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}