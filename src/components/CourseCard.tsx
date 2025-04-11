"use client";
import React from "react";

interface CourseCardProps {
  imageSrc: string;
  category: string;
  title: string;
  instructor: string;
  students?: string;
  variant?: "standard" | "large";
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  category,
  title,
  instructor,
  students,
  variant = "standard",
}) => {
  const isLarge = variant === "large";

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      <a href="#" className="block h-full">
        <div className="relative">
          <div className={`aspect-video ${isLarge ? 'sm:aspect-[16/10]' : 'sm:aspect-[4/3]'} overflow-hidden rounded-t-2xl`}>
            <img
              src={imageSrc}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              alt={title}
            />
          </div>
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        <div className={`p-5 ${isLarge ? 'sm:p-6' : 'sm:p-5'}`}>
          <div className="space-y-2">
            <h3 className={`font-semibold text-gray-900 line-clamp-2 ${isLarge ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
              {title}
            </h3>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">{instructor}</p>
            </div>

            {students && (
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{students} students</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-500 transition-colors">
                View Course
              </span>
              <svg className="w-5 h-5 text-indigo-600 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default CourseCard;
