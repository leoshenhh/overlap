import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const div = document.createElement("div");
div.id = "overlap";
document.body.appendChild(div);

const root = ReactDOM.createRoot(div as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
