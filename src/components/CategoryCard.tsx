import React from "react";

interface CategoryCardProps {
  imageSrc: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
  return (
    <article className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <a href="#" className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            alt={title}
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">
            {title}
          </h3>
          <div className="mt-2 flex justify-center">
            <span className="inline-flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
              Explore courses
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default CategoryCard;
