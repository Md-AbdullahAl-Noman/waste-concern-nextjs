"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ImpactAssessment: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Environmental Impact Assessment
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
          Assess the Economic and Environmental Impact of Irrigation by Using More Efficient Pumps with Better Installation Technique.
          </p>
          <p>
          Preparation of initial environmental examination (IEE) and environmental impact assessment (EIA) reports for landfill gas recovery and electricity generation, composting and several urban infrastructure projects.
          </p>
          <p>
          Conducted stakeholders meetings regarding infrastructural projects to discuss environmental implications.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImpactAssessment;
