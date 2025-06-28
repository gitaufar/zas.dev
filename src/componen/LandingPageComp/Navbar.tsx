

function Navbar() {
  return (
    <nav className="absolute w-full z-50 flex flex-row items-center bg-transparent">
      <div className="my-8 px-20 flex flex-row  w-full justify-between"> 
        <img src="/assets/zas.png" alt="logo zas" className="w-40" />
         <button className="hidden lg:flex group py-2 cursor-pointer text-white">
          <div className="group-hover:scale-150 transition-all scale-120">Order Now</div>
        </button>
      </div>
      
      <div className="hidden lg:flex h-fit w-fit mt-8 fixed container mx-auto inset-0 bg-white py-3 px-4 rounded-3xl scale-105">
        <ul className="flex justify-center gap-x-10 text-black">
          <a href="#" className="cursor-pointer hover:text-gray-400 font-semibold">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400 font-semibold">
            About
          </a>
          <a href="#portfolio" className="cursor-pointer hover:text-gray-400 font-semibold">
            Portfolio
          </a>
          <a href="#contact" className="cursor-pointer hover:text-gray-400 font-semibold">
            Contact
          </a>
        </ul>
      </div>

      
       
      
    </nav>
  );
}

export default Navbar;
