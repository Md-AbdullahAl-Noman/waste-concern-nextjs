import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Founders = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <main className="flex-grow container mx-auto py-10 px-5">
        <h1 className="text-center text-3xl font-bold mb-10 text-blue-950">
          CO-FOUNDERS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Founder 1 */}
          <div className="group flex flex-col items-center">
            <Link href="/founders/founder1" className="relative overflow-hidden rounded-2xl shadow-lg w-60 h-62">
              <img
                src="/images/Founder2.jpg"
                alt="Abu Hasnat Md. Maqsood Sinha"
                className="w-full h-full object-cover transition-all duration-300 group-hover:grayscale"
              />
            </Link>
            <div className="text-center mt-5">
              <Link href="/founders/founder1">
                <h2 className="text-xl font-semibold">
                  Abu Hasnat Md. Maqsood Sinha
                </h2>
              </Link>
              <Link href="/founders/founder1">
                <p className="text-green-800 font-semibold">
                  Co-Founder and Executive Director
                </p>
              </Link>
            </div>
          </div>
          {/* Founder 2 */}
          <div className="group flex flex-col items-center">
            <Link href="/founders/founder2" className="relative overflow-hidden rounded-2xl shadow-lg w-60 h-62">
              <img
                src="/images/Founder1.jpg"
                alt="Iftekhar Enayetullah"
                className="w-full h-full object-cover transition-all duration-300 group-hover:grayscale"
              />
            </Link>
            <div className="text-center mt-5">
              <Link href="/founders/founder2">
                <h2 className="text-xl font-semibold">
                  Iftekhar Enayetullah
                </h2>
              </Link>
              <Link href="/founders/founder2">
                <p className="text-green-800 font-semibold">
                  Co-Founder and Director
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
