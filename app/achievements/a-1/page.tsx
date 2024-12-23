"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          United Nation’s ‘Race Against Poverty Award’ 2002
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards1.png"
            alt="Race Against Poverty Award 2002"
            className=" w-3/4"
          />
        </div>

        <div className="text-center text-sm text-black font-semibold mt-2">
          <p>
            Received Poverty Eradication Award in 2002 from UNITED NATIONS, New
            York, USA (Left to Right- Mark Mallock Brown, Representative of
            UNDP, Iftekhar Enayetullah, Abu Hasnat Md. Maqsood Sinha, and Kofi
            Annan)
          </p>
        </div>

        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
          <div>
            <p className=" text-justify leading-7">
            The UN Development Programme (UNDP) commemorated the International Day for the Eradication of Poverty 2002 with the resentation of the ‘Race Against Poverty’ awards at the United Nations in New York. The annual global awards honour one individual or an organisation from each region for their outstanding contribution towards improving the economic and social life of their community.
            </p>
            <p className=" text-justify leading-7 mt-5">
            During the award ceremony, UN Secretary-General Kofi Annan applauded the founders of Waste Concern Mr. Sinha and Mr. Enayetullah for their tremendous efforts to improve the environment of Dhaka city, through cost effective waste recycling and providing training to hundreds of waste pickers.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Seven years ago urban planners Maqsood Sinha, 39, and Iftekhar Enayetullah, 35, decided they wanted to improve the incomes of poor Kofiurban communities in Dhaka. They formed a non-governmental organization called Waste Concern, which helped communities transform trash into cash through a simple technology. Their efforts have changed the city’s sanitary conditions dramatically along with the livelihoods of those involved in this enterprise.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Dhaka — with 10 million people — generates nearly 4,000 tons of waste everyday, 80 per cent of which is organic and suitable for composting. But until Mr. Sinha and Mr. Enayetullah’s initiative, most of the garbage was left in the street to rot causing major health hazards.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Now, 120 members collect organic waste door-to-door and bring it to a UNDP-funded processing plant for composting, using a trecievingechnology Mr. Enayetullah discovered in Indonesia. The largest fertilizer distributor in Bangladesh buys their product and sells it to farmers keen on using organic fertilizers. The venture has made such a difference to people’s lives that Waste Concern has received many requests to replicate this technology in 14 other cities in Bangladesh, and in Cambodia and the Philippines.
            </p>
            <p className=" text-justify leading-7 mt-5">
            A unique aspect of Waste Concern’s strategy was the creation of successful partnerships-not just with the government but also with the private sector, thus securing a presence in the marketplace. Mr. Sinha and Mr. Enayetullah are two outstanding entrepreneurs and professionals who have applied their waste management knowledge for the betterment of nearly 11,000 urban poor.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage;
