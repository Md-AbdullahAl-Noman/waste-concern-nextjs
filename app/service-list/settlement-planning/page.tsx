"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SettlementPlanning: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Energy Efficient Building Design and Sustainable Human Settlement Planning
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
          Designed ecological village  based on 3R principal in Bangladesh.
          </p>
          <p>
          Designed energy efficient industrial buildings in Bangladesh
          </p>
          <p>
          Designed landscape for various industrial building, residential and institutional buildings.
          </p>
          <p>
          Developed manual for low-income settlement planning
          </p>
          <p>
          Preparation of physical plan for several towns.
          </p>
          <p>Designed  rain water harvesting for several  waste recycling facilities</p>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default SettlementPlanning;
