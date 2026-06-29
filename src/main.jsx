import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { PlayerProvider } from "./context/PlayerContext";
import { PaymentProvider } from "./context/PaymentContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </PlayerProvider>
  </StrictMode>
);