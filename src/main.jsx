import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

import { PlayerProvider } from "./context/PlayerContext";
import { PaymentProvider } from "./context/PaymentContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerProvider>
      <PaymentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </PaymentProvider>
    </PlayerProvider>
  </StrictMode>
);