import React from "react";
import { CounterComponent } from "./components/Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import MainPage from "./Pages/MainPage/MainPage";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      Some component after this text.
      <Link to={"/"}>-Main Page-</Link>
      <Link to={"/about"}>-About-</Link>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
