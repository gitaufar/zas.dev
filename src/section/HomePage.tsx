export const HomePage = () => {
  return (
    <section className="bg-gradient-to-r from-[#E5F2FF] to-[#F1E3FF] flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center text-center gap-5">
          <h1 className="font-bold text-6xl max-w-[21ch]">
            Transform Your Ideas Into Reality
          </h1>
          <p className=" max-w-[50ch] text-xl">
            We partners with startups, businesses, and students to build
            high-quality software solutions that drive innovation and growth
          </p>
        </div>

        <div className="flex flex-row justify-center gap-10">
          <button className="bg-gradient-to-r from-[#4089E9] to-[#6A006E] rounded-4xl py-3 px-5 text-white cursor-pointer hover:scale-110 transition-transform border-2 border-gray-400">
            Start Your Project
          </button>
          <button className="bg-gradient-to-r from-white to-[#D1DCD7] rounded-4xl py-3 px-5 text-blue cursor-pointer hover:scale-110 transition-transform border-2 border-[#326CBB] text-[#326CBB]">
            View Portfolio
          </button>
          
        </div>
      </div>
    </section>
  );
};
