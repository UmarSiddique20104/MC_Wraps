import  { useState } from "react";


function Mans({  man, manh }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered ? (
        <div className="md:w-[20%] sm:w-[80%] flex justify-center cursor-pointer">
          <img
            src={manh}
            alt=""
            className=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      ) : (
        <div className="md:w-[20%] sm:w-[80%] flex justify-center">
          <img
            src={man}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      )}
    </>
  );
}

export default Mans;
