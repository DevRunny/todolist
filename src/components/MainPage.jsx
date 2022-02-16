import React from "react";
import logo from "../images/logo.svg";

export const MainPage = () => {
  return (
    <>
      <h1>Приложение лист заданий</h1>
      <a href="/mytodolist">
        <img src={logo} className="main-logo" alt="ToDo-Logo" />
      </a>
    </>
  );
};
