"use client";

import React, { useState } from "react";
import MarqueeItem from "../shared/MarqueeItem";
import { Creatives } from "@/app/lib/utils";
import Image from "next/image";

const ServiceSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden text-black">
      <p className="text-2xl mb-10">EASY & HASSLE-FREE</p>
      <h2 className="text-5xl font-bold">
        Every Type of Creative Work You&apos;ll Ever Need,
        <span className="text-blue-600 font-salt"> and more</span>
      </h2>

      <div
        className="flex gap-4 mt-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...Array(3)].map((_, i) => (
          <MarqueeItem
            key={i}
            orientation="Horizontal"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 0 : "-100%" }}
            speed={60}
          >
            {Creatives.map((image, index) => (
              <div key={`${i}-${index}`} className="relative">
                <Image
                  src={image.path}
                  alt=""
                  width={400}
                  height={584}
                  className="rounded-lg"
                />
                <p className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4 text-4xl font-bold pointer-events-none">
                  Some
                  <br />
                  <span className="font-salt">Service</span>
                </p>
              </div>
            ))}
          </MarqueeItem>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
