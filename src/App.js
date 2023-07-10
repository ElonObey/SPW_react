import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Ui/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import "./components/styles/main.css"


// Сделать динамический роутинг постов 
// Сделать авторизацию (фикс кнопки)
// Сделать динамическую плагинацию
// Пофиксить анимацию постов

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
