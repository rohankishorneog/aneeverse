"use client";
import Image from "next/image";
import { FaRocket, FaExchangeAlt, FaClock } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaRocket className="text-[#073742] text-3xl" />,
      title: "Scalable",
      description:
        "Boost your in-house creative. We handle the heavy lifting so you can focus on strategic, high-impact work without adding overhead to the team.",
    },
    {
      icon: <FaExchangeAlt className="text-[#073742] text-3xl" />,
      title: "Flexible",
      description:
        "Say yes to more projects. Whether you need more bandwidth or different skills, Aneeverse has the resources you need to get the job done.",
    },
    {
      icon: <FaClock className="text-[#073742] text-3xl" />,
      title: "24/7",
      description:
        "Don't sacrifice quality for speed. Our global team of creatives delivers agency-level work in a fraction of the time.",
    },
  ];

  return (
    <div className="z-0">
      <div className=" mx-auto px-6 py-12 text-black xl:mb-30">
        <h2 className="text-center text-2xl font-bold mb-8">
          Aneeverse is the perfect fit for fast-moving brands
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex  flex-col items-start gap-4 p-6 rounded-lg flex-1"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#E6ECD6] rounded-lg text-[#073742] ">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-md font-light uppercase text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#E6ECD6] text-[#073742] flex flex-col xl:flex-row gap-10">
        <div className="xl:w-[40%] xl:pl-60 flex flex-col xl:h-full pl-10 pt-10 gap-10 lg:gap-20">
          <div>
            <h4 className="uppercase text-sm font-light tracking-[2px] text-left">
              Work with the best
            </h4>
            <hr />
            <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl 2xl:text-display-xl text-secondary-500 md:mb-6 lg:mb-8 font-semibold my-6">
              <span className="font-salt text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                World-class talent
              </span>
              with no borders
            </h3>
          </div>

          <div>
            <p className="text-lg lg:text-xl  leading-relaxed mb-6 lg-mb-10">
              Work with the top 1% of global creative talent – elite designers,
              project managers, animators, copywriters, AI technologists and
              more, recruited from the best brands and agencies.
            </p>
            <p className=" text-lg leading-relaxed">
              Plus, a dedicated project manager to ensure your briefs stay on
              track from start to finish.
            </p>

            <button className="bg-[#073742] py-2 px-6 rounded-full text-white mt-6 w-fit">
              Book A Call
            </button>
          </div>
        </div>

        {/* image */}
        <div className="xl:w-1/2 flex justify-center items-center mt-10 lg:mt-0 z-0">
          <Image
            src="/images/bottom-about.webp"
            alt="talent"
            layout="responsive"
            className="w-full rounded-4xl max-h-auto z-0"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
