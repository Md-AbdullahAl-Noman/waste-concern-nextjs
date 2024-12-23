"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/items/Modal";

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", heading: "" });

  const openModal = (image: string, heading: string) => {
    setModalContent({ image, heading });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F2EB] w-full">
        <div className="max-w-screen-xl mx-auto px-5 py-7 flex flex-col lg:flex-row gap-8 h-[80vh]">
          {/* Left Section */}
          <div className="flex-1 p-6">
            <div>
              <h1 className="text-2xl font-semibold text-[#1B5E20] mb-3">Contact Us</h1>
              <div className="text-sm font-normal text-gray-700 space-y-3">
                <p>
                  <strong>Mailing Address:</strong> <br />
                  Level-3, House No. 270, Road No. 19 <br />
                  New DOHS, Mohakhali, Dhaka -1206, Bangladesh
                </p>
                <p>
                  <strong>Telephone:</strong> <br />
                  +880-2-48810-841, +880-2-48810-842
                </p>
                <p>
                  <strong>Fax:</strong> <br />
                  +880-2-2222-99486
                </p>
                <p>
                  <strong>Email:</strong> <br />
                  office@wasteconcern.org
                </p>
                <p>
                  <strong>Office Hours:</strong> <br />
                  Sunday to Thursday <br />
                  9:00 am to 5:00 pm
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-0  h-full">
            <div className="flex w-full h-[300px] gap-0">
              <iframe
                src="https://maps.google.com/maps?q=waste%20concern%20New%20DOHS%20Mohakhali&t=m&z=15&output=embed&iwloc=near"
                className="w-1/2 h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <img
                src="/images/contact3.jpg"
                alt="Building"
                className="w-1/2 h-full object-cover cursor-pointer"
                onClick={() =>
                  openModal("/images/contact3.jpg", "Waste Concern Building")
                }
              />
            </div>

            <div className="grid grid-cols-3 w-full gap-0 h-[200px]">
              <img
                src="/images/contact1.jpg"
                alt="Office Interior 1"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  openModal("/images/contact1.jpg", "Office Interior 1")
                }
              />
              <img
                src="/images/contact4.jpg"
                alt="Office Interior 2"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  openModal("/images/contact4.jpg", "Office Interior 2")
                }
              />
              <img
                src="/images/contact2.jpg"
                alt="Conference Room"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  openModal("/images/contact2.jpg", "Conference Room")
                }
              />
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalContent.image}
        heading={modalContent.heading}
      />
      
      <Footer />
    </>
  );
};

export default Contact;
