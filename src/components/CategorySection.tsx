"use client";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/874c1bacac387d82f430dec6abbececfed897d6e?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Fitness & Body Self-Care",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/75d069f4cede414030765cc2acaeac4f64cbc676?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Self-Discovery & Growth",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2f031794a17126522e506ac0fcd15da9b78705e9?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Relationships & Family",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/128f6e62046f3f5fc67383322e58cf7b10d63295?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Mental & Emotional Health",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5e1ed5ea78397772c593fa1521b3adde76a405be?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Spiritual & Metaphysical",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1fcd173e516a2eb7cfae62edcc7d17f34a04fc29?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2",
      title: "Live & Virtual Workshops",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Browse Courses by Topic
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          With 400+ courses, there's something for everyone.
          <br className="hidden sm:inline" />
          What do you want to learn today?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((category, index) => (
          <div key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
            <CategoryCard
              imageSrc={category.imageSrc}
              title={category.title}
            />
          </div>
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

export default CategorySection;
