"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ClinicalManagementSystem: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Clinical and Hazardous Waste Management
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
          National Study on the Disposal of Empty Pesticide Containers in Bangladesh.
          </p>
          <p>
          Preparation of Inventory of Hazardous Waste in Bangladesh
          </p>
          <p>
          Design of hospitals and clinical waste management system in clinics and hospitals in Dhaka
          </p>
          <p>Development of bio-medical waste management manual for hospital and clinics in Bangladesh
          </p>
          <p>
          Study on lead-acid battery recycling in Bangladesh
          </p>
          <p>Development of environmental management system for hospitals and clinics.</p>
          <p>Feasibility Study for the Establishment and Operation of a Common/ Central Treatment Facility (CTF) for Health Care Waste in Pokhara City, Nepal under Public Private Partnerships (PPP) Arrangements</p>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClinicalManagementSystem;
