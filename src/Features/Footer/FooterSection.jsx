import Logo from "../Hero/Logo";
import IconsContainer from "./IconsContainer";
import LinkItems from "./LinkItems";

function FooterSection() {
  return (
    <footer id="support" className="bg-black">
      <div className="container mx-auto max-w-6xl py-10">
        <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          {/* menu & logo */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="md:ml-3">
              <Logo />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:items-start md:space-x-6 md:space-y-0">
              <LinkItems />
            </div>
          </div>

          {/* socials */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <IconsContainer />
            {/* copyright */}
            <div className="font-bold">
              &copy; 2024 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
