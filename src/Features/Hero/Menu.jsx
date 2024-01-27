import { useEffect } from "react";

function Menu({ setIsOpen, isOpen }) {
  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    handleBodyScroll();
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className=" font-alata hidden h-10  md:flex  md:space-x-8">
        <div className="group">
          <a href="#about" className=" duration-150 ">
            About
          </a>
          <div className="mx-2   group-hover:border-b group-hover:border-purple-200"></div>
        </div>
        <div className="group">
          <a href="#product" className="">
            Products
          </a>
          <div className="mx-2  group-hover:border-b group-hover:border-purple-200"></div>
        </div>
        <div className="group">
          <a href="#" className="">
            Careers
          </a>
          <div className=" mx-2  group-hover:border-b group-hover:border-purple-200"></div>
        </div>
        <div className="group">
          <a href="#" className="">
            Events
          </a>
          <div className="mx-2  group-hover:border-b group-hover:border-purple-200"></div>
        </div>

        <div className="group">
          <a href="#support" className="">
            Support
          </a>
          <div className="mx-2  group-hover:border-b group-hover:border-purple-200"></div>
        </div>
      </nav>
      {/* Menu Button  */}
      <div className="md:hidden">
        <button
          className={`${isOpen ? "open" : ""} hamburger z-40 block focus:outline-none md:hidden`}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>
      </div>
    </>
  );
}

export default Menu;
