"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#021D26] text-[#F5F5F3]">

      {/* =====================================================
          INTRO — THE NUBEK MARK
      ====================================================== */}

      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#021D26]"
          >
            {/* Outer expanding ring */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.4, 1.35, 1.65],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="absolute h-40 w-40 rounded-full border border-[#A48C45]/40 sm:h-52 sm:w-52"
            />

            {/* Second ring */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.15, 1.45],
              }}
              transition={{
                delay: 0.25,
                duration: 1.7,
                ease: "easeOut",
              }}
              className="absolute h-28 w-28 rounded-full border border-white/10 sm:h-36 sm:w-36"
            />

            {/* Actual logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.45,
                rotate: -12,
              }}
              animate={{
                opacity: 1,
                scale: [0.45, 1, 0.88],
                rotate: 0,
              }}
              transition={{
                duration: 1.35,
                ease,
                times: [0, 0.7, 1],
              }}
              className="relative z-10 h-32 w-32 sm:h-44 sm:w-44"
            >
              <Image
                src="/logo.png"
                alt="Nubek"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Gold pulse */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 2.5],
              }}
              transition={{
                delay: 0.8,
                duration: 1.1,
                ease: "easeOut",
              }}
              className="absolute h-2 w-2 rounded-full bg-[#A48C45]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN NAV
      ====================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50 px-5 pt-5 sm:px-8 sm:pt-7">
        <div className="flex items-center justify-between">

          {/* Small logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: intro ? 0 : 1,
              scale: intro ? 0.6 : 1,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="relative h-9 w-9"
          >
            <Image
              src="/logo.png"
              alt="Nubek"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Menu */}
          <motion.button
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: intro ? 0 : 1,
              y: intro ? -10 : 0,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            type="button"
            className="group flex items-center gap-3"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
              Menu
            </span>

            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-[#A48C45]/60">
              <span className="absolute h-px w-3 bg-[#A48C45]" />
              <span className="absolute h-px w-3 rotate-90 bg-[#A48C45]" />
            </span>
          </motion.button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <main className="relative flex min-h-[100svh] items-center px-5 sm:px-10 lg:px-16">

        <div className="mx-auto w-full max-w-[1440px]">

          {/* Micro label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: intro ? 0 : 1,
              y: intro ? 15 : 0,
            }}
            transition={{
              delay: intro ? 0 : 0.15,
              duration: 0.7,
              ease,
            }}
            className="mb-7"
          >
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              Creative Media Studio
            </span>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <h1 className="text-[clamp(4rem,14vw,10rem)] font-semibold leading-[0.78] tracking-[-0.08em]">

            <Reveal
              show={!intro}
              delay={0.15}
            >
              Ideas
            </Reveal>

            <Reveal
              show={!intro}
              delay={0.27}
              className="pl-[10vw] text-white/90"
            >
              That Move
            </Reveal>

            <Reveal
              show={!intro}
              delay={0.39}
              className="text-[#A48C45]"
            >
              Business.
            </Reveal>

          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: intro ? 0 : 1,
              y: intro ? 25 : 0,
            }}
            transition={{
              delay: intro ? 0 : 0.7,
              duration: 0.8,
              ease,
            }}
            className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-[370px] text-[12px] leading-6 text-white/40 sm:text-sm sm:leading-7">
              We create brands, campaigns and digital experiences that move
              people and business.
            </p>

            <Link
              href="#work"
              className="group flex w-fit items-center gap-3 text-[9px] uppercase tracking-[0.22em]"
            >
              <span>Explore our work</span>

              <span className="text-lg text-[#A48C45] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: intro ? 0 : 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="absolute bottom-5 left-5 right-5 z-40 flex items-center justify-between"
      >
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
          Nubek / 01
        </span>

        <motion.span
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[8px] uppercase tracking-[0.25em] text-white/25"
        >
          Scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ============================================================
   TEXT REVEAL
============================================================ */

function Reveal({
  children,
  delay,
  className = "",
  show,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
  show: boolean;
}) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 80,
        clipPath: "inset(100% 0 0 0)",
      }}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 80,
        clipPath: show
          ? "inset(0% 0 0 0)"
          : "inset(100% 0 0 0)",
      }}
      transition={{
        delay: show ? delay : 0,
        duration: 1,
        ease,
      }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  );
}