"use client";

import { imageMap } from "@/app/lib/utils";
import React from "react";
import MarqueeItem from "../shared/MarqueeItem";
import OverlayComponent from "../shared/ImageOverLayComponent";

const HeroMarqueesSection = () => {
  return (
    <div className="overflow-hidden ">
      <div className="flex flex-col gap-6 ">
        <div className="flex gap-4 lg:hidden">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Horizontal"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              speed={60}
            >
              {imageMap.map((image, index) => (
                <OverlayComponent
                  key={`${i}-${index}`}
                  backgroundImage={image.path}
                  className="w-[152px] h-[192px] flex-shrink-0 px-2"
                  backgroundClassname="rounded-xl"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
        <div className="flex gap-4 lg:hidden">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Horizontal"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              speed={60}
            >
              {imageMap.map((image, index) => (
                <OverlayComponent
                  key={`${i}-${index}`}
                  backgroundImage={image.path}
                  className="w-[152px] h-[192px] flex-shrink-0 px-2"
                  backgroundClassname="rounded-xl"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex gap-4 gradient-v">
        <div className="hidden lg:flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Vertical"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              speed={60}
            >
              {imageMap.map((image, index) => (
                <OverlayComponent
                  key={`${i}-${index}`}
                  backgroundImage={image.path}
                  className="w-[152px] h-[192px] flex-shrink-0 px-2"
                  backgroundClassname="rounded-xl"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Vertical"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              speed={60}
            >
              {imageMap.map((image, index) => (
                <OverlayComponent
                  key={`${i}-${index}`}
                  backgroundImage={image.path}
                  className="w-[152px] h-[192px] flex-shrink-0 px-2"
                  backgroundClassname="rounded-xl"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <MarqueeItem
              key={i}
              orientation="Vertical"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              speed={60}
            >
              {imageMap.map((image, index) => (
                <OverlayComponent
                  key={`${i}-${index}`}
                  backgroundImage={image.path}
                  className="w-[152px] h-[192px] flex-shrink-0 px-2"
                  backgroundClassname="rounded-xl"
                />
              ))}
            </MarqueeItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMarqueesSection;
