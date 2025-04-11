"use client";
import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreMoreSection = () => {
  const exploreItems = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2bea4626341865daf91bf19698e9ff7cd0b370bc?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Courses",
      description: "Discover transformative courses designed to enhance your personal growth and well-being."
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c3218a184aef8008326adc0c737b395e2e01c15f?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Inspirations",
      description: "Find daily motivation and spiritual guidance to illuminate your path forward."
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/094947166f878b2ab0959e7fc9109ffda60155e4?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Horoscopes",
      description: "Explore cosmic insights and astrological guidance for your zodiac sign."
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ddba5d6f2fa1285568699104524d7a35a5fa72b4?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Birth Charts",
      description: "Unlock the mysteries of your personal astrology with detailed birth chart analysis."
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6cd838cff5ec35f6ac571b7f42660ffee16a87c?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Articles",
      description: "Read insightful articles on mindfulness, wellness, and spiritual growth."
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Explore More DailyOM
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our diverse collection of resources to support your journey toward wellness and self-discovery
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {exploreItems.map((item, index) => (
          <ExploreCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
          View All Categories
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
