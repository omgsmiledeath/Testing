import React, { Suspense, useContext, useState } from "react";
import { CounterComponent } from "./components/Counter";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>CHANGE THEME</button>
      <h1>Some component after this text.</h1>
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
