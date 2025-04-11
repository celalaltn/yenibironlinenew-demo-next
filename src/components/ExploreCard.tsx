import React from "react";

interface ExploreCardProps {
  imageSrc: string;
  title: string;
  description?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ 
  imageSrc, 
  title, 
  description = "Explore our collection of resources to enhance your well-being journey"
}) => {
  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs">
      <a href="#" className="block">
        <div className="relative overflow-hidden aspect-square">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
          <img
            src={imageSrc}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            alt={title}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 className="text-xl font-bold text-white drop-shadow-sm">{title}</h3>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-600">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Updated weekly</span>
            <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors duration-200">
              Explore
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ExploreCard;
