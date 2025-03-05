"use client";

import React from "react";
import MarqueeItem from "../shared/MarqueeItem";
import { CompaniesMap } from "@/app/lib/utils";
import Image from "next/image";

const TrustedSection = () => {
  return (
    <div className="overflow-hidden p-20">
      <h3 className="text-black text-3xl mb-16 text-center font-thin">
        Trusted by 500+ of the world&apos;s biggest
      </h3>

      <div className="flex gap-20 flex-col">
        <div className="flex gap-30 gradient">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Horizontal"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              speed={30}
              className="flex gap-30"
              
            >
              {CompaniesMap.map((image, index) => (
                <Image
                  key={`${i}-${index}`}
                  src={image.path}
                  alt=""
                  width={100}
                  height={30}
                  className="object-contain"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>

        <div className="flex gap-30 gradient">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Horizontal"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              speed={30}
              className="flex gap-30"
            >
              {CompaniesMap.map((image, index) => (
                <Image
                  key={`${i}-${index}`}
                  src={image.path}
                  alt=""
                  width={100}
                  height={30}
                  className="object-contain"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
