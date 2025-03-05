/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import ArrowTopRight from "@/public/svgs/ArrowTopRight";

interface WorkProps {
  title: string;
  description: string;
  imageSrc: string;
}

const WorkComponent: React.FC<WorkProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3 group relative overflow-hidden cursor-pointer"
      initial="hidden"
      whileHover="visible"
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-[200px] sm:h-[280px] xl:h-[340px] 2xl:h-[380px] w-full rounded-lg object-fill transition-transform duration-300 group-hover:scale-105"
      />

      <div className="relative inline-flex items-center gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, x: -4 },
            visible: { opacity: 1, x: 10 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ArrowTopRight />
        </motion.div>
      </div>

      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export default WorkComponent;
