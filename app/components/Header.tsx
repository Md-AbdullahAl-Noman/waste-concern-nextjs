"use client";

import React, { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Tracks the currently active dropdown
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); 
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      {/* Top Section */}
      <div className="bg-white px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Left: Logo and Brand Name */}
          <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo/WC-logo.png"
              alt="Waste Concern Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-[#1B5E20] text-3xl font-extrabold">Waste Concern</h1>
          </Link>
          </div>

          {/* Right: Search Box */}
          <div className="relative flex items-center border border-gray-400 rounded-full px-2 py-1 bg-[#F0F0F0] max-w-[180px] w-full">
            <FiSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-grow text-sm bg-transparent placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#D4CFC4] px-6 py-3">
        <div className="max-w-screen-lg mx-auto flex justify-between">
          {/* Left: About Us and Companies Links */}
          <nav className="flex space-x-10 -ml-20">
            {/* ABOUT US Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#about-us"
                className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
              >
                ABOUT US
              </a>
              {activeDropdown === "about" && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  style={{ top: "calc(100% + 5px)" }}
                >
                  <ul>
                    {[
                      { label: "Founders", path: "/founders" },
                      { label: "Team", path: "/team" },
                      { label: "Clients", path: "/clients" },
                      { label: "Awards & Achievements", path: "/achievements" },
                    ].map((item) => (
                      <li
                        key={item.path}
                        className="px-4 py-2 hover:bg-sky-950 hover:text-white text-gray-700 text-sm transition-all"
                      >
                        <Link href={item.path} className="block w-full h-full">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/companies"
              className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
            >
              COMPANIES
            </Link>
          </nav>

          {/* Right: Resources, Activities, Media, and Contact Links */}
          <nav className="flex space-x-10 -mr-16">
            {/* RESOURCES Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#resources"
                className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
              >
                RESOURCES
              </a>
              {activeDropdown === "resources" && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  style={{ top: "calc(100% + 5px)" }}
                >
                  <ul>
                    {[
                      { label: "Waste Concern Model", path: "/waste-concern-model" },
                      { label: "Laboratory Facilities", path: "/laboratory-facilities" },
                      { label: "Waste Database", path: "/waste-database" },
                      { label: "Capacity Building", path: "/capacity-building" },
                      { label: "Impact", path: "/impact" },
                      { label: "Replication", path: "/replication" },
                      { label: "Waste Management Rules", path: "/waste-management-rules" },
                    ].map((item) => (
                      <li
                        key={item.path}
                        className="px-4 py-2 hover:bg-sky-950 hover:text-white text-gray-700 text-sm transition-all"
                      >
                        <Link href={item.path} className="block w-full h-full">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ACTIVITIES Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("activities")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#activities"
                className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
              >
                ACTIVITIES
              </a>
              {activeDropdown === "activities" && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  style={{ top: "calc(100% + 5px)" }}
                >
                  <ul>
                    {[
                      { label: "Consultancy", path: "/consultancy" },
                      { label: "Experiment & Piloting", path: "/experiment-piloting" },
                      { label: "Publications", path: "/publications" },
                      { label: "Seminar", path: "/seminar" },
                      { label: "Training", path: "/training" },
                      { label: "Projects", path: "/projects" },
                    ].map((item) => (
                      <li
                        key={item.path}
                        className="px-4 py-2 hover:bg-sky-950 hover:text-white text-gray-700 text-sm transition-all"
                      >
                        <Link href={item.path} className="block w-full h-full">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* MEDIA Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#media"
                className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
              >
                MEDIA
              </a>
              {activeDropdown === "media" && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  style={{ top: "calc(100% + 5px)" }}
                >
                  <ul>
                    {[
                      { label: "For Media", path: "/for-media" },
                      { label: "Video Gallery", path: "/video-gallery" },
                      { label: "Picture Gallery", path: "/picture-gallery" },
                      { label: "Poster Gallery", path: "/poster-gallery" },
                    ].map((item) => (
                      <li
                        key={item.path}
                        className="px-4 py-2 hover:bg-sky-950 hover:text-white text-gray-700 text-sm transition-all"
                      >
                        <Link href={item.path} className="block w-full h-full">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-[#00274D] font-medium text-sm uppercase tracking-wide"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
