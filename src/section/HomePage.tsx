export const HomePage = () => {
  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-r from-[#E5F2FF] to-[#F1E3FF] flex justify-center items-center py-16 px-4 sm:px-6">
      <div className="flex flex-col gap-8 text-center items-center w-full max-w-4xl">
        
        {/* --- Konten Teks --- */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-gray-800">
            Transform Your Ideas Into Reality
          </h1>
          <p className="max-w-prose text-base sm:text-lg text-gray-700">
            We partner with startups, businesses, and students to build high-quality software solutions that drive innovation and growth.
          </p>
        </div>

        {/* --- Konten Tombol --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#4089E9] to-[#6A006E] rounded-full py-3 px-6 text-white font-semibold cursor-pointer hover:scale-105 transition-transform shadow-lg">
            Start Your Project
          </button>
          <button className="bg-white rounded-full py-3 px-6 text-[#326CBB] font-semibold cursor-pointer hover:scale-105 transition-transform border-2 border-[#326CBB]">
            View Portfolio
          </button>
        </div>
        
      </div>
    </section>
  );
};