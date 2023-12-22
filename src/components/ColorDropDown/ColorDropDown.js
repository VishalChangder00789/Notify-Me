import React, { useState, useEffect, useRef } from "react";
import "./ColorDropDown.css";

const ColorDropDown = ({ colors, setPickColor, pickColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleColorClick = (color) => {
    setPickColor(color);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        style={{ background: `${pickColor}` }}
        className="dropdown-toggle"
        onClick={toggleDropdown}
      >
        Pick your color
      </div>
      {isOpen && (
        <div className="color-options">
          {colors.map((color, index) => (
            <div
              onClick={() => handleColorClick(color)}
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorDropDown;
