import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/app.css";

/**
 * Punto de entrada de la app React.
 * Mantener simple: App monta los componentes principales.
 */
createRoot(document.getElementById("root")).render(<App />);
