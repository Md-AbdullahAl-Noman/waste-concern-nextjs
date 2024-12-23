//Fifth
"use client";
import React from "react";

const SolidWasteManagementSection: React.FC = () => {
  return (
    <section className="bg-[#F5F2EB] py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              poster="/images/solid-waste-management.jpg"
            >
              <source
                src="/videos/solid-waste-management.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00274D]">
              Solid Waste Management Rules
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Ministry of Environment, Forest and Climate Change (MoEF&CC) has
              issued Solid Waste Management Rules in 2021. Key features of the
              rules are (i) source segregation of waste, (ii) responsibility of
              different stakeholders, (iii) standards for composting, anaerobic
              digestion, and waste-to-energy projects, (iv) guidelines for
              landfilling, and (v) standards for the placement of secondary
              storage bins, and primary and secondary collection of waste. The
              rules also mention promoting the 3Rs, site selection criteria for
              landfills, recycling plants, and applicable environmental
              standards. The rules can be downloaded from the Department of
              Environment website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolidWasteManagementSection;
