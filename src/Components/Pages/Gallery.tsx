import React from "react";
import S2 from "../Images/Sliderp2.png";
import S3 from "../Images/Sliderp3.png";
import S4 from "../Images/Sliderp4.png";
import { Slide } from "react-slideshow-image";

interface SliderProps {
  children: React.ReactNode;
  customPaging?: (i: any) => React.ReactNode;
}

function Gallery() {
  const settings: SliderProps = {
    children: (
      <>
        <div>
          <img src={S2} />
        </div>
        <div>
          <img src={S3} />
        </div>
        <div>
          <img src={S4} />
        </div>
        <div>
          <img src={S2} />
        </div>
      </>
    ),
    customPaging: function (i: any) {
      return (
        <a>
          <img src={`${S2}+${i}`} />
        </a>
      );
    },
  };

  return (
    <div className="slider-container">
      <Slide {...settings} />
    </div>
  );
}

export default Gallery;