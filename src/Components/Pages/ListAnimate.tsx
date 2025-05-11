import { useEffect, useState } from "react";
import Van from "../Images/icon1.png";
import Van2 from "../Images/icon2.png";
import Van3 from "../Images/icon3.png";
import Van4 from "../Images/icon5.png";
import Van5 from "../Images/icon6.png";
import Van6 from "../Images/icon8.png";
import S1 from "../Images/Sliderp1.png";
import S2 from "../Images/Sliderp2.png";
import S3 from "../Images/Sliderp3.png";
import S4 from "../Images/Sliderp4.png";

interface List {
  id: number;
  title: string;
  logo: string;
  listslider: any;
}

interface ListAnimateProps {
  handleListClick: (thumbnails: any[]) => void;
}

function ListAnimate({ handleListClick }: ListAnimateProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const lists: List[] = [
    {
      id: 0,
      title: "Commercial Fleet Wraps",
      logo: Van,
      listslider: [S2, S3, S4, S1, S2, S3, S1],
    },
    {
      id: 1,
      title: "Car & Truck Wraps",
      logo: Van2,
      listslider: [S3, S4, S1, S2, S3, S4, S1, S2],
    },
    {
      id: 2,
      title: "Boat Wraps",
      logo: Van3,
      listslider: [S1, S2, S3, S1, S1, S2, S3, S4],
    },
    {
      id: 3,
      title: "Partial Wraps & Graphics",
      logo: Van4,
      listslider: [S1, S2, S4, S4, S1, S2, S1, S2],
    },
    {
      id: 4,
      title: "Car Magnets",
      logo: Van5,
      listslider: [S1, S2, S3, S4, S1, S2, S3, S4],
    },
    {
      id: 5,
      title: "Print Graphics & Stickers",
      logo: Van6,
      listslider: [S1, S2, S3, S4, S1, S2, S3, S4],
    },
    {
      id: 6,
      title: "Banners & Signs",
      logo: Van,
      listslider: [S1, S2, S3, S4, S1, S2, S3, S4],
    },
    {
      id: 7,
      title: "Graphic Design & Logos",
      logo: Van,
      listslider: [S1, S2, S3, S4, S1, S2, S3, S4],
    },
  ];

  const handleMouseEnter = (itemId: number) => {
    if (activeItem !== itemId) {
      setHoveredItem(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (activeItem !== hoveredItem) {
      setHoveredItem(null);
    }
  };

  const handleClick = (itemId: number, listItem: any[]) => {
    setActiveItem(itemId);
    setHoveredItem(itemId);
    const thumbnails: any = getThumbnailsForItem(itemId, listItem);
    console.log(thumbnails);
    handleListClick(thumbnails);
  };

  useEffect(() => {
    console.log("Data Are Fetch");
  }, [handleListClick]);

  const getThumbnailsForItem = (itemId: number, listItem: any[]) => {
    return [itemId, listItem];
  };

  return (
    <>
      {lists.map((list) => (
        <div className="xmd:w-[100%] sm:w-[70%] cursor-pointer " key={list.id}>
          <div
            className="flex items-center"
            onMouseEnter={() => handleMouseEnter(list.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(list.id, list.listslider)}
          >
            <div
              style={{
                transition: "width 0.5s ease-in-out",
                width: activeItem === list.id ? "10%" : hoveredItem === list.id ? "10%" : "0%",
              }}
            >
              <img src={list.logo} alt="" className="w-fit h-auto mr-4" />
            </div>
            <div
              className="text-[24px] font-sans"
              style={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              <span
                style={{
                  borderBottom: "0",
                  // paddingTop: "20px",
                  backgroundImage:
                    "linear-gradient(to right, #E60B09, #E9D022)",
                  backgroundSize:
                    hoveredItem === list.id || activeItem === list.id
                      ? "100% 2px"
                      : "0% 2px",
                  backgroundPosition: "0 100%",
                  backgroundRepeat: "no-repeat",
                  transition: "background-size 0.5s ease-in-out",
                  paddingBottom: "5px",
                }}
              >
                {list.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListAnimate;
