import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg px-14 py-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        
        <h2 className="text-xl font-bold text-center mb-6">Request Access</h2>

        {/* Form */}
        <form>
        
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-lg border border-gray-700 font-bold shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700"
            >
            </label>
            <input
              type="text"
              id="organization"
              className="mt-1 block w-full rounded-lg border border-gray-700 font-bold shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Organization"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >

            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border border-gray-700 font-bold shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-950 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessModal;
