"use client";
import React from "react";
import Link from "next/link"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const labFacilities = [
  {
    image: "/lab/Spectrophotomete.png",
    title: "Spectrophotometer VIS",
  },
  {
    image: "/lab/Analytical-Balance.png",
    title: "Analytical Balance",
  },
  {
    image: "/lab/Atomic-Absorption-Spectrophotometer.png",
    title: "Atomic Absorption Spectrophotometer",
  },
  {
    image: "/lab/BOD-Incubetor.png",
    title: "BOD incubetor",
  },
  {
    image: "/lab/COD-Digestion-Unit2.png",
    title: "COD Digestion Unit",
  },
  {
    image: "/lab/Stirrer.png",
    title: "Magnetic Stirrer",
  },
  {
    image: "/lab/COD-Meter.png",
    title: "COD Meter",
  },
  {
    image: "/lab/Compressor-Unit.png",
    title: "Compressor unit",
  },
  {
    image: "/lab/Distillation-System-with-Programming.png",
    title: "Distillation System with Programming",
  },
  {
    image: "/lab/Distillation-Unit.png",
    title: "Distillation Unit",
  },
  {
    image: "/lab/Portable Multi Gas Detector with Built in Pump.png",
    title: "Portable Multi Gas Detector with Built in Pump",
  },
  {
    image: "/lab/DO-Meter2.png",
    title: "DO meter",
  },
  {
    image: "/lab/Ozone-Meter.png",
    title: "Ozone meter",
  },
  {
    image: "/lab/pH-Meter.png",
    title: "pH Meter",
  },
  {
    image: "/lab/Sound-Level-Meter.png",
    title: "Sound level Meter",
  },
  {
    image: "/lab/Turbidity-Meter.png",
    title: "Turbidity Meter",
  },
  {
    image: "/lab/Flame.jpg",
    title: "Flame photometer",
  },
  {
    image: "/lab/Electric.jpg",
    title: "Electric Oven 28L Binder",
  },
  {
    image: "/lab/Landfill Gas Analyzer.png",
    title: "Landfill Gas Analyzer",
  },
  {
    image: "/lab/picture2.jpg",
    title: "Mechanical top loading balance",
  },
  {
    image: "/lab/Picture3.jpg",
    title: "Lux Meter",
  },
  {
    image: "/lab/Temparature-Meter.png",
    title: "Digital Thermometer",
  },

];

const LabFacilities = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-36 pr-30 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Lab Facilities</h1>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-20 py-6 text-gray-800">
        <p className="mt-4 ]">
          Waste Concern provides laboratory test facilities for both public and
          private sectors upon payment. This laboratory is endorsed by the
          Department of Environment (DoE), Bangladesh.
        </p>
        <p className="mt-2">
          To view a list of the equipment available within the laboratory,
          please{" "}
          <Link
            href="/lab/Lab1.pdf"
            target={"_blank"}
            className="text-red-500 underline hover:text-red-700"
          >
            click here
          </Link>
          .<br />
          To view a list of the test facilities available at Waste Concern
          Laboratory, please{" "}
          <Link
            href="/lab/Lab2.pdf"
            target={"_blank"}
            className="text-red-500 underline hover:text-red-700"
          >
            click here
          </Link>
          .
        </p>
      </div>

      {/* Equipment Grid */}
      <main className="container mx-auto px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labFacilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center text-center bg-white p-4 shadow-lg rounded-lg h-80"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-3/4 h-40 object-contain"
              />
              <h2 className="text-[#00274D] font-medium text-lg mt-auto">
                {facility.title}
              </h2>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LabFacilities;
