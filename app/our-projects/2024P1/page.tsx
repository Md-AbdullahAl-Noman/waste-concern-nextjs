"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IntegratedWaterManagement: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
          Integrated Urban Water Management at the Centre of Municipal Public Services
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-bold">
              Bremen Overseas Research and Development Association (BORDA) - Liaison Office (LO)
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className=" text-sm leading-6">
            This project is based on replication, innovation, integration and dissemination. The partner towns for the project
            are Savar municipality and Kushtia municipality. The project would focus on solid waste and wastewater
            management for both the municipalities. Apart from the partner towns there will be a few associate towns in
            which the soft components are expected to take place. As in, replication of multiple tools, SFD/WFD, would be
            applied to associate towns. Climate Action Plan is a significant document for a disaster-stricken country like
            Bangladesh. Climate action plan for the partner towns would be prepared. This would identify the factors for
            making the municipality resilient to climate change. This would also take into account the issue of gender
            sensitivity.
          </p>

          <div className="text-sm font-extrabold mt-6">
            <p>
              Location:&nbsp;
              <span className="font-medium">Bangladesh</span>
            </p>
            <p>
              Period:&nbsp;
              <span className="font-medium">2024-2026</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntegratedWaterManagement;
