"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const projectsInArgentina = [
  {title:"Pilot Project to Create a Scalable Model to Responsibly Manage Solid Waste and Expand Recycling in Argentina and Indonesia",},
];

const ProjectsInArgentina: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
     
      <div className="bg-[#D4CFC4] py-6 px-4">
        <h1 className="text-3xl font-bold text-[#00274D] text-left pl-8">
          Projects in Argentina
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsInArgentina.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[#00274D] font-medium text-base leading-relaxed">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsInArgentina;
