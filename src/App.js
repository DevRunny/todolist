import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { MainPage } from "./components/MainPage";
import { MyTodoList } from "./components/MyTodoList";

import reactLogo from "./images/react.svg";
import reactRouterLogo from "./images/reactRouter.png";
import reduxLogo from "./images/redux.svg";
import axiosLogo from "./images/axios.svg";
import sassLogo from "./images/sass.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="mytodolist" element={<MyTodoList />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p style={{ color: "red" }}>
                    Вы ошиблись страничкой, здесь ничего нет!
                  </p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
        <h4>Использованные технологии:</h4>
        <div className="stack">
          <h3>
            <img src={reactLogo} className="logos" alt="react-logo" /> React
          </h3>
          <hr />
          <h3>
            <img src={reduxLogo} className="logos" alt="redux-logo" />
            Redux
          </h3>
          <hr />
          <h3>
            <img
              src={reactRouterLogo}
              className="logos"
              alt="react-router-logo"
            />
            React-router-dom
          </h3>
          <hr />
          <img src={axiosLogo} className="logos" alt="axios-logo" />
          <hr />
          <img src={sassLogo} className="logos" alt="sass-logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
