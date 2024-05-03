import React, { useState } from "react";
import "./FoodspinWheel.css"; // Import your CSS file for styling

const FoodspinWheel = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const spinWheel = () => {
    setIsSpinning(true);
    // Simulate spinning for 2-5 seconds
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSelectedOption(options[randomIndex]);
      setIsSpinning(false);
      setHighlightedIndex(randomIndex);
    }, Math.floor(Math.random() * 3000) + 500);
  };

  const renderSegments = () => {
    const angleIncrement = (2 * Math.PI) / options.length; // Calculate angle increment for each segment
    const radius = 150; // Set the radius of the wheel
    const centerX = 100; // Set the x-coordinate of the center of the wheel
    const centerY = 100; // Set the y-coordinate of the center of the wheel

    return options.map((option, index) => {
      const angle = angleIncrement * index;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const segmentStyle = {
        position: "absolute",
        top: y + "px",
        left: x + "px",
        width: "100px", // Adjust based on the size of the segment
        height: "100px", // Adjust based on the size of the segment
        textAlign: "center",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: index === highlightedIndex ? "red" : "green",
      };

      return (
        <div key={index} className="segment" style={segmentStyle}>
          {option}
        </div>
      );
    });
  };

  return (
    <div className="foodspin-wheel">
      <div className={`wheel ${isSpinning ? "spin-animation" : ""}`}>
        {/* Render each food item segment */}
        {renderSegments()}
      </div>
      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
      {selectedOption && (
        <div className="result">
          <p>Selected Food:</p>
          <p>{selectedOption}</p>
        </div>
      )}
    </div>
  );
};

export default FoodspinWheel;
