"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
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
          GOLDEN HALO
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          x: 70,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.7,
          delay: 0,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          z-0

          right-[-20%]
          top-[7%]

          h-[330px]
          w-[330px]

          rounded-full
          bg-[#A48C45]/[0.11]
          blur-[95px]

          sm:right-[-10%]
          sm:top-[7%]
          sm:h-[430px]
          sm:w-[430px]

          lg:right-[-2%]
          lg:top-[4%]
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[115px]
        "
      />

      {/* =====================================================
          OPTICAL / CAMERA SYSTEM
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          z-[5]

          right-[3%]
          top-[20%]

          h-[250px]
          w-[250px]

          sm:right-[6%]
          sm:top-[19%]
          sm:h-[300px]
          sm:w-[300px]

          md:right-[7%]
          md:h-[340px]
          md:w-[340px]

          lg:right-[8%]
          lg:top-[18%]
          lg:h-[390px]
          lg:w-[390px]

          xl:right-[10%]
          xl:h-[430px]
          xl:w-[430px]
        "
      >
        {/* =================================================
            OUTER CIRCLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            rotate: -15,
          }}
          animate={{
            opacity: 0.32,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0,
            ease,
          }}
          className="
            absolute
            inset-0
            rounded-full

            border
            border-[#C7AD67]/40
          "
        />

        {/* =================================================
            MIDDLE CIRCLE — FILLED
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.45,
          }}
          animate={{
            opacity: 0.52,
            scale: 1,
          }}
          transition={{
            duration: 1.15,
            delay: 0.08,
            ease,
          }}
          className="
            absolute
            left-1/2
            top-1/2

            h-[67%]
            w-[67%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#A48C45]/[0.13]

            border
            border-[#A48C45]/30

            shadow-[0_0_80px_rgba(164,140,69,0.12)]
          "
        />

        {/* =================================================
            INNER CIRCLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.25,
          }}
          animate={{
            opacity: 0.72,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.16,
            ease,
          }}
          className="
            absolute
            left-1/2
            top-1/2

            h-[35%]
            w-[35%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#A48C45]/30

            shadow-[0_0_65px_rgba(164,140,69,0.18)]
          "
        />

        {/* =================================================
            SOFT OPTICAL BREATH
        ================================================= */}

        <motion.div
          initial={{
            scale: 0.94,
            opacity: 0,
          }}
          animate={{
            scale: [0.94, 1.025, 1],
            opacity: [0, 0.18, 0.08],
          }}
          transition={{
            duration: 4.5,
            delay: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-[17%]

            rounded-full

            bg-[#C7AD67]/[0.025]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
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
          pb-20
          pt-16

          sm:px-10
          sm:pb-20
          sm:pt-16

          lg:px-16
          lg:pb-16
          lg:pt-10
        "
      >
        {/* =================================================
            AGENCY LABEL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0,
            duration: 0.7,
            ease,
          }}
          className="
            relative
            z-30
            mb-6

            flex
            items-center
            gap-3

            sm:mb-7
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]
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
            HERO TYPOGRAPHY
        ================================================= */}

        <div
          className="
            relative
            z-20

            w-full
            max-w-[920px]

            lg:max-w-[900px]
            xl:max-w-[980px]
          "
        >
          <FocusLine
            text="MAKE"
            delay={0}
          />

          <FocusLine
            text="THE"
            delay={0.1}
            indent
          />

          <FocusLine
            text="UNSEEN"
            delay={0.2}
            gold
          />

          <FocusLine
            text="SEEN."
            delay={0.3}
            indent
          />
        </div>

        {/* =================================================
            SUPPORTING COPY
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.7,
            ease,
          }}
          className="
            relative
            z-20

            mt-8

            max-w-[410px]

            text-[10px]
            leading-[1.8]
            text-white/40

            sm:mt-9
            sm:text-[11px]

            lg:mt-10
            lg:text-[12px]
            lg:leading-[1.85]
          "
        >
          Creative strategy, branding, advertising and digital
          experiences that turn overlooked ideas into things
          people notice.
        </motion.p>

        {/* =================================================
            BOTTOM META
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.85,
            duration: 0.7,
            ease,
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
  delay,
  gold = false,
  indent = false,
}: {
  text: string;
  delay: number;
  gold?: boolean;
  indent?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.1,
        scaleX: 1.06,
        filter: "blur(16px)",
        letterSpacing: "0.15em",
        y: 28,
        x: -12,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        scaleX: 1,
        filter: "blur(0px)",
        letterSpacing: "-0.065em",
        y: 0,
        x: 0,
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
        leading-[0.87]
        tracking-[-0.065em]

        text-[clamp(2.9rem,14vw,5.1rem)]

        sm:text-[clamp(4rem,10vw,6.2rem)]

        lg:text-[clamp(4.6rem,6.2vw,6.4rem)]

        xl:text-[clamp(5rem,6vw,6.8rem)]

        ${gold ? "text-[#A48C45]" : "text-[#F5F5F3]"}

        ${indent ? "ml-[6vw]" : ""}
      `}
    >
      {text}
    </motion.div>
  );
}