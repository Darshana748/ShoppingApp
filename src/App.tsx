import React, { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Header } from "./Components/Header/Header";

function App() {
  const [isDark, setIsDark] = useState(true);

  const Web = isDark ? (
    <main className="dark text-foreground bg-background">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <RouterProvider router={router} />
    </main>
  ) : (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <RouterProvider router={router} />
    </>
  );

  return <>{Web}</>;
}

export default App;
