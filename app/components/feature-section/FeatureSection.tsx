import Correct from "@/public/svgs/Correct";
import Cross from "@/public/svgs/Cross";
import React from "react";
import { features } from "@/app/lib/utils";

const FeatureSection = () => {
  const renderCheckmark = (value: boolean) => (
    <div className="flex justify-center items-center">
      {value ? <Correct /> : <Cross />}
    </div>
  );

  return (
    <div className="bg-[#073742] mt-10 px-6 md:px-20 py-6 md:py-20 overflow-hidden">
      <h3 className="text-3xl text-center font-bold text-white mb-10">
        Hiring or traditional
        <br />
        outsourcing?
        <span className="font-salt text-pink-400"> neither</span>
      </h3>

      {/* Ensure no horizontal overflow */}
      <div className="overflow-x-auto w-full">
        <div className="w-full overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-white"> </th>
                <th className="p-4 text-center text-white">Speed</th>
                <th className="p-4 text-center text-white">Flexibility</th>
                <th className="p-4 text-center text-white">Quality</th>
                <th className="p-4 text-center text-white overflow-hidden">
                  Scalability
                </th>
                <th className="p-4 text-center text-white">
                  Cost-effectiveness
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`${
                    index === 0
                      ? "bg-[#88D7F0] text-[#073742]"
                      : "bg-[#073742] text-white"
                  }`}
                >
                  <td className="p-4 first:rounded-l-4xl last:rounded-r-4xl">
                    <div className="font-bold">{feature.name}</div>
                    <div className="text-sm opacity-75 hidden md:block">
                      {feature.description}
                    </div>
                  </td>
                  <td className="p-4">{renderCheckmark(feature.speed)}</td>
                  <td className="p-4">
                    {renderCheckmark(feature.flexibility)}
                  </td>
                  <td className="p-4">{renderCheckmark(feature.quality)}</td>
                  <td className="p-4">
                    {renderCheckmark(feature.scalability)}
                  </td>
                  <td className="p-4 first:rounded-l-4xl last:rounded-r-4xl">
                    {renderCheckmark(feature.costEffectiveness)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
