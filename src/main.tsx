import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./modules/challenge/pages/HomePage/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
