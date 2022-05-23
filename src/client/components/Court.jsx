import React from "react";
import Booking from "./Booking";
import { getWorkingHours } from "../utils.js";

export default ({ id, items }) => {
  const court_label = "Court " + id.toString();
  const hours = getWorkingHours();
  return (
    <div className="court-row-wrapper">
      <div className="empty-cell">{court_label}</div>
      <div className="court-row" key={id}>
        {hours.map((hour) => (
          <div key={hour} className="empty-cell" />
        ))}
        {items.map((item) => (
          <Booking key={item.id} booking={item} />
        ))}
      </div>
    </div>
  );
};
