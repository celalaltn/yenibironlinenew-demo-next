"use client";
import React, { useState } from "react";

const FeaturedContent = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "courses", label: "Courses" },
    { id: "inspirations", label: "Inspirations" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Check out these featured courses, inspirations, and more.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                ? "bg-indigo-100 text-indigo-800 border border-indigo-200"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Featured Course Card */}
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <a href="#" className="block h-full">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fcd26aad6971dc51a7d073c9e15c893c58a94?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                alt="The Vagus Nerve Miracle"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                  COURSE
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-xs text-gray-600">Fitness & Body Self-Care</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                The Vagus Nerve Miracle
              </h3>
              <p className="text-gray-600 mb-4">By Melissa Romano</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>84,709 students</span>
              </div>
            </div>
          </a>
        </div>

        {/* Inspiration Card */}
        <div className="relative rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b412a56ec30d66c9b24aa3a94b9207bad7677f?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
            className="w-full h-full object-cover absolute inset-0"
            alt="Prayer background"
          />
          <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white min-h-[300px] sm:min-h-[400px]">
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                INSPIRATION
              </span>
              <p className="mt-2 text-sm font-medium">April 11, 2025</p>
              <h3 className="mt-1 text-lg font-medium">The Power of Prayer</h3>
            </div>
            
            <blockquote className="text-center my-4">
              <p className="text-2xl sm:text-3xl font-bold leading-tight">
                With each prayer, we unlock<br />
                the boundless potential for<br />
                healing, growth, and<br />
                transformation.
              </p>
            </blockquote>
            
            <div className="text-center">
              <p className="text-sm font-medium">Inspirations by DailyOM</p>
              <button className="mt-3 inline-flex items-center px-4 py-2 border border-white/30 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-200">
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            category: "Mental Health",
            title: "Meditation for Beginners",
            instructor: "Sarah Johnson",
            students: "45,321",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1c9c2f4d0b1e9c8b9f4e5d2c1f0e3d6a7b8c9d2?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
          },
          {
            category: "Fitness",
            title: "Yoga for Stress Relief",
            instructor: "Emma Davis",
            students: "38,752",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2c8d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
          },
          {
            category: "Nutrition",
            title: "Mindful Eating",
            instructor: "Michael Brown",
            students: "29,487",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
          },
          {
            category: "Self-Growth",
            title: "Self-Discovery Journey",
            instructor: "Jennifer Wilson",
            students: "32,145",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3?placeholderIfAbsent=true&apiKey=6b267fab1e0247f0ae3ff3bd3d42ebf2"
          }
        ].map((course, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <a href="#" className="block h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  alt={course.title}
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                  {course.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">By {course.instructor}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{course.students} students</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
          View All Featured Content
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedContent;
