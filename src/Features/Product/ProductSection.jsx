import ItemsContainer from "./ItemsContainer";

function ProductSection() {
  return (
    <section id="product">
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
        <div className="mb-20 flex justify-center md:justify-between ">
          <h2 className="text-alta text-center text-4xl uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="btn hidden md:block">See All</button>
        </div>
        <ItemsContainer />
        {/* Bottom Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="btn w-full md:hidden">See all</button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
