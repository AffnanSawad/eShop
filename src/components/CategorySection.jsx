import React from 'react';
import { categoryCardsData } from '../assets/categoryCardsDara'; // Ensure this path and filename are correct

const CategorySection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24"> {/* Softer background, increased padding */}
      <div className="container mx-auto">
        {/* Optional: Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
          Shop By <span className="text-red-600">Categories</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid layout and gap */}
          {categoryCardsData.map((card, index) => (
            <div
              key={index}
              className={`relative h-72 rounded-2xl overflow-hidden shadow-xl
                          ${card.bgColor}
                          transform hover:scale-103 transition-all duration-500 ease-in-out
                          cursor-pointer group border-4 border-transparent hover:border-red-500`} // Enhanced hover border
            >
              {/* Background Image */}
              <img
                src={card.imageSrc}
                alt={card.altText}
                // Based on visual evidence, the people in the images appear to be:
                // Man looking thoughtful: Appears to be an adult male.
                // Woman smiling at phone: Appears to be an adult female.
                // Child playing: Appears to be a young female.
                className="absolute inset-0 w-full h-full object-cover object-right-bottom  group-hover:scale-110 transition-transform duration-700 ease-in-out" // More pronounced and slower image zoom
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 text-white z-10"> {/* Adjusted positioning */}
                <h3 className="text-4xl font-extrabold mb-2 drop-shadow-lg leading-tight"> {/* Larger, bolder title */}
                  {card.title}
                </h3>
                <p className="text-lg font-semibold opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  View All {/* Clearer "View All" */}
                </p>
              </div>

              {/* Clickable Overlay for the entire card */}
              <a href={card.link} className="absolute inset-0 z-20" aria-label={`View all ${card.title} products`}>
                {/* No content needed here as it's purely for making the card clickable and accessible */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;