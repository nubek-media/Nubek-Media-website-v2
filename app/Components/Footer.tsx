"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/NubekMedia/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/nubekmedia/",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      link: "https://www.tiktok.com/@nubekmedia",
    },
  ];

  const legalLinks = [
    "Legal Notice",
    "Terms and Conditions",
    "Cookie Policy",
  ];

  return (
    <footer className="bg-[#021D26] text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-2xl font-semibold tracking-wide text-[#A48C45]">
            Nubek Media
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Creative minds. Strategic impact.
          </p>


          {/* Social */}
          <div className="mt-8 flex gap-4">

            {socialLinks.map((social) => {

              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-[#A48C45]
                    text-[#A48C45]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#A48C45]
                    hover:text-[#021D26]
                  "
                >
                  <Icon size={18}/>
                </a>
              );

            })}

          </div>


          {/* Contact */}
          <div className="
            mt-8
            flex
            flex-col
            items-center
            gap-4
            text-sm
            text-gray-300

            sm:flex-row
            sm:gap-8
          ">

            <a
              href="https://wa.me/201272222655"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                transition-colors
                hover:text-[#A48C45]
              "
            >
              <Phone size={16} className="text-[#A48C45]" />
              01272222655
            </a>


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nubekmedia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                transition-colors
                hover:text-[#A48C45]
              "
            >
              <Mail size={16} className="text-[#A48C45]" />
              nubekmedia@gmail.com
            </a>

          </div>


          <div className="my-10 h-px w-full bg-white/10" />


          {/* Legal */}
          <div className="
            flex
            flex-col
            items-center
            gap-4
            text-sm
            text-gray-400

            sm:flex-row
            sm:gap-6
          ">

            {legalLinks.map((link, index) => (

              <div
                key={link}
                className="flex items-center gap-6"
              >

                <a
                  href="#"
                  className="transition hover:text-[#A48C45]"
                >
                  {link}
                </a>

                {index !== legalLinks.length - 1 && (
                  <span className="hidden text-[#A48C45]/50 sm:block">
                    |
                  </span>
                )}

              </div>

            ))}

          </div>


          {/* Bottom */}
          <div className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/10
            pt-6

            text-sm
            text-gray-500

            md:flex-row
          ">

            <p>
              © {new Date().getFullYear()} Nubek Media. All rights reserved.
            </p>


            <motion.button
              whileHover={{ y:-4 }}
              whileTap={{ scale:0.95 }}
              onClick={() =>
                window.scrollTo({
                  top:0,
                  behavior:"smooth",
                })
              }
              className="
                flex
                items-center
                gap-2
                text-[#A48C45]
                transition
                hover:text-white
              "
            >
              Back to top
              <ArrowUp size={16}/>
            </motion.button>

          </div>


        </div>

      </div>

    </footer>
  );
}