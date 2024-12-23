import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FounderProfile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <main className="flex-grow">
        <div className="bg-[#D4CFC4] h-40 md:h-64"></div>

        <div className="container mx-auto px-5 -mt-40">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            <div className="w-60 h-80 md:w-72 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/Founder1.jpg"
                alt="Iftekhar Enayetullah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Details */}
            <div className="text-center md:text-left mt-64">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
              Iftekhar Enayetullah 
              </h1>
              <h2 className="text-xl text-green-800 font-medium mt-2">
              Co-Founder and Director
              </h2>

              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icon/facebook.png"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icon/twitter.png"
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icon/email.png"
                    alt="Email"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="container mx-auto px-5 text-sm text-black font-bold py-10">
          <div>
            <p className=" text-justify leading-7">
            As a civil engineer-urban planner and the Co-founder and Director of Waste Concern, Iftekhar Enayetullah has also taken on the role of Managing Partner of Waste Concern Consultants. His career, spanning over twenty-nine years, is marked by extensive work, research, consultancy, and project management in the fields of solid waste management, sanitation, wastewater management, urban environmental management, clean energy, inclusive business development, and social innovation. His active involvement in planning, designing, and implementing several waste management projects in Bangladesh and the Asia Pacific region is noteworthy. His contributions also extend to designing, financing, and implementing Clean Development Mechanism (CDM) based waste management and energy projects in Bangladesh and other developing countries.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Iftekhar Enayetullah has authored and co-authored seven technical books and published over one hundred technical reports. He retains a patent on waste recycling technology. He is also a reviewer of several environmental engineering journals published from Bangladesh and abroad. Iftekhar Enayetullah’s professional work through Waste Concern is being taught in the United States, Europe, and Bangladesh as a case study in several universities’ graduate programs of business and development studies.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Iftekhar Enayetullah has traveled extensively throughout Asia, Europe, and America as a Resource Speaker in international workshops and seminars and lectured extensively regarding waste management, waste minimization, circular economy, pro-poor infrastructure development, public-private partnerships, greenhouse gas emission reductions, and sustainable development. In addition to these, he also serves as an external examiner of post-graduate theses on engineering and planning and a guest speaker for several universities.
            </p>
            <p className=" text-justify leading-7 mt-5">
            As a consultant, Iftekhar Enayetullah has advised numerous international agencies, development banks, and other organizations regarding sustainable waste management, sanitation, and urban environmental management.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Iftekhar Enayetullah is a recipient of several national and international awards, including the United Nations (UN) Poverty Eradication Award, the Tech Museum Award from the USA, the Intel Environmental Award, the Outstanding Engineer’s Award from the Institute of Engineers Bangladesh, the Schwab Fellow of the World Economic Forum (WEF), and Ashoka Fellow. He also served as a member of the Global Agenda Council of the World Economic Forum (WEF).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FounderProfile;
