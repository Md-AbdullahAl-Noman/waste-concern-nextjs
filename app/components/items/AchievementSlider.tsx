"use client";
import React, { useState, useEffect } from "react";

const achievements = [
  { year: "1999", description: "The BUET Civil Engineering Department has incorporated Waste Concern's work into their coursebook" },
  { year: "2005", description: "University of Nevarra, Spain prepares a case study on Waste Concern for its graduate study program" },
  { year: "2006", description: "Stanford Graduates School of Business prepares case study on Waste Concern's approaches of waste management" },
  { year: "2010", description: "C40 CITIES referenced Waste Concern's work as good practical guideline" },
  { year: "2016", description: "C40 CITIES referenced Waste Concern's as good practical guideline " },
  { year: "2017", description: "Waste Concern's Case study is published in the book entitled 'Innovation and scaling for Impact'. The book is published in Standard Business work" },
  { year: "2017", description: "Waste Concern's work is rent on online courses offered by EWAG on Sanitation , Water and Solid Waste for Development" },
  { year: "2019", description: "Waste Concern's Case study is published in the book 'Managable Sustainable Business: An executive education case and text book" },
];

const AchievementSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= achievements.length - (itemsToShow - 1) ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : achievements.length - itemsToShow
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full bg-[#F5F2EB] py-10">
      <div className="container mx-auto px-6 text-center flex items-center justify-between">
       
        <div className="flex-shrink-0 absolute left-0">
          <button
            onClick={handlePrevious}
            className="text-[#00274D] text-5xl w-14 h-14 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed border-none focus:outline-none"
            disabled={currentIndex === 0}
          >
            &#8249; 
          </button>
        </div>

        {/* Slider Division */}
        <div className="relative overflow-hidden flex-1 mt-10">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-0"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {achievements.map((achievements, index) => (
              <div
                key={index}
                className="w-[25%] flex-shrink-0 flex flex-col items-center group relative"
              >
                <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#00274D] transform scale-100 group-hover:scale-75 group-hover:opacity-0 transition-all duration-500">
                  <span
                    className="text-lg font-semibold text-white transform transition-all duration-500 group-hover:translate-y-[-1rem] group-hover:text-2xl group-hover:text-[#00274D]"
                  >
                    {achievements.year}
                  </span>
                </div>

                {/* Title with Slide-Up Animation */}
                <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20 transition-all duration-500 text-sm text-gray-700 max-w-xs text-center">
                  {achievements.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex-shrink-0 absolute right-0">
          <button
            onClick={handleNext}
            className="text-[#00274D] text-5xl w-14 h-14 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed border-none focus:outline-none"
            disabled={currentIndex + itemsToShow >= achievements.length}
          >
            &#8250; 
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center gap-2">
        {achievements.slice(0, achievements.length - (itemsToShow - 1)).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-[#00274D]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AchievementSlider;
