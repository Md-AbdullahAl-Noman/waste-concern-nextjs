"use client";
import React from "react";

const TimelineSection: React.FC = () => {
  const timelineData = [
    { year: "1995-2000", link: "/timeline/1995-2000" },
    { year: "2001-2005", link: "/timeline/2001-2005" },
    { year: "2006-2010", link: "/timeline/2006-2010" },
  ];

  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/background-image.jpg")' }} 
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Timeline Header */}
      <div className="relative z-10 mb-16">
        <h1 className="text-6xl font-bold text-white opacity-40">Timeline</h1>
      </div>

      <div className="relative z-10 w-2/3 flex items-center justify-between ">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white"></div>

        {/* Timeline Dots and Titles */}
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-800 absolute top-1/2 transform -translate-y-1/2"></div>

            {/* Year Title */}
            <a
              href={item.link}
              className="mt-12 text-white font-medium text-lg hover:text-blue-500 transition duration-300"
            >
              {item.year}
            </a>


            {item.year === "2001-2005" && (
              <a
                href={item.link}
                className="text-blue-400 text-sm underline hover:text-blue-500"
              >
                See project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;

