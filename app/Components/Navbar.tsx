"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "EXPERTISE",
      href: "#expertise",
    },
    {
      name: "INDUSTRIES",
      href: "#industries",
    },
    {
      name: "PROCESS",
      href: "#process",
    },
    {
      name: "TEAM",
      href: "#team",
    },
    {
      name: "CONTACT",
      href: "#contact",
    },
  ];

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        z-50

        flex
        min-h-[92px]
        w-full
        items-center
        justify-between

        px-6
        py-5

        sm:min-h-[100px]
        sm:px-10
        sm:py-6

        md:min-h-[108px]
        md:px-10
        md:py-6

        lg:px-16
      "
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <motion.a
        href="/"
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative z-[60] block shrink-0"
        aria-label="Nubek Media home"
      >
        <Image
          src="/logos/logo.png"
          alt="Nubek Media"
          width={300}
          height={110}
          priority
          className="
            h-auto
            w-[165px]

            sm:w-[185px]

            md:w-[220px]

            lg:w-[240px]
          "
        />
      </motion.a>

      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <div className="hidden items-center gap-8 md:flex lg:gap-10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleClick}
            className="
              relative

              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]

              text-white/70

              transition-colors
              duration-300

              hover:text-[#A48C45]

              after:absolute
              after:-bottom-2
              after:left-0
              after:h-px
              after:w-0
              after:bg-[#A48C45]
              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="
          relative
          z-[60]

          flex
          h-10
          w-10
          items-center
          justify-center

          text-xl
          text-white

          transition-colors
          duration-300

          hover:text-[#A48C45]

          md:hidden
        "
      >
        <span className="leading-none">
          {open ? "×" : "☰"}
        </span>
      </button>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-0
              top-full
              z-50

              flex
              w-full
              flex-col

              gap-7

              border-t
              border-[#A48C45]/15

              bg-[#021D26]/95

              px-6
              py-8

              backdrop-blur-xl

              md:hidden
            "
          >
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
                className="
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.18em]

                  text-white/80

                  transition-colors
                  duration-300

                  hover:text-[#A48C45]
                "
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}