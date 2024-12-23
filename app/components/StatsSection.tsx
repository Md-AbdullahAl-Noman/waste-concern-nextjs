"use client";
import React from "react";

const StatsSection: React.FC = () => {
  return (
    <div
      className="relative bg-[#D4CFC4] py-6 px-5 -mt-16 z-20 max-w-screen-xl mx-auto rounded-md shadow-lg"
      style={{ marginBottom: "-60px" }} 
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-[#00274D]">29</h3>
          <p className="text-lg font-medium text-black">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-[#00274D]">113</h3>
          <p className="text-lg font-medium text-black">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-bold text-[#00274D]">13</h3>
          <p className="text-lg font-medium text-black">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
