import React from "react";
import "./Item.css";

function Item({ task }) {
  return <div className="style-list-item">{task}</div>;
}

export default Item;
