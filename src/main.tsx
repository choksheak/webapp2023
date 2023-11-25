import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { nonNil } from "./shared/tiny-utils.ts";

// Set process.env.NODE_ENV for node compatibility.
window.process = { ...window.process }; // ensure defined
window.process.env = { ...window.process.env, NODE_ENV: import.meta.env.MODE };

ReactDOM.createRoot(nonNil(document.getElementById("root"), "root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
