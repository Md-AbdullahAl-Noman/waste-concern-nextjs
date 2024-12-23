"use client";
import React, { useState, useEffect } from "react";

const milestones = [
  { year: "1995", description: "Waste Concern starts its operation Waste Concern Initiated the model of a Decentralized community-based composting initiative in Bangladesh" },
  { year: "2000", description: "Waste Concern Consultants starts operation services on waste management, sanitation, climate change mitigation" },
  { year: "2005", description: "ESCAP started to replicate the model of Waste Concern in Vietnam , Sri Lanka. Replications of this model in cities/towns of Bangladesh" },
  { year: "2005", description: "WasteConcern and worldwide Recycling BV jointly prepares baseline methodology for avoided methane emission from organic waste through composting. The methodology was approved by UNFCCC" },
  { year: "2008", description: "Waste Concern Established Globally first compost plant based on carbon trading in Dhaka, Bangladesh" },
  { year: "2009", description: "ESCAP partnership with Waste Concern launched a regionl project called Pro-poor and sustainable Solid Waste management in Secondary Cities and Small towns in Asian-Pacific" },
  { year: "2012", description: "ESCAP in partnership with waste concern launched a project entitled Co-composting of municipal Solid waste and FS for Agriculture in Kustia city, Bangladesh" },
  { year: "2016", description: "ESCAP in partnership with waste concern initiated co-composting and biogas to electricity general project using organic waste and faecal sludge in Malang Regency and Jambi city, Indonesia." },
  { year: "2016", description: "Asian Development Bank financed a Regional Landfill having composing, biogas to electricity, faecal sludge recycling, and controlled landfill using the concept of IRRC" },
  { year: "2020", description: "Waste concern consultants initiated legacy waste management in Laos and integrated landfill and resource recovery approach" },
  { year: "2022", description: "WCC designed decentralized waste water system of LICs of Chittagong city corporation" },
  { year: "2023", description: "WCC designed integrated landfill and resource recovery project and regional  waste treatment facilities for 26 towns in Bangladesh. The project was funded bu AIIB" },
];

const MilestoneSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= milestones.length - (itemsToShow - 1) ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : milestones.length - itemsToShow
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
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="w-[25%] flex-shrink-0 flex flex-col items-center group relative"
              >
                {/* Circle with  Zoom-Out Effect */}
                <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#00274D] transform scale-100 group-hover:scale-75 group-hover:opacity-0 transition-all duration-500">
                  <span
                    className="text-lg font-semibold text-white transform transition-all duration-500 group-hover:translate-y-[-1rem] group-hover:text-2xl group-hover:text-[#00274D]"
                  >
                    {milestone.year}
                  </span>
                </div>

                {/* Title with Slide-Up Animation */}
                <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-20 transition-all duration-500 text-sm text-gray-700 max-w-xs text-center">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex-shrink-0 absolute right-0">
          <button
            onClick={handleNext}
            className="text-[#00274D] text-5xl w-14 h-14 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed border-none focus:outline-none"
            disabled={currentIndex + itemsToShow >= milestones.length}
          >
            &#8250; 
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center gap-2">
        {milestones.slice(0, milestones.length - (itemsToShow - 1)).map((_, index) => (
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

export default MilestoneSlider;
