"use client";
import React from "react";

const TrendingCoursesList = () => {
  const trendingCourses = [
    {
      id: 1,
      title: "The Pelvic Floor and Flat Belly Formula",
      students: "68,421",
      category: "Fitness"
    },
    {
      id: 2,
      title: "Live Workshop: Expert-Led Fascia Stretches",
      subtitle: "to Eliminate Sitting Damage",
      students: "54,932",
      category: "Wellness"
    },
    {
      id: 3,
      title: "Vagus Nerve Belly Reset",
      students: "47,105",
      category: "Health"
    },
    {
      id: 4,
      title: "Psoas Stretches to Relieve Lower Back Pain",
      students: "42,876",
      category: "Fitness"
    },
    {
      id: 5,
      title: "Clearing Physical and Emotional Clutter",
      students: "39,254",
      category: "Mental Health"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Trending Courses
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our most popular courses that are helping thousands improve their well-being
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-sm">
        <ol className="space-y-3 sm:space-y-4">
          {trendingCourses.map((course) => (
            <li key={course.id}>
              <a 
                href="#" 
                className="group flex items-center bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xl sm:text-2xl mr-4 sm:mr-6 group-hover:bg-indigo-200 transition-colors duration-200">
                  {course.id}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {course.title}
                        {course.subtitle && (
                          <span className="block sm:inline sm:ml-1">{course.subtitle}</span>
                        )}
                      </h3>
                      <span className="inline-flex items-center mt-1 text-sm text-gray-500">
                        <span className="inline-block px-2 py-1 mr-2 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                          {course.category}
                        </span>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {course.students} students
                      </span>
                    </div>
                    
                    <div className="hidden sm:flex items-center mt-2 sm:mt-0">
                      <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200">
                        View Course
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            Explore All Trending Courses
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCoursesList;
