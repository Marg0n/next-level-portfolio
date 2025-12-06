import React from "react";

const Processing = () => {
  const items = Array.from({ length: 9 });

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]">
        {items.map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            style={{
              animation: `flipping-cube 1.5s ${
                index * 0.1
              }s infinite backwards`,
            }}
          ></div>
        ))}

        {/* styles */}
        <style>
          {`
          @keyframes flipping-cube {
            0% {
              transform: perspective(67.2px) rotateX(-90deg);
            }
            50%, 75% {
              transform: perspective(67.2px) rotateX(0);
            }
            100% {
              opacity: 0;
              transform: perspective(67.2px) rotateX(0);
            }
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Processing;
