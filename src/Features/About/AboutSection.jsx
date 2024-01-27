import image from "../../assets/desktop/image-interactive.jpg";
function AboutSection() {
  return (
    <section id="about">
      <div className="container relative mx-auto my-32 flex max-w-6xl flex-col items-center  px-6  text-gray-900 md:flex-row md:px-0">
        <img src={image} alt="" />

        <div className=" top-48 flex flex-col items-center bg-white pr-0 md:absolute md:right-0 md:items-start md:py-20 md:pl-20">
          <h2 className="mb-6 mt-10 max-w-lg text-center font-sans text-4xl uppercase md:mt-0 md:text-left md:text-5xl">
            The leader in interactive VR
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
