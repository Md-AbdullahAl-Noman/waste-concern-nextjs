"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/items/Modal";

const models = [
  {
    image: "wasteModel/Model3.jpg",
    title: "Problems Related to Solid Waste in Bangladesh",
    description: "Problems Related to Solid in Bangladesh",
  },
  {
    image: "wasteModel/Model4.jpg",
    title: "Solution to Waste Management Problem: Waste Concern's Approach",
    description: "Waste Concern's innovative solutions to waste management.",
  },
  {
    image: "wasteModel/Model12.jpg",
    title: "Small Scale Compost Plant: Waste Concern's Approach",
    description: "Description about small-scale compost plants.",
  },
  {
    image: "wasteModel/Model5.jpg",
    title: "Medium Scale Compost Plant: Waste Concern's Approach",
    description: "Details on medium-scale compost plants.",
  },
  {
    image: "wasteModel/Model6.jpg",
    title: "Large Scale Compost Plant: Waste Concern's Approach",
    description: "Information about large-scale composting solutions.",
  },
  {
    image: "wasteModel/Model1.jpg",
    title: "Faecal Sludge Management in Kushtia City: A Low Cost Solution",
    description: "Faecal Sludge Management in Kushtia City: A Low Cost Solution",
  },
  {
    image: "wasteModel/Model11.jpg",
    title: "Refuse Derived Fuel (RDF): A Potential Alternative to Fossil Fuel",
    description: "Exploration of RDF as an alternative fuel.",
  },
  {
    image: "wasteModel/Model8.jpg",
    title: "Waste to Energy: Anaerobic Digestion (Biogas)",
    description: "Transforming waste into biogas energy.",
  },
  {
    image: "wasteModel/Model8.jpg",
    title: "Recycling Training Center Operated by Waste Concern",
    description: "Recycling Training Center Operated by Waste Concern",
  },
  {
    image: "wasteModel/Model7.jpg",
    title: "Impact of Waste Concern's Approach",
    description: "Impact of Waste Concern's Approach",
  },
  {
    image: "wasteModel/Model9.jpg",
    title: "Replication of Waste Concern's Approach",
    description: "Replication of Waste Concern's Approach",
  },
  {
    image: "wasteModel/Model13.jpg",
    title: "Dewats for Shampur Camp, Cox's Bazar",
    description: "Dewats for Shampur Camp, Cox's Bazar",
  },
  {
    image: "wasteModel/Model2.jpg",
    title: "Model Under cDM/Carbon Trading Based Project of Waste Concern",
    description: "Model Under cDM/Carbon Trading Based Project of Waste Concern",
  },
  {
    image: "wasteModel/Model10.jpg",
    title: "Partnarship Model of Community Based Composting Under Semp",
    description: "Partnarship Model of Community Based Composting Under Semp",
  },
  
];

const WasteConcernModels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", title: "" });

  const openModal = (image: string, title: string) => {
    setModalContent({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Waste Concern Models</h1>
      </div>
      {/* Models Gallery */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-4 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => openModal(model.image, model.title)} 
            >
              <img
                src={model.image}
                alt={model.title}
                className="w-[300px] h-[200px] object-cover object-top shadow-lg mx-auto"
              />
              <h2 className="text-[#00274D] font-medium mt-4 text-sm">{model.title}</h2>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalContent.image}
        heading={modalContent.title}
      />

      <Footer />
    </div>
  );
};

export default WasteConcernModels;
