"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MethaneEmission: React.FC = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
        Methane Emission from Matuail and Amin Bazar Landfill Site and Options for Mitigation
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="container mx-auto space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-bold">Department of Environment (DoE), MoEFCC</span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-base mt-4 leading-6 text-sm">
            The objective of this study was to quantify the methane gas emission from the Amin Bazar and Matuail Landfills and differentiate it from the report published by GHGSat Inc. The primary goal of the project is to calculate landfill methane emissions using the First Order Decay Model (FODM). The methodology used in the study was centered around collecting these data from the two landfill sites, along with the values of the air quality index. A number of activities were carried out during the field survey; they are shown below:
          </p>
          <ul className="list-disc ml-8 text-sm space-y-2">
            <li><span className="font-bold">Total Incoming waste:</span> Weighbridge data was collected from the landfills</li>
            <li><span className="font-bold">Waste Composition Survey:</span> During the survey every day, about 12 Tons of municipal waste were collected from every 10th incoming truck coming to the Amin Bazar landfill site. Altogether, 600kg of samples were collected from 20 randomly selected incoming trucks. These 12-ton samples were extensively segregated and analyzed to distinguish between organic and inorganic waste.</li>
            <li><span className="font-bold">Methane Concentration Measurement:</span> To assess methane emissions from the landfill, the GA 2000 Plus Landfill Gas Analyzer was used. Emissions data were collected from 27 locations over a period of three consecutive days.</li>
            <li><span className="font-bold">Moisture Content Measurement:</span> Waste samples were collected from the landfill site and to the laboratory. The samples were oven-dried for several hours until any moisture was left in the waste.</li>
            <li><span className="font-bold">Air Quality Measurement:</span> The Air Quality Index (AQI) in Amin-Bazar was measured across four buffer zones (200 m, 250 m, 500 m, and 1000 m) to assess various air particle concentrations, covering 12 distinct samples with Portable Multi-gas Detector devices. Parameters included CO, SO₂, NO₂, NH₃, CH₄, PM2.5, and PM10, accounting for environmental factors like rainfall and wind direction.</li>
          </ul>
        </section>

        {/* Images Section */}
        <section className="mt-12 flex flex-wrap justify-center gap-2">
          <img
            src="/our-projects/P8.jpg"
            alt="Excavator on landfill"
            className="w-[30%] object-cover shadow-md "
          />
          <img
            src="/our-projects/P9.jpg"
            alt="Survey at landfill"
            className="w-[30%] object-cover shadow-md "
          />
          <img
            src="/our-projects/P10.jpg"
            alt="Measurement process"
            className="w-[30%] object-cover shadow-md "
          />
        </section>

        <div className="container mx-auto px-6 mt-8 text-sm font-extrabold">
        <p className="font-extrabold text-sm  mt-4">
            Location:&nbsp;
            <span className="font-medium">
              Dhaka, Bangladesh
            </span>
          </p>

          <p className="font-extrabold text-sm">
            Period:&nbsp;
            <span className="font-medium">
            July 2023 to December 2023
            </span>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MethaneEmission;
