"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ExperimentAndPiloting: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Experiment & Piloting</h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10">
        <p className="text-gray-800 text-sm mb-4 font-semibold">
          Since its inception in 1995 as a research and development organization, Waste Concern has been involved in the experiment and piloting of appropriate technologies for the waste and sanitation sectors.
          Over the last Twenty Nine years, Waste Concern has developed and disseminated the following technologies suitable for Bangladesh and similar economies in the Asia Pacific region:
        </p>
        <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 font-semibold pl-5">
          <li>Developed 'box type' composting method with passive and forced aeration system</li>
          <li>Developed low cost solution for 'composting' process in rural areas</li>
          <li>
            Developed low cost 'Trickling filter' method for the treatment of leachate/percolates generated from the following:
            faecal sludge and slurry from septic tanks, pit latrines, and biogas digesters
          </li>
          <li>Developed co-composting method for treatment of dewatered sludge and municipal organic waste</li>
          <li>Developed barrel type composting method for slums and low income settlements</li>
          <li>Conducted research and experiments on production of 'bio fuel' from used cooking oil</li>
          <li>Conducted research and operated 'solar irrigation' for agriculture</li>
          <li>
            Conducted research on 'biogas to electricity' from different types of municipal waste feedstock
          </li>
          <li>
            Conducted research on 'biogas production and electricity generation from co-fermentation' of municipal waste with faecal sludge
          </li>
          <li>
            Conducted research and field trials regarding 'application of compost in different crops'
          </li>
          <li>
            Developed appropriate technologies for 'grey and black water treatment system' for communities and institutions as well as small towns
          </li>
          <li>
            Developed decentralized waste water treatment systems for low income settlements
          </li>
          <li>
            Developed integrated landfill and resource recovery facility for secondary and coastal towns
          </li>
          <li>
            Developed method for 'large scale composting' facility with low land foot print
          </li>
          <li>
            Developed “methodology to account for emission reductions from composting of municipal solid waste” which is approved by UNCCC
          </li>
          <li>
            Developed methodology for quantifying co-benefits from recycling of municipal organic waste
          </li>
          <li>
            Conducted research on 'used lead acid battery recycling' in Bangladesh
          </li>
          <li>
            Conducted research and piloted 'eco-toilets' in Bangladesh
          </li>
          <li>Conducted research on 'soiled plastic waste recycling'</li>
        </ul>

        <p className="text-gray-800 text-sm mt-4 font-semibold mb-4">
          Through the research and development services provided by Waste Concern, governments, municipalities, communities, and private enterprises have made financial gains as well as contributed towards reduction of environmental pollution and its associated health and occupational risks.
        </p>

        <h3 className="text-left text-3xl font-bold text-[#00274D] mb-5">Current Research Areas</h3>
        <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 font-semibold pl-5">
          <li>Conducting research, development, and implementation of 'large scale waste to energy' facility using Anaerobic  Digestion Technology with high biogas production and low land foot print</li>
          <li>Conducting research on Co-treatment of faecal sludge and solid waste</li>
          <li>Conducting research and experiments on 'refuse derived fuel (RDF)'' from municipal waste</li>
          <li>Conducting research and experiment on diesel production from single use plastic waste</li>
          <li>Designing low cost sanitation systems for integration of non-networked sanitation system with networked system for low income and hard to access areas</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default ExperimentAndPiloting;
