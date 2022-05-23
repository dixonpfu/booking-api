import React from "react";
import { createRoot } from "react-dom/client";

import Location from "./components/Location";
import "./css/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Location />);
