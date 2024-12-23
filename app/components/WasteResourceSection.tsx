//sixth
"use client";
import React from "react";

const WasteResourceSection: React.FC = () => {
  return (
    <section className="bg-[#F5F2EB] py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4">
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#00274D] mb-2">
            Waste is a Resource
          </h2>
          <p className="font-semibold text-gray-700 mb-2">
            We are Active in the Following Fields:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-0">
            <li>Solid Waste Management and Resource Recovery</li>
            <li>Clinical and Hazardous Waste Management</li>
            <li>Sanitation and Faecal Sludge Management</li>
            <li>Waste Water Treatment</li>
            <li>Urban Environmental Management</li>
            <li>Municipal Services Planning</li>
            <li>Feasibility Study</li>
            <li>
              Engineering Design of Waste and Sanitation Infrastructures
            </li>
            <li>Data Analytics and Geographic Information System (GIS)</li>
            <li>Environmental & Social Impact Assessment</li>
            <li>Environmental Management System</li>
            <li>Climate Change (Mitigation & Adaptation)</li>
            <li>Capacity Building and Training</li>
            <li>Laboratory Testing Facility</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/waste-management-paradigm.jpg"
            alt="Waste Management Paradigm"
            className="w-full h-auto max-w-[600px] border border-gray-200 shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WasteResourceSection;
