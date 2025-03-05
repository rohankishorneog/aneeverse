import RoundedCheckSvg from "@/public/roundedCheck";
import React from "react";
import HeroMarqueesSection from "./HeroMarqueesSection";

const HeroSection = () => {
  return (
    <div className="bg-[#073742] pt-[90px] lg:pt-[120px] lg:pb-12 flex flex-col lg:flex-row items-center justify-center gap-10 px-10 h-[100dvh] overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl xl:text-display-2xl font-semibold mb-4 md:mb-6 lg:mb-8">
          DESIGN, OPTIMIZE, ADVERTISE
          <br />
          <span className="font-salt text-2xl md:text-3xl lg:text-4xl xl:text-display-xl block text-orange-500 mt-7">
            WE GOT YOU COVERED
          </span>
        </h1>
        <p className="text-sm lg:text-3xl mb-6 sm:mb-6">
          Get access to high-velocity creative team that works with your brand.
          Ship campaigns — faster, more reliably, and at scale.
        </p>

        {/* List */}
        <ul className="hidden sm:flex flex-col gap-2 sm:gap-4 mb-5 sm:mb-8 text-sm lg:text-3xl">
          <li className="flex items-center gap-2">
            <RoundedCheckSvg /> Dependable Services
          </li>
          <li className="flex items-center gap-2">
            <RoundedCheckSvg /> Proven Results
          </li>
          <li className="flex items-center gap-2">
            <RoundedCheckSvg /> 100% Better results
          </li>
        </ul>

        {/* Button */}
        <button className="bg-[#88D7F0] px-6 py-3 rounded-3xl font-semibold text-black w-[250px] md:w-[400px] cursor-pointer">
          GET STARTED
        </button>
      </div>

      {/* Right Content */}
      <div className="flex justify-center">
        <HeroMarqueesSection />
      </div>
    </div>
  );
};

export default HeroSection;
