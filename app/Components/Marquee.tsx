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
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#021D26]">
      {/* Moving logos */}

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max items-center py-5 sm:py-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, index) => {
            const isSmallLogo = smallLogos.includes(logo);

            return (
              <div
                key={index}
                className="flex items-center"
              >
                <div className="flex h-12 w-32 items-center justify-center px-4 sm:h-14 sm:w-40">
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={160}
                    height={60}
                    className={
                      isSmallLogo
                        ? "max-h-9 max-w-[125px] scale-[1.15] object-contain opacity-55 transition-opacity duration-300 hover:opacity-100 sm:max-h-10"
                        : "max-h-9 max-w-[125px] object-contain opacity-55 transition-opacity duration-300 hover:opacity-100 sm:max-h-10"
                    }
                  />
                </div>

                <div className="h-5 w-px bg-[#A48C45]/20" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}