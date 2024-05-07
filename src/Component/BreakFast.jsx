import React, { useState } from "react";
import style from "./brakfast.module.css";

const BreakFast = ({ options }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  const segmentCount = options.length;
  const angle = 360 / segmentCount;
  const radius = 250; // Adjust this value based on the size of the wheel

  const rotateWheel = () => {
    const newRotationAngle = rotationAngle + angle; //0+45
    setRotationAngle(newRotationAngle);
    setIsAnimating(true);

    // Remove animation class after the animation completes (2 seconds)
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };
  return (
    <div className={style.main}>
      <div className={style.left}>
        <h1 className={style.price}>$35</h1>
        <h1 className={style.title}>AALO PUYAS Salad</h1>
        <p className={style.des} id="description">
          ok i will eat every morning , in lunch time and in dinner time , it is
          only thing which defend the world for his behaviour
        </p>
        <button className={style.button}>Order Now</button>
        <a>Watch The Video</a>
      </div>
      <div className={style.right}>
        <div className={style.rightshape}>
          {" "}
          <div className="foodspin-wheel">
            <div
              className={`wheel ${isAnimating ? "spin-animation" : ""}`} //
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            >
              {/* Render each food item segment */}
              {options.map((option, index) => {
                const segmentAngle = index * angle;
                const x =
                  radius * Math.cos((segmentAngle - 90) * (Math.PI / 180)); // Convert angle to radians
                const y =
                  radius * Math.sin((segmentAngle - 90) * (Math.PI / 180)); // Convert angle to radians

                return (
                  <div
                    key={index}
                    className="segment"
                    style={{
                      "--index": index + 1,
                      top: `calc(50% - ${y + 40}px)`,
                      left: `calc(50% + ${x + -50}px)`,
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
            <button onClick={rotateWheel} disabled={isAnimating}>
              Rotate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakFast;
