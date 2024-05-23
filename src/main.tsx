import "./reset.css";
import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  throw new Error("Root element not found");
}
