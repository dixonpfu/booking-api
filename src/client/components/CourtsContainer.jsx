import React from "react";
import Court from "./Court";
import { getWorkingHours } from "../utils.js";

export default ({ courts }) => {
  const hours = getWorkingHours();
  return (
    <div>
      <div className="court-row-wrapper">
        <div className="work-hour"></div>
        <div className="court-row">
          {hours.map((hour) => {
            const hour_str = hour.toString() + ":00";
            return (
              <div className="work-hour" key={hour}>
                {hour_str}
              </div>
            );
          })}
        </div>
      </div>
      {courts.map((court) => (
        <Court key={court.id} id={court.id} items={court.items} />
      ))}
    </div>
  );
};
