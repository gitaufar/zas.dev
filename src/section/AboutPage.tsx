export const AboutPage = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#E5F2FF] to-[#F1E3FF] gap-10 w-screen">
            <div className="flex flex-row justify-center gap-20 items-center px-23 w-full">
                 <img src="/assets/aboutZas.png" alt="about" className="ml-12 size-auto rounded-2xl" />
                 <div className="flex flex-col justify-center mr-12">
                    <h1 className="font-bold text-5xl">About Zas</h1>
                    <p className="text-lg text-gray-700 mt-4 text-justify">
                        We are a forward-thinking software house dedicated to transforming innovative ideas into high-quality digital solutions.
                    </p>
                    <p className="text-lg text-gray-700 mt-4 text-justify">
                        Our team combines technical expertise with creative problem-solving to deliver software that not only meets current needs but scales for future growth. We believe in building lasting partnerships with our clients.
                    </p>
                    <div className="flex flex-row gap-4 mt-6 justify-between w-full ">
                        <div className="flex flex-col w-1/2 bg-gradient-to-r from-[#8F2394] via-[#6543A4] to-[#5253AC] py-5 rounded-2xl shadow-2xl gap-5">
                            <div className="flex flex-col items-center gap-3">
                                <h1 className="font-normal text-2xl text-white">2+</h1>
                                <p className="font-sans text-lg text-white">Years Experience</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 bg-gradient-to-r from-[#8F2394] via-[#6543A4] to-[#5253AC] py-5 rounded-2xl shadow-2xl gap-5">
                            <div className="flex flex-col items-center gap-3">
                                <h1 className="font-normal text-2xl text-white">24/7</h1>
                                <p className="font-sans text-lg text-white">Support</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    );
};