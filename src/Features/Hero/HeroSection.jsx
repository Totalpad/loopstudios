import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero">
      <div className="container mx-auto max-w-6xl px-6 py-12  ">
        {/* Nav tab */}
        <nav className="flex items-center justify-between  font-bold text-white">
          <Logo />
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
        {/* Mobile Menu  */}

        <div
          id="menu"
          className={`${isOpen ? "flex" : "hidden"} absolute  bottom-0 left-0 top-0 z-10 flex h-[110%] w-full flex-col space-y-3 bg-indigo-900/20  py-1 pl-12 pt-40 text-lg uppercase text-white backdrop-blur-md`}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
          <a href="#product" className="hover:text-pink-500">
            Products
          </a>
          <a
            href="#"
            className="hover:text-pink-500"
            onClick={() =>
              alert(
                "It is just a presentation component is does not have a functionality :)  ",
              )
            }
          >
            Careers
          </a>
          <a
            href="#"
            onClick={() =>
              alert(
                "It is just a presentation component is does not have a functionality :)  ",
              )
            }
            className="hover:text-pink-500"
          >
            Events
          </a>
          <a href="#support" className="hover:text-pink-500">
            Support
          </a>
        </div>

        <div className="mb-32 mt-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
