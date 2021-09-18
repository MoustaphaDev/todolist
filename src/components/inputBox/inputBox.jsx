import React from "react";
import "./InputBox.css";

function InputBox({ handleStateChange }) {
  const handleKeyDown = (e) => {
    e.key === "Enter" &&
      e.target.value &&
      e.target.value.length >= 3 &&
      (handleStateChange(e.target.value), (e.target.value = ""));
  };
  return (
    <div>
      <input
        className="style-box"
        type="text"
        placeholder="Add a new todo and press enter"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputBox;
