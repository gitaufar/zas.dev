
import { BurgerMenu } from "./BurgerMenu";


function Navbar() {
  
  return (
    <nav className="absolute w-full z-50 flex flex-row items-center bg-transparent">
      <div className="my-8 px-20 flex flex-row  w-full justify-between"> 
        <img src="/assets/zas.png" alt="logo zas" className="w-30" />
         <button className="hidden lg:flex group py-2 cursor-pointer text-black">
          <div className="group-hover:scale-150 transition-all font-mono">Order Now</div>
        </button>
        <BurgerMenu className="lg:hidden flex scale-x-[-1]" color="white" size={10}/>
      </div>
      
      <div className="hidden lg:flex h-fit w-fit mt-8 fixed container mx-auto inset-0 bg-white py-3 px-6 rounded-4xl">
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
