"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/items/Modal";

const pictures = [
  {
    image: "/pictureGallery/WUF_escap.png",
    title: "Training of Trainers (TOT)",
  },
  {
    image: "/pictureGallery/training_highlevel3.jpg",
    title: "High-Level Training",
  },
  {
    image: "/pictureGallery/tot1.jpg",
    title: "Site Visit",
  },
  {
    image: "/pictureGallery/tot2.jpg",
    title: "Team Building",
  },
  {
    image: "/pictureGallery/pic5.jpg",
    title: "Urban Waste Solution",
  },
  {
    image: "/pictureGallery/pic6.jpg",
    title: "Awareness Campaign",
  },
];

const PictureGallery: React.FC = () => {
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
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Picture Gallery</h1>
      </div>
      {/* Picture Gallery */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pictures.map((picture, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden group"
              onClick={() => openModal(picture.image, picture.title)}
            >
              <img
                src={picture.image}
                alt={picture.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

export default PictureGallery;
