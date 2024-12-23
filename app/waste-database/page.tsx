"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/items/Modal";
import AccessModal from "../components/items/AccessModal";

const wasteDatabases = [
  {
    image: "images/waste-database-2014.png", 
    title: "Bangladesh Waste Database 2014",
    downloadLink: "/images/wastedatabase1.pdf", 
  },
  {
    image: "images/waste-database-2021.jpg", 
    title: "Bangladesh Waste Database 2021",
    downloadLink: "/images/wastedatabase2.pdf", 
  },
];

const WasteDatabase = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", title: "" });

  useEffect(() => {
    const titleTimeout = setTimeout(() => setIsTitleVisible(true), 1000);
    const buttonTimeout = setTimeout(() => setIsButtonVisible(true), 2500);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(buttonTimeout);
    };
  }, []);

  const openModal = (image: string, title: string) => {
    setModalContent({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openAccessModal = () => setIsAccessModalOpen(true); 
  const closeAccessModal = () => setIsAccessModalOpen(false); 

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Waste Database
        </h1>
      </div>

      {/* Waste Database Gallery */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {wasteDatabases.map((database, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => openModal(database.image, database.title)}
            >
              <img
                src={database.image}
                alt={database.title}
                className="w-[300px] h-[200px] object-cover object-top shadow-lg mx-auto"
              />
              <h2 className="text-[#00274D] font-medium mt-4 text-sm">
                {database.title}
              </h2>
              <a
                href={database.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-[#00274D] text-white transition-colors duration-300 ease-in-out hover:bg-lime-600 shadow-md"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </main>

       {/* Below Content */}
      <div className="bg-white py-10">
        <div className="container mx-auto bg-[#F5F2EB] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 gap-6 max-w-6xl">
          
          <div className="flex-1 text-center md:text-right">
            <h2
              className={`text-2xl font-bold text-[#00274D] transition-transform duration-500 ease-in-out ${
                isTitleVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-7 opacity-0"
              }`}
            >
              Waste Database of 340 municipalities of Bangladesh
            </h2>
            <button
              onClick={openAccessModal} 
              className={`inline-block mt-4 px-6 py-3 bg-[#00274D] text-white text-sm font-medium rounded-l-full rounded-tr-lg rounded-br-none shadow-md transition-transform duration-500 ease-in-out ${
                isButtonVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-7 opacity-0"
              }`}
            >
              Request Access →
            </button>
          </div>
         
          <div className="flex-1">
            <img
              src="images/waste-database-icon-map.png"
              alt="Map showing municipalities"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalContent.image}
        heading={modalContent.title}
      />

      {/* Access Modal */}
      <AccessModal isOpen={isAccessModalOpen} onClose={closeAccessModal} />

      <Footer />
    </div>
  );
};

export default WasteDatabase;
