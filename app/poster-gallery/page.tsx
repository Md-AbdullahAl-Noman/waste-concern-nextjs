"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/items/Modal";

const posters = [
  {
    image: "poster/UNESCAP-Poster-2.jpg",
    title: "Waste is Resource",
  },
  {
    image: "path/to/image2.jpg",
    title: "Promoting Integrated Resource Recovery Centres in Urban Asia",
  },
  {
    image: "path/to/image3.jpg",
    title: "Waste, Community and Employment",
  },
  {
    image: "path/to/image4.jpg",
    title: "Solving Urban Problems while Producing Rural Resources",
  },
  {
    image: "path/to/image5.jpg",
    title: "We have more income and our living standard has been improved.",
  },
  {
    image: "path/to/image6.jpg",
    title: "We have uniforms and I feel proud to put them on.",
  },
  {
    image: "path/to/image7.jpg",
    title: "Solar Irrigation System",
  },
  {
    image: "path/to/image8.jpg",
    title: "SFD Savar, Bangladesh",
  },
  // Add more posters as needed
];

const PosterGallery = () => {
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
      {/* Top Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Posters</h1>
      </div>
      {/* Poster Gallery */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-4 gap-8">
          {posters.map((poster, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => openModal(poster.image, poster.title)} 
            >
              <img
                src={poster.image}
                alt={poster.title}
                className="w-[300px] h-[200px] object-cover object-top shadow-lg mx-auto"
              />
              <h2 className="text-[#00274D] font-medium mt-4 text-sm">
                {poster.title}
              </h2>
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

export default PosterGallery;
