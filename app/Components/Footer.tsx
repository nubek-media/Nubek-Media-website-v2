"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");

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

  const address =
    "Villa 434 Z - First Gate Khufu Pyramids Gardens - Giza, Egypt";

  return (
    <footer className="bg-[#021D26] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-[#A48C45]">
              Nubek Media
            </h3>

            <p className="text-sm leading-7 text-gray-300">
              Creative minds. Strategic impact.
              We create powerful digital experiences
              through branding, marketing, and technology.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A48C45] transition hover:bg-[#A48C45] hover:text-[#021D26]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-[#A48C45]">
              Navigation
            </h4>

            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition hover:text-[#A48C45]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-[#A48C45]">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">

              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#A48C45]"
                />

                <a
                  href="https://maps.app.goo.gl/r8TVE2BmY2afGYLS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#A48C45]"
                >
                  {address}
                </a>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="text-[#A48C45]"
                />

                <a
                  href="tel:+201272222655"
                  className="transition hover:text-[#A48C45]"
                >
                  01272222655
                </a>
              </li>

              <li className="flex gap-3">
                <Globe
                  size={18}
                  className="text-[#A48C45]"
                />

                <a
                  href="https://www.nubek.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#A48C45]"
                >
                  www.nubek.media
                </a>
              </li>

              <li className="flex gap-3">
                <Mail
                  size={18}
                  className="text-[#A48C45]"
                />

                <a
                  href="mailto:info@nubek.media"
                  className="transition hover:text-[#A48C45]"
                >
                  info@nubek.media
                </a>
              </li>

            </ul>
          </div>
          {/* Newsletter */}

          <div>
            <h4 className="mb-5 text-lg font-semibold text-[#A48C45]">
              Newsletter
            </h4>

            <p className="mb-5 text-sm text-gray-300">
              Subscribe for updates and creative insights.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-md border border-[#A48C45]"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-[#A48C45] px-4 text-[#021D26] transition hover:bg-[#b79b4a]"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Nubek Media. All rights reserved.
          </p>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-4 flex items-center gap-2 text-[#A48C45] transition hover:text-white md:mt-0"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}