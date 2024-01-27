function Item({ desktopImg, mobileImg, children }) {
  return (
    <div className="group relative overflow-hidden md:w-1/4">
      {/* DESKTOP IMAGE */}
      <img
        src={desktopImg}
        alt=""
        className="hidden w-full duration-200 group-hover:scale-110 md:block"
      />
      {/* MOBILE IMAGE */}

      <img src={mobileImg} alt="" className="w-full md:hidden" />
      {/* Gradient */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>

      {/* Text */}
      <h5 className=" absolute bottom-4 w-52 px-6 duration-200 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
        {children}
      </h5>
    </div>
  );
}

export default Item;
