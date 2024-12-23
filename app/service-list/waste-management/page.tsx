"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SolidWasteManagement: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Solid Waste Management and Resource Recovery
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10 text-black text-sm">
        <section className="space-y-8">
          
          <div>
            <h2 className="text-sm font-bold">Integrated Resource Recovery Center (IRRC)</h2>
            <p className="text-sm ">
              IRRC is suitable for small and medium-sized towns. 85-90% of the incoming waste from
              the community can be converted into economic resources (such as compost, biogas,
              recyclables, Refuse Derived Fuel (RDF)) within the IRRC. In partnership with UN-ESCAP,
              Waste Concern is replicating the IRRC model in several secondary cities and small
              towns of Vietnam, Sri Lanka, Nepal, Bhutan, Cambodia & Indonesia. In partnership with
              the Government of Bangladesh (GoB) and international development partners, Waste
              Concern is replicating the IRRC model in 64 Districts of Bangladesh.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold">
              Integrated Landfill & Resource Recovery Center (ILRRC)
            </h2>
            <p className="text-sm ">
              Waste Concern Consultants initiated the concept of ILRRC in Jessore municipality and
              few coastal towns of Bangladesh with the support from ADB and Local Government and
              Engineering Department (LGED). ILRRC is initiated to tackle the problem of pollution
              from indiscriminate disposal of solid waste in open dumps. ILRRC facility consists of
              anaerobic digestion plant, composting plant, inorganic waste recycling unit, faecal
              sludge treatment plant, leachate treatment unit and controlled landfill area. ILRRCs
              shall be operated by private sector.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold">Energy Recovery from Waste</h2>
            <p className="text-sm ">
              Conducting R&D in collaboration with Bangladesh University of Engineering and
              Technology (BUET) to look at the opportunity of generating energy (biogas) from
              slaughterhouse waste, municipal waste and faecal sludge. Conducted study on solid
              Refuse Derived Fuel (RDF) production from soiled plastic, fabric and paper as a
              substitute of coal. Conducted a study on use of dried faecal sludge as solid fuel.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold">
              Waste Management for Low-income Settlements and Rural Areas
            </h2>
            <p className="text-sm ">
              Helping poor communities with low-cost simple solutions to solve waste and sanitation
              problems. Promoting low-cost simple Barrel Type Composting in slums in Bangladesh.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolidWasteManagement;
