"use client";
import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Link from "next/link";
import StatsSection from "../components/StatsSection";

const services = [
  { title: "Solid Waste Management and Resource Recovery", link: "/service-list/waste-management" },
  { title: "Environmental Sanitation and Faecal Sludge Management", link: "/service-list/sludge-management" },
  { title: "Industrial Pollution Mitigation and Environmental Management System", link: "/service-list/environmental-management-system" },
  { title: "Clinical and Hazardous Waste Management", link: "/service-list/clinical-and-hazardous-waste-management" },
  { title: "Environmental Impact Assessment", link: "/service-list/environmental-impact-assessment" },
  { title: "Infrastructure Planning", link: "/service-list/infrastructure-planning" },
  { title: "Energy Efficient Building Design and Sustainable Human Settlement Planning", link: "/service-list/settlement-planning" },
  { title: "Training & Capacity Building", link: "/service-list/training-capacity-building" },
];

const ServicesSection: React.FC = () => {
  return (
    <>
      <Header />
        {/* Top Section */}
        <div className="bg-[#D4CFC4] px-6 py-3 pl-32">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Our Services
        </h1>
      </div>

      {/* Main Content */}
      <section className="bg-[#F5F2EB] py-16">
        <div className="max-w-screen-xl mx-auto">

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-[#D4CFC4] transition-shadow duration-300"
              >
                
                <h3 className="text-sm font-semibold text-[#00274D] mb-6">
                  {service.title}
                </h3>

                
                <Link
                  href={service.link}
                  className="absolute bottom-4 right-4 text-green-700 hover:text-green-600 transition-all duration-300"
                >
                  <img
                    src="/logo/next.png"
                    alt="Next Logo"
                    className="w-6 h-6"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F5F2EB] py-8 mt-20 "><StatsSection/></div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServicesSection;
