import React from "react";
import { court_settings } from "../settings.js";
import { court_item_width } from "../utils.js";

const { beginWork } = court_settings;

export default ({ booking }) => {
  const width = booking.time * court_item_width - 4;
  const pos = (booking.start - beginWork + 1) * court_item_width;
  const booking_style = {
    width: width.toString() + "px",
    left: pos.toString() + "px"
  };
  return (
    <>
      <div className="booking-item" style={booking_style}>
        {booking.player}
      </div>
    </>
  );
};
