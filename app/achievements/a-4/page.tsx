"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage4 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Waste Concern Receives Global Tech Museum Award 2003
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards4.jpg"
            alt="ASHOKA Fellowship for the Year 2000"
            className="w-3/4"
          />
        </div>

        <div className="text-center text-sm text-black font-semibold mt-2">
        “Two Bangladeshi Honored  As Tech Laureates In Prestigious Global 2003 Tech Museum Awards Competition For Applying Technology To Improve Quality Of Life Around The World”
        </div>

        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
          <div>
            <p className=" text-justify leading-7">
            Iftekhar Enayetullah and Abu Hasnat Md. Maqsood Sinha, Co-founders of Waste Concern receiving Tech Museum Award from Paul S. Otellini, President and Chief Operating Officer of Intel, USA
            </p>
            <p className=" text-justify leading-7 mt-5">
            In October 15, 2003, Iftekhar Enayetullah and Abu Hasnat Md. Maqsood Sinha, Co-Founders of Waste Concern were named one of 25 laureates for the prestigious 2003 Tech Museum Awardspresented by Applied Materials, Inc. The Tech Museum of Innovation, located in San Jose, California announced the laureates. In Silicon Valley where technology is considered a way of life, The Tech Museum Awards were developed to recognize the need to bridge existing technology in emerging countries and emerging technologies in developed countries.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Iftekhar Enayetullah and Abu Hasnat Md. Maqsood Sinha have been selected as laureates for the Intel Environment Awards for their model of composting program that turns waste into fertilizer and creates new jobs. The amount of garbage in Dhaka far exceeds the coping capacity of municipal authorities. As a result, over half of the city’s waste remains uncollected and poses grave public health and environmental hazards. The inadequate collection treatment, and disposal of garbage are resulting in pollution, contamination of food and water, the spreading of disease and a significant deterioration in the quality of urban life. Iftekhar Enayetullah and Abu Hasnat Md. Maqsood Sinha developed and currently replicating their composting model in a number of cities of Bangladesh. They have shown that composting can be organized in an efficient and profitable way. Their program has created new opportunity of local jobs and helps nourish Bangladesh’s depleted soil. In 1998, their model was first replicated by the Ministry of Environment and Forest (MoEF) of the Government of Bangladesh with the support from UNDP and later in the year 2000 Bangladesh government decided to replicate this model in 14 cities of Bangladesh with the support from UNICEF.
            </p>
          </div>
          <p className=" text-justify leading-7 mt-5">
          On October 15, at a black tie Awards Gala, Silicon Valley leaders and delegates from the United Nations joined together to honor all 25 laureates. The awards, presented in partnership with the American Council for the United Nations University and Santa Clara University’s Center for Science, Technology, and Society, are designed to honor individuals, for-profit companies, and public and not-for-profit organizations from around the world who are applying technology to profoundly improve the human condition in the categories of education, equality, environment, economic development, and health. This year, an esteemed panel of judges considered more than 500 nominations, representing 70 countries. The 25 2003 Tech Laureates come from Bangladesh, Canada, Costa Rica, India, Indonesia, Kenya, Nicaragua, Nepal, and the United States. Here it should be mentioned that they are the first Bangladeshi to receive this rare honor. Iftekhar Enayetullah and Abu Hasnat Md. Maqsood Sinha were invited by the Tech Museum Awards authority to participate in the award ceremony in San Jose, USA during October 14-17, 2003. In this connection the American Association of Bangladesh Engineers and Architects, San Jose, USA gave an warm reception to these two Bangladeshi.
            </p>
            <p className=" text-justify leading-7 mt-5">
            “Reflecting the mission of The Tech Museum of Innovation, these awards recognize the innovators who use technology to improve people’s lives,” says Peter Giles, president and chief executive officer of The Tech. “Through these awards, The Tech inspires future scientists, technologists, and social entrepreneurs to harness the incredible power and promise of technology to solve the challenges that confront us at the dawn of the 21st Century.
            </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage4;
