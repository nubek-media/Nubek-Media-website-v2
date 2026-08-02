"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Work",
      href: "#work",
    },
    {
      name: "Expertise",
      href: "#expertise",
    },
    {
      name: "Industries",
      href: "#industries",
    },
    {
      name: "Process",
      href: "#process",
    },
    {
      name: "Team",
      href: "#team",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10"
    >

      <motion.div
        whileHover={{
          scale: 1.05,
        }}
      >
        <Image
          src="/logos/logo.png"
          alt="Nubek Media"
          width={280}
          height={100}
          priority
          className="h-auto w-[190px] md:w-[260px]"
        />
      </motion.div>


      {/* Desktop Navigation */}

      <div className="hidden items-center gap-8 text-sm text-white md:flex">

        {links.map((link) => (

          <a
            key={link.name}
            href={link.href}
            className="transition duration-300 hover:text-[#A48C45]"
          >
            {link.name}
          </a>

        ))}

      </div>



      {/* Mobile Button */}

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-white md:hidden"
      >

        {open ? "✕" : "☰"}

      </button>



      {/* Mobile Navigation */}

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute left-0 top-full z-50 flex w-full flex-col gap-6 border-t border-[#A48C45]/20 bg-[#021D26] px-6 py-8 text-white md:hidden"
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-[#A48C45]"
            >
              {link.name}
            </a>

          ))}

        </motion.div>

      )}

    </motion.nav>
  );
}