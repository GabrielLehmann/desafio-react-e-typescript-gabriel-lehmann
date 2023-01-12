import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Institutional from "./components/Institutional";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/institucional",
    element: <Institutional />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
