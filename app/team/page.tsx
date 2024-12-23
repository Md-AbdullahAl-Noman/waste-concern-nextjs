import Header from "../components/Header";
import Footer from "../components/Footer";

// Team Members Data
const teamMembers = [
  {
    name: "Syed Zubaer Ahmed",
    role: "Senior Training Officer",
    image: "/team/member1.jpg",
  },
  {
    name: "Mohammad Mostafezur Rahman",
    role: "Senior Research Officer",
    image: "/team/member2.jpg",
  },
  {
    name: "Md. Masum",
    role: "Senior CAD & GIS Specialist",
    image: "/team/member3.jpg",
  },
  {
    name: "Merina Afrose",
    role: "Project Accounts Officer",
    image: "/team/member4.jpg",
  },
  {
    name: "Aparna Mondal",
    role: "Accounts officer",
    image: "/team/member5.jpg",
  },
  {
    name: "Md. Nazrul Islam",
    role: "Senior Urban Planning and Resettlement Specialist",
    image: "/team/member6.jpg",
  },
  {
    name: "Md. Riaz Uddin Sadhe",
    role: "Site Engineer",
    image: "/team/member7.jpg",
  },
  {
    name: "Lazim Munim Esti",
    role: "Urban Planner",
    image: "/team/member8.jpg",
  },
  {
    name: "Maksudur Rahman Akash",
    role: "Urban Planner",
    image: "/team/member9.jpg",
  },
  {
    name: "Nusaiba Nashin",
    role: "Junior Architect",
    image: "/team/member10.jpg",
  },
  {
    name: "Md. Badrul Alam Siddiquee",
    role: "IT specialist",
    image: "/team/member11.jpeg",
  },
  {
    name: "Md. Amjad Hossain",
    role: "Auto CAD specialist",
    image: "/team/member12.jpg",
  },
  {
    name: "Partha Pratim Ghosh",
    role: "Senior Site Engineer",
    image: "/team/member13.jpeg",
  },
  {
    name: "Md. Mahfuzur Rahman",
    role: "Architect",
    image: "/team/member14.jpg",
  },
  {
    name: "Dr. Hasna Hena Begum",
    role: "Senior Specialist Environment",
    image: "/team/member15.jpg",
  },
  {
    name: "Sajjad Hossain",
    role: "Procurement Specialist",
    image: "/team/member16.jpg",
  },
  {
    name: "Ayub Khan",
    role: "Office Assistant",
    image: "/team/member19.jpg",
  },
  {
    name: "Md. Ibrahim",
    role: "Office Assistant",
    image: "/team/member18.jpeg",
  },
  {
    name: "Rina",
    role: "Office Assistant",
    image: "/team/member20.jpg",
  },
];

// Consultant/Advisor Data
const consultants = [
  {
    name: "Dr. Ijaz Hossain, Advisor",
    role: "Senior Chemical Engineer and Climate Change Expert",
  },
  {
    name: "Dr. A.T.M Nurul Amin, Advisor",
    role: "Senior Economist",
  },
  {
    name: "Nurul Islam, Advisor",
    role: "Mass Communication Specialist",
  },
  {
    name: "Shahnawaz Sinha, Consultant",
    role: "Chemical-Environmental Engineer, Ph.D",
  },
  {
    name: "Gourango Lal Roy, Consultant",
    role: "Senior Electrical Engineer",
  },
  {
    name: "Shamsul Haque, Consultant",
    role: "Senior Structural Engineer",
  },
  {
    name: "Md. Nazmul Hasan, Consultant",
    role: "Senior Plumbing Engineer",
  },
  {
    name: "S. Rumi Saifullah, Consultant",
    role: "Industrial Engineer",
  },
  {
    name: "Md. Nazmul Hasan, Consultant",
    role: "Senior Mechanical Engineer",
  },
  {
    name:"Moushumi Ahmed, Consultant",
    role:"Senior Architect",
  },
  {
    name:"Dr. Asif M. Zaman, Consultant",
    role:"Senior Environmental Specialist",
  },
  {
    name:"Dr. Zainal Abedin, Consultant",
    role:"Soil Scientist",
  },
];

const Teams = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <main className="flex-grow">
        {/* Team Section */}
        <section className="relative w-full h-[600px] overflow-hidden bg-white">
          <img
            src="team/team.jpg"
            alt="Team of Waste Concern"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h1 className="text-3xl font-bold">TEAM</h1>
          </div>
        </section>

        {/* Individual Profiles Section */}
        <section className="container mx-auto py-10 px-10 sm:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-lg  p-6"
            >
              <div className="relative overflow-hidden rounded-lg w-36 h-42">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-full h-full object-cover filter grayscale transition duration-300 ease-in-out group-hover:filter-none rounded-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-md font-bold">{member.name}</h3>
                <p className="text-green-800 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Consultant Section */}
        <section className="bg-[#D4CFC4] py-12">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Consultant/Advisor
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consultants.map((consultant, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{consultant.name}</h3>
                    <p className="text-green-800 font-medium">{consultant.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
