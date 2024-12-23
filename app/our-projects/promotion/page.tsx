"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Promotion: React.FC = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
          Promotion of 3R (Reduce, Reuse & Recycle) Principles in the Solid Waste Management Sector (SWM) in Bangladesh
        </h1>
      </div>

      {/* Content Section */}
      <main className="w-full px-0 py-10 text-black">
        <section className="container mx-auto px-6 space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-extrabold">Department of Environment, Government of Bangladesh</span>
          </p>

          <p className="font-bold text-sm font-extrabold">Description of work:</p>
          <p className="text-base mt-4 leading-6 text-sm">
            Under this assignment provided following services: i) Supporting the Ministry of
            Environment Forests and Climate Change (MoEFCC) & Department of Environment (DOE)
            in finalization and approval of SWM Rules through consultative process involving relevant stakeholders;
            ii) To prepare a database on solid waste and its management practices in Bangladesh;
            iii) To map the stakeholders in SWM and recycling trade chain;
            iv) To conduct an assessment study to identify feasible technological options for integrated
            solid waste management.
          </p>
        </section>

        {/* Images Section */}
        <section className="mt-12 ml-24 mr-24">
          <img
            src="/our-projects/P7.png"
            alt=""
            className="w-full object-cover shadow-md mb-6"
          />
        </section>

        <div className="container mx-auto px-6 mt-8 text-sm font-extrabold">
          <p>
            Location:&nbsp;
            <span className="font-medium">Bangladesh</span>
          </p>
          <p>
            Period:&nbsp;
            <span className="font-medium">February 2020 - December 2023</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Promotion;
