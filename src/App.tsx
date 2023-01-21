import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Institutional from "./components/Institutional";
import Footer from "./components/Footer";
import { AsideMenuContextProvider } from "./contexts/asideMenuContext";
import AsideMenu from "./components/AsideMenu";
import OverIcon from "./components/OverIcon";
import Uppage from "./assets/svg/Uppage.svg";
import Whatsapp from "./assets/svg/Whatsapp.svg";
import { url } from "inspector";

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
      <AsideMenuContextProvider>
        <Header />
        <AsideMenu />
        <RouterProvider router={router} />
        <OverIcon
          icons={[
            {
              action: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              imgUrl: Uppage,
            },
            {
              action: () => {
                window.open("https://wa.me/5579999959568");
              },
              imgUrl: Whatsapp,
            },
          ]}
        />
        <Footer />
      </AsideMenuContextProvider>
    </div>
  );
}

export default App;
