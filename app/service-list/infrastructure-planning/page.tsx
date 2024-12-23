"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const InfrastructurePlanning: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Infrastructure Planning
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
          Siting locations for solid waste and waste water management, treatment and recycling related infrastructures using satellite image and GIS maps.
          </p>
          <p>
          Preparation of optimum routing system for efficient waste collection and transportation system using GPS and GIS.
          </p>
          <p>
          Planning and designing of integrated landfill sites with controlled landfill with liner and vent system, compost plant, anaerobic digestion system, faecal sludge treatment system along with Decentralized Water Treatment System (DEWATS).
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InfrastructurePlanning;
