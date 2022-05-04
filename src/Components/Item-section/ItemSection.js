import React from "react";
import { Link } from "react-router-dom";
import BreakfastItems from "../Breakfast-items/BreakfastItems";
import DinnerItems from "../Dinner-items/DinnerItems";
import LunchItems from "../Lunch-items/LunchItems";
import "./ItemSection.css";

const ItemSection = () => {
  return (
    <div className="item-section-container container">
      <div className="titles">
        <Link to="/">Breakfast</Link>
        <Link className="selected" to="/">
          Lunch
        </Link>
        <Link to="/">Dinner</Link>
      </div>
      {/* <LunchItems /> */}
      {/* <BreakfastItems /> */}
      <DinnerItems />
    </div>
  );
};

export default ItemSection;
