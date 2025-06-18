import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import Modal from "react-modal";
// Імпорт стилів нормалізації
import "modern-normalize";
//
import "./index.css";
import App from "./components/App";

Modal.setAppElement("#root");

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
