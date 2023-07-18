import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Ui/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import "./components/styles/main.css"
import { ThemeProvider } from "@mui/material";
import theme from "./style";


// Сделать динамический роутинг постов 
// Сделать авторизацию (фикс кнопки)
// Сделать динамическую плагинацию
// Пофиксить анимацию постов

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <NavBar /> */}
      <AppRouter />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
