"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage3 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Outstanding Social Entrepreneurs 2003
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards3.jpg"
            alt="Outstanding Social Entrepreneurs 2003"
            className=" w-3/4"
          />
        </div>
        
        <div className="text-center text-sm text-black font-semibold mt-2">
          <p>
          Maqsood Sinha, Waste Concern, BANGLADESH</p>
          <p>Iftekhar Enayetullah, Waste Concern, BANGLADESH
          </p>
        </div>

        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
          <div>
            <p className=" text-justify leading-7">
            Sinha, born and raised in Dhaka, is an urban planner-architect. Enayetullah, also from Bangladesh, is a civil engineer-urban planner. The pair met while completing their separate graduate research on urban waste management and decided to work together to develop programs in this area. Initially, the two young entrepreneurs sought to convince government agencies to develop the community-based composting plants, even promising free consulting services to support governmental efforts. But they could not convince the authorities. One government official listened to their ideas and then challenged them: if their ideas for community-managed compost plants were so great, why didn’t they create it themselves? Inspired by the challenge, they founded Waste Concern.
            </p>
            <p className=" text-justify leading-7 mt-5">
            MISSION:
            </p>
            <p className=" text-justify leading-7 mt-5">
            The Schwab Foundation for Social Entrepreneurship seeks to identify, recognize and disseminate initiatives in social entrepreneurship that have significantly improved people’s lives and have the potential to be adapted to other settings.
            </p>
          </div>
          <p className=" text-justify leading-7 mt-5">
          To accomplish its mission the Schwab Foundation:
            </p>
            <p className=" text-justify leading-7 mt-5">
            Promotes social entrepreneurship as crucial to ensuring solutions to the problems of the 21st century
            Builds and supports a global community of outstanding social entrepreneurs.
            </p>
            <p className=" text-justify leading-7 mt-5">
            VISION:
            </p>
            <p className=" text-justify leading-7 mt-5">
            Global advancement can best be sustained by widespread and systematic recognition and support of innovative social value creation by social entrepreneurs.
            </p>
            <p className=" text-justify leading-7 mt-5">
            INNOVATION
            </p>
            <p className=" text-justify leading-7 mt-5">
            By promoting the concept of waste as a resource and emphasizing on the marketing aspect of organic waste, Waste Concern is causing a chain reaction among multiple sectors in Bangladesh. Working in partnership with communities, Waste Concern has set in motion a process for house-to-house solid waste collection that is then taken to community-based composting plants to turn the waste into organic fertilizer. Waste Concern arranges for fertilizer companies to purchase and nationally market the compost-based enriched bio-fertilizers it produces. Waste Concern thus provides jobs for urban poor that collect the waste and work in the local plants and stimulates behavioural changes in urban communities and the waste management industry. In addition, Waste Concern helps to address the environmental problem of diminishing topsoil fertility due to the use of synthetic fertilizers and pesticides in Bangladesh. At present, 30,000 people are benefited from Waste Concern’s project in Dhaka. Every year, Waste Concern produces 500 tons of compost, but the demand from farmers is rising so much that the fertilizer company marketing it estimates present demand at 10,000 tons per year. Because of its novel approach, Waste Concern has received wide media coverage and recognition. Iftekhar Enayetullah and Maqsood Sinha, Waste Concern’s founders, are winners of Fast Company’s first Fast 50 competition, the only ones from Asia. Delegations from several countries have visited Waste Concern and started replicating the model in their own cities. Closer to home, several NGOs have already emulated the model in Bangladesh. UNICEF and Department of Public Health Engineering have started to do the same in 14 municipalities throughout the country.
            </p>
            <p className=" text-justify leading-7 mt-5">
            BACKGROUND
            </p>
            <p className=" text-justify leading-7 mt-5">Initially, no local financial institution or development organization supported Waste Concern. After three years of running their demonstration program with no external support, Enayetullah and Sinha finally convinced the Municipal Corporation and Public Works Department to provide public land for community composting. Waste Concern’s first community based compost project was initiated in 1995. Successful demonstration of the project spurred the model’s replication to five more communities of Dhaka. Moreover, based on the project, the Government of Bangladesh has recommended in its national policy, the recycling of organic waste via composting as a viable alternative for solid waste management.</p>
            <p className=" text-justify leading-7 mt-5">STRATEGY</p>
            <p className=" text-justify leading-7 mt-5">Success of a community-based program depends largely on identifying and addressing the community’s needs, while sustainability of the project depends on involving them in the cost-recovery/cost-sharing process. To that end, Waste Concern has established partnerships with public agencies, private sector and communities by working as intermediary to form the tri- partite partnership. Each relationship is important in the public-private-community link. Communities are responsible for monitoring house-to-house waste collection system and contribute towards its cost. The Ministry of the Environment and Forest, through its Sustainable Environment Management Program, coordinates the project and provides strategic support on behalf of the central government. Local government provides land for the composting plant as well as the electrical connections and other logistics. UNDP has provided start-up funds for the composting units while the private sector markets the compost. An effort such as Waste Concern’s requires that land is provided at a nominal rate or free of cost to the entrepreneurs interested in running the project; public-private partnerships to underpin the initiative; and training and technical advice on composting and its marketing for the communities involved in the effort</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage3;
