function LinkItems() {
  return (
    <>
      {/* item 1 */}
      <div className="group h-10">
        <a href="#about">About</a>
        <div className="mx-2 border-white group-hover:border-b "></div>
      </div>
      {/* item 2 */}
      <div className="group h-10">
        <a href="#product">Products</a>
        <div className="mx-2 border-white group-hover:border-b "></div>
      </div>
      {/* item 3 */}
      <div className="group h-10">
        <a href="#">Careers</a>
        <div className="mx-2 border-white group-hover:border-b "></div>
      </div>
      {/* item 4 */}
      <div className="group h-10">
        <a href="#">Events</a>
        <div className="mx-2 border-white group-hover:border-b "></div>
      </div>
      {/* item 5 */}
      <div className="group h-10">
        <a href="#">Support</a>
        <div className="mx-2 border-white group-hover:border-b "></div>
      </div>
    </>
  );
}

export default LinkItems;
