export const PortfolioPage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-l from-[#E5F2FF] to-[#F1E3FF] gap-12 py-16 px-4 sm:px-6 lg:px-8" id="portfolio">
                {/* --- Bagian Header --- */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <h1 className="font-bold text-4xl sm:text-5xl text-gray-800">
                        Our Portfolio
                    </h1>
                    <p className="max-w-2xl text-gray-600 text-base sm:text-lg">
                        Explore some of our recent projects that showcase our technical capabilities and innovative solutions
                    </p>
                </div>
    
                {/* --- Kontainer Kartu Layanan --- */}
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-7xl">
                    
                    {/* Kartu 1: E-Commerce Platform */}
                    <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#E0EDFF] p-8 rounded-2xl shadow-lg gap-5">
                        <img src="/assets/roket.png" alt="MVP Development" className="size-12" />
                        <h2 className="font-semibold text-2xl text-gray-800">E-Commerce Platform</h2>
                        <p className="text-gray-700">
                            Full-stack marketplace solution with advanced analytics
                        </p>
                          <div className="flex flex-row gap-2">
                            <span className="text-[#1E40AF] bg-[#dbeafe] rounded-2xl px-3">React</span>
                            <span className="bg-[#F3E8FF] text-[#6B21A8] rounded-2xl px-3">Next.js</span>
                        </div>
                    </div>
    
                    {/* Kartu 2: Fintech Dashboard */}
                    <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#EEDDFF] p-8 rounded-2xl shadow-lg gap-5">
                        <img src="/assets/tag.png" alt="Custom Software" className="size-12" />
                        <h2 className="font-semibold text-2xl text-gray-800">Fintech Dashboard</h2>
                        <p className="text-gray-700">
                            Real-time financial data visualization platform
                        </p>
                        <div className="flex flex-row gap-2">
                            <span className="text-[#1E40AF] bg-[#dbeafe] rounded-2xl px-3">React</span>
                            <span className="bg-[#F3E8FF] text-[#6B21A8] rounded-2xl px-3">Next.js</span>
                        </div>
                        
                    </div>
                    
                    {/* Kartu 3: Learning Management System */}
                    <div className="flex flex-col w-full bg-gradient-to-r from-white to-[#E0EDFF] p-8 rounded-2xl shadow-lg gap-5">
                        <img src="/assets/topi.png" alt="Student Consultation" className="size-12" />
                        <h2 className="font-semibold text-2xl text-gray-800">Learning Management System</h2>
                        <p className="text-gray-700">
                            Educational platform for university students
                        </p>
                         <div className="flex flex-row gap-2">
                            <span className="text-[#1E40AF] bg-[#dbeafe] rounded-2xl px-3">React</span>
                            <span className="bg-[#F3E8FF] text-[#6B21A8] rounded-2xl px-3">Next.js</span>
                        </div>
                    </div>
                </div>
            </section>
  )
}
