"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EnvironmentalManagementSystem: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Industrial Pollution Mitigation and Environmental Management System
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-gray-800">
        <section className="space-y-6 text-sm font-semibold">
          <p>
          Prepared Environmental Plan for industries.
          </p>
          <p>
          Promote and Support ISO 14001 (EMS) Among Business Sector in Bangladesh. Environmental auditing for several industries.
          </p>
          <p>
          Development of environmental management system (EMS) for different industries leading to ISO-14001 certification.
          </p>
          <p>Industrial pollution control, monitoring and abatement system.</p>
          <p>
          Industrial Waste Management.
          </p>
          <p>
          Environmental Plan for Selected Industries
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EnvironmentalManagementSystem;
