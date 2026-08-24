"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 250);
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
          GOLDEN CINEMATIC LIGHT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
          x: 90,
        }}
        animate={{
          opacity: start ? 1 : 0,
          scale: start ? 1 : 0.65,
          x: start ? 0 : 90,
        }}
        transition={{
          duration: 1.7,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          z-0

          right-[-18%]
          top-[8%]

          h-[430px]
          w-[430px]

          rounded-full
          bg-[#A48C45]/[0.12]
          blur-[110px]

          sm:right-[-8%]
          sm:top-[5%]
          sm:h-[560px]
          sm:w-[560px]

          lg:right-[0%]
          lg:top-[2%]
          lg:h-[650px]
          lg:w-[650px]
          lg:blur-[135px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          opacity: start ? 0.55 : 0,
          scale: start ? 1 : 0.6,
        }}
        transition={{
          delay: 0.2,
          duration: 1.5,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          z-0

          right-[16%]
          top-[18%]

          h-[180px]
          w-[180px]

          rounded-full
          bg-[#C7AD67]/[0.07]
          blur-[80px]

          lg:h-[260px]
          lg:w-[260px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

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
          pb-24
          pt-20

          sm:px-10
          sm:pb-24
          sm:pt-20

          lg:px-16
          lg:pb-20
          lg:pt-16
        "
      >
        {/* =================================================
            AGENCY LABEL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 12,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
            ease,
          }}
          className="
            relative
            z-30
            mb-7
            flex
            items-center
            gap-3

            sm:mb-8
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]
              shrink-0
              rounded-full
              bg-[#A48C45]
            "
          />

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-white/40

              sm:text-[9px]
              sm:tracking-[0.32em]
            "
          >
            Creative Advertising Agency
          </span>
        </motion.div>

        {/* =================================================
            HERO TYPE

            Desktop deliberately capped.
            This prevents the typography from swallowing
            the whole composition.
        ================================================== */}

        <div
          className="
            relative
            z-20

            w-full
            max-w-[1080px]

            lg:max-w-[1040px]
            xl:max-w-[1120px]
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
            delay={0.13}
            indent
          />

          <FocusLine
            text="UNSEEN"
            active={start}
            delay={0.26}
            gold
          />

          <FocusLine
            text="SEEN."
            active={start}
            delay={0.39}
            indent
          />
        </div>

        {/* =================================================
            LOWER CONTENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 18,
          }}
          transition={{
            delay: 0.95,
            duration: 0.75,
            ease,
          }}
          className="
            relative
            z-20

            mt-9

            flex
            flex-col
            gap-7

            sm:mt-10

            lg:mt-11
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <p
            className="
              max-w-[460px]

              text-[11px]
              leading-[1.85]
              text-white/42

              sm:text-[12px]

              lg:text-[13px]
              lg:leading-[1.9]
            "
          >
            Creative strategy, branding, advertising and
            digital experiences that turn overlooked ideas
            into things people notice.
          </p>

          <Link
            href="#work"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-4

              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/75
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
            BOTTOM META
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: start ? 1 : 0,
          }}
          transition={{
            delay: 1.25,
            duration: 0.7,
          }}
          className="
            absolute
            bottom-5
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
                text-[6px]
                uppercase
                tracking-[0.28em]
                text-white/20
              "
            >
              Nubek Media
            </span>

            <span
              className="
                text-[6px]
                uppercase
                tracking-[0.18em]
                text-white/15
              "
            >
              Strategy / Creative / Digital
            </span>
          </div>

          <span
            className="
              text-[6px]
              uppercase
              tracking-[0.28em]
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
   RACK-FOCUS TYPOGRAPHY
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
        scale: 1.14,
        scaleX: 1.08,
        filter: "blur(17px)",
        letterSpacing: "0.16em",
        y: 34,
        x: -14,
      }}
      animate={{
        opacity: active ? 1 : 0,

        scale: active ? 1 : 1.14,
        scaleX: active ? 1 : 1.08,

        filter: active
          ? "blur(0px)"
          : "blur(17px)",

        letterSpacing: active
          ? "-0.065em"
          : "0.16em",

        y: active ? 0 : 34,
        x: active ? 0 : -14,
      }}
      transition={{
        duration: 1.05,
        delay,
        ease,
      }}
      className={`
        origin-left
        whitespace-nowrap
        will-change-transform

        font-semibold

        leading-[0.86]
        tracking-[-0.065em]

        /*
         * Mobile
         */
        text-[clamp(3rem,15vw,5.5rem)]

        /*
         * Tablet
         */
        sm:text-[clamp(4.5rem,11vw,7rem)]

        /*
         * Desktop
         */
        lg:text-[clamp(5rem,7.1vw,7.1rem)]

        /*
         * Large desktop
         */
        xl:text-[clamp(5.4rem,6.7vw,7.6rem)]

        ${gold ? "text-[#A48C45]" : "text-[#F5F5F3]"}

        ${indent ? "ml-[7vw]" : ""}
      `}
    >
      {text}
    </motion.div>
  );
}