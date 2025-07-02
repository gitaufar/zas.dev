import React from "react";

export const OurServicesPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-l from-[#E5F2FF] to-[#F1E3FF] gap-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-bold text-5xl">Our Services</h1>
        <p className="max-w-[56ch] text-center text-gray-500">
          From MVP Development to enterprise solutions, we deliver cutting-edge
          software tailored to your needs
        </p>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col bg-gradient-to-r from-white to-[#E0EDFF] p-10 max-w-[44ch] rounded-md shadow-2xl gap-5">
          <h1 className="font-bold">
            MVP Development
          </h1>
          <p className="text-gray-800">
            Perfect for startups looking to validate their ideas with a functional prototype
          </p>
          <ol>
            <li>👽Rapid Prototyping</li>
            <li>👽Market Validation</li>
            <li>👽Scalable Architecture</li>
          </ol>
        </div>
        <div>
            <h1>
                Custom Software
            </h1>
        </div>
        <div>
            <h1>

            </h1>
        </div>
      </div>
    </section>
  );
};
