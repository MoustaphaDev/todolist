import React from "react";
import Item from "../item/item";
import "./Items.css";

function Items({ tasks }) {
  return (
    <div className="center-list-el">
      {tasks.map((task) => (
        <Item key={task} task={task} />
      ))}
    </div>
  );
}

export default Items;
