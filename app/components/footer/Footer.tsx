"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import ArrowTopRight from "@/public/svgs/ArrowTopRight";

// Example data
const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Website Services", href: "#" },
      { label: "Marketing Services", href: "#" },
      { label: "Content Writing", href: "#" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { label: "Main", href: "#" },
      { label: "About", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Blog", href: "#" },
      { label: "Policies & Reports", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

const AccordionItem = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3 md:py-0">
      {/* Header (always clickable on mobile, but no effect on desktop) */}
      <button
        className="flex w-full items-center justify-between md:justify-start md:mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        {/* Chevron only shows on mobile */}
        <FiChevronDown
          className={`h-5 w-5 transform transition-transform md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />

        {/* Arrow only shows on desktop */}
        <span className="hidden md:block">
          <ArrowTopRight />
        </span>
      </button>

      {/* 
        1) Always visible on larger screens (md:block).
        2) Hidden on mobile (hidden).
      */}
      <div className="hidden md:block">
        <ul className="my-3 space-y-1">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-sm   hover:border-b hover:border-b-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 
        Accordion version for mobile only (md:hidden).
        Animated with Framer Motion.
      */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden md:hidden"
      >
        <ul className="mt-3 space-y-1">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-sm  hover:border-b hover:border-b-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[url('/images/fbg.jpg')] bg-cover bg-center bg-no-repeat text-white mt-0 z-40 py-15 px-5 w-full">
      <div className=" text-center w-full">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl 2xl:text-display-xl mb-4 md:mb-6 lg:mb-8 text-center font-semibold">
          DESIGN, OPTIMIZE, ADVERTISE
          <span className="font-salt text-xl md:text-2xl lg:text-3xl xl:text-4xl  block text-orange-400 mt-2 ">
            we got you covered.
          </span>
        </h2>
        <a className="block" href="/contact">
          <div className="relative px-6 py-[10px] font-semibold rounded-full inline-block tracking-wide cursor-pointer overflow-hidden border text-secondary-500 bg-primary-500 border-primary-500 group mt-2">
            <div className="absolute inset-0 bg-secondary-500 z-0"></div>
            <span className="relative z-10">GET STARTED</span>
          </div>
        </a>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className=" md:space-x-8">
          {/* Left - multiple sections */}
          <div className="flex-1">
            {footerSections.map((section, idx) => (
              <AccordionItem
                key={idx}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          {/* Right - brand / info / disclaimers */}
          <div className="mt-6 w-full">
            <div className="text-center  w-full">
              <h2 className="text-3xl font-bold mb-2 md:text-left">
                Aneeeverse
              </h2>

              <div className="flex flex-col md:flex-row w-full justify-between">
                <p className="text-sm ">
                  &copy; 2025 Aneeeverse. All rights reserved.
                </p>
                <p className="text-sm flex-1">Privacy Policy | Terms | DMCA</p>

                <div className="flex gap-4 mt-4 md:mt-0 justify-center ">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare className="text-white border border-white rounded-full p-1 w-8 h-8" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-white border border-white rounded-full p-1 w-8 h-8" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-white border border-white rounded-full p-1 w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
