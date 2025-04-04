import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import "./output.css";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>
);
