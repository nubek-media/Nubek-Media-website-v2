"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    "Work",
    "Expertise",
    "Industries",
    "Process",
    "Team",
    "Contact",
  ];

  const address =
    "Villa 434 Z - First Gate Khufu Pyramids Gardens - Giza - Egypt";

  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Villa+434+Z+First+Gate+Khufu+Pyramids+Gardens+Giza+Egypt";

  return (
    <footer className="border-t border-[#A48C45]/20 bg-[#021D26] px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#A48C45]">
              NUBEK
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-300">
              Creative advertising agency building brands through strategy,
              creativity, and digital experiences.
            </p>
          </motion.div>


          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 transition hover:text-[#A48C45]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-gray-300">

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block leading-7 transition hover:text-[#A48C45]"
              >
                {address}
              </a>


              <a
                href="mailto:hello@nubekmedia.com"
                className="block transition hover:text-[#A48C45]"
              >
                hello@nubekmedia.com
              </a>


              <a
                href="tel:01272222655"
                className="block transition hover:text-[#A48C45]"
              >
                01272222655
              </a>


              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-[#A48C45] px-5 py-2 text-sm text-[#A48C45] transition hover:bg-[#A48C45] hover:text-[#021D26]"
              >
                Open Location Map
              </a>

            </div>
          </div>

        </div>


        <div className="mt-16 border-t border-[#A48C45]/20 pt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} NUBEK Media. All rights reserved.
        </div>

      </div>
    </footer>
  );
}