"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  heading: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, heading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 overflow-auto">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl font-semibold"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      <div className="flex flex-col justify-center items-center max-w-[90%] max-h-[90%]">
        <img
          src={image}
          alt={heading}
          className="object-contain w-full max-h-[80vh]"
        />

        <p className="text-white mt-4 text-lg text-center px-4">{heading}</p>
      </div>
    </div>
  );
};

export default Modal;
