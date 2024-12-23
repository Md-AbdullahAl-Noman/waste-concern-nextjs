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
                src="/images/Founder2.jpg"
                alt="Abu Hasnat Md. Maqsood Sinha"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Details */}
            <div className="text-center md:text-left mt-64">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
                Abu Hasnat Md. Maqsood Sinha
              </h1>
              <h2 className="text-xl text-green-800 font-medium mt-2">
                Co-Founder and Executive Director
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
            An architect-urban planner by profession is the Co-founder and Executive Director of Waste Concern (www.wasteconcern.org). Mr. Sinha is also holding the position of Managing Director of a joint venture company WWR Bio Fertilizer Bangladesh Ltd., Managing Partner of Waste Concern Consultants. He has been working and conducting research in the fields of solid waste management & recycling, clean energy, municipal services planning, and sustainable development for more than twenty eight years.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Mr. Sinha is actively involved in planning, designing and implementation of several waste management projects in Bangladesh as well as in Sri Lanka, Vietnam, Cambodia, Indonesia and Nepal. Mr. Sinha is also involved in designing, financing and implementation of Clean Development Mechanism (CDM) based waste management and energy projects in Bangladesh and other developing countries. Mr. Sinha has advised numerous international agencies, development banks and other organizations on sustainable waste management.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Mr. Sinha  is a recipient of several national and international awards including United Nations (UN) Award, Tech Museum Award from USA, Intel Environmental Award, Schwab Fellow of the World Economic Forum (WEF) and Ashoka Fellow.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FounderProfile;
