"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const capacityBuilding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] ">
      <Header />

      <div className="bg-[#D4CFC4] pl-28 pr-8 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Capacity Building</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-12 text-black ">
        <p className="text-sm mb-4">
        Waste Concern is actively involved in training a wide range of target groups, specifically focusing on solid waste management, resource recovery, wastewater treatment, medical waste management, and climate change mitigation.
        </p>

       

        <p className="text-sm mb-6">
        We have developed two training modules on solid waste management and resource recovery. Waste Concern has utilized these training modules for workshops in Dhaka and other Bangladeshi cities, as well as for international participants. One module is targeted at municipal and other local governmental officials, while the second module is targeted at the private sector. Apart from solid waste management, we have training modules on medical waste management, waste water treatment, FSM, business plan development, GHG emission calculation, and ESIA for waste and sanitation projects.
        </p>

        
      </div>

      <Footer />
    </div>
  );
};

export default capacityBuilding;
