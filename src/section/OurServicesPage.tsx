
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

      <div className="flex flex-row gap-10">
        <div className="flex flex-col bg-gradient-to-r from-white to-[#E0EDFF] p-10 max-w-[44ch] rounded-2xl shadow-2xl gap-5">
          <img src="/assets/roket.png" alt="roket" className="size-10" />
          <h1 className="font-normal text-2xl">MVP Development</h1>
          <p className="text-gray-700">
            Perfect for startups looking to validate their ideas with a
            functional prototype
          </p>
          <ol>
            <li>👽Rapid Prototyping</li>
            <li>👽Market Validation</li>
            <li>👽Scalable Architecture</li>
          </ol>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-white to-[#EEDDFF] p-10 max-w-[44ch] rounded-2xl shadow-2xl gap-5">
          <img src="/assets/tag.png" alt="roket" className="size-10" />
          <h1 className="font-normal text-2xl">Custom Software</h1>
          <p className="text-gray-700">
            Tailored solutions for businesses with specific requirements and
            workflows.
          </p>
          <ol>
            <li>👽Bespoke Development</li>
            <li>👽Integration Services</li>
            <li>👽Legacy Modernization</li>
          </ol>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-white to-[#E0EDFF] p-10 max-w-[44ch] rounded-2xl shadow-2xl gap-5">
          <img src="/assets/topi.png" alt="roket" className="size-10" />
          <h1 className="font-normal text-2xl">Student Consultation</h1>
          <p className="text-gray-700">
            Technical guidance and mentorship for academic projects and thesis
            work
          </p>
          <ol>
            <li>👽Project Mentorship</li>
            <li>👽Technical Guidance</li>
            <li>👽Code Review</li>
          </ol>
        </div>
      </div>
    </section>
  );
};
