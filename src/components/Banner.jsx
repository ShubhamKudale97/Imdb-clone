import React from "react";

function Banner() {
  return (
    <div
      className=" md:h-[70vh] bg-cover bg-fit flex items-end"
      style={{
        backgroundImage: `url(https://images8.alphacoders.com/112/thumb-1920-1125196.jpg)`,
      }}
    >
      <div className="text-2xl text-white text-center w-full bg-gray-900/60 p-1 " >Superman</div>
    </div>
  );
}

export default Banner;
