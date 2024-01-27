import Item from "./Item";

import deepEarthDesktop from "../../assets/desktop/image-deep-earth.jpg";
import deepEarthMobile from "../../assets/mobile/image-deep-earth.jpg";

import nightArcadeDesktop from "../../assets/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "../../assets/mobile/image-night-arcade.jpg";

import soccerDesktop from "../../assets/desktop/image-soccer-team.jpg";
import soccerMobile from "../../assets/mobile/image-soccer-team.jpg";

import gridDesktop from "../../assets/desktop/image-grid.jpg";
import gridMobile from "../../assets/mobile/image-grid.jpg";

import fromUpDesktop from "../../assets/desktop/image-from-above.jpg";
import fromUpdMobile from "../../assets/mobile/image-from-above.jpg";

import pocketDesktop from "../../assets/desktop/image-pocket-borealis.jpg";
import pocketMobile from "../../assets/mobile/image-pocket-borealis.jpg";

import curiosityDesktop from "../../assets/desktop/image-curiosity.jpg";
import curiosityMobile from "../../assets/mobile/image-curiosity.jpg";

import fisheyeDesktop from "../../assets/desktop/image-fisheye.jpg";
import fisheyeMobile from "../../assets/mobile/image-fisheye.jpg";

const firstItems = [
  {
    name: "deep earth",
    desktop: deepEarthDesktop,
    mobile: deepEarthMobile,
  },
  {
    name: "night arcade",
    desktop: nightArcadeDesktop,
    mobile: nightArcadeMobile,
  },
  {
    name: "soccer team vr",
    desktop: soccerDesktop,
    mobile: soccerMobile,
  },
  {
    name: "the grid",
    desktop: gridDesktop,
    mobile: gridMobile,
  },
];

const secondItems = [
  {
    name: "from up above vr",
    desktop: fromUpDesktop,
    mobile: fromUpdMobile,
  },
  {
    name: "pocket borealis",
    desktop: pocketDesktop,
    mobile: pocketMobile,
  },
  {
    name: "the curiosity",
    desktop: curiosityDesktop,
    mobile: curiosityMobile,
  },
  {
    name: "make it fisheye",
    desktop: fisheyeDesktop,
    mobile: fisheyeMobile,
  },
];

function ItemsContainer() {
  return (
    <>
      <div className="item-container">
        {firstItems.map((item) => (
          <Item
            desktopImg={item.desktop}
            mobileImg={item.mobile}
            key={item.name}
          >
            {item.name}
          </Item>
        ))}
      </div>
      <div className="item-container mt-6 md:mt-10">
        {secondItems.map((item) => (
          <Item
            desktopImg={item.desktop}
            mobileImg={item.mobile}
            key={item.name}
          >
            {item.name}
          </Item>
        ))}
      </div>
    </>
  );
}

export default ItemsContainer;
