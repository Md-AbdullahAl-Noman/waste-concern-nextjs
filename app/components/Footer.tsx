"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiShieldCheck, HiBriefcase, HiClipboardList } from "react-icons/hi";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        {/* Left Section: Logos and Copyright */}
        <div className="bg-orange-50 flex flex-col justify-center items-center py-10 px-6">
          <div className="flex space-x-4 items-center">
            <img
              src="/logo/WC-logo.png"
              alt="Waste Concern Logo"
              className="h-20 w-auto"
            />
            <img
              src="/logo/WCONSTU.png"
              alt="Waste Concern Consultants Logo"
              className="h-20 w-auto"
            />
          </div>
          <p className="text-sm text-gray-700 mt-4">© 2024 Waste Concern.</p>
        </div>

        {/* Right Section: Links, Socials, and Contact */}
        <div className="bg-[#1B5E20] flex flex-col py-10 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="text-white" />
                <a href="#safeguarding" className="hover:underline">
                  Safeguarding Policy and Procedure
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <HiBriefcase className="text-white" />
                <a href="#career" className="hover:underline">
                  Career
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <HiClipboardList className="text-white" />
                <a href="#procurement" className="hover:underline">
                  Procurement
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-[#1B5E20]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-[#1B5E20]"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-[#1B5E20]"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-[#1B5E20]"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-2">
                <MdPhone className="text-white" />
                <p>+880-2-48810-841</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-white" />
                <p>+880-2-48810-842</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-white" />
                <p>+880-2-2222-99486 (Fax)</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="text-white" />
                <a href="mailto:office@wasteconcern.org" className="hover:underline">
                  office@wasteconcern.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-white" />
                <a
                  href="https://googlemaps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    Level-3, House No. 270, Road No. 19, <br />
                    New DOHS, Mohakhali, Dhaka-1206, Bangladesh
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
