import React, { Suspense, useContext, useState } from "react";
import "app/styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { Link } from "react-router-dom";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
