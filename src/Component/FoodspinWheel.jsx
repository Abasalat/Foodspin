import React, { useState } from "react";
import "./FoodspinWheel.css"; // Import your CSS file for styling

const FoodspinWheel = ({ options }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  const segmentCount = options.length;
  const angle = 360 / segmentCount;
  const radius = 150; // Adjust this value based on the size of the wheel

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
    <div className="foodspin-wheel">
      <div
        className={`wheel ${isAnimating ? "spin-animation" : ""}`} //
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        {/* Render each food item segment */}
        {options.map((option, index) => {
          const segmentAngle = index * angle;
          const x = radius * Math.cos((segmentAngle - 90) * (Math.PI / 180)); // Convert angle to radians
          const y = radius * Math.sin((segmentAngle - 90) * (Math.PI / 180)); // Convert angle to radians

          return (
            <div
              key={index}
              className="segment"
              style={{
                "--index": index + 1,
                top: `calc(50% - ${y + 60}px)`,
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
  );
};

export default FoodspinWheel;
