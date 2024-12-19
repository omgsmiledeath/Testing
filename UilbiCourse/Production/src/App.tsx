import React, { Suspense } from "react";
import { CounterComponent } from "./components/Counter";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";

const App = () => {
  return (
    <div className="app">
      Some component after this text.
      <Link to={"/"}>-Main Page-</Link>
      <Link to={"/about"}>-About-</Link>
      <Suspense fallback={<div>0_0</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
