import { FaCheck } from "react-icons/fa6";

export const OurServicesPage = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-l from-[#E5F2FF] to-[#F1E3FF] gap-12 py-16 px-4 sm:px-6 lg:px-8" id="services">
            {/* --- Bagian Header --- */}
            <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="font-bold text-4xl sm:text-5xl text-gray-800">
                    Our Services
                </h1>
                <p className="max-w-2xl text-gray-600 text-base sm:text-lg">
                    From MVP Development to enterprise solutions, we deliver cutting-edge software tailored to your needs.
                </p>
            </div>

            {/* --- Kontainer Kartu Layanan --- */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-7xl">
                
                {/* Kartu 1: MVP Development */}
                <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#E0EDFF] p-8 rounded-2xl shadow-lg gap-5">
                    <img src="/assets/roket.png" alt="MVP Development" className="size-12" />
                    <h2 className="font-semibold text-2xl text-gray-800">MVP Development</h2>
                    <p className="text-gray-700">
                        Perfect for startups looking to validate their ideas with a functional prototype.
                    </p>
                    <ul className="flex flex-col gap-2 mt-auto">
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Rapid Prototyping</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Market Validation</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Scalable Architecture</li>
                    </ul>
                </div>

                {/* Kartu 2: Custom Software */}
                <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#EEDDFF] p-8 rounded-2xl shadow-lg gap-5">
                    <img src="/assets/tag.png" alt="Custom Software" className="size-12" />
                    <h2 className="font-semibold text-2xl text-gray-800">Custom Software</h2>
                    <p className="text-gray-700">
                        Tailored solutions for businesses with specific requirements and workflows.
                    </p>
                    <ul className="flex flex-col gap-2 mt-auto">
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Bespoke Development</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Integration Services</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Legacy Modernization</li>
                    </ul>
                </div>
                
                {/* Kartu 3: Student Consultation */}
                <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#E0EDFF] p-8 rounded-2xl shadow-lg gap-5">
                    <img src="/assets/topi.png" alt="Student Consultation" className="size-12" />
                    <h2 className="font-semibold text-2xl text-gray-800">Student Consultation</h2>
                    <p className="text-gray-700">
                        Technical guidance and mentorship for academic projects and thesis work.
                    </p>
                    <ul className="flex flex-col gap-2 mt-auto">
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Project Mentorship</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Technical Guidance</li>
                        <li className="flex flex-row items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/>Code Review</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};