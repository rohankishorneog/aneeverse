"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "@/app/lib/utils";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#073742]  flex flex-col  items-center w-full p-10">
      <div className="w-full flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-center w-full md:flex-col gap-4 md:gap-2">
          {/* Previous image (Left in row, Top in column) */}
          <motion.img
            src={
              testimonials[
                (index - 1 + testimonials.length) % testimonials.length
              ].image
            }
            alt="Previous"
            className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover opacity-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />

          {/* Main image */}
          <motion.img
            key={testimonials[index].image}
            src={testimonials[index].image}
            alt="Testimonial"
            className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full object-cover border-4 border-gray-300 shadow-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Next image (Right in row, Bottom in column) */}
          <motion.img
            src={testimonials[(index + 1) % testimonials.length].image}
            alt="Next"
            className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full object-cover opacity-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col items-start "
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mt-10">
            {testimonials[index].company}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl  mt-10">
            "{testimonials[index].text}"
          </p>
          <p className="text-md sm:text-lg md:text-xl  mt-10 font-semibold">
            {testimonials[index].name}, {testimonials[index].role}
          </p>
          <div className="flex justify-around mt-4 gap-2 w-full">
            {testimonials[index].stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#204B55] text-white border border-gray-500 rounded-lg p-4 sm:p-6 shadow-md text-center sm:text-left"
              >
                <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                <p className="text-sm sm:text-md">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center items-center mt-6 w-full md:flex-col gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full md:rotate-90 cursor-pointer border"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2  rounded-full md:rotate-90 cursor-pointer border "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500 opacity-50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
