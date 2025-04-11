"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Expert-Led Fascia Stretches",
      subtitle: "Eliminate Sitting Damage",
      description:
        "Did you know that prolonged sitting causes fascia adhesions, restricted mobility, and chronic pain? Find out how to release deep-seated tension and free your body from aches and pain.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/411e578e9a8a9fbf3c135afb53c5ed2e2f5caf40?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      bgColor: "bg-red-200",
    },
    // Add more slides here if needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full mb-8 px-4 sm:px-0">
      <article className={`${currentSlideData.bgColor} rounded-3xl overflow-hidden`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-stone-500 leading-tight mb-4">
                {currentSlideData.title}
                <span className="block mt-2">{currentSlideData.subtitle}</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                {currentSlideData.description}
              </p>

              <button className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-gray-900 bg-white rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <figure className="relative aspect-square md:aspect-auto w-full h-[300px] md:h-[400px]">
                <Image
                  src={currentSlideData.image}
                  className="object-cover rounded-xl"
                  alt="Course preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none pointer-events-auto transition-all duration-200"
          aria-label="Previous slide"
        >
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/981e84bd73b03ed2520b0daafc648122f65318aa?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
            className="w-6 h-6"
            alt="Previous"
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none pointer-events-auto transition-all duration-200"
          aria-label="Next slide"
        >
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da85c95e229f26842dcea814e49747da32f85a6?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
            className="w-6 h-6"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
