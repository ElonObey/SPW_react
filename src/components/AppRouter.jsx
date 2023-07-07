import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Counter from "../pages/Counter";
import Value from "../pages/Value";
import NavBar from "./Ui/NavBar/NavBar";

// Сделать динамический роутинг постов

const AppRouter = () => {
  return (
    
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="counter" element={<Counter />} />
        <Route path="value" element={<Value/>}/>
        <Route path="posts/:id" element={<PostPage/>}/>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
