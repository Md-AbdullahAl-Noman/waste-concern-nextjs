"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EnvironmentalSanitation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Environmental Sanitation and Faecal Sludge Management
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
            Preparation of Sanitation and Drainage Improvement Strategy and Master Plan Project for
            the City of Chittagong
          </p>
          <p>
            Sanitation Action Plan for 30 Municipalities of Bangladesh and Technology Demonstration
            on Faecal. Sludge Management under Third Urban Governance and Infrastructure Improvement
            Project.
          </p>
          <p>
            Sanitation Plan for Four Coastal Towns under Coastal Towns Infrastructure Improvement
            Project.
          </p>
          <p>Preparation of Sanitation Master Plan for Eight Towns in Bangladesh.</p>
          <p>
            Pilot Projects on Solid Waste Management of Environmental Sanitation, Hygiene and Water
            Supply in Urban Slums and Fringes.
          </p>
          <p>
            Design of faecal sludge collection and treatment system for secondary towns of
            Bangladesh. Design of eco-toilets for several towns.
          </p>
          <p>
            Design of waste water treatment and management system for pesticide formulation factory,
            tea garden and pathological laboratory. Design of waste water treatment system for
            secondary.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnvironmentalSanitation;
