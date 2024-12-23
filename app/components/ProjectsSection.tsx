"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Strengthening Medical Waste Management in the Greater Dhaka Area",
    image: "/our-projects/project1.png",
    link: "/our-projects/medical-waste-management",
  },
  {
    title: "Consultancy Services for Solid Waste Management under MDS Consultant of City Region Development Project",
    image: "/our-projects/project2.jpg",
    link: "/our-projects/consultancy-services",
  },
  {
    title: "Promotion of 3R (Reduce, Reuse & Recycle) Principles in the Solid Waste Management Sector (SWM) in Bangladesh",
    image: "/our-projects/project3.jpg",
    link: "/our-projects/promotion",
  },
  {
    title: "Methane Emission from Matuail and Amin Bazar Landfill Site and Options for Mitigation",
    image: "/our-projects/project4.jpg",
    link: "/our-projects/MethaneEmission",
  },
  {
    title: "Integrated Urban Water Management at the Centre of Municipal Public Services in Bangladesh",
    image: "/our-projects/project5.jpg",
    link: "/our-projects/WaterManagement",
  },
  {
    title: "Technical Assistance Project on Integrated Solid Waste Management Improvement Project (ISWMIP)",
    image: "/our-projects/project6.jpg",
    link: "/our-projects/technical-assistance-project",
  },
  {
    title: "Study of Feasibility and Preparation of Designs for a Pilot Fecal Sludge Management System in Chattogram City",
    image: "/our-projects/project7.png",
    link: "/our-projects/study-of-feasibility",
  },
];

const ProjectsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const itemsToShow = 4; // Number of visible cards
  const totalItems = projects.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 >= totalItems - (itemsToShow - 1) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#F5F2EB] pt-24 pb-10 relative">
  <div className="max-w-screen-xl mx-auto">
    {/* Header Section */}
    <div className="flex items-center justify-center mb-10">
      <div className="hidden sm:block w-1/6 h-[1px] bg-blue-950"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#00274D] mx-6">
        Our Projects
      </h2>
      <div className="hidden sm:block w-1/6 h-[1px] bg-blue-950"></div>
    </div>

    {/* Slider Container */}
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out gap-8"
        style={{
          transform: `translateX(-${startIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative min-w-[calc(100%/4-2rem)] bg-white overflow-hidden border border-gray-300"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 ">
                  <Link href={project.link}>
                    <h3 className="text-sm md:text-base font-semibold text-[#00274D] mb-20 cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  <Link
                    href={project.link}
                    className="absolute bottom-4 right-4 text-[#1B5E20] hover:text-lime-600 transition-all"
                  >
                    <i className="fas fa-arrow-right text-lg"></i>
                  </Link>
                </div>
             
             <div className="absolute bottom-4 right-4  ">
                    <button className="w-8 h-8">
                      <img
                        src="logo/next.png"
                        alt="Next Logo"
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation Buttons */}
    <div>
      <button
        className="absolute top-1/2  left-4 transform -translate-y-1/2 text-blue-950 text-5xl flex items-center justify-center border-none focus:outline-none z-20"
        aria-label="Previous"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2  right-4 transform -translate-y-1/2 text-blue-950 text-5xl flex items-center justify-center border-none focus:outline-none z-20"
        aria-label="Next"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
    
    {/* Pagination */}
    <div className="mt-6 flex justify-center gap-2">
      {Array.from({ length: totalItems - (itemsToShow - 1) }).map(
        (_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === startIndex ? "bg-blue-950" : "bg-gray-300"
            }`}
          ></button>
        )
      )}
    </div>
  </div>
</section>

  );
};

export default ProjectsSection;
