"use client";
import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WcOrganogram = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-6">
        <Link href="/companies" className="text-[#00274D] font-semibold text-lg inline-flex items-center mb-2">
          
            &lt; Go Back
        </Link>
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Waste Concern
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        <div className="flex justify-center my-4">
          <img
            src="/images/wc-organogram.png"
            alt="wc organogram"
            className=" w-1/2"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WcOrganogram;
