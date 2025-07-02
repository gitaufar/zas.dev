
import { BurgerMenu } from "./BurgerMenu";


function Navbar() {
  const listMenu = [{name: "Home", link: "#home"}, {name: "About", link: "#about"}, {name: "Services", link: "#services"}, {name: "Contact", link: "#contact"}]

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <nav className="absolute w-full z-50 flex flex-row items-center">
      <div className="py-8 px-8 lg:bg-transparent backdrop-blur  lg:px-20 flex fixed lg:static top-0 flex-row w-full justify-between"> 
        <img src="/assets/zas.png" alt="logo zas" className="w-30" />
         <button className="hidden lg:flex group py-2 cursor-pointer text-black">
          <div className="group-hover:scale-115 transition-all font-mono">Order Now</div>
        </button>
        <BurgerMenu className="lg:hidden hidden scale-x-[-1] md:flex" color="white" size={10} listMenu={listMenu}/>
        <BurgerMenu className="flex scale-x-[-1] md:hidden" color="white" size={8} listMenu={listMenu}/>
      </div>
      
      <div className="hidden lg:flex h-fit w-fit mt-8 fixed container mx-auto inset-0 bg-white py-3 px-6 rounded-4xl">
        <ul className="flex justify-center gap-x-10 text-black">
          <button onClick={() => handleScroll('home')} className="cursor-pointer hover:text-gray-400 font-semibold">
            Home
          </button>
          <button onClick={()=>handleScroll("services")}  className="cursor-pointer hover:text-gray-400 font-semibold">
            Services
          </button>
          <button onClick={() => handleScroll("about")}  className="cursor-pointer hover:text-gray-400 font-semibold"> 
            About
          </button>
          <button onClick={() => handleScroll("portfolio")}  className="cursor-pointer hover:text-gray-400 font-semibold">
            Portfolio
          </button>
          <button onClick={() => handleScroll("contact")}  className="cursor-pointer hover:text-gray-400 font-semibold">
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
