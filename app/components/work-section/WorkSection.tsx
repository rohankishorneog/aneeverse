"use client";
import { worksArray } from "@/app/lib/utils";
import React from "react";
import WorkComponent from "./WorkComponent";

const WorkSection = () => {
  return (
    <div className="overflow-hidden text-black mt-10">
      <p className="text-xl mb-10">OUR WORKS</p>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          See our,
          <span className="text-orange-600 font-salt"> TOP WORKS</span>
        </h2>

        <button className="px-4.5 py-2 rounded-4xl border">Explore All</button>
      </div>

      {/* Responsive grid layout */}
      <div className=" grid grid-cols-1  md:grid-cols-4 gap-6">
        {worksArray.map((work, index) => (
          <WorkComponent key={index} {...work} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
