export const AboutPage = () => {
    
    return (
        <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#E5F2FF] to-[#F1E3FF] py-16 px-4 sm:px-6 lg:px-8" id="about">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 w-full max-w-7xl">
                
                {/* Bagian Gambar */}
                <div className="w-full max-w-xl lg:max-w-none lg:w-2/5">
                    <img 
                        src="/assets/aboutZas.png" 
                        alt="About Zas" 
                        className="w-full h-auto object-cover rounded-2xl shadow-lg" 
                    />
                </div>

                {/* Bagian Teks */}
                <div className="flex flex-col justify-center w-full lg:w-3/5 text-justify lg:text-left">
                    <h1 className="font-bold text-4xl text-center lg:text-5xl text-gray-800">
                        About Zas
                    </h1>
                    <p className="text-base text-justify lg:text-lg text-gray-700 mt-4">
                        We are a forward-thinking software house dedicated to transforming innovative ideas into high-quality digital solutions.
                        Our team combines technical expertise with creative problem-solving to deliver software that not only meets current needs but scales for future growth. We believe in building lasting partnerships with our clients.
                    </p>
                    
                    {/* Bagian Statistik */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                        <div className="flex flex-col w-full sm:w-1/2 bg-gradient-to-r from-[#8F2394] via-[#6543A4] to-[#5253AC] py-5 rounded-2xl shadow-xl gap-2">
                            <div className="flex flex-col items-center">
                                <h1 className="font-semibold text-3xl text-white">2+</h1>
                                <p className="font-sans text-base lg:text-lg text-white">Years Experience</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2 bg-gradient-to-r from-[#8F2394] via-[#6543A4] to-[#5253AC] py-5 rounded-2xl shadow-xl gap-2">
                            <div className="flex flex-col items-center">
                                <h1 className="font-semibold text-3xl text-white">24/7</h1>
                                <p className="font-sans text-base lg:text-lg text-white">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};