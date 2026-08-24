"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        min-h-[calc(100svh-72px)]
        overflow-hidden
        bg-[#021D26]
        text-[#F5F5F3]
      "
    >

      {/* =====================================================
          CINEMATIC GOLDEN LIGHT
          A soft photographic light spill — not a graphic shape.
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.55,
          x: 80,
          y: -20,
        }}
        animate={{
          opacity: start ? 1 : 0,
          scale: start ? 1 : 0.55,
          x: start ? 0 : 80,
          y: start ? 0 : -20,
        }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-[8%]
          z-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-[#A48C45]/[0.14]

          blur-[100px]

          sm:h-[520px]
          sm:w-[520px]

          lg:right-[3%]
          lg:top-[4%]
          lg:h-[650px]
          lg:w-[650px]

          lg:blur-[130px]
        "
      />

      {/* Secondary softer light */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: start ? 0.65 : 0,
          scale: start ? 1 : 0.7,
        }}
        transition={{
          delay: 0.25,
          duration: 1.5,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[19%]
          z-0

          h-[160px]
          w-[160px]

          rounded-full
          bg-[#C7AD67]/[0.09]

          blur-[70px]

          lg:h-[230px]
          lg:w-[230px]
        "
      />


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-72px)]
          max-w-[1440px]
          flex-col
          justify-center

          px-5
          pb-20
          pt-16

          sm:px-10

          lg:px-16
        "
      >

        {/* =================================================
            EYEBROW
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 15,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A48C45]
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/40

                sm:text-[10px]
              "
            >
              Creative Advertising Agency
            </span>

          </div>
        </motion.div>


        {/* =================================================
            MAIN TYPOGRAPHY
        ================================================== */}

        <div
          className="
            relative
            z-20
            max-w-[1180px]
          "
        >

          <FocusLine
            text="MAKE"
            active={start}
            delay={0}
          />

          <FocusLine
            text="THE"
            active={start}
            delay={0.15}
            indent
          />

          <FocusLine
            text="UNSEEN"
            active={start}
            delay={0.3}
            gold
          />

          <FocusLine
            text="SEEN."
            active={start}
            delay={0.45}
            indent
          />

        </div>


        {/* =================================================
            DESCRIPTION + CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 25,
          }}
          transition={{
            delay: 1.05,
            duration: 0.8,
            ease,
          }}
          className="
            relative
            z-20

            mt-10

            flex
            flex-col
            gap-8

            sm:mt-12
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >

          <p
            className="
              max-w-[510px]

              text-[12px]
              leading-[1.9]
              text-white/45

              sm:text-[13px]
            "
          >
            Creative strategy, branding, advertising and
            digital experiences that turn overlooked
            ideas into things people notice.
          </p>


          <Link
            href="#work"
            className="
              group
              flex
              w-fit
              items-center
              gap-4

              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
            "
          >

            <span>
              Explore our work
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full
                border
                border-white/15

                text-sm
                text-[#A48C45]

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:border-[#A48C45]
              "
            >
              ↗
            </span>

          </Link>

        </motion.div>


        {/* =================================================
            BOTTOM INFORMATION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: start ? 1 : 0,
          }}
          transition={{
            delay: 1.35,
            duration: 0.7,
          }}
          className="
            absolute
            bottom-6
            left-5
            right-5

            flex
            items-end
            justify-between

            sm:left-10
            sm:right-10

            lg:left-16
            lg:right-16
          "
        >

          <div className="flex flex-col gap-1">

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Nubek Media
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-white/15
              "
            >
              Strategy / Creative / Digital
            </span>

          </div>


          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            01 — 04
          </span>

        </motion.div>

      </div>

    </section>
  );
}


/* ============================================================
   CINEMATIC RACK-FOCUS TYPOGRAPHY
============================================================ */

function FocusLine({
  text,
  active,
  delay,
  gold = false,
  indent = false,
}: {
  text: string;
  active: boolean;
  delay: number;
  gold?: boolean;
  indent?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        /*
         * Starts as if the camera is too close.
         */
        scale: 1.18,
        scaleX: 1.12,

        /*
         * Optical defocus.
         */
        filter: "blur(18px)",

        /*
         * Wide tracking while out of focus.
         */
        letterSpacing: "0.18em",

        y: 45,
        x: -18,
      }}
      animate={{
        opacity: active ? 1 : 0,

        /*
         * Pull back into the final composition.
         */
        scale: active ? 1 : 1.18,
        scaleX: active ? 1 : 1.12,

        /*
         * Rack focus.
         */
        filter: active
          ? "blur(0px)"
          : "blur(18px)",

        /*
         * Letters close together as focus locks.
         */
        letterSpacing: active
          ? "-0.075em"
          : "0.18em",

        y: active ? 0 : 45,
        x: active ? 0 : -18,
      }}
      transition={{
        duration: 1.15,
        delay,
        ease,
      }}
      className={`
        origin-left

        text-[clamp(3.2rem,10.8vw,9.8rem)]

        font-semibold

        leading-[0.84]

        tracking-[-0.075em]

        will-change-transform

        ${gold ? "text-[#A48C45]" : "text-[#F5F5F3]"}

        ${indent ? "ml-[8vw]" : ""}
      `}
    >
      {text}
    </motion.div>
  );
}